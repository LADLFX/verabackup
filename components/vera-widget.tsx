"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Maximize2, Minimize2, Send, Star, MessageSquare, Egg, Mic, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"

interface VeraWidgetProps {
  initialPoints?: number
  initialLevel?: number
}

export function VeraWidget({ initialPoints = 0, initialLevel = 1 }: VeraWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeTab, setActiveTab] = useState<"pet" | "chat">("pet")
  const [message, setMessage] = useState("")
  const [chatMessages, setChatMessages] = useState<{ sender: "user" | "vera"; text: string }[]>([
    { sender: "vera", text: "Hi there! How can I help you today?" },
  ])
  const [points, setPoints] = useState(initialPoints)
  const [level, setLevel] = useState(initialLevel)
  const [isVoiceMode, setIsVoiceMode] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  // Calculate progress to next level
  const nextLevelPoints = (level + 1) * 500
  const currentLevelPoints = level * 500
  const progressToNextLevel = ((points - currentLevelPoints) / (nextLevelPoints - currentLevelPoints)) * 100

  // Scroll to bottom of chat when new messages are added
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [chatMessages])

  const handleSendMessage = () => {
    if (message.trim() === "") return

    // Add user message
    setChatMessages((prev) => [...prev, { sender: "user", text: message }])

    // Clear input
    setMessage("")

    // Simulate VERA response after a short delay
    setTimeout(() => {
      const responses = [
        "I can help you with that! Would you like me to schedule it for you?",
        "Let me check that information for you.",
        "I've made a note of that. Is there anything else you need?",
        "I'll analyze that data and get back to you shortly.",
        "That's a great question! Here's what I found...",
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setChatMessages((prev) => [...prev, { sender: "vera", text: randomResponse }])

      // Add points for interacting with VERA
      setPoints((prev) => prev + 5)

      toast({
        title: "Points earned!",
        description: "You earned 5 points for chatting with VERA",
      })
    }, 1000)
  }

  const handleVoiceToggle = () => {
    setIsVoiceMode(!isVoiceMode)

    if (isVoiceMode) {
      toast({
        title: "Voice mode disabled",
        description: "Switching to text input mode",
      })
    } else {
      toast({
        title: "Voice mode enabled",
        description: "You can now speak to VERA",
      })
    }
  }

  const handleVoiceRecord = () => {
    if (!isRecording) {
      setIsRecording(true)
      toast({
        title: "Listening...",
        description: "Speak now to send a message",
      })

      // Simulate recording for 3 seconds
      setTimeout(() => {
        setIsRecording(false)
        setMessage("This is a simulated voice transcription")
        handleSendMessage()
      }, 3000)
    } else {
      setIsRecording(false)
      toast({
        description: "Voice recording cancelled",
      })
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* Widget Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full h-12 w-12 bg-[#0F4342] hover:bg-[#0F4342]/90 shadow-lg"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Image src="/images/vera-penguin.png" alt="VERA" width={30} height={30} className="object-contain" />
        )}
      </Button>

      {/* Widget Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className={cn(
              "mt-2 rounded-lg border bg-white shadow-lg overflow-hidden flex flex-col",
              isExpanded ? "w-80 h-[500px]" : "w-72 h-[350px]",
            )}
          >
            {/* Widget Header */}
            <div className="bg-[#0F4342] text-white p-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src="/images/vera-penguin.png" alt="VERA" width={24} height={24} className="object-contain" />
                <span className="font-medium">VERA</span>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-white hover:bg-[#0F4342]/50"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-white hover:bg-[#0F4342]/50"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Widget Tabs */}
            <div className="flex border-b">
              <button
                className={cn(
                  "flex-1 py-2 text-sm font-medium",
                  activeTab === "pet"
                    ? "border-b-2 border-[#0F4342] text-[#0F4342]"
                    : "text-gray-500 hover:text-gray-700",
                )}
                onClick={() => setActiveTab("pet")}
              >
                <div className="flex items-center justify-center gap-1">
                  <Egg className="h-4 w-4" />
                  <span>My VERA</span>
                </div>
              </button>
              <button
                className={cn(
                  "flex-1 py-2 text-sm font-medium",
                  activeTab === "chat"
                    ? "border-b-2 border-[#0F4342] text-[#0F4342]"
                    : "text-gray-500 hover:text-gray-700",
                )}
                onClick={() => setActiveTab("chat")}
              >
                <div className="flex items-center justify-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>Chat</span>
                </div>
              </button>
            </div>

            {/* Widget Content */}
            <div className="flex-1 overflow-auto">
              {activeTab === "pet" ? (
                <div className="p-3 space-y-4">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/images/vera-penguin.png"
                      alt="My VERA"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Badge variant="outline" className="bg-[#0F4342] text-white font-semibold">
                        Level {level}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-amber-500 text-white font-semibold flex items-center gap-1"
                      >
                        <Star className="h-3 w-3" /> {points} pts
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">
                      {nextLevelPoints - points} points until Level {level + 1}
                    </p>
                    <Progress value={progressToNextLevel} className="h-2 mb-4" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Daily Tasks</h4>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center">
                          <div className="h-4 w-4 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mr-1 text-[10px]">
                            1
                          </div>
                          Check business analytics
                        </span>
                        <Badge variant="outline" className="text-[10px] bg-amber-100 text-amber-800 border-amber-200">
                          +50
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center">
                          <div className="h-4 w-4 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mr-1 text-[10px]">
                            2
                          </div>
                          Chat with VERA Assistant
                        </span>
                        <Badge variant="outline" className="text-[10px] bg-amber-100 text-amber-800 border-amber-200">
                          +100
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/dashboard/client/vera-pet"
                    className="block w-full text-center text-sm text-[#0F4342] hover:underline"
                  >
                    View full My VERA page →
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  <div className="flex-1 p-3 overflow-y-auto">
                    {chatMessages.map((msg, index) => (
                      <div
                        key={index}
                        className={cn(
                          "mb-2 max-w-[80%] rounded-lg p-2 text-sm",
                          msg.sender === "user" ? "ml-auto bg-[#0F4342] text-white" : "bg-gray-100 text-gray-800",
                        )}
                      >
                        {msg.text}
                      </div>
                    ))}
                    <div ref={chatEndRef} />
                  </div>
                  <div className="p-2 border-t">
                    {isVoiceMode ? (
                      <div className="flex justify-between items-center mb-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className={isRecording ? "bg-red-50 text-red-500 border-red-200" : ""}
                          onClick={handleVoiceRecord}
                        >
                          <Mic className="h-4 w-4 mr-2" />
                          {isRecording ? "Recording..." : "Speak"}
                        </Button>
                        <Button size="sm" variant="ghost" onClick={handleVoiceToggle}>
                          <Volume2 className="h-4 w-4 mr-1" /> Switch to text
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleSendMessage()
                          }}
                          placeholder="Type a message..."
                          className="flex-1 rounded-md border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[#0F4342]"
                        />
                        <Button size="sm" className="bg-[#0F4342] hover:bg-[#0F4342]/90" onClick={handleSendMessage}>
                          <Send className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" onClick={handleVoiceToggle}>
                          <Mic className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                    <div className="mt-1 text-center">
                      <Link href="/dashboard/client/vera-assistant" className="text-xs text-[#0F4342] hover:underline">
                        Open full assistant →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

