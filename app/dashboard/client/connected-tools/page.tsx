"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AIChatAssistant } from "@/components/ai-chat-assistant"
import {
  Link,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Plus,
  Calendar,
  Mail,
  FileText,
  MessageSquare,
  CreditCard,
  BarChart,
  Globe,
  Clock,
  Zap,
  Settings,
  HelpCircle,
} from "lucide-react"

// Dummy data for connected tools
const connectedTools = [
  {
    id: 1,
    name: "Microsoft 365",
    category: "Productivity",
    status: "connected",
    lastSync: "5 minutes ago",
    healthScore: 98,
    connectedSince: "Jan 15, 2023",
    features: ["Email", "Calendar", "Documents"],
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "HubSpot CRM",
    category: "CRM",
    status: "connected",
    lastSync: "10 minutes ago",
    healthScore: 100,
    connectedSince: "Feb 3, 2023",
    features: ["Contacts", "Deals", "Marketing"],
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "QuickBooks",
    category: "Finance",
    status: "issue",
    lastSync: "Failed 2 hours ago",
    healthScore: 65,
    connectedSince: "Mar 22, 2023",
    features: ["Invoices", "Expenses", "Reports"],
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Google Analytics",
    category: "Analytics",
    status: "connected",
    lastSync: "30 minutes ago",
    healthScore: 95,
    connectedSince: "Apr 10, 2023",
    features: ["Website Traffic", "User Behavior", "Conversions"],
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Slack",
    category: "Communication",
    status: "connected",
    lastSync: "Just now",
    healthScore: 100,
    connectedSince: "May 5, 2023",
    features: ["Channels", "Direct Messages", "Notifications"],
    icon: "/placeholder.svg?height=40&width=40",
  },
]

// Dummy data for available integrations
const availableIntegrations = [
  {
    id: 1,
    name: "Salesforce",
    category: "CRM",
    description: "Connect your Salesforce account to sync contacts, opportunities, and more.",
    popularityScore: 95,
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Shopify",
    category: "E-commerce",
    description: "Integrate your Shopify store to track orders, products, and customers.",
    popularityScore: 90,
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Zoom",
    category: "Communication",
    description: "Connect Zoom to manage meetings and webinars directly from Vera AI.",
    popularityScore: 88,
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Mailchimp",
    category: "Marketing",
    description: "Integrate Mailchimp to manage email campaigns and subscriber lists.",
    popularityScore: 85,
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Asana",
    category: "Project Management",
    description: "Connect Asana to track projects, tasks, and team collaboration.",
    popularityScore: 82,
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "Stripe",
    category: "Payments",
    description: "Integrate Stripe to process payments and manage subscriptions.",
    popularityScore: 92,
    icon: "/placeholder.svg?height=40&width=40",
  },
]

// Dummy data for integration categories
const categories = [
  { id: "all", name: "All Categories" },
  { id: "crm", name: "CRM & Sales" },
  { id: "marketing", name: "Marketing" },
  { id: "finance", name: "Finance & Accounting" },
  { id: "productivity", name: "Productivity" },
  { id: "communication", name: "Communication" },
  { id: "analytics", name: "Analytics & Reporting" },
]

export default function ConnectedToolsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isConnecting, setIsConnecting] = useState(false)
  const [selectedTool, setSelectedTool] = useState<any>(null)
  const [connectionStep, setConnectionStep] = useState(1)
  const [connectionForm, setConnectionForm] = useState({
    email: "",
    password: "",
    apiKey: "",
  })

  // Filter available integrations based on search and category
  const filteredIntegrations = availableIntegrations.filter((integration) => {
    const matchesSearch =
      integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || integration.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  const handleStartConnection = (tool: any) => {
    setSelectedTool(tool)
    setConnectionStep(1)
    setIsConnecting(true)
  }

  const handleConnectionStepChange = (step: number) => {
    setConnectionStep(step)
  }

  const handleConnectionFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConnectionForm({
      ...connectionForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleFinishConnection = () => {
    // Simulate connection process
    setTimeout(() => {
      setIsConnecting(false)
      setConnectionStep(1)
      setConnectionForm({
        email: "",
        password: "",
        apiKey: "",
      })
      // In a real app, you would add the new connection to the connectedTools array
    }, 1000)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "issue":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />
      default:
        return <CheckCircle className="h-5 w-5 text-green-500" />
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "productivity":
        return <FileText className="h-5 w-5" />
      case "crm":
        return <Users className="h-5 w-5" />
      case "finance":
        return <CreditCard className="h-5 w-5" />
      case "analytics":
        return <BarChart className="h-5 w-5" />
      case "communication":
        return <MessageSquare className="h-5 w-5" />
      case "e-commerce":
        return <ShoppingCart className="h-5 w-5" />
      case "marketing":
        return <Mail className="h-5 w-5" />
      case "project management":
        return <Clipboard className="h-5 w-5" />
      case "payments":
        return <DollarSign className="h-5 w-5" />
      default:
        return <Link className="h-5 w-5" />
    }
  }

  const getFeatureIcon = (feature: string) => {
    if (feature.toLowerCase().includes("email")) return <Mail className="h-4 w-4" />
    if (feature.toLowerCase().includes("calendar")) return <Calendar className="h-4 w-4" />
    if (feature.toLowerCase().includes("document")) return <FileText className="h-4 w-4" />
    if (feature.toLowerCase().includes("contact")) return <Users className="h-4 w-4" />
    if (feature.toLowerCase().includes("deal")) return <HandshakeIcon className="h-4 w-4" />
    if (feature.toLowerCase().includes("invoice")) return <FileText className="h-4 w-4" />
    if (feature.toLowerCase().includes("expense")) return <CreditCard className="h-4 w-4" />
    if (feature.toLowerCase().includes("report")) return <BarChart className="h-4 w-4" />
    if (feature.toLowerCase().includes("traffic")) return <Globe className="h-4 w-4" />
    if (feature.toLowerCase().includes("channel")) return <MessageSquare className="h-4 w-4" />
    if (feature.toLowerCase().includes("message")) return <MessageSquare className="h-4 w-4" />
    return <CheckCircle className="h-4 w-4" />
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex flex-1 flex-col">
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#0F4342]">Connected Tools</h1>
            <p className="text-gray-500">Manage your integrations and connected services</p>
          </div>

          <div className="mb-6 grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="rounded-full bg-green-100 p-3 mb-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm text-gray-500">Connected Tools</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="rounded-full bg-amber-100 p-3 mb-2">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-2xl font-bold">1</div>
                <div className="text-sm text-gray-500">Connection Issues</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="rounded-full bg-blue-100 p-3 mb-2">
                  <RefreshCw className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold">10 min</div>
                <div className="text-sm text-gray-500">Avg. Sync Time</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="rounded-full bg-purple-100 p-3 mb-2">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-gray-500">Available Integrations</div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="current" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="current">Current Integrations</TabsTrigger>
              <TabsTrigger value="available">Available Integrations</TabsTrigger>
            </TabsList>

            <TabsContent value="current" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {connectedTools.map((tool) => (
                  <Card key={tool.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="mr-3 h-10 w-10 overflow-hidden rounded-md">
                            <img
                              src={tool.icon || "/placeholder.svg"}
                              alt={tool.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{tool.name}</CardTitle>
                            <CardDescription>{tool.category}</CardDescription>
                          </div>
                        </div>
                        {getStatusIcon(tool.status)}
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Last Sync:</span>
                          <span className="font-medium">{tool.lastSync}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Connected Since:</span>
                          <span className="font-medium">{tool.connectedSince}</span>
                        </div>
                        <div className="mt-3">
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span>Connection Health</span>
                            <span
                              className={
                                tool.healthScore > 90
                                  ? "text-green-500"
                                  : tool.healthScore > 70
                                    ? "text-amber-500"
                                    : "text-red-500"
                              }
                            >
                              {tool.healthScore}%
                            </span>
                          </div>
                          <Progress
                            value={tool.healthScore}
                            className="h-2"
                            indicatorClassName={
                              tool.healthScore > 90
                                ? "bg-green-500"
                                : tool.healthScore > 70
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                            }
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="text-xs font-medium mb-2">Connected Features</div>
                        <div className="flex flex-wrap gap-2">
                          {tool.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="flex items-center gap-1">
                              {getFeatureIcon(feature)}
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        <Settings className="mr-2 h-4 w-4" />
                        Configure
                      </Button>
                      <Button variant="outline" size="sm">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Sync Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}

                <Card className="flex flex-col items-center justify-center p-6 border-dashed border-2">
                  <Plus className="h-10 w-10 text-gray-400 mb-3" />
                  <h3 className="text-lg font-medium mb-2">Add New Integration</h3>
                  <p className="text-sm text-gray-500 text-center mb-4">
                    Connect more tools to enhance your Vera AI experience
                  </p>
                  <Button className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">Browse Integrations</Button>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="available" className="mt-6">
              <div className="mb-6 flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search integrations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="flex-1 md:flex-initial">
                  <select
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredIntegrations.map((integration) => (
                  <Card key={integration.id}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center">
                        <div className="mr-3 h-10 w-10 overflow-hidden rounded-md">
                          <img
                            src={integration.icon || "/placeholder.svg"}
                            alt={integration.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                          <CardDescription>{integration.category}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-gray-600 mb-4">{integration.description}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Badge variant="outline" className="mr-2">
                          {integration.popularityScore}% Popular
                        </Badge>
                        <span className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          Quick setup (5 min)
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]"
                        onClick={() => handleStartConnection(integration)}
                      >
                        Connect
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {filteredIntegrations.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <HelpCircle className="mb-4 h-12 w-12 text-gray-400" />
                  <h3 className="text-lg font-medium">No integrations found</h3>
                  <p className="mt-2 text-gray-500">Try adjusting your search or category filters</p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold text-[#0F4342]">Need Help with Integrations?</h2>
            <AIChatAssistant initialMessage="Hello! I'm Vera, your AI assistant. How can I help you with connecting your tools and services today?" />
          </div>
        </main>
      </div>

      {/* Connection Dialog */}
      <Dialog open={isConnecting} onOpenChange={setIsConnecting}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Connect {selectedTool?.name}</DialogTitle>
            <DialogDescription>
              {connectionStep === 1 && "Enter your credentials to connect your account."}
              {connectionStep === 2 && "Review permissions and confirm connection."}
              {connectionStep === 3 && "Connection successful!"}
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            {connectionStep === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email or Username</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder={`Your ${selectedTool?.name} email`}
                    value={connectionForm.email}
                    onChange={handleConnectionFormChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={connectionForm.password}
                    onChange={handleConnectionFormChange}
                  />
                </div>
                {selectedTool?.category === "Analytics" && (
                  <div className="space-y-2">
                    <Label htmlFor="apiKey">API Key (Optional)</Label>
                    <Input
                      id="apiKey"
                      name="apiKey"
                      placeholder="Enter API key if available"
                      value={connectionForm.apiKey}
                      onChange={handleConnectionFormChange}
                    />
                  </div>
                )}
              </div>
            )}

            {connectionStep === 2 && (
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium mb-2">Vera AI will have access to:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Read your {selectedTool?.name} data
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Sync information between platforms
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Display analytics and insights
                    </li>
                  </ul>
                </div>
                <div className="text-sm text-gray-500">
                  <p>
                    By connecting, you agree to the terms of service and privacy policy of both Vera AI and{" "}
                    {selectedTool?.name}.
                  </p>
                </div>
              </div>
            )}

            {connectionStep === 3 && (
              <div className="flex flex-col items-center justify-center py-4">
                <div className="rounded-full bg-green-100 p-4 mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Connection Successful!</h3>
                <p className="text-center text-gray-500 mb-4">
                  Your {selectedTool?.name} account has been successfully connected to Vera AI.
                </p>
              </div>
            )}
          </div>

          <DialogFooter className="flex justify-between sm:justify-between">
            {connectionStep < 3 ? (
              <>
                {connectionStep > 1 && (
                  <Button variant="outline" onClick={() => handleConnectionStepChange(connectionStep - 1)}>
                    Back
                  </Button>
                )}
                <Button
                  onClick={() => {
                    if (connectionStep < 2) {
                      handleConnectionStepChange(connectionStep + 1)
                    } else {
                      handleConnectionStepChange(3)
                      setTimeout(handleFinishConnection, 2000)
                    }
                  }}
                  className="bg-[#0F4342] hover:bg-[#0a2e2d]"
                  disabled={connectionStep === 1 && (!connectionForm.email || !connectionForm.password)}
                >
                  {connectionStep < 2 ? "Next" : "Connect"}
                </Button>
              </>
            ) : (
              <Button onClick={handleFinishConnection} className="bg-[#0F4342] hover:bg-[#0a2e2d]">
                Done
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Custom icons
function Users({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    </svg>
  )
}

function ShoppingCart({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}

function Clipboard({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  )
}

function DollarSign({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

