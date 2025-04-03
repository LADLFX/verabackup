import type React from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { TopNavigation } from "@/components/top-navigation"
import { VeraWidget } from "@/components/vera-widget"

export default function MasterAdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="w-full md:w-64 md:flex-shrink-0">
        <SidebarNavigation userType="master-admin" />
      </div>
      <div className="flex flex-1 flex-col">
        <TopNavigation userName="Admin User" userRole="Master Admin" notificationCount={12} />
        <main className="flex-1">{children}</main>
        <VeraWidget />
      </div>
    </div>
  )
}

