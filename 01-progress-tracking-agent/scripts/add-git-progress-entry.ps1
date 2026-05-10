param(
    [string]$Date = (Get-Date -Format "yyyy-MM-dd"),
    [string]$NextStep = "Review the progress log and decide the next implementation step.",
    [string]$OutputPath = "",
    [string]$GitPath = "",
    [string]$RepoRoot = ""
)

$ErrorActionPreference = "Stop"

function Resolve-GitPath {
    param([string]$RequestedGitPath)

    if (-not [string]::IsNullOrWhiteSpace($RequestedGitPath)) {
        return $RequestedGitPath
    }

    $gitCommand = Get-Command git -ErrorAction SilentlyContinue
    if ($gitCommand) {
        return $gitCommand.Source
    }

    $windowsGit = "C:\Program Files\Git\cmd\git.exe"
    if (Test-Path -LiteralPath $windowsGit) {
        return $windowsGit
    }

    throw "Git was not found. Install Git or pass -GitPath with the full path to git.exe."
}

function Invoke-Git {
    param(
        [string]$GitExecutable,
        [string]$WorkingDirectory,
        [string[]]$Arguments
    )

    $output = & $GitExecutable -C $WorkingDirectory @Arguments
    if ($LASTEXITCODE -ne 0) {
        throw "Git command failed: git $($Arguments -join ' ')"
    }

    return $output
}

function Get-Subproject {
    param([string[]]$Files)

    $subprojects = $Files |
        Where-Object { $_ -match '^(01-progress-tracking-agent|02-portfolio-website|03-job-search-automation)/' } |
        ForEach-Object { ($_ -split '/')[0] } |
        Sort-Object -Unique

    if ($subprojects.Count -eq 1) {
        return $subprojects[0]
    }

    if ($subprojects.Count -gt 1) {
        return "multiple"
    }

    return "repository"
}

function Format-ListValue {
    param(
        [string[]]$Values,
        [int]$MaxItems = 8
    )

    if (-not $Values -or $Values.Count -eq 0) {
        return "None"
    }

    $uniqueValues = $Values | Where-Object { -not [string]::IsNullOrWhiteSpace($_) } | Sort-Object -Unique
    if ($uniqueValues.Count -le $MaxItems) {
        return $uniqueValues -join "; "
    }

    $visibleValues = $uniqueValues | Select-Object -First $MaxItems
    return "$($visibleValues -join '; '); and $($uniqueValues.Count - $MaxItems) more"
}

try {
    [datetime]::ParseExact($Date, "yyyy-MM-dd", $null) | Out-Null
}
catch {
    throw "Date must use YYYY-MM-DD format."
}

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$agentRoot = Split-Path -Parent $scriptRoot
$defaultRepoRoot = Split-Path -Parent $agentRoot

if ([string]::IsNullOrWhiteSpace($RepoRoot)) {
    $RepoRoot = $defaultRepoRoot
}

$GitPath = Resolve-GitPath -RequestedGitPath $GitPath

$insideWorkTree = Invoke-Git -GitExecutable $GitPath -WorkingDirectory $RepoRoot -Arguments @("rev-parse", "--is-inside-work-tree")
if (($insideWorkTree | Select-Object -First 1) -ne "true") {
    throw "$RepoRoot is not a Git work tree."
}

$since = "$Date 00:00:00"
$until = "$Date 23:59:59"

$commitLines = Invoke-Git -GitExecutable $GitPath -WorkingDirectory $RepoRoot -Arguments @(
    "log",
    "--since=$since",
    "--until=$until",
    "--pretty=format:%h %s"
)

$commitSubjects = @()
if ($commitLines) {
    $commitSubjects = $commitLines | Where-Object { -not [string]::IsNullOrWhiteSpace($_) }
}

$commitFileLines = Invoke-Git -GitExecutable $GitPath -WorkingDirectory $RepoRoot -Arguments @(
    "log",
    "--since=$since",
    "--until=$until",
    "--pretty=format:",
    "--name-only"
)

$committedFiles = @()
if ($commitFileLines) {
    $committedFiles = $commitFileLines |
        Where-Object { -not [string]::IsNullOrWhiteSpace($_) } |
        Sort-Object -Unique
}

$modifiedFiles = @()
$today = Get-Date -Format "yyyy-MM-dd"
if ($Date -eq $today) {
    $statusLines = Invoke-Git -GitExecutable $GitPath -WorkingDirectory $RepoRoot -Arguments @("status", "--porcelain")
    if ($statusLines) {
        $modifiedFiles = $statusLines |
            Where-Object { -not [string]::IsNullOrWhiteSpace($_) } |
            ForEach-Object { $_.Substring(3).Trim() } |
            Sort-Object -Unique
    }
}

$evidenceFiles = @($committedFiles + $modifiedFiles) | Where-Object { -not [string]::IsNullOrWhiteSpace($_) } | Sort-Object -Unique

if ($commitSubjects.Count -eq 0 -and $modifiedFiles.Count -eq 0) {
    throw "No Git commit or modified-file evidence found for $Date."
}

if ($commitSubjects.Count -gt 0) {
    $completedWork = Format-ListValue -Values $commitSubjects -MaxItems 5
}
else {
    $completedWork = "Updated working tree files without a commit yet."
}

$notesParts = @(
    "Commits: $(Format-ListValue -Values $commitSubjects -MaxItems 6)",
    "Committed files: $(Format-ListValue -Values $committedFiles -MaxItems 10)",
    "Current modified files: $(Format-ListValue -Values $modifiedFiles -MaxItems 10)"
)

$addEntryScript = Join-Path $scriptRoot "add-progress-entry.ps1"
& $addEntryScript `
    -Date $Date `
    -Subproject (Get-Subproject -Files $evidenceFiles) `
    -CompletedWork $completedWork `
    -Blockers "None" `
    -NextStep $NextStep `
    -Notes ($notesParts -join " | ") `
    -Source "git-evidence" `
    -OutputPath $OutputPath
