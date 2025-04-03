"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const totalSteps = 5

  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    employees: "",
    goals: "",
    existingSystems: {
      crm: false,
      email: false,
      calendar: false,
      documents: false,
      phone: false,
    },
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  })

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const updateExistingSystem = (system: string, value: boolean) => {
    setFormData((prev) => ({
      ...prev,
      existingSystems: {
        ...prev.existingSystems,
        [system]: value,
      },
    }))
  }

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    } else {
      // Submit and redirect
      router.push("/dashboard/client")
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0F4342] p-4">
      <Card className="w-full max-w-6xl overflow-hidden rounded-xl shadow-xl">
        <div className="flex flex-col md:flex-row">
          {/* Left sidebar */}
          <div className="bg-[#0F4342] p-8 text-white md:w-1/3">
            <div className="mb-12">
              <h1 className="text-3xl font-bold">Vera AI</h1>
              <p className="mt-2 text-gray-300">Your AI-powered business assistant</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 1 ? "bg-[#DBCA91] text-[#0F4342]" : "bg-gray-600 text-white"
                  }`}
                >
                  {step > 1 ? <CheckCircle className="h-5 w-5" /> : "1"}
                </div>
                <div className="ml-4">
                  <p className={`font-medium ${step === 1 ? "text-[#DBCA91]" : ""}`}>Company Information</p>
                </div>
              </div>

              <div className="flex items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 2 ? "bg-[#DBCA91] text-[#0F4342]" : "bg-gray-600 text-white"
                  }`}
                >
                  {step > 2 ? <CheckCircle className="h-5 w-5" /> : "2"}
                </div>
                <div className="ml-4">
                  <p className={`font-medium ${step === 2 ? "text-[#DBCA91]" : ""}`}>Business Goals</p>
                </div>
              </div>

              <div className="flex items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 3 ? "bg-[#DBCA91] text-[#0F4342]" : "bg-gray-600 text-white"
                  }`}
                >
                  {step > 3 ? <CheckCircle className="h-5 w-5" /> : "3"}
                </div>
                <div className="ml-4">
                  <p className={`font-medium ${step === 3 ? "text-[#DBCA91]" : ""}`}>Existing Systems</p>
                </div>
              </div>

              <div className="flex items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 4 ? "bg-[#DBCA91] text-[#0F4342]" : "bg-gray-600 text-white"
                  }`}
                >
                  {step > 4 ? <CheckCircle className="h-5 w-5" /> : "4"}
                </div>
                <div className="ml-4">
                  <p className={`font-medium ${step === 4 ? "text-[#DBCA91]" : ""}`}>Contact Details</p>
                </div>
              </div>

              <div className="flex items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 5 ? "bg-[#DBCA91] text-[#0F4342]" : "bg-gray-600 text-white"
                  }`}
                >
                  {step > 5 ? <CheckCircle className="h-5 w-5" /> : "5"}
                </div>
                <div className="ml-4">
                  <p className={`font-medium ${step === 5 ? "text-[#DBCA91]" : ""}`}>Review & Confirm</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Progress value={(step / totalSteps) * 100} className="h-2 bg-gray-600" />
              <p className="mt-2 text-sm text-gray-300">
                Step {step} of {totalSteps}
              </p>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-8">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0F4342]">Company Information</h2>
                  <p className="mt-2 text-gray-500">Tell us about your business so we can customize Vera AI for you.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium">
                      Company Name
                    </label>
                    <Input
                      id="companyName"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={(e) => updateFormData("companyName", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium">
                      Industry
                    </label>
                    <select
                      id="industry"
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      value={formData.industry}
                      onChange={(e) => updateFormData("industry", e.target.value)}
                    >
                      <option value="">Select your industry</option>
                      <option value="technology">Technology</option>
                      <option value="finance">Finance</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="retail">Retail</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="professional_services">Professional Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="employees" className="block text-sm font-medium">
                      Number of Employees
                    </label>
                    <select
                      id="employees"
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      value={formData.employees}
                      onChange={(e) => updateFormData("employees", e.target.value)}
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="501-1000">501-1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0F4342]">Business Goals</h2>
                  <p className="mt-2 text-gray-500">What are you hoping to achieve with Vera AI?</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium">
                      Business Goals
                    </label>
                    <Textarea
                      id="goals"
                      placeholder="Describe your key business goals and challenges..."
                      rows={6}
                      value={formData.goals}
                      onChange={(e) => updateFormData("goals", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div className="rounded-lg border p-4">
                    <p className="text-sm text-gray-500">Common goals our clients have:</p>
                    <ul className="mt-2 space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        <span>Improve team productivity and reduce administrative overhead</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        <span>Enhance client communication and response times</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        <span>Streamline data entry and reporting processes</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        <span>Better insights from business data for decision making</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0F4342]">Existing Systems</h2>
                  <p className="mt-2 text-gray-500">Which systems would you like to connect with Vera AI?</p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <p className="text-sm font-medium">Select all that apply:</p>
                    <div className="mt-3 space-y-3">
                      <div className="flex items-center">
                        <input
                          id="crm"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#0F4342]"
                          checked={formData.existingSystems.crm}
                          onChange={(e) => updateExistingSystem("crm", e.target.checked)}
                        />
                        <label htmlFor="crm" className="ml-3 text-sm">
                          CRM System (e.g., Salesforce, HubSpot, Microsoft Dynamics)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="email"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#0F4342]"
                          checked={formData.existingSystems.email}
                          onChange={(e) => updateExistingSystem("email", e.target.checked)}
                        />
                        <label htmlFor="email" className="ml-3 text-sm">
                          Email System (e.g., Microsoft 365, Google Workspace)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="calendar"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#0F4342]"
                          checked={formData.existingSystems.calendar}
                          onChange={(e) => updateExistingSystem("calendar", e.target.checked)}
                        />
                        <label htmlFor="calendar" className="ml-3 text-sm">
                          Calendar & Scheduling Tools
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="documents"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#0F4342]"
                          checked={formData.existingSystems.documents}
                          onChange={(e) => updateExistingSystem("documents", e.target.checked)}
                        />
                        <label htmlFor="documents" className="ml-3 text-sm">
                          Document Management System
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="phone"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#0F4342]"
                          checked={formData.existingSystems.phone}
                          onChange={(e) => updateExistingSystem("phone", e.target.checked)}
                        />
                        <label htmlFor="phone" className="ml-3 text-sm">
                          Phone System / VoIP
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-dashed p-4">
                    <p className="text-sm text-gray-500">
                      Vera AI can connect with most popular business systems. Don't see your system listed? Don't worry
                      - our implementation team will work with you to ensure seamless integration.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0F4342]">Contact Details</h2>
                  <p className="mt-2 text-gray-500">Who should we contact regarding your Vera AI implementation?</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      id="contactName"
                      placeholder="Enter your full name"
                      value={formData.contactName}
                      onChange={(e) => updateFormData("contactName", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="contactEmail"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.contactEmail}
                      onChange={(e) => updateFormData("contactEmail", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactPhone" className="block text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="contactPhone"
                      placeholder="Enter your phone number"
                      value={formData.contactPhone}
                      onChange={(e) => updateFormData("contactPhone", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0F4342]">Review & Confirm</h2>
                  <p className="mt-2 text-gray-500">Please review your information before submitting.</p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium text-[#0F4342]">Company Information</h3>
                    <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium">Company Name</p>
                        <p className="text-gray-600">{formData.companyName || "Not provided"}</p>
                      </div>
                      <div>
                        <p className="font-medium">Industry</p>
                        <p className="text-gray-600">{formData.industry || "Not provided"}</p>
                      </div>
                      <div>
                        <p className="font-medium">Company Size</p>
                        <p className="text-gray-600">{formData.employees || "Not provided"}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium text-[#0F4342]">Business Goals</h3>
                    <p className="mt-2 text-sm text-gray-600">{formData.goals || "Not provided"}</p>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium text-[#0F4342]">Systems to Connect</h3>
                    <div className="mt-2 space-y-1 text-sm">
                      {Object.entries(formData.existingSystems).filter(([_, value]) => value).length > 0 ? (
                        Object.entries(formData.existingSystems).map(
                          ([key, value]) =>
                            value && (
                              <div key={key} className="flex items-center">
                                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                                <span>
                                  {key === "crm"
                                    ? "CRM System"
                                    : key === "email"
                                      ? "Email System"
                                      : key === "calendar"
                                        ? "Calendar & Scheduling"
                                        : key === "documents"
                                          ? "Document Management"
                                          : "Phone System"}
                                </span>
                              </div>
                            ),
                        )
                      ) : (
                        <p className="text-gray-600">No systems selected</p>
                      )}
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium text-[#0F4342]">Contact Details</h3>
                    <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium">Name</p>
                        <p className="text-gray-600">{formData.contactName || "Not provided"}</p>
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">{formData.contactEmail || "Not provided"}</p>
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">{formData.contactPhone || "Not provided"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              {step > 1 ? (
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
              ) : (
                <div></div>
              )}

              <Button className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]" onClick={nextStep}>
                {step === totalSteps ? "Complete Setup" : "Continue"} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

