"use client"

import { useState } from "react"
import {
  Star,
  MessageSquare,
  ImageIcon,
  Globe,
  Plus,
  Upload,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
  RefreshCw,
  AlertCircle,
  Check,
  LinkIcon,
  ChromeIcon as Google,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function GoogleMyBusinessPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [expandedReview, setExpandedReview] = useState<number | null>(null)
  const [isPostDialogOpen, setIsPostDialogOpen] = useState(false)
  const [isPhotoDialogOpen, setIsPhotoDialogOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [isConnectDialogOpen, setIsConnectDialogOpen] = useState(false)
  const [connectionStep, setConnectionStep] = useState(1)
  const [businessName, setBusinessName] = useState("")
  const [businessLocation, setBusinessLocation] = useState("")
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectionError, setConnectionError] = useState("")
  const [googleAuthStep, setGoogleAuthStep] = useState(false)
  const [selectedAccount, setSelectedAccount] = useState("")
  const [businessEmail, setBusinessEmail] = useState("")
  const [businessAddress, setBusinessAddress] = useState("")
  const [businessPhone, setBusinessPhone] = useState("")
  const [businessCategory, setBusinessCategory] = useState("")
  const [isInstalling, setIsInstalling] = useState(false)
  const [installationProgress, setInstallationProgress] = useState(0)
  const [installationStep, setInstallationStep] = useState("")
  const [businessListings, setBusinessListings] = useState<
    Array<{ id: string; name: string; address: string; category: string; verified: boolean }>
  >([])
  const [selectedListing, setSelectedListing] = useState<string>("")
  const [businessSelectionStep, setBusinessSelectionStep] = useState(false)

  // Mock data
  const businessStats = {
    rating: 4.7,
    totalReviews: 128,
    views: 1243,
    searches: 856,
    clicks: 342,
  }

  const reviews = [
    {
      id: 1,
      author: "John Smith",
      rating: 5,
      date: "2023-11-15",
      content:
        "Absolutely fantastic service! The team was professional, responsive, and delivered exactly what we needed. Would highly recommend to anyone looking for quality business solutions.",
      replied: true,
      reply:
        "Thank you for your kind words, John! We're thrilled to hear you had such a positive experience with our team. We look forward to continuing to support your business needs.",
    },
    {
      id: 2,
      author: "Sarah Johnson",
      rating: 4,
      date: "2023-11-10",
      content:
        "Great experience overall. The onboarding process was smooth and the support team was very helpful. Only reason for 4 stars is that I had to wait a bit longer than expected for the initial setup.",
      replied: false,
      reply: "",
    },
    {
      id: 3,
      author: "Michael Brown",
      rating: 5,
      date: "2023-11-05",
      content:
        "I've been using their services for over a year now and couldn't be happier. The automated solutions have saved us countless hours of manual work. The ROI has been incredible!",
      replied: true,
      reply:
        "Thanks Michael! We're so glad to hear that our automation solutions have made such a positive impact on your business operations. We're constantly working to improve and add new features.",
    },
    {
      id: 4,
      author: "Emily Wilson",
      rating: 3,
      date: "2023-10-28",
      content:
        "The product itself is good, but I found the learning curve to be steeper than expected. Once you get the hang of it though, it's quite powerful.",
      replied: false,
      reply: "",
    },
  ]

  const posts = [
    {
      id: 1,
      type: "update",
      date: "2023-11-12",
      content:
        "We're excited to announce extended support hours! Our team is now available from 7am to 9pm to better serve your needs.",
      engagement: { views: 342, likes: 28 },
    },
    {
      id: 2,
      type: "offer",
      date: "2023-11-05",
      content: "Special holiday promotion: Get 20% off all premium plans when you upgrade before December 1st!",
      engagement: { views: 567, likes: 45 },
    },
    {
      id: 3,
      type: "event",
      date: "2023-10-25",
      content:
        "Join us for our upcoming webinar on 'Maximizing Business Efficiency with AI' on November 15th at 2pm EST.",
      engagement: { views: 289, likes: 32 },
    },
  ]

  const photos = [
    { id: 1, url: "/placeholder.svg?height=150&width=150", type: "exterior", date: "2023-10-15" },
    { id: 2, url: "/placeholder.svg?height=150&width=150", type: "team", date: "2023-10-10" },
    { id: 3, url: "/placeholder.svg?height=150&width=150", type: "product", date: "2023-09-28" },
    { id: 4, url: "/placeholder.svg?height=150&width=150", type: "interior", date: "2023-09-15" },
    { id: 5, url: "/placeholder.svg?height=150&width=150", type: "team", date: "2023-09-05" },
    { id: 6, url: "/placeholder.svg?height=150&width=150", type: "product", date: "2023-08-22" },
  ]

  const toggleReviewExpansion = (id: number) => {
    if (expandedReview === id) {
      setExpandedReview(null)
    } else {
      setExpandedReview(id)
    }
  }

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))
  }

  const handleConnect = () => {
    setIsConnectDialogOpen(true)
    setConnectionStep(1)
    setBusinessName("")
    setBusinessLocation("")
    setConnectionError("")
  }

  const handleDisconnect = () => {
    if (
      confirm(
        "Are you sure you want to disconnect your Google My Business account? This will remove access to your business data.",
      )
    ) {
      setIsConnected(false)
    }
  }

  const handleNextStep = () => {
    if (connectionStep === 1) {
      if (!businessName.trim()) {
        setConnectionError("Please enter your business name")
        return
      }
      if (!businessEmail.trim()) {
        setConnectionError("Please enter your business email")
        return
      }
      if (!businessAddress.trim() || !businessLocation.trim()) {
        setConnectionError("Please enter your complete business address")
        return
      }
      setConnectionError("")
      setConnectionStep(2)
    } else if (connectionStep === 2) {
      // Move to Google auth when "Next" is clicked on step 2
      setGoogleAuthStep(true)
    }
  }

  const handleAccountSelect = (account: string) => {
    setSelectedAccount(account)
  }

  const simulateInstallation = () => {
    const steps = [
      "Connecting to Google Business API...",
      "Setting up review management...",
      "Configuring post management...",
      "Setting up analytics and insights...",
    ]

    let progress = 0
    const interval = setInterval(() => {
      progress += 5
      setInstallationProgress(progress)

      if (progress <= 25) {
        setInstallationStep(steps[0])
      } else if (progress <= 50) {
        setInstallationStep(steps[1])
      } else if (progress <= 75) {
        setInstallationStep(steps[2])
      } else {
        setInstallationStep(steps[3])
      }

      if (progress >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          setIsInstalling(false)
          setIsConnected(true)
          setIsConnectDialogOpen(false)
          // Reset for next time
          setConnectionStep(1)
          setGoogleAuthStep(false)
        }, 500)
      }
    }, 200)
  }

  const handleGoogleAuthComplete = () => {
    setIsConnecting(true)

    // Simulate API call to get business listings
    setTimeout(() => {
      setIsConnecting(false)

      // Mock data for business listings
      setBusinessListings([
        {
          id: "1",
          name: businessName || "Your Business Name",
          address: `${businessAddress}, ${businessLocation}`,
          category: businessCategory || "Local Business",
          verified: true,
        },
        {
          id: "2",
          name: `${businessName || "Your Business Name"} - Downtown`,
          address: "123 Main St, Downtown",
          category: "Branch Office",
          verified: false,
        },
        {
          id: "3",
          name: `${businessName || "Your Business Name"} - West Side`,
          address: "456 West Ave, West District",
          category: "Branch Office",
          verified: true,
        },
      ])

      setGoogleAuthStep(false)
      setBusinessSelectionStep(true)
    }, 1500)
  }

  const handleBusinessSelection = () => {
    if (!selectedListing) {
      return
    }

    setIsInstalling(true)
    simulateInstallation()
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex flex-1 flex-col">
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-[#0F4342]">Google My Business</h1>
              <p className="text-gray-500">Manage your Google Business Profile and online presence</p>
            </div>

            <div className="flex items-center mt-4 md:mt-0">
              {isConnected ? (
                <>
                  <Badge variant="success" className="mr-2">
                    Connected
                  </Badge>
                  <Button variant="outline" size="sm" className="flex items-center gap-1 mr-2">
                    <RefreshCw className="h-4 w-4" />
                    Refresh Data
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={handleDisconnect}
                  >
                    Disconnect
                  </Button>
                </>
              ) : (
                <Button variant="outline" size="sm" className="text-gray-500" onClick={handleConnect}>
                  Connect Account
                </Button>
              )}
            </div>
          </div>

          {!isConnected ? (
            <div className="mb-6">
              <Alert className="bg-blue-50 border-blue-200 mb-6">
                <AlertCircle className="h-4 w-4 text-blue-500" />
                <AlertTitle className="text-blue-700">Connect your Google My Business account</AlertTitle>
                <AlertDescription className="text-blue-600">
                  Connect your Google My Business profile to manage reviews, posts, and insights directly from Vera AI.
                </AlertDescription>
              </Alert>

              <div className="bg-gradient-to-r from-[#0F4342] to-[#196865] rounded-lg p-6 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-bold mb-2 flex items-center">
                      <Google className="h-5 w-5 mr-2" />
                      Connect Google My Business
                    </h2>
                    <p className="text-white/80 max-w-xl">
                      Manage your Google Business Profile directly from Vera AI. Respond to reviews, post updates,
                      upload photos, and track performance - all in one place.
                    </p>
                  </div>
                  <Button
                    className="bg-white text-[#0F4342] hover:bg-white/90 hover:text-[#0F4342]"
                    onClick={handleConnect}
                  >
                    <LinkIcon className="h-4 w-4 mr-2" />
                    Connect My Business
                  </Button>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <MessageSquare className="h-5 w-5 mr-2 text-[#0F4342]" />
                      <CardTitle className="text-lg">Manage Reviews</CardTitle>
                    </div>
                    <CardDescription>Respond to customer reviews and improve your online reputation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        <span>Receive notifications for new reviews</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        <span>Generate AI-powered response suggestions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        <span>Track review sentiment and trends</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <ImageIcon className="h-5 w-5 mr-2 text-[#0F4342]" />
                      <CardTitle className="text-lg">Post Updates</CardTitle>
                    </div>
                    <CardDescription>Share news, offers, and events with your customers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        <span>Schedule posts in advance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        <span>Create engaging content with AI assistance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        <span>Track post performance and engagement</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <Globe className="h-5 w-5 mr-2 text-[#0F4342]" />
                      <CardTitle className="text-lg">Boost Visibility</CardTitle>
                    </div>
                    <CardDescription>Improve your local search presence and attract more customers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        <span>Optimize your business profile</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        <span>Get insights on search performance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        <span>Receive AI recommendations for improvements</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Connection Dialog */}
              <Dialog open={isConnectDialogOpen} onOpenChange={setIsConnectDialogOpen}>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Connect Google My Business</DialogTitle>
                    <DialogDescription>
                      {connectionStep === 1
                        ? "Enter your business details to find your Google Business Profile"
                        : "Verify and connect your Google Business Profile"}
                    </DialogDescription>
                  </DialogHeader>

                  {connectionStep === 1 ? (
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="business-name">Business Name</Label>
                        <Input
                          id="business-name"
                          placeholder="Enter your business name"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="business-email">Business Email</Label>
                        <Input
                          id="business-email"
                          type="email"
                          placeholder="email@yourbusiness.com"
                          value={businessEmail}
                          onChange={(e) => setBusinessEmail(e.target.value)}
                        />
                        <p className="text-xs text-gray-500">
                          This email will be used to connect to your Google Business Profile
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="business-address">Business Address</Label>
                        <Input
                          id="business-address"
                          placeholder="Full street address"
                          value={businessAddress}
                          onChange={(e) => setBusinessAddress(e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="business-location">City, State</Label>
                          <Input
                            id="business-location"
                            placeholder="City, State"
                            value={businessLocation}
                            onChange={(e) => setBusinessLocation(e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="business-phone">Business Phone</Label>
                          <Input
                            id="business-phone"
                            placeholder="(123) 456-7890"
                            value={businessPhone}
                            onChange={(e) => setBusinessPhone(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="business-category">Business Category</Label>
                        <Select value={businessCategory} onValueChange={setBusinessCategory}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select business category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="restaurant">Restaurant</SelectItem>
                            <SelectItem value="retail">Retail Store</SelectItem>
                            <SelectItem value="service">Service Business</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="professional">Professional Services</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {connectionError && <div className="text-red-500 text-sm">{connectionError}</div>}
                    </div>
                  ) : googleAuthStep ? (
                    <div className="space-y-4 py-4">
                      <div className="border rounded-md p-4 bg-white">
                        <div className="flex flex-col items-center mb-6">
                          <Google className="h-8 w-8 text-[#4285F4] mb-4" />
                          <h3 className="text-xl font-normal text-center">Sign in with Google</h3>
                          <p className="text-sm text-gray-500 text-center mt-1">
                            to continue to Google Business Profile
                          </p>
                        </div>

                        <div className="space-y-4 mb-6">
                          <div className="border rounded-md p-3">
                            <p className="text-sm font-medium mb-1">Email</p>
                            <div className="flex items-center">
                              <input
                                type="email"
                                value={businessEmail || "email@yourbusiness.com"}
                                className="w-full outline-none text-sm"
                                readOnly
                              />
                            </div>
                          </div>

                          <div className="border rounded-md p-3">
                            <p className="text-sm font-medium mb-1">Password</p>
                            <div className="flex items-center">
                              <input
                                type="password"
                                value="••••••••••"
                                className="w-full outline-none text-sm"
                                readOnly
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center">
                            <input type="checkbox" id="stay-signed-in" className="mr-2" />
                            <label htmlFor="stay-signed-in" className="text-sm">
                              Stay signed in
                            </label>
                          </div>
                          <a href="#" className="text-sm text-[#4285F4]">
                            Forgot password?
                          </a>
                        </div>

                        <div className="flex justify-between items-center">
                          <a href="#" className="text-sm text-[#4285F4]">
                            Create account
                          </a>
                          <Button
                            className="bg-[#4285F4] hover:bg-[#3367D6] text-white"
                            onClick={handleGoogleAuthComplete}
                            disabled={isConnecting}
                          >
                            {isConnecting ? (
                              <>
                                <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                                Signing in...
                              </>
                            ) : (
                              "Next"
                            )}
                          </Button>
                        </div>

                        <div className="mt-6 pt-6 border-t text-xs text-gray-500">
                          <p>
                            By continuing, you agree to Google's{" "}
                            <a href="#" className="text-[#4285F4]">
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-[#4285F4]">
                              Privacy Policy
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : businessSelectionStep ? (
                    <div className="space-y-4 py-4">
                      <div className="border rounded-md p-4">
                        <div className="flex items-center mb-4">
                          <Google className="h-5 w-5 text-[#4285F4] mr-2" />
                          <h3 className="font-medium">Select your business</h3>
                        </div>

                        <p className="text-sm text-gray-600 mb-4">
                          We found the following business listings associated with your Google account. Select the
                          business you want to connect to Vera AI.
                        </p>

                        <div className="space-y-3 mb-4">
                          {businessListings.map((listing) => (
                            <div
                              key={listing.id}
                              className={`border rounded-md p-3 cursor-pointer transition-colors ${
                                selectedListing === listing.id ? "border-[#4285F4] bg-blue-50" : "hover:bg-gray-50"
                              }`}
                              onClick={() => setSelectedListing(listing.id)}
                            >
                              <div className="flex items-start">
                                <div className="bg-gray-100 rounded-md h-10 w-10 flex items-center justify-center mr-3 flex-shrink-0">
                                  <Google className="h-5 w-5 text-gray-600" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center">
                                    <h4 className="font-medium">{listing.name}</h4>
                                    {listing.verified && (
                                      <Badge variant="outline" className="ml-2 text-xs">
                                        Verified
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-500">{listing.address}</p>
                                  <p className="text-xs text-gray-400 mt-1">{listing.category}</p>
                                </div>
                                {selectedListing === listing.id && <Check className="h-5 w-5 text-[#4285F4]" />}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="text-sm text-gray-500 mb-4">
                          <p>
                            Don't see your business?{" "}
                            <a href="#" className="text-[#4285F4]">
                              Create a new business profile
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 py-4">
                      <div className="border rounded-md p-4">
                        <div className="flex items-start">
                          <div className="bg-gray-100 rounded-md h-12 w-12 flex items-center justify-center mr-3">
                            <Google className="h-6 w-6 text-gray-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">{businessName}</h3>
                            <p className="text-sm text-gray-500">{businessLocation}</p>
                            <div className="flex items-center mt-1">
                              <Globe className="h-3 w-3 mr-1 text-gray-400" />
                              <span className="text-xs text-gray-500">business.google.com</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Permissions Required</Label>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                            <span>Read and respond to reviews</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                            <span>Create and manage posts</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                            <span>Upload and manage photos</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                            <span>View insights and analytics</span>
                          </li>
                        </ul>
                      </div>

                      <div className="text-sm text-gray-500">
                        By connecting, you authorize Vera AI to access and manage your Google Business Profile on your
                        behalf.
                      </div>
                    </div>
                  )}

                  {isInstalling && (
                    <div className="space-y-4 py-4">
                      <div className="border rounded-md p-4">
                        <h3 className="font-medium mb-3">Installing Google Business Profile Integration</h3>

                        <div className="mb-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span>{installationStep || "Preparing installation..."}</span>
                            <span>{installationProgress}%</span>
                          </div>
                          <Progress value={installationProgress} className="h-2" />
                        </div>

                        <div className="space-y-2 mt-4">
                          <div className="flex items-center">
                            <div
                              className={`h-5 w-5 rounded-full flex items-center justify-center mr-2 ${installationProgress >= 25 ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}
                            >
                              {installationProgress >= 25 ? <Check className="h-3 w-3" /> : "1"}
                            </div>
                            <span className="text-sm">Connecting to Google Business API</span>
                          </div>

                          <div className="flex items-center">
                            <div
                              className={`h-5 w-5 rounded-full flex items-center justify-center mr-2 ${installationProgress >= 50 ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}
                            >
                              {installationProgress >= 50 ? <Check className="h-3 w-3" /> : "2"}
                            </div>
                            <span className="text-sm">Setting up review management</span>
                          </div>

                          <div className="flex items-center">
                            <div
                              className={`h-5 w-5 rounded-full flex items-center justify-center mr-2 ${installationProgress >= 75 ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}
                            >
                              {installationProgress >= 75 ? <Check className="h-3 w-3" /> : "3"}
                            </div>
                            <span className="text-sm">Configuring post management</span>
                          </div>

                          <div className="flex items-center">
                            <div
                              className={`h-5 w-5 rounded-full flex items-center justify-center mr-2 ${installationProgress >= 100 ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}
                            >
                              {installationProgress >= 100 ? <Check className="h-3 w-3" /> : "4"}
                            </div>
                            <span className="text-sm">Setting up analytics and insights</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <DialogFooter className="flex justify-between sm:justify-between">
                    {connectionStep === 1 ? (
                      <>
                        <Button variant="outline" onClick={() => setIsConnectDialogOpen(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleNextStep}>Next</Button>
                      </>
                    ) : googleAuthStep ? (
                      <>
                        <Button variant="outline" onClick={() => setGoogleAuthStep(false)}>
                          Back
                        </Button>
                        {isInstalling ? (
                          <Button disabled className="bg-[#0F4342]">
                            Installing...
                          </Button>
                        ) : (
                          <Button variant="outline" onClick={() => setGoogleAuthStep(false)} disabled={isConnecting}>
                            Back
                          </Button>
                        )}
                      </>
                    ) : businessSelectionStep ? (
                      <>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setBusinessSelectionStep(false)
                            setGoogleAuthStep(true)
                          }}
                        >
                          Back
                        </Button>
                        <Button
                          onClick={handleBusinessSelection}
                          disabled={!selectedListing || isInstalling}
                          className="bg-[#0F4342] hover:bg-[#0a2e2d]"
                        >
                          {isInstalling ? (
                            <>
                              <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                              Connecting...
                            </>
                          ) : (
                            "Connect Business"
                          )}
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="outline" onClick={() => setConnectionStep(1)}>
                          Back
                        </Button>
                        <Button
                          onClick={handleNextStep}
                          disabled={isConnecting}
                          className="bg-[#0F4342] hover:bg-[#0a2e2d]"
                        >
                          {isConnecting ? (
                            <>
                              <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                              Connecting...
                            </>
                          ) : (
                            "Next"
                          )}
                        </Button>
                      </>
                    )}
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          ) : (
            <>
              {/* Overview Stats */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Rating</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold mr-2">{businessStats.rating}</span>
                      <div className="flex">{renderStars(Math.round(businessStats.rating))}</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{businessStats.totalReviews}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Profile Views</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{businessStats.views}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Searches</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{businessStats.searches}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Clicks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{businessStats.clicks}</div>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="reviews" className="mb-6">
                <TabsList className="grid grid-cols-1 md:grid-cols-4 mb-4">
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="posts">Posts & Updates</TabsTrigger>
                  <TabsTrigger value="photos">Photos</TabsTrigger>
                  <TabsTrigger value="website">Website Integration</TabsTrigger>
                </TabsList>

                {/* Reviews Tab */}
                <TabsContent value="reviews">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>Customer Reviews</CardTitle>
                        <div className="flex items-center gap-2">
                          <Select defaultValue="all">
                            <SelectTrigger className="w-[150px]">
                              <SelectValue placeholder="Filter reviews" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Reviews</SelectItem>
                              <SelectItem value="replied">Replied</SelectItem>
                              <SelectItem value="unreplied">Unreplied</SelectItem>
                              <SelectItem value="positive">Positive (4-5★)</SelectItem>
                              <SelectItem value="negative">Negative (1-3★)</SelectItem>
                            </SelectContent>
                          </Select>
                          <Button variant="outline" size="sm">
                            Generate AI Replies
                          </Button>
                        </div>
                      </div>
                      <CardDescription>
                        Manage and respond to customer reviews from your Google Business Profile
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {reviews.map((review) => (
                          <Card key={review.id} className="border border-gray-200">
                            <CardHeader className="pb-2">
                              <div className="flex justify-between">
                                <div>
                                  <div className="font-semibold">{review.author}</div>
                                  <div className="flex items-center mt-1">
                                    {renderStars(review.rating)}
                                    <span className="text-sm text-gray-500 ml-2">
                                      {new Date(review.date).toLocaleDateString()}
                                    </span>
                                  </div>
                                </div>
                                <Badge variant={review.replied ? "outline" : "secondary"}>
                                  {review.replied ? "Replied" : "Needs Reply"}
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-gray-700">{review.content}</p>

                              {review.replied && (
                                <div className="mt-3 pl-4 border-l-2 border-gray-200">
                                  <p className="text-xs font-semibold text-gray-500">Your reply:</p>
                                  <p className="text-sm text-gray-600">{review.reply}</p>
                                </div>
                              )}

                              {!review.replied && (
                                <div className="mt-4">
                                  <Textarea placeholder="Write your reply to this review..." className="mb-2" />
                                  <div className="flex justify-between">
                                    <Button variant="outline" size="sm">
                                      Generate AI Reply
                                    </Button>
                                    <Button size="sm" className="bg-[#0F4342] hover:bg-[#0a2e2d]">
                                      Post Reply
                                    </Button>
                                  </div>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Posts Tab */}
                <TabsContent value="posts">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>Posts & Updates</CardTitle>
                        <Dialog open={isPostDialogOpen} onOpenChange={setIsPostDialogOpen}>
                          <DialogTrigger asChild>
                            <Button className="bg-[#0F4342] hover:bg-[#0a2e2d]">
                              <Plus className="h-4 w-4 mr-2" />
                              Create New Post
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Create New Post</DialogTitle>
                              <DialogDescription>
                                Share updates, offers, or events on your Google Business Profile
                              </DialogDescription>
                            </DialogHeader>

                            <div className="space-y-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor="post-type">Post Type</Label>
                                <Select defaultValue="update">
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select post type" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="update">Update</SelectItem>
                                    <SelectItem value="offer">Offer</SelectItem>
                                    <SelectItem value="event">Event</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="post-content">Post Content</Label>
                                <Textarea id="post-content" placeholder="Write your post content here..." />
                              </div>

                              <div className="space-y-2">
                                <Label>Add Image</Label>
                                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                                  <p className="text-sm text-gray-500">Drag & drop an image or click to browse</p>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="button-text">Button Text (Optional)</Label>
                                <Input id="button-text" placeholder="Learn More, Book Now, etc." />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="button-url">Button URL (Optional)</Label>
                                <Input id="button-url" placeholder="https://your-website.com/page" />
                              </div>
                            </div>

                            <DialogFooter>
                              <Button variant="outline" onClick={() => setIsPostDialogOpen(false)}>
                                Cancel
                              </Button>
                              <Button
                                className="bg-[#0F4342] hover:bg-[#0a2e2d]"
                                onClick={() => setIsPostDialogOpen(false)}
                              >
                                Publish Post
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                      <CardDescription>
                        Create and manage posts, offers, and events for your Google Business Profile
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {posts.map((post) => (
                          <Card key={post.id} className="border border-gray-200">
                            <CardHeader className="pb-2">
                              <div className="flex justify-between items-center">
                                <div>
                                  <Badge className="mb-1">
                                    {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                                  </Badge>
                                  <div className="text-sm text-gray-500">
                                    {new Date(post.date).toLocaleDateString()}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <div className="flex items-center">
                                    <ThumbsUp className="h-4 w-4 mr-1" />
                                    {post.engagement.likes}
                                  </div>
                                  <div className="flex items-center">
                                    <MessageSquare className="h-4 w-4 mr-1" />
                                    {post.engagement.views}
                                  </div>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-gray-700">{post.content}</p>
                            </CardContent>
                            <CardFooter className="flex justify-end gap-2 pt-0">
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                                Delete
                              </Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Photos Tab */}
                <TabsContent value="photos">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>Business Photos</CardTitle>
                        <Dialog open={isPhotoDialogOpen} onOpenChange={setIsPhotoDialogOpen}>
                          <DialogTrigger asChild>
                            <Button className="bg-[#0F4342] hover:bg-[#0a2e2d]">
                              <Upload className="h-4 w-4 mr-2" />
                              Upload Photos
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Upload Photos</DialogTitle>
                              <DialogDescription>Add photos to showcase your business on Google</DialogDescription>
                            </DialogHeader>

                            <div className="space-y-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor="photo-type">Photo Category</Label>
                                <Select defaultValue="exterior">
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="exterior">Exterior</SelectItem>
                                    <SelectItem value="interior">Interior</SelectItem>
                                    <SelectItem value="product">Product</SelectItem>
                                    <SelectItem value="team">Team</SelectItem>
                                    <SelectItem value="at-work">At Work</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="space-y-2">
                                <Label>Upload Images</Label>
                                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                                  <p className="text-sm text-gray-500">Drag & drop images or click to browse</p>
                                  <p className="text-xs text-gray-400 mt-1">You can upload multiple images at once</p>
                                </div>
                              </div>
                            </div>

                            <DialogFooter>
                              <Button variant="outline" onClick={() => setIsPhotoDialogOpen(false)}>
                                Cancel
                              </Button>
                              <Button
                                className="bg-[#0F4342] hover:bg-[#0a2e2d]"
                                onClick={() => setIsPhotoDialogOpen(false)}
                              >
                                Upload Photos
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                      <CardDescription>Manage photos that appear on your Google Business Profile</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {photos.map((photo) => (
                          <div key={photo.id} className="relative group">
                            <img
                              src={photo.url || "/placeholder.svg"}
                              alt={`Business ${photo.type} photo`}
                              className="rounded-md w-full h-auto object-cover aspect-square"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="text-white h-8 w-8">
                                  <ImageIcon className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-white h-8 w-8">
                                  <ThumbsDown className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <div className="mt-1">
                              <p className="text-xs font-medium capitalize">{photo.type}</p>
                              <p className="text-xs text-gray-500">{new Date(photo.date).toLocaleDateString()}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Website Integration Tab */}
                <TabsContent value="website">
                  <Card>
                    <CardHeader>
                      <CardTitle>Website Integration</CardTitle>
                      <CardDescription>Connect your website with your Google Business Profile</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="border rounded-md p-4">
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <h3 className="font-medium">Current Website</h3>
                            <div className="flex items-center mt-1">
                              <Globe className="h-4 w-4 mr-2 text-gray-500" />
                              <a href="#" className="text-blue-600 hover:underline flex items-center">
                                www.yourbusiness.com
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </a>
                            </div>
                          </div>
                          <Button variant="outline">Edit Website URL</Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium mb-2">Website Performance</h4>
                            <div className="space-y-3">
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Mobile Friendliness</span>
                                  <span>92%</span>
                                </div>
                                <Progress value={92} className="h-2" />
                              </div>
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Page Speed</span>
                                  <span>78%</span>
                                </div>
                                <Progress value={78} className="h-2" />
                              </div>
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>SEO Score</span>
                                  <span>85%</span>
                                </div>
                                <Progress value={85} className="h-2" />
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-2">Vera AI Suggestions</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start">
                                <ThumbsUp className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                                <span>
                                  Add business hours and services to your Google profile to improve visibility
                                </span>
                              </li>
                              <li className="flex items-start">
                                <ThumbsUp className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                                <span>Update your website meta description to match your Google Business profile</span>
                              </li>
                              <li className="flex items-start">
                                <ThumbsUp className="h-4 w-4 mr-2 text-yellow-500 mt-0.5" />
                                <span>Consider adding schema markup to improve local search results</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-3">Google Business Profile Widgets</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Add these widgets to your website to showcase your Google reviews and business information
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">Reviews Widget</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="bg-gray-100 p-3 rounded-md text-xs font-mono mb-3 overflow-x-auto">
                                {
                                  '<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>'
                                }
                              </div>
                              <div className="flex justify-between">
                                <Button variant="outline" size="sm">
                                  Copy Code
                                </Button>
                                <Button size="sm" className="bg-[#0F4342] hover:bg-[#0a2e2d]">
                                  Add to Website
                                </Button>
                              </div>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">Business Info Widget</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="bg-gray-100 p-3 rounded-md text-xs font-mono mb-3 overflow-x-auto">
                                {
                                  '<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>'
                                }
                              </div>
                              <div className="flex justify-between">
                                <Button variant="outline" size="sm">
                                  Copy Code
                                </Button>
                                <Button size="sm" className="bg-[#0F4342] hover:bg-[#0a2e2d]">
                                  Add to Website
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-3">Automated Updates</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Configure how Vera AI should manage the connection between your website and Google Business
                          Profile
                        </p>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <div className="font-medium">Sync website changes to Google</div>
                              <div className="text-sm text-gray-500">
                                Automatically update your Google profile when your website changes
                              </div>
                            </div>
                            <Switch />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <div className="font-medium">Sync Google posts to website</div>
                              <div className="text-sm text-gray-500">
                                Show your Google posts on your website automatically
                              </div>
                            </div>
                            <Switch />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <div className="font-medium">Sync reviews to website</div>
                              <div className="text-sm text-gray-500">Display your Google reviews on your website</div>
                            </div>
                            <Switch />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </>
          )}
        </main>
      </div>
    </div>
  )
}

