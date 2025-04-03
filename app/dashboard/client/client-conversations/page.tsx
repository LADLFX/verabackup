"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { AIChatAssistant } from "@/components/ai-chat-assistant"
import { MessageSquare, Phone, Mail, Clock, CheckCircle, AlertCircle, Search, Filter, Plus, Send } from "lucide-react"

// Dummy data for conversations
const dummyConversations = [
  {
    id: 1,
    type: "email",
    contact: "John Smith",
    subject: "Project Update - Q3 Review",
    preview: "Hi Sarah, I wanted to follow up on our discussion about the Q3 review...",
    date: "Today, 10:30 AM",
    status: "unread",
    messages: [
      {
        sender: "John Smith",
        time: "Today, 10:30 AM",
        content:
          "Hi Sarah, I wanted to follow up on our discussion about the Q3 review. Can we schedule a meeting next week to go over the numbers? I think we need to address the decline in sales in the Northeast region.",
        isRead: false,
      },
    ],
  },
  {
    id: 2,
    type: "call",
    contact: "Michael Brown",
    subject: "Sales Strategy Call",
    preview: "30-minute call discussing Q4 sales strategy and targets",
    date: "Yesterday, 2:15 PM",
    status: "read",
    messages: [
      {
        sender: "System",
        time: "Yesterday, 2:15 PM",
        content:
          "30-minute call with Michael Brown discussing Q4 sales strategy and targets. Key points: 1) Increase focus on enterprise clients, 2) Launch new product line in November, 3) Hire two additional sales representatives.",
        isRead: true,
      },
    ],
  },
  {
    id: 3,
    type: "message",
    contact: "Emily Davis",
    subject: "Website Redesign",
    preview: "I've reviewed the mockups for the website redesign and I have some feedback...",
    date: "Oct 12, 2023",
    status: "read",
    messages: [
      {
        sender: "Emily Davis",
        time: "Oct 12, 2023, 9:45 AM",
        content:
          "I've reviewed the mockups for the website redesign and I have some feedback. Overall, I like the direction, but I think we need to make the call-to-action buttons more prominent.",
        isRead: true,
      },
      {
        sender: "You",
        time: "Oct 12, 2023, 11:30 AM",
        content:
          "Thanks for the feedback, Emily. I agree about the CTA buttons. I'll work with the design team to make them stand out more. Would you prefer a different color or just larger buttons?",
        isRead: true,
      },
      {
        sender: "Emily Davis",
        time: "Oct 12, 2023, 1:15 PM",
        content:
          "I think a combination of both would work best. Maybe try a contrasting color and increase the size by about 20%.",
        isRead: true,
      },
    ],
  },
]

// Dummy data for support tickets
const dummyTickets = [
  {
    id: 101,
    subject: "CRM Integration Issue",
    description: "Having trouble connecting our CRM system with Vera AI. The data isn't syncing properly.",
    status: "open",
    priority: "high",
    created: "Oct 14, 2023",
    updated: "Oct 15, 2023",
    assignee: "Technical Support",
    messages: [
      {
        sender: "You",
        time: "Oct 14, 2023, 3:45 PM",
        content:
          "Having trouble connecting our CRM system with Vera AI. The data isn't syncing properly. I've tried reconnecting several times but keep getting an error message.",
      },
      {
        sender: "Technical Support",
        time: "Oct 15, 2023, 9:30 AM",
        content:
          "Thank you for reporting this issue. Could you please provide the specific error message you're seeing? Also, which CRM system are you using?",
      },
    ],
  },
  {
    id: 102,
    subject: "Email Template Customization",
    description: "Need help customizing email templates to match our brand guidelines.",
    status: "in progress",
    priority: "medium",
    created: "Oct 10, 2023",
    updated: "Oct 13, 2023",
    assignee: "Customer Success",
    messages: [
      {
        sender: "You",
        time: "Oct 10, 2023, 11:20 AM",
        content:
          "Need help customizing email templates to match our brand guidelines. Specifically, we need to adjust the colors and add our logo to the header.",
      },
      {
        sender: "Customer Success",
        time: "Oct 10, 2023, 2:15 PM",
        content:
          "I'd be happy to help with this! Could you please share your brand guidelines and logo with us? Once we have those, we can make the necessary adjustments to your templates.",
      },
      {
        sender: "You",
        time: "Oct 11, 2023, 9:45 AM",
        content:
          "Thanks for the quick response. I've attached our brand guidelines and logo files. Let me know if you need anything else.",
      },
      {
        sender: "Customer Success",
        time: "Oct 13, 2023, 10:30 AM",
        content:
          "We've received your files and have started working on customizing your templates. We should have a draft ready for your review by tomorrow. Is there a specific time that works best for a quick call to go over the changes?",
      },
    ],
  },
  {
    id: 103,
    subject: "Training Request",
    description: "Would like to schedule a training session for new team members.",
    status: "closed",
    priority: "low",
    created: "Oct 5, 2023",
    updated: "Oct 9, 2023",
    assignee: "Training Team",
    messages: [
      {
        sender: "You",
        time: "Oct 5, 2023, 4:30 PM",
        content:
          "Would like to schedule a training session for new team members. We have 5 new hires who need to learn how to use Vera AI.",
      },
      {
        sender: "Training Team",
        time: "Oct 6, 2023, 10:15 AM",
        content:
          "We'd be happy to arrange a training session for your new team members. We have availability next Tuesday or Thursday afternoon. Which would work better for your team?",
      },
      {
        sender: "You",
        time: "Oct 6, 2023, 11:45 AM",
        content: "Thursday afternoon would work best for us. Is 2:00 PM available?",
      },
      {
        sender: "Training Team",
        time: "Oct 6, 2023, 1:30 PM",
        content:
          "2:00 PM on Thursday is perfect. I've scheduled the training session and will send calendar invites to your team. Please share their email addresses when convenient.",
      },
      {
        sender: "You",
        time: "Oct 6, 2023, 3:15 PM",
        content: "Great, thank you! I've just sent an email with all their contact information.",
      },
      {
        sender: "Training Team",
        time: "Oct 9, 2023, 9:00 AM",
        content:
          "The training session has been confirmed for Thursday at 2:00 PM. Calendar invites have been sent to all participants with connection details. Please let us know if you have any questions before then.",
      },
    ],
  },
]

export default function ClientConversationsPage() {
  const [selectedConversation, setSelectedConversation] = useState<any>(null)
  const [isConversationDialogOpen, setIsConversationDialogOpen] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState<any>(null)
  const [isTicketDialogOpen, setIsTicketDialogOpen] = useState(false)
  const [newTicketDialogOpen, setNewTicketDialogOpen] = useState(false)
  const [replyText, setReplyText] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const [newTicket, setNewTicket] = useState({
    subject: "",
    description: "",
    priority: "medium",
  })

  const handleConversationClick = (conversation: any) => {
    setSelectedConversation(conversation)
    setIsConversationDialogOpen(true)
  }

  const handleTicketClick = (ticket: any) => {
    setSelectedTicket(ticket)
    setIsTicketDialogOpen(true)
    setReplyText("")
  }

  const handleSendReply = () => {
    if (!replyText.trim()) return

    if (selectedTicket) {
      // In a real app, this would send the reply to the backend
      // For now, we'll just update the local state
      const updatedTicket = {
        ...selectedTicket,
        messages: [
          ...selectedTicket.messages,
          {
            sender: "You",
            time: new Date().toLocaleString(),
            content: replyText,
          },
        ],
        status: selectedTicket.status === "closed" ? "reopened" : selectedTicket.status,
      }

      setSelectedTicket(updatedTicket)
      setReplyText("")

      // Simulate response from support after 2 seconds
      setTimeout(() => {
        const updatedTicketWithResponse = {
          ...updatedTicket,
          messages: [
            ...updatedTicket.messages,
            {
              sender: updatedTicket.assignee,
              time: new Date().toLocaleString(),
              content:
                "Thank you for your message. A support representative will review your update and respond shortly.",
            },
          ],
        }

        setSelectedTicket(updatedTicketWithResponse)
      }, 2000)
    }
  }

  const handleCreateTicket = () => {
    if (!newTicket.subject.trim() || !newTicket.description.trim()) return

    // In a real app, this would send the new ticket to the backend
    // For now, we'll just close the dialog
    setNewTicketDialogOpen(false)

    // Reset form
    setNewTicket({
      subject: "",
      description: "",
      priority: "medium",
    })

    // Show success message or redirect to the new ticket
    alert("Support ticket created successfully! A representative will respond shortly.")
  }

  const filteredConversations = dummyConversations.filter(
    (conv) =>
      conv.contact.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.preview.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredTickets = dummyTickets.filter(
    (ticket) =>
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex flex-1 flex-col">
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#0F4342]">Client Conversations</h1>
            <p className="text-gray-500">Manage your communications and support tickets</p>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full sm:w-auto flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search conversations and tickets..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button
              className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]"
              onClick={() => setNewTicketDialogOpen(true)}
            >
              <Plus className="mr-2 h-4 w-4" /> New Support Ticket
            </Button>
          </div>

          <Tabs defaultValue="conversations" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="conversations">Conversations</TabsTrigger>
              <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
            </TabsList>

            <TabsContent value="conversations" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Conversations</CardTitle>
                  <CardDescription>Your recent emails, calls, and messages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredConversations.length > 0 ? (
                      filteredConversations.map((conversation) => (
                        <div
                          key={conversation.id}
                          className={`flex cursor-pointer items-start rounded-lg border p-4 hover:bg-gray-50 ${
                            conversation.status === "unread" ? "border-[#0F4342] bg-gray-50" : ""
                          }`}
                          onClick={() => handleConversationClick(conversation)}
                        >
                          <div
                            className={`mr-4 rounded-full p-2 ${
                              conversation.type === "email"
                                ? "bg-blue-100 text-blue-800"
                                : conversation.type === "call"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {conversation.type === "email" ? (
                              <Mail className="h-5 w-5" />
                            ) : conversation.type === "call" ? (
                              <Phone className="h-5 w-5" />
                            ) : (
                              <MessageSquare className="h-5 w-5" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className={`font-medium ${conversation.status === "unread" ? "text-[#0F4342]" : ""}`}>
                                {conversation.subject}
                              </h4>
                              <span className="text-xs text-gray-500">{conversation.date}</span>
                            </div>
                            <div className="mt-1 text-sm text-gray-600">{conversation.contact}</div>
                            <div className="mt-1 text-sm text-gray-500 line-clamp-1">{conversation.preview}</div>
                            {conversation.status === "unread" && <Badge className="mt-2 bg-[#0F4342]">Unread</Badge>}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500">No conversations found matching your search.</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tickets" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Support Tickets</CardTitle>
                  <CardDescription>Track and manage your support requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredTickets.length > 0 ? (
                      filteredTickets.map((ticket) => (
                        <div
                          key={ticket.id}
                          className="flex cursor-pointer items-start rounded-lg border p-4 hover:bg-gray-50"
                          onClick={() => handleTicketClick(ticket)}
                        >
                          <div
                            className={`mr-4 rounded-full p-2 ${
                              ticket.status === "open"
                                ? "bg-amber-100 text-amber-800"
                                : ticket.status === "in progress"
                                  ? "bg-blue-100 text-blue-800"
                                  : ticket.status === "closed"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {ticket.status === "open" ? (
                              <AlertCircle className="h-5 w-5" />
                            ) : ticket.status === "in progress" ? (
                              <Clock className="h-5 w-5" />
                            ) : (
                              <CheckCircle className="h-5 w-5" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{ticket.subject}</h4>
                              <span className="text-xs text-gray-500">Updated: {ticket.updated}</span>
                            </div>
                            <div className="mt-1 text-sm text-gray-500 line-clamp-1">{ticket.description}</div>
                            <div className="mt-2 flex items-center gap-2">
                              <Badge
                                className={`${
                                  ticket.status === "open"
                                    ? "bg-amber-500"
                                    : ticket.status === "in progress"
                                      ? "bg-blue-500"
                                      : ticket.status === "closed"
                                        ? "bg-green-500"
                                        : "bg-purple-500"
                                }`}
                              >
                                {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Priority: {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500">No tickets found matching your search.</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold text-[#0F4342]">Vera Assistant</h2>
            <p className="mb-4 text-gray-500">Need help? Ask Vera before creating a support ticket.</p>
            <AIChatAssistant initialMessage="Hello! I'm Vera, your AI business assistant. How can I help you with your communications or support needs today?" />
          </div>

          {/* Conversation Dialog */}
          <Dialog open={isConversationDialogOpen} onOpenChange={setIsConversationDialogOpen}>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>{selectedConversation?.subject}</DialogTitle>
                <DialogDescription>
                  {selectedConversation?.type.charAt(0).toUpperCase() + selectedConversation?.type.slice(1)} with{" "}
                  {selectedConversation?.contact}
                </DialogDescription>
              </DialogHeader>
              {selectedConversation && (
                <div className="max-h-[60vh] overflow-y-auto space-y-4">
                  {selectedConversation.messages.map((message: any, index: number) => (
                    <div key={index} className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg p-4 ${
                          message.sender === "You" ? "bg-[#0F4342] text-white" : "bg-gray-100"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-medium">{message.sender}</div>
                          <div className="text-xs opacity-70">{message.time}</div>
                        </div>
                        <div className="whitespace-pre-wrap">{message.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsConversationDialogOpen(false)}>
                  Close
                </Button>
                {selectedConversation?.type !== "call" && (
                  <Button className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">Reply</Button>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Ticket Dialog */}
          <Dialog open={isTicketDialogOpen} onOpenChange={setIsTicketDialogOpen}>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>{selectedTicket?.subject}</DialogTitle>
                <DialogDescription>
                  Support ticket #{selectedTicket?.id} •{" "}
                  {selectedTicket?.status.charAt(0).toUpperCase() + selectedTicket?.status.slice(1)}
                </DialogDescription>
              </DialogHeader>
              {selectedTicket && (
                <>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium">Created</div>
                      <div>{selectedTicket.created}</div>
                    </div>
                    <div>
                      <div className="font-medium">Last Updated</div>
                      <div>{selectedTicket.updated}</div>
                    </div>
                    <div>
                      <div className="font-medium">Priority</div>
                      <div>{selectedTicket.priority.charAt(0).toUpperCase() + selectedTicket.priority.slice(1)}</div>
                    </div>
                    <div>
                      <div className="font-medium">Assigned To</div>
                      <div>{selectedTicket.assignee}</div>
                    </div>
                  </div>

                  <div className="max-h-[40vh] overflow-y-auto space-y-4 border rounded-md p-4">
                    {selectedTicket.messages.map((message: any, index: number) => (
                      <div key={index} className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[80%] rounded-lg p-4 ${
                            message.sender === "You" ? "bg-[#0F4342] text-white" : "bg-gray-100"
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-medium">{message.sender}</div>
                            <div className="text-xs opacity-70">{message.time}</div>
                          </div>
                          <div className="whitespace-pre-wrap">{message.content}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedTicket.status !== "closed" && (
                    <div className="space-y-2">
                      <div className="font-medium">Reply to this ticket</div>
                      <Textarea
                        placeholder="Type your reply here..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        rows={3}
                      />
                      <div className="flex justify-end">
                        <Button
                          className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]"
                          onClick={handleSendReply}
                          disabled={!replyText.trim()}
                        >
                          <Send className="mr-2 h-4 w-4" /> Send Reply
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              )}
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsTicketDialogOpen(false)}>
                  Close
                </Button>
                {selectedTicket?.status === "closed" && (
                  <Button
                    className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]"
                    onClick={() => {
                      setReplyText("I'd like to reopen this ticket because...")
                    }}
                  >
                    Reopen Ticket
                  </Button>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* New Ticket Dialog */}
          <Dialog open={newTicketDialogOpen} onOpenChange={setNewTicketDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Support Ticket</DialogTitle>
                <DialogDescription>Submit a new support request to our team</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Brief description of the issue"
                    value={newTicket.subject}
                    onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Please provide details about your issue..."
                    rows={5}
                    value={newTicket.description}
                    onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="priority" className="text-sm font-medium">
                    Priority
                  </label>
                  <select
                    id="priority"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    value={newTicket.priority}
                    onChange={(e) => setNewTicket({ ...newTicket, priority: e.target.value })}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setNewTicketDialogOpen(false)}>
                  Cancel
                </Button>
                <Button
                  className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]"
                  onClick={handleCreateTicket}
                  disabled={!newTicket.subject.trim() || !newTicket.description.trim()}
                >
                  Submit Ticket
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </main>
      </div>
    </div>
  )
}

