param(
    [string]$Date = (Get-Date -Format "yyyy-MM-dd"),
    [Parameter(Mandatory = $true)]
    [string]$Subproject,
    [Parameter(Mandatory = $true)]
    [string]$CompletedWork,
    [string]$Blockers = "None",
    [Parameter(Mandatory = $true)]
    [string]$NextStep,
    [string]$Notes = "",
    [string]$Source = "local-csv",
    [string]$OutputPath = ""
)

$ErrorActionPreference = "Stop"

function Assert-NotBlank {
    param(
        [string]$Name,
        [string]$Value
    )

    if ([string]::IsNullOrWhiteSpace($Value)) {
        throw "$Name is required."
    }
}

try {
    [datetime]::ParseExact($Date, "yyyy-MM-dd", $null) | Out-Null
}
catch {
    throw "Date must use YYYY-MM-DD format."
}

Assert-NotBlank -Name "Subproject" -Value $Subproject
Assert-NotBlank -Name "CompletedWork" -Value $CompletedWork
Assert-NotBlank -Name "NextStep" -Value $NextStep

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$agentRoot = Split-Path -Parent $scriptRoot

if ([string]::IsNullOrWhiteSpace($OutputPath)) {
    $OutputPath = Join-Path $agentRoot "data/progress-log.csv"
}

$outputDirectory = Split-Path -Parent $OutputPath
if (-not (Test-Path -LiteralPath $outputDirectory)) {
    New-Item -ItemType Directory -Path $outputDirectory | Out-Null
}

$entry = [pscustomobject]@{
    Date = $Date
    Subproject = $Subproject.Trim()
    "Completed Work" = $CompletedWork.Trim()
    Blockers = $(if ([string]::IsNullOrWhiteSpace($Blockers)) { "None" } else { $Blockers.Trim() })
    "Next Step" = $NextStep.Trim()
    Notes = $Notes.Trim()
    Source = $(if ([string]::IsNullOrWhiteSpace($Source)) { "local-csv" } else { $Source.Trim() })
    "Created At" = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ")
}

if (Test-Path -LiteralPath $OutputPath) {
    $entry | Export-Csv -Path $OutputPath -NoTypeInformation -Append
}
else {
    $entry | Export-Csv -Path $OutputPath -NoTypeInformation
}

Write-Output "Progress entry added to $OutputPath"
