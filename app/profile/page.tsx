"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { Mail, Phone, Building, Activity, Globe, Camera, Shield, LogOut } from "lucide-react"
import { TopNavigation } from "@/components/top-navigation"

export default function ProfilePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Dummy user data
  const [userData, setUserData] = useState({
    name: "John Smith",
    email: "john.smith@company.com",
    phone: "+1 (555) 123-4567",
    company: "Acme Inc.",
    role: "Sales Manager",
    bio: "Experienced sales professional with over 10 years in the industry. Passionate about building strong client relationships and driving growth.",
    timezone: "America/New_York",
    language: "English",
    notifications: {
      email: true,
      browser: true,
      mobile: false,
    },
    security: {
      twoFactor: true,
      sessionTimeout: 60,
    },
  })

  // Activity logs
  const activityLogs = [
    { id: 1, action: "Logged in", date: "Today, 9:30 AM", location: "New York, USA" },
    { id: 2, action: "Updated profile information", date: "Yesterday, 3:45 PM", location: "New York, USA" },
    { id: 3, action: "Created new report", date: "Oct 15, 2023", location: "Chicago, USA" },
    { id: 4, action: "Accessed client data", date: "Oct 12, 2023", location: "New York, USA" },
    { id: 5, action: "Password changed", date: "Oct 5, 2023", location: "New York, USA" },
  ]

  const handleSaveProfile = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Profile updated",
        description: "Your profile information has been saved successfully",
      })
    }, 1500)
  }

  const handlePasswordChange = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Password updated",
        description: "Your password has been changed successfully",
      })
    }, 1500)
  }

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, you would upload the image to a server
      // For this example, we'll use a URL.createObjectURL
      const imageUrl = URL.createObjectURL(file)
      setProfileImage(imageUrl)

      toast({
        title: "Profile image updated",
        description: "Your profile image has been changed",
      })
    }
  }

  const handleLogout = () => {
    toast({
      title: "Logging out",
      description: "You have been logged out successfully",
    })

    // Redirect to login page
    setTimeout(() => {
      router.push("/login")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#0F4342]">Profile Settings</h1>
          <p className="text-gray-500">Manage your account information and preferences</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 relative">
                  <Avatar className="h-24 w-24">
                    {profileImage ? (
                      <AvatarImage src={profileImage} alt="Profile" />
                    ) : (
                      <AvatarFallback className="bg-[#0F4342] text-white text-2xl">JS</AvatarFallback>
                    )}
                  </Avatar>
                  <label
                    htmlFor="profile-image"
                    className="absolute bottom-0 right-0 rounded-full bg-[#0F4342] p-1 cursor-pointer"
                  >
                    <Camera className="h-4 w-4 text-white" />
                    <input
                      type="file"
                      id="profile-image"
                      className="hidden"
                      accept="image/*"
                      onChange={handleProfileImageChange}
                    />
                  </label>
                </div>
                <CardTitle>{userData.name}</CardTitle>
                <CardDescription>
                  {userData.role} at {userData.company}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">{userData.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">{userData.phone}</span>
                </div>
                <div className="flex items-center">
                  <Building className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">{userData.company}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">{userData.timezone}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" className="w-full" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Log Out
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <Tabs defaultValue="account">
                  <TabsList className="grid grid-cols-4">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="activity">Activity</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account">
                  <TabsContent value="account" className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={userData.name}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={userData.email}
                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={userData.phone}
                            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            value={userData.company}
                            onChange={(e) => setUserData({ ...userData, company: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="role">Job Title</Label>
                        <Input
                          id="role"
                          value={userData.role}
                          onChange={(e) => setUserData({ ...userData, role: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          rows={4}
                          value={userData.bio}
                          onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="timezone">Timezone</Label>
                          <select
                            id="timezone"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                            value={userData.timezone}
                            onChange={(e) => setUserData({ ...userData, timezone: e.target.value })}
                          >
                            <option value="America/New_York">Eastern Time (ET)</option>
                            <option value="America/Chicago">Central Time (CT)</option>
                            <option value="America/Denver">Mountain Time (MT)</option>
                            <option value="America/Los_Angeles">Pacific Time (PT)</option>
                            <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="language">Language</Label>
                          <select
                            id="language"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                            value={userData.language}
                            onChange={(e) => setUserData({ ...userData, language: e.target.value })}
                          >
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                            <option value="German">German</option>
                            <option value="Chinese">Chinese</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        className="bg-[#0F4342] hover:bg-[#0a2e2d]"
                        onClick={handleSaveProfile}
                        disabled={isLoading}
                      >
                        {isLoading ? "Saving..." : "Save Changes"}
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="security" className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Password</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div></div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button
                          className="bg-[#0F4342] hover:bg-[#0a2e2d]"
                          onClick={handlePasswordChange}
                          disabled={isLoading}
                        >
                          {isLoading ? "Updating..." : "Change Password"}
                        </Button>
                      </div>

                      <div className="border-t pt-4 mt-4">
                        <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Two-Factor Authentication</div>
                            <div className="text-sm text-gray-500">Add an extra layer of security to your account</div>
                          </div>
                          <Switch
                            checked={userData.security.twoFactor}
                            onCheckedChange={(checked) =>
                              setUserData({
                                ...userData,
                                security: { ...userData.security, twoFactor: checked },
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="border-t pt-4 mt-4">
                        <h3 className="text-lg font-medium mb-4">Session Timeout</h3>
                        <div className="space-y-2">
                          <Label htmlFor="timeout">Automatically log out after</Label>
                          <select
                            id="timeout"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                            value={userData.security.sessionTimeout}
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                security: { ...userData.security, sessionTimeout: Number.parseInt(e.target.value) },
                              })
                            }
                          >
                            <option value="15">15 minutes</option>
                            <option value="30">30 minutes</option>
                            <option value="60">1 hour</option>
                            <option value="120">2 hours</option>
                            <option value="240">4 hours</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="notifications" className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Notification Preferences</h3>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Email Notifications</div>
                            <div className="text-sm text-gray-500">
                              Receive email notifications about important updates
                            </div>
                          </div>
                          <Switch
                            checked={userData.notifications.email}
                            onCheckedChange={(checked) =>
                              setUserData({
                                ...userData,
                                notifications: { ...userData.notifications, email: checked },
                              })
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Browser Notifications</div>
                            <div className="text-sm text-gray-500">Receive notifications in your browser</div>
                          </div>
                          <Switch
                            checked={userData.notifications.browser}
                            onCheckedChange={(checked) =>
                              setUserData({
                                ...userData,
                                notifications: { ...userData.notifications, browser: checked },
                              })
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Mobile Notifications</div>
                            <div className="text-sm text-gray-500">Receive notifications on your mobile device</div>
                          </div>
                          <Switch
                            checked={userData.notifications.mobile}
                            onCheckedChange={(checked) =>
                              setUserData({
                                ...userData,
                                notifications: { ...userData.notifications, mobile: checked },
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="border-t pt-4 mt-4">
                        <h3 className="text-lg font-medium mb-4">Notification Types</h3>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input type="checkbox" id="notify-messages" className="mr-2" defaultChecked />
                            <Label htmlFor="notify-messages">Messages</Label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="notify-reminders" className="mr-2" defaultChecked />
                            <Label htmlFor="notify-reminders">Reminders</Label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="notify-updates" className="mr-2" defaultChecked />
                            <Label htmlFor="notify-updates">System Updates</Label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="notify-tasks" className="mr-2" defaultChecked />
                            <Label htmlFor="notify-tasks">Task Assignments</Label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="notify-marketing" className="mr-2" />
                            <Label htmlFor="notify-marketing">Marketing and Newsletters</Label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        className="bg-[#0F4342] hover:bg-[#0a2e2d]"
                        onClick={() => {
                          toast({
                            title: "Notification preferences saved",
                            description: "Your notification settings have been updated",
                          })
                        }}
                      >
                        Save Preferences
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="activity" className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Recent Activity</h3>

                      <div className="space-y-2">
                        {activityLogs.map((log) => (
                          <div key={log.id} className="rounded-lg border p-3">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <Activity className="h-4 w-4 mr-2 text-[#0F4342]" />
                                <span className="font-medium">{log.action}</span>
                              </div>
                              <Badge variant="outline">{log.date}</Badge>
                            </div>
                            <div className="mt-1 text-xs text-gray-500">Location: {log.location}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-center">
                        <Button variant="outline">View All Activity</Button>
                      </div>

                      <div className="border-t pt-4 mt-4">
                        <h3 className="text-lg font-medium mb-4">Devices</h3>

                        <div className="space-y-3">
                          <div className="rounded-lg border p-3">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <Shield className="h-4 w-4 mr-2 text-green-500" />
                                <div>
                                  <div className="font-medium">MacBook Pro</div>
                                  <div className="text-xs text-gray-500">New York, USA • Current Device</div>
                                </div>
                              </div>
                              <Badge className="bg-green-500">Active</Badge>
                            </div>
                          </div>

                          <div className="rounded-lg border p-3">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <Shield className="h-4 w-4 mr-2 text-green-500" />
                                <div>
                                  <div className="font-medium">iPhone 13</div>
                                  <div className="text-xs text-gray-500">New York, USA • Last active: 2 hours ago</div>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                Sign Out
                              </Button>
                            </div>
                          </div>

                          <div className="rounded-lg border p-3">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <Shield className="h-4 w-4 mr-2 text-green-500" />
                                <div>
                                  <div className="font-medium">iPad Pro</div>
                                  <div className="text-xs text-gray-500">Chicago, USA • Last active: 3 days ago</div>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                Sign Out
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

