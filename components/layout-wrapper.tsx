"use client"

import { usePathname } from "next/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // 👇 Only hide layout for /login
  const isLoginPage = pathname === "/login"

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {isLoginPage ? (
        <main className="min-h-screen bg-background">{children}</main>
      ) : (
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">{children}</main>
          </div>
        </div>
      )}
    </ThemeProvider>
  )
}
