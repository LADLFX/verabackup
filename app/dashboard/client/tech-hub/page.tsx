import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PingLatencyMonitor } from "@/components/ping-latency-monitor"
import { Laptop, Smartphone, Wifi, Mail, Cloud, FileText, Plus, CheckCircle, Clock, Server } from "lucide-react"

export default function TechHub() {
  return (
    <div className="flex-1 p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#0F4342]">Tech Hub</h1>
        <p className="text-gray-500">Manage your hardware, software, and connectivity</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Hardware Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 Devices</div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center rounded-lg bg-green-100 p-2 text-green-700">
                <CheckCircle className="mr-1 h-4 w-4" />
                <span>10 Active</span>
              </div>
              <div className="flex items-center rounded-lg bg-amber-100 p-2 text-amber-700">
                <Clock className="mr-1 h-4 w-4" />
                <span>2 Inactive</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Mobile & SIM</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8 Devices</div>
            <div className="mt-2 text-xs text-gray-500">
              <p>6 Active plans</p>
              <p>2 Pending activation</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Broadband & Connectivity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
              <div className="text-sm">All connections online</div>
            </div>
            <div className="mt-4">
              <PingLatencyMonitor />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Email & Domain</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 Accounts</div>
            <div className="mt-2 text-xs text-gray-500">
              <p>Domain: company.veraai.com</p>
              <p>Email storage: 68% used</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="hardware" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
          <TabsTrigger value="hardware">Hardware</TabsTrigger>
          <TabsTrigger value="mobile">Mobile & SIM</TabsTrigger>
          <TabsTrigger value="broadband">Broadband</TabsTrigger>
          <TabsTrigger value="email">Email & Domain</TabsTrigger>
          <TabsTrigger value="cloud">Cloud & Server</TabsTrigger>
          <TabsTrigger value="licenses">Licenses</TabsTrigger>
        </TabsList>

        <TabsContent value="hardware" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Hardware Inventory</CardTitle>
                <Button className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                  <Plus className="mr-2 h-4 w-4" /> Request New Hardware
                </Button>
              </div>
              <CardDescription>Manage your company devices and equipment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 gap-4 bg-gray-50 p-4 font-medium">
                    <div>Device Type</div>
                    <div>Assigned To</div>
                    <div>Status</div>
                    <div>Purchase Date</div>
                    <div>Actions</div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-5 gap-4 p-4">
                      <div className="flex items-center">
                        <Laptop className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>Dell XPS 13</span>
                      </div>
                      <div>John Smith</div>
                      <div>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                          Active
                        </span>
                      </div>
                      <div>Jan 15, 2023</div>
                      <div>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 p-4">
                      <div className="flex items-center">
                        <Laptop className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>MacBook Pro</span>
                      </div>
                      <div>Sarah Johnson</div>
                      <div>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                          Active
                        </span>
                      </div>
                      <div>Mar 22, 2023</div>
                      <div>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 p-4">
                      <div className="flex items-center">
                        <Laptop className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>Lenovo ThinkPad</span>
                      </div>
                      <div>Michael Brown</div>
                      <div>
                        <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-700">
                          Needs Replacement
                        </span>
                      </div>
                      <div>Jun 10, 2021</div>
                      <div>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mobile" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Mobile & SIM Management</CardTitle>
                <Button className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                  <Plus className="mr-2 h-4 w-4" /> Add New SIM or Device
                </Button>
              </div>
              <CardDescription>Manage your company mobile devices and SIM cards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-6 gap-4 bg-gray-50 p-4 font-medium">
                    <div>Device</div>
                    <div>Number</div>
                    <div>Assigned To</div>
                    <div>Network</div>
                    <div>Data Plan</div>
                    <div>Actions</div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-6 gap-4 p-4">
                      <div className="flex items-center">
                        <Smartphone className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>iPhone 13</span>
                      </div>
                      <div>+44 7700 900123</div>
                      <div>John Smith</div>
                      <div>Vodafone</div>
                      <div>Unlimited</div>
                      <div>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 p-4">
                      <div className="flex items-center">
                        <Smartphone className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>Samsung S22</span>
                      </div>
                      <div>+44 7700 900124</div>
                      <div>Sarah Johnson</div>
                      <div>EE</div>
                      <div>20GB</div>
                      <div>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="broadband" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Broadband & Connectivity</CardTitle>
                <Button className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                  <Plus className="mr-2 h-4 w-4" /> Order New Connection
                </Button>
              </div>
              <CardDescription>Manage your internet connections and network services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 gap-4 bg-gray-50 p-4 font-medium">
                    <div>Connection Type</div>
                    <div>Location</div>
                    <div>Provider</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-5 gap-4 p-4">
                      <div className="flex items-center">
                        <Wifi className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>Fibre Broadband</span>
                      </div>
                      <div>Main Office</div>
                      <div>BT Business</div>
                      <div>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                          Online
                        </span>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 p-4">
                      <div className="flex items-center">
                        <Wifi className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>Leased Line</span>
                      </div>
                      <div>Branch Office</div>
                      <div>Virgin Media</div>
                      <div>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                          Online
                        </span>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Email & Domain Management</CardTitle>
                <Button className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                  <Plus className="mr-2 h-4 w-4" /> Create New Email
                </Button>
              </div>
              <CardDescription>Manage your email accounts and domain settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 gap-4 bg-gray-50 p-4 font-medium">
                    <div>Email Address</div>
                    <div>User</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>john@company.veraai.com</span>
                      </div>
                      <div>John Smith</div>
                      <div>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                          Active
                        </span>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>sarah@company.veraai.com</span>
                      </div>
                      <div>Sarah Johnson</div>
                      <div>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                          Active
                        </span>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cloud" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Cloud & Server Access</CardTitle>
                <Button className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                  <Plus className="mr-2 h-4 w-4" /> Request More Storage
                </Button>
              </div>
              <CardDescription>Manage your cloud storage and server resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 gap-4 bg-gray-50 p-4 font-medium">
                    <div>Resource</div>
                    <div>Type</div>
                    <div>Usage</div>
                    <div>Actions</div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div className="flex items-center">
                        <Cloud className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>Cloud Storage</span>
                      </div>
                      <div>Microsoft OneDrive</div>
                      <div>
                        <div className="flex items-center">
                          <div className="mr-2 w-24 rounded-full bg-gray-200">
                            <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "65%" }}></div>
                          </div>
                          <span className="text-xs">65%</span>
                        </div>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div className="flex items-center">
                        <Server className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>Virtual Server</span>
                      </div>
                      <div>Azure VM</div>
                      <div>
                        <div className="flex items-center">
                          <div className="mr-2 w-24 rounded-full bg-gray-200">
                            <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "42%" }}></div>
                          </div>
                          <span className="text-xs">42%</span>
                        </div>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="licenses" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Licenses & Software</CardTitle>
                <Button className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                  <Plus className="mr-2 h-4 w-4" /> Add New License
                </Button>
              </div>
              <CardDescription>Manage your software licenses and subscriptions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 gap-4 bg-gray-50 p-4 font-medium">
                    <div>Product</div>
                    <div>Type</div>
                    <div>Assigned Users</div>
                    <div>Expiry</div>
                    <div>Actions</div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-5 gap-4 p-4">
                      <div className="flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>Microsoft 365</span>
                      </div>
                      <div>Business Premium</div>
                      <div>15 / 20</div>
                      <div>Dec 31, 2023</div>
                      <div>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 p-4">
                      <div className="flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>Adobe Creative Cloud</span>
                      </div>
                      <div>Team</div>
                      <div>3 / 5</div>
                      <div>Oct 15, 2023</div>
                      <div>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

