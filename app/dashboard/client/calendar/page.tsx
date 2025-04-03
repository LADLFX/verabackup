"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  FileText,
  Plus,
  ChevronLeft,
  ChevronRight,
  Phone,
  CheckSquare,
  GraduationCap,
} from "lucide-react"

// Dummy data for calendar events
const dummyEvents = [
  {
    id: 1,
    title: "Client Meeting - ABC Corp",
    date: "2023-10-15",
    time: "10:00 AM - 11:30 AM",
    attendees: ["John Smith", "Sarah Johnson", "Michael Brown"],
    location: "Conference Room A",
    description: "Quarterly review meeting to discuss project progress and next steps.",
    type: "meeting",
  },
  {
    id: 2,
    title: "Project Deadline - XYZ Project",
    date: "2023-10-15",
    time: "5:00 PM",
    attendees: ["John Smith", "Emily Davis"],
    location: "N/A",
    description: "Final deadline for submitting the XYZ project deliverables.",
    type: "deadline",
  },
  {
    id: 3,
    title: "Team Sync",
    date: "2023-10-16",
    time: "9:00 AM - 9:30 AM",
    attendees: ["John Smith", "Sarah Johnson", "Michael Brown", "Emily Davis"],
    location: "Virtual - Zoom",
    description: "Weekly team sync to discuss progress and blockers.",
    type: "meeting",
  },
  {
    id: 4,
    title: "Client Call - DEF Inc",
    date: "2023-10-16",
    time: "2:00 PM - 3:00 PM",
    attendees: ["John Smith", "Sarah Johnson"],
    location: "Phone",
    description: "Initial discovery call with potential new client.",
    type: "call",
  },
  {
    id: 5,
    title: "Marketing Campaign Launch",
    date: "2023-10-17",
    time: "10:00 AM",
    attendees: ["John Smith", "Emily Davis"],
    location: "N/A",
    description: "Launch of the Q4 marketing campaign across all channels.",
    type: "task",
  },
  {
    id: 6,
    title: "Board Meeting",
    date: "2023-10-18",
    time: "1:00 PM - 3:00 PM",
    attendees: ["John Smith", "Board Members"],
    location: "Executive Boardroom",
    description: "Quarterly board meeting to review company performance and strategy.",
    type: "meeting",
  },
  {
    id: 7,
    title: "Training Session - New CRM Features",
    date: "2023-10-19",
    time: "11:00 AM - 12:30 PM",
    attendees: ["All Staff"],
    location: "Training Room B",
    description: "Training session on the new features in our CRM system.",
    type: "training",
  },
  {
    id: 8,
    title: "Client Proposal Due - GHI Ltd",
    date: "2023-10-20",
    time: "3:00 PM",
    attendees: ["John Smith", "Sarah Johnson"],
    location: "N/A",
    description: "Deadline for submitting the proposal to GHI Ltd.",
    type: "deadline",
  },
]

// Generate calendar days
const generateCalendarDays = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()

  const days = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push({ day: null, date: null })
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day)
    const dateString = date.toISOString().split("T")[0]
    const events = dummyEvents.filter((event) => event.date === dateString)
    days.push({ day, date: dateString, events })
  }

  return days
}

export default function CalendarPage() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false)

  const calendarDays = generateCalendarDays(currentYear, currentMonth)
  const monthName = new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const handleEventClick = (event: any) => {
    setSelectedEvent(event)
    setIsEventDialogOpen(true)
  }

  return (
    <div className="flex-1 p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#0F4342]">Calendar</h1>
        <p className="text-gray-500">View and manage your schedule and appointments</p>
      </div>

      <Tabs defaultValue="month" className="w-full">
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="day">Day</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
          </TabsList>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={goToPreviousMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="text-sm font-medium">
              {monthName} {currentYear}
            </div>
            <Button variant="outline" size="sm" onClick={goToNextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
              <Plus className="mr-2 h-4 w-4" /> Add Event
            </Button>
          </div>
        </div>

        <TabsContent value="month" className="mt-2">
          <Card>
            <CardContent className="p-4">
              <div className="grid grid-cols-7 gap-1">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="p-2 text-center text-sm font-medium">
                    {day}
                  </div>
                ))}

                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`min-h-[120px] border p-1 ${day.day ? "bg-white" : "bg-gray-50"} ${
                      day.date === today.toISOString().split("T")[0] ? "border-[#0F4342] border-2" : ""
                    }`}
                  >
                    {day.day && (
                      <>
                        <div className="text-right text-sm">{day.day}</div>
                        <div className="mt-1 space-y-1">
                          {day.events &&
                            day.events.map((event) => (
                              <button
                                key={event.id}
                                onClick={() => handleEventClick(event)}
                                className={`w-full truncate rounded px-1 py-0.5 text-left text-xs ${
                                  event.type === "meeting"
                                    ? "bg-blue-100 text-blue-800"
                                    : event.type === "call"
                                      ? "bg-green-100 text-green-800"
                                      : event.type === "deadline"
                                        ? "bg-red-100 text-red-800"
                                        : event.type === "task"
                                          ? "bg-purple-100 text-purple-800"
                                          : event.type === "training"
                                            ? "bg-amber-100 text-amber-800"
                                            : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {event.title}
                              </button>
                            ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week" className="mt-2">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-medium">Week View</h3>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="day" className="mt-2">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-medium">Day View</h3>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="list" className="mt-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>All your scheduled events in list format</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dummyEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex cursor-pointer items-start rounded-lg border p-4 hover:bg-gray-50"
                    onClick={() => handleEventClick(event)}
                  >
                    <div
                      className={`mr-4 rounded-full p-2 ${
                        event.type === "meeting"
                          ? "bg-blue-100 text-blue-800"
                          : event.type === "call"
                            ? "bg-green-100 text-green-800"
                            : event.type === "deadline"
                              ? "bg-red-100 text-red-800"
                              : event.type === "task"
                                ? "bg-purple-100 text-purple-800"
                                : event.type === "training"
                                  ? "bg-amber-100 text-amber-800"
                                  : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {event.type === "meeting" ? (
                        <Users className="h-5 w-5" />
                      ) : event.type === "call" ? (
                        <Phone className="h-5 w-5" />
                      ) : event.type === "deadline" ? (
                        <Clock className="h-5 w-5" />
                      ) : event.type === "task" ? (
                        <CheckSquare className="h-5 w-5" />
                      ) : event.type === "training" ? (
                        <GraduationCap className="h-5 w-5" />
                      ) : (
                        <Calendar className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{event.title}</h4>
                      <div className="mt-1 flex flex-wrap gap-2 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-3 w-3" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Event Details Dialog */}
      <Dialog open={isEventDialogOpen} onOpenChange={setIsEventDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedEvent?.title}</DialogTitle>
            <DialogDescription>Event details</DialogDescription>
          </DialogHeader>
          {selectedEvent && (
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-[#0F4342]" />
                <span>{selectedEvent.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-[#0F4342]" />
                <span>{selectedEvent.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-[#0F4342]" />
                <span>{selectedEvent.location}</span>
              </div>
              <div className="flex items-start">
                <Users className="mr-2 h-5 w-5 text-[#0F4342]" />
                <div>
                  <div className="font-medium">Attendees:</div>
                  <div className="text-sm">{selectedEvent.attendees.join(", ")}</div>
                </div>
              </div>
              <div className="flex items-start">
                <FileText className="mr-2 h-5 w-5 text-[#0F4342]" />
                <div>
                  <div className="font-medium">Description:</div>
                  <div className="text-sm">{selectedEvent.description}</div>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Edit</Button>
                <Button className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">Add to My Calendar</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

