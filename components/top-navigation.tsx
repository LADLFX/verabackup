"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Bell, HelpCircle, Settings, ChevronDown, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"

interface TopNavigationProps {
  userName: string
  userRole: string
  notificationCount: number
}

export function TopNavigation({ userName, userRole, notificationCount: initialNotificationCount }: TopNavigationProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [notificationCount, setNotificationCount] = useState(initialNotificationCount)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSettingsDialog, setShowSettingsDialog] = useState(false)
  const [showHelpDialog, setShowHelpDialog] = useState(false)

  // Dummy notifications data
  const notifications = [
    {
      id: 1,
      title: "New message from Sarah",
      description: "Regarding the project timeline",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: 2,
      title: "Task assigned to you",
      description: "Review the quarterly report",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      title: "Meeting reminder",
      description: "Team sync at 2:00 PM",
      time: "2 hours ago",
      read: false,
    },
  ]

  const handleProfileClick = () => {
    toast({
      title: "Profile",
      description: "Navigating to your profile page",
    })
    router.push("/profile")
  }

  const handleSettingsClick = () => {
    setShowSettingsDialog(true)
  }

  const handleLogout = () => {
    toast({
      title: "Logging out",
      description: "You have been logged out successfully",
    })
    router.push("/login")
  }

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications)
    // Mark notifications as read when opened
    if (!showNotifications && notificationCount > 0) {
      setNotificationCount(0)
    }
  }

  const handleHelpClick = () => {
    setShowHelpDialog(true)
  }

  const clearNotification = (id: number) => {
    toast({
      title: "Notification cleared",
      description: "The notification has been removed",
    })
    // In a real app, you would filter out the notification and update state
  }

  return (
    <div className="sticky top-0 z-40 flex h-16 items-center border-b border-[#0F4342]/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 px-4 shadow-sm">
      <div className="ml-auto flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleNotificationClick} 
            aria-label="Notifications"
            className="rounded-full hover:bg-[#0F4342]/10"
          >
            <Bell className="h-5 w-5 text-[#0F4342]" />
            {notificationCount > 0 && (
              <Badge className="absolute -right-1 -top-1 h-5 w-5 p-0 flex items-center justify-center bg-[#0F4342]">
                {notificationCount}
              </Badge>
            )}
          </Button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 z-50 overflow-hidden rounded-lg border border-[#0F4342]/10 bg-white shadow-lg">
              <div className="p-3 border-b border-[#0F4342]/10">
                <h3 className="text-sm font-medium text-[#0F4342]">Notifications</h3>
              </div>
              {notifications.length > 0 ? (
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-3 border-b border-[#0F4342]/10 hover:bg-[#0F4342]/5 transition-colors">
                      <div className="flex justify-between">
                        <h4 className="text-sm font-medium text-[#0F4342]">{notification.title}</h4>
                        <button
                          className="text-[#0F4342]/70 hover:text-[#0F4342] text-xs transition-colors"
                          onClick={() => clearNotification(notification.id)}
                        >
                          Clear
                        </button>
                      </div>
                      <p className="text-xs text-[#0F4342]/70 mt-1">{notification.description}</p>
                      <p className="text-xs text-[#0F4342]/50 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-3 text-center text-sm text-[#0F4342]/70">No notifications</div>
              )}
              <div className="p-2 border-t border-[#0F4342]/10 bg-[#0F4342]/5">
                <Button variant="ghost" size="sm" className="w-full text-xs text-[#0F4342] hover:bg-[#0F4342]/10">
                  View all notifications
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Help */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleHelpClick} 
          aria-label="Help"
          className="rounded-full hover:bg-[#0F4342]/10"
        >
          <HelpCircle className="h-5 w-5 text-[#0F4342]" />
        </Button>

        {/* Settings */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleSettingsClick} 
          aria-label="Settings"
          className="rounded-full hover:bg-[#0F4342]/10"
        >
          <Settings className="h-5 w-5 text-[#0F4342]" />
        </Button>

        {/* User dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="relative h-8 rounded-full hover:bg-[#0F4342]/10">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-[#0F4342] text-white flex items-center justify-center">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <ChevronDown className="h-4 w-4 text-[#0F4342]" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-lg border-[#0F4342]/10">
            <DropdownMenuLabel className="text-[#0F4342]">{userName}</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#0F4342]/10" />
            <DropdownMenuItem onClick={handleProfileClick} className="text-[#0F4342] focus:bg-[#0F4342]/10">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSettingsClick} className="text-[#0F4342] focus:bg-[#0F4342]/10">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#0F4342]/10" />
            <DropdownMenuItem onClick={handleLogout} className="text-[#0F4342] focus:bg-[#0F4342]/10">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Settings Dialog */}
      <Dialog open={showSettingsDialog} onOpenChange={setShowSettingsDialog}>
        <DialogContent className="rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-[#0F4342]">Settings</DialogTitle>
            <DialogDescription className="text-[#0F4342]/70">
              Configure your account and application settings
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <h3 className="text-sm font-medium mb-2 text-[#0F4342]">Notification Preferences</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#0F4342]/70">Email notifications</span>
                <input type="checkbox" defaultChecked className="rounded border-[#0F4342]/20" />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-[#0F4342]/70">Push notifications</span>
                <input type="checkbox" defaultChecked className="rounded border-[#0F4342]/20" />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-[#0F4342]/70">SMS notifications</span>
                <input type="checkbox" className="rounded border-[#0F4342]/20" />
              </div>
            </div>
            <div className="pt-4 border-t border-[#0F4342]/10">
              <h3 className="text-sm font-medium mb-2 text-[#0F4342]">Theme Preferences</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#0F4342]/70">Dark mode</span>
                <input type="checkbox" className="rounded border-[#0F4342]/20" />
              </div>
            </div>
            <div className="pt-4 border-t border-[#0F4342]/10">
              <h3 className="text-sm font-medium mb-2 text-[#0F4342]">Language</h3>
              <select className="w-full border rounded-lg p-2 text-sm border-[#0F4342]/20 text-[#0F4342]">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button 
              variant="outline" 
              onClick={() => setShowSettingsDialog(false)}
              className="rounded-lg border-[#0F4342]/20 text-[#0F4342] hover:bg-[#0F4342]/10"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                toast({
                  title: "Settings saved",
                  description: "Your settings have been updated successfully",
                })
                setShowSettingsDialog(false)
              }}
              className="rounded-lg bg-[#0F4342] text-white hover:bg-[#0F4342]/90"
            >
              Save Changes
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Help Dialog */}
      <Dialog open={showHelpDialog} onOpenChange={setShowHelpDialog}>
        <DialogContent className="rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-[#0F4342]">Help & Support</DialogTitle>
            <DialogDescription className="text-[#0F4342]/70">
              Need assistance? We're here to help!
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <div className="rounded-lg border border-[#0F4342]/20 p-3 hover:bg-[#0F4342]/5 cursor-pointer transition-colors">
              <h3 className="font-medium text-sm text-[#0F4342]">Documentation</h3>
              <p className="text-xs text-[#0F4342]/70 mt-1">Browse our comprehensive documentation</p>
            </div>
            <div className="rounded-lg border border-[#0F4342]/20 p-3 hover:bg-[#0F4342]/5 cursor-pointer transition-colors">
              <h3 className="font-medium text-sm text-[#0F4342]">Video Tutorials</h3>
              <p className="text-xs text-[#0F4342]/70 mt-1">Learn through our step-by-step video guides</p>
            </div>
            <div className="rounded-lg border border-[#0F4342]/20 p-3 hover:bg-[#0F4342]/5 cursor-pointer transition-colors">
              <h3 className="font-medium text-sm text-[#0F4342]">Contact Support</h3>
              <p className="text-xs text-[#0F4342]/70 mt-1">Reach out to our support team</p>
            </div>
            <div className="rounded-lg border border-[#0F4342]/20 p-3 hover:bg-[#0F4342]/5 cursor-pointer transition-colors">
              <h3 className="font-medium text-sm text-[#0F4342]">FAQs</h3>
              <p className="text-xs text-[#0F4342]/70 mt-1">Find answers to commonly asked questions</p>
            </div>
          </div>
          <div className="flex justify-end">
            <Button 
              variant="outline" 
              onClick={() => setShowHelpDialog(false)}
              className="rounded-lg border-[#0F4342]/20 text-[#0F4342] hover:bg-[#0F4342]/10"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

