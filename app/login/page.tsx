"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Lock, Mail } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = (userType: string) => {
    setLoading(true)

    // Simulate login process
    setTimeout(() => {
      setLoading(false)

      // Redirect to appropriate dashboard based on user type
      if (userType === "client") {
        router.push("/dashboard/client")
      } else if (userType === "client-admin") {
        router.push("/dashboard/client-admin")
      } else if (userType === "master-admin") {
        router.push("/dashboard/master-admin")
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-[#0F4342] mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="mx-auto max-w-md">
          <Card className="border-2 border-gray-100 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-[#0F4342]">Welcome to Vera AI</CardTitle>
              <CardDescription>Login to access your Vera AI services</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="client" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="client">Client</TabsTrigger>
                  <TabsTrigger value="client-admin">Client Admin</TabsTrigger>
                  <TabsTrigger value="master-admin">Master Admin</TabsTrigger>
                </TabsList>

                <TabsContent value="client">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleLogin("client")
                    }}
                  >
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="client-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="client-email"
                            type="email"
                            placeholder="your@email.com"
                            className="pl-10"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="client-password">Password</Label>
                          <Link href="/forgot-password" className="text-sm text-[#0F4342]">
                            Forgot password?
                          </Link>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="client-password"
                            type="password"
                            className="pl-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]"
                        disabled={loading}
                      >
                        {loading ? "Logging in..." : "Access your Vera AI services"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>

                <TabsContent value="client-admin">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleLogin("client-admin")
                    }}
                  >
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="admin-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="admin-email"
                            type="email"
                            placeholder="admin@company.com"
                            className="pl-10"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="admin-password">Password</Label>
                          <Link href="/forgot-password" className="text-sm text-[#0F4342]">
                            Forgot password?
                          </Link>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="admin-password"
                            type="password"
                            className="pl-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]"
                        disabled={loading}
                      >
                        {loading ? "Logging in..." : "Access advanced features"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>

                <TabsContent value="master-admin">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleLogin("master-admin")
                    }}
                  >
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="master-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="master-email"
                            type="email"
                            placeholder="master@veraai.com"
                            className="pl-10"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="master-password">Password</Label>
                          <Link href="/forgot-password" className="text-sm text-[#0F4342]">
                            Forgot password?
                          </Link>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="master-password"
                            type="password"
                            className="pl-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]"
                        disabled={loading}
                      >
                        {loading ? "Logging in..." : "Full system control"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>Need help? Contact support at support@veraai.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

