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
      <Button 
        variant="ghost" 
        size="icon" 
        className="md:hidden fixed top-3 left-3 z-50 rounded-full hover:bg-[#0F4342]/10" 
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6 text-[#0F4342]" /> : <Menu className="h-6 w-6 text-[#0F4342]" />}
      </Button>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs bg-white shadow-2xl">
            <div className="flex h-16 items-center border-b border-[#0F4342]/10 px-4">
              <div className="font-semibold text-[#0F4342]">{dashboardTitle}</div>
            </div>
            <ScrollArea className="h-[calc(100vh-4rem)]">
              <div className="px-3 py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
                      pathname === item.href
                        ? "bg-[#0F4342] text-white"
                        : "text-[#0F4342] hover:bg-[#0F4342]/10"
                    )}
                    onClick={item.onClick}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      )}

      {/* Desktop navigation */}
      <div className={cn(
        "hidden md:block fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transition-all duration-300",
        isCollapsed && "w-20"
      )}>
        <div className="flex h-16 items-center justify-between border-b border-[#0F4342]/10 px-4">
          <div className="font-semibold text-[#0F4342]">
            {!isCollapsed && dashboardTitle}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-[#0F4342]/10"
            onClick={toggleSidebar}
          >
            <Menu className="h-5 w-5 text-[#0F4342]" />
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <div className="px-3 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all mb-1",
                  pathname === item.href
                    ? "bg-[#0F4342] text-white shadow-md"
                    : "text-[#0F4342] hover:bg-[#0F4342]/10"
                )}
                onClick={item.onClick}
              >
                <item.icon className={cn("h-4 w-4", isCollapsed && "mr-0")} />
                {!isCollapsed && item.title}
              </Link>
            ))}
          </div>
        </ScrollArea>
      </div>
    </>
  )
}

