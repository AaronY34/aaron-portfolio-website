import Link from "next/link";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#systems", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 bg-transparent">
      <nav className="mx-auto flex max-w-6xl items-start justify-between px-6 pt-8 sm:px-10">
        <Link href="/" className="text-base font-medium tracking-tight text-[var(--text-main)]">
          Aaron Yang
        </Link>
        <div className="flex gap-x-7 pt-1 text-sm text-[var(--text-secondary)]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-1 transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent-warm)] after:transition-transform hover:text-[var(--text-main)] hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
