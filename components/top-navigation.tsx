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

export function TopNavigation() {
  const router = useRouter()
  const { toast } = useToast()
  const [notificationCount, setNotificationCount] = useState(3)
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
    <div className="flex h-16 items-center border-b px-4">
      <div className="ml-auto flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative">
          <Button variant="ghost" size="icon" onClick={handleNotificationClick} aria-label="Notifications">
            <Bell className="h-5 w-5" />
            {notificationCount > 0 && (
              <Badge className="absolute -right-1 -top-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500">
                {notificationCount}
              </Badge>
            )}
          </Button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 z-50 overflow-hidden rounded-md border bg-white shadow-md">
              <div className="p-3 border-b">
                <h3 className="text-sm font-medium">Notifications</h3>
              </div>
              {notifications.length > 0 ? (
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-3 border-b hover:bg-gray-50">
                      <div className="flex justify-between">
                        <h4 className="text-sm font-medium">{notification.title}</h4>
                        <button
                          className="text-gray-400 hover:text-gray-500 text-xs"
                          onClick={() => clearNotification(notification.id)}
                        >
                          Clear
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{notification.description}</p>
                      <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-3 text-center text-sm text-gray-500">No notifications</div>
              )}
              <div className="p-2 border-t bg-gray-50">
                <Button variant="ghost" size="sm" className="w-full text-xs">
                  View all notifications
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Help */}
        <Button variant="ghost" size="icon" onClick={handleHelpClick} aria-label="Help">
          <HelpCircle className="h-5 w-5" />
        </Button>

        {/* Settings */}
        <Button variant="ghost" size="icon" onClick={handleSettingsClick} aria-label="Settings">
          <Settings className="h-5 w-5" />
        </Button>

        {/* User dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="relative h-8 rounded-full">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-[#0F4342] text-white flex items-center justify-center">JS</div>
                <ChevronDown className="h-4 w-4" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>John Smith</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleProfileClick}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSettingsClick}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Settings Dialog */}
      <Dialog open={showSettingsDialog} onOpenChange={setShowSettingsDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>Configure your account and application settings</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Notification Preferences</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm">Email notifications</span>
                <input type="checkbox" defaultChecked />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm">Push notifications</span>
                <input type="checkbox" defaultChecked />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm">SMS notifications</span>
                <input type="checkbox" />
              </div>
            </div>
            <div className="pt-4 border-t">
              <h3 className="text-sm font-medium mb-2">Theme Preferences</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm">Dark mode</span>
                <input type="checkbox" />
              </div>
            </div>
            <div className="pt-4 border-t">
              <h3 className="text-sm font-medium mb-2">Language</h3>
              <select className="w-full border rounded p-2 text-sm">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowSettingsDialog(false)}>
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
            >
              Save Changes
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Help Dialog */}
      <Dialog open={showHelpDialog} onOpenChange={setShowHelpDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Help & Support</DialogTitle>
            <DialogDescription>Need assistance? We're here to help!</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="rounded-lg border p-3 hover:bg-gray-50 cursor-pointer">
              <h3 className="font-medium text-sm">Documentation</h3>
              <p className="text-xs text-gray-500 mt-1">Browse our comprehensive documentation</p>
            </div>
            <div className="rounded-lg border p-3 hover:bg-gray-50 cursor-pointer">
              <h3 className="font-medium text-sm">Video Tutorials</h3>
              <p className="text-xs text-gray-500 mt-1">Learn through our step-by-step video guides</p>
            </div>
            <div className="rounded-lg border p-3 hover:bg-gray-50 cursor-pointer">
              <h3 className="font-medium text-sm">Contact Support</h3>
              <p className="text-xs text-gray-500 mt-1">Reach out to our support team</p>
            </div>
            <div className="rounded-lg border p-3 hover:bg-gray-50 cursor-pointer">
              <h3 className="font-medium text-sm">FAQs</h3>
              <p className="text-xs text-gray-500 mt-1">Find answers to commonly asked questions</p>
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="outline" onClick={() => setShowHelpDialog(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

