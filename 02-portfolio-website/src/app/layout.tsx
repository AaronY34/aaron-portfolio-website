import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaron Young | Portfolio",
  description:
    "Portfolio for IT implementation, workflow automation, data analysis, and AI-assisted systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
