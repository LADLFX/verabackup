'use client'

import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AIChatAssistant } from '@/components/ai-chat-assistant'
import Image from 'next/image'
import { SidebarNavigation } from '@/components/sidebar-navigation'
import { TopNavigation } from '@/components/top-navigation'
import { VeraWidget } from '@/components/vera-widget'

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0F4342]"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-[#F8F9FA]">
      <div className="w-full md:w-64 md:flex-shrink-0">
        <SidebarNavigation />
      </div>
      <div className="flex flex-1 flex-col">
        <TopNavigation userName={user.email || 'User'} userRole="Business Owner" notificationCount={3} />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#0F4342]">Welcome back, {user.email}</h1>
              <p className="text-[#0F4342]/70">Here's what's happening with your business today</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-1 md:col-span-2 lg:col-span-3 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#0F4342]">AI Chat Assistant</CardTitle>
                  <CardDescription className="text-[#0F4342]/70">
                    Interact with Vera AI to get help with your tasks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AIChatAssistant />
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#0F4342]">What is Vera?</CardTitle>
                  <CardDescription className="text-[#0F4342]/70">
                    Learn about Vera AI and its capabilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/what-is-vera.svg"
                      alt="What is Vera"
                      fill
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#0F4342]">What can I use?</CardTitle>
                  <CardDescription className="text-[#0F4342]/70">
                    Discover the features and tools available
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/what-can-i-use.svg"
                      alt="What can I use"
                      fill
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#0F4342]">Deploying Services</CardTitle>
                  <CardDescription className="text-[#0F4342]/70">
                    Learn how to deploy and manage services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/deploying-services.svg"
                      alt="Deploying Services"
                      fill
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <VeraWidget />
      </div>
    </div>
  )
} 