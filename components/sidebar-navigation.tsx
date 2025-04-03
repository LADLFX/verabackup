"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Home,
  MessageSquare,
  Calendar,
  BarChart2,
  Settings,
  Users,
  Zap,
  Terminal,
  Globe,
  Shield,
  Egg,
  Building,
  FolderCog,
  FileText,
  UserCog,
  Menu,
  X,
  Brain,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/components/ui/use-toast"

export function SidebarNavigation() {
  const pathname = usePathname()
  const { toast } = useToast()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Determine which dashboard we're in based on the URL
  const isClientDashboard = pathname?.startsWith("/dashboard/client")
  const isClientAdmin = pathname?.startsWith("/dashboard/client-admin")
  const isMasterAdmin = pathname?.startsWith("/dashboard/master-admin")

  // Client dashboard navigation items
  const clientNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard/client",
      icon: Home,
    },
    {
      title: "My VERA",
      href: "/dashboard/client/vera-pet",
      icon: Egg,
    },
    {
      title: "Vera Assistant",
      href: "/dashboard/client/vera-assistant",
      icon: Terminal,
    },
    {
      title: "Business Brain",
      href: "/dashboard/client/business-brain",
      icon: Brain,
    },
    {
      title: "Calendar",
      href: "/dashboard/client/calendar",
      icon: Calendar,
    },
    {
      title: "Performance",
      href: "/dashboard/client/performance",
      icon: BarChart2,
    },
    {
      title: "Insights",
      href: "/dashboard/client/insights",
      icon: BarChart2,
    },
    {
      title: "Tech Hub",
      href: "/dashboard/client/tech-hub",
      icon: Terminal,
    },
    {
      title: "Connected Tools",
      href: "/dashboard/client/connected-tools",
      icon: Zap,
    },
    {
      title: "IT Systems",
      href: "/dashboard/client/it-systems",
      icon: FolderCog,
    },
    {
      title: "Task Automation",
      href: "/dashboard/client/task-automation",
      icon: Zap,
    },
    {
      title: "Google Business Profile",
      href: "/dashboard/client/google-my-business",
      icon: Globe,
    },
    {
      title: "Team Support",
      href: "/dashboard/client/team-support",
      icon: Users,
    },
    {
      title: "Client Conversations",
      href: "/dashboard/client/client-conversations",
      icon: MessageSquare,
    },
  ]

  // Client Admin navigation items
  const clientAdminNavItems = [
    {
      title: "Admin Dashboard",
      href: "/dashboard/client-admin",
      icon: UserCog,
    },
    {
      title: "Security & Access",
      href: "/dashboard/client-admin/security",
      icon: Shield,
    },
    {
      title: "User Management",
      href: "/dashboard/client-admin/users",
      icon: Users,
      onClick: () => {
        toast({
          title: "User Management",
          description: "This feature is coming soon",
        })
      },
    },
    {
      title: "Billing & Subscription",
      href: "/dashboard/client-admin/billing",
      icon: FileText,
      onClick: () => {
        toast({
          title: "Billing & Subscription",
          description: "This feature is coming soon",
        })
      },
    },
    {
      title: "Settings",
      href: "/dashboard/client-admin/settings",
      icon: Settings,
      onClick: () => {
        toast({
          title: "Settings",
          description: "This feature is coming soon",
        })
      },
    },
  ]

  // Master Admin navigation items
  const masterAdminNavItems = [
    {
      title: "Master Dashboard",
      href: "/dashboard/master-admin",
      icon: Building,
    },
    {
      title: "Client Management",
      href: "/dashboard/master-admin/clients",
      icon: Building,
      onClick: () => {
        toast({
          title: "Client Management",
          description: "This feature is coming soon",
        })
      },
    },
    {
      title: "System Configuration",
      href: "/dashboard/master-admin/system",
      icon: FolderCog,
      onClick: () => {
        toast({
          title: "System Configuration",
          description: "This feature is coming soon",
        })
      },
    },
    {
      title: "User Management",
      href: "/dashboard/master-admin/users",
      icon: Users,
      onClick: () => {
        toast({
          title: "User Management",
          description: "This feature is coming soon",
        })
      },
    },
    {
      title: "Security Controls",
      href: "/dashboard/master-admin/security",
      icon: Shield,
      onClick: () => {
        toast({
          title: "Security Controls",
          description: "This feature is coming soon",
        })
      },
    },
  ]

  // Determine which navigation items to use
  let navItems = clientNavItems
  let dashboardTitle = "Client Dashboard"

  if (isClientAdmin) {
    navItems = clientAdminNavItems
    dashboardTitle = "Client Admin"
  } else if (isMasterAdmin) {
    navItems = masterAdminNavItems
    dashboardTitle = "Master Admin"
  }

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Mobile menu button */}
      <Button variant="ghost" size="icon" className="md:hidden fixed top-3 left-3 z-50" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs bg-white shadow-lg">
            <div className="flex h-16 items-center border-b px-4">
              <div className="font-semibold text-[#0F4342]">{dashboardTitle}</div>
            </div>
            <ScrollArea className="h-[calc(100vh-4rem)]">
              <div className="px-3 py-2">
                <nav className="grid gap-1">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href
                    return (
                      <div key={index}>
                        {item.onClick ? (
                          <button
                            onClick={item.onClick}
                            className={cn(
                              "group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium",
                              isActive ? "bg-[#0F4342] text-white" : "text-gray-700 hover:bg-gray-100",
                            )}
                          >
                            <item.icon className="mr-3 h-5 w-5" />
                            <span>{item.title}</span>
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className={cn(
                              "group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium",
                              isActive ? "bg-[#0F4342] text-white" : "text-gray-700 hover:bg-gray-100",
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <item.icon className="mr-3 h-5 w-5" />
                            <span>{item.title}</span>
                          </Link>
                        )}
                      </div>
                    )
                  })}
                </nav>
              </div>
            </ScrollArea>
          </div>
        </div>
      )}

      {/* Desktop navigation */}
      <div
        className={cn(
          "hidden md:flex h-screen border-r flex-col transition-all duration-300",
          isCollapsed ? "w-[70px]" : "w-[240px]",
        )}
      >
        <div className="flex h-16 items-center border-b px-4">
          {!isCollapsed && <div className="font-semibold text-[#0F4342]">{dashboardTitle}</div>}
          <Button
            variant="ghost"
            size="icon"
            className={cn("ml-auto", isCollapsed && "mx-auto")}
            onClick={toggleSidebar}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <div className="px-3 py-2">
            <nav className="grid gap-1">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <div key={index}>
                    {item.onClick ? (
                      <button
                        onClick={item.onClick}
                        className={cn(
                          "group flex items-center rounded-md px-3 py-2 text-sm font-medium",
                          isActive ? "bg-[#0F4342] text-white" : "text-gray-700 hover:bg-gray-100",
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        {!isCollapsed && <span className="ml-3">{item.title}</span>}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex items-center rounded-md px-3 py-2 text-sm font-medium",
                          isActive ? "bg-[#0F4342] text-white" : "text-gray-700 hover:bg-gray-100",
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        {!isCollapsed && <span className="ml-3">{item.title}</span>}
                      </Link>
                    )}
                  </div>
                )
              })}
            </nav>
          </div>
        </ScrollArea>
      </div>
    </>
  )
}

