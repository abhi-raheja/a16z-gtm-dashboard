import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "a16z GTM Dashboard",
  description: "Dashboard for a16z GTM resources",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
