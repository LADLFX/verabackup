"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Mic, Volume2, Paperclip, ImageIcon, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface AIChatAssistantProps {
  initialMessage?: string
}

export function AIChatAssistant({
  initialMessage = "Hello! I'm Vera, your AI assistant. How can I help you today?",
}: AIChatAssistantProps) {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string; timestamp?: string }[]>([
    { role: "assistant", content: initialMessage, timestamp: new Date().toLocaleTimeString() },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isVoiceMode, setIsVoiceMode] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  // Auto-scroll to the latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Simulates a response from the AI (with dummy data)
  const simulateAIResponse = (userMessage: string) => {
    setIsLoading(true)

    // Simulate AI "thinking" time
    setTimeout(() => {
      // Generate "smart" dummy responses based on keywords in user message
      let response = ""

      if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
        response = "Hello! How can I assist you today?"
      } else if (userMessage.toLowerCase().includes("help")) {
        response =
          "I'm here to help! You can ask me about your business data, schedule meetings, draft emails, or automate tasks. What would you like assistance with?"
      } else if (userMessage.toLowerCase().includes("meeting") || userMessage.toLowerCase().includes("schedule")) {
        response =
          "I'd be happy to help you schedule a meeting. When would you like it to take place, and who should be invited?"
      } else if (userMessage.toLowerCase().includes("email") || userMessage.toLowerCase().includes("draft")) {
        response =
          "I can help draft that email for you. Could you provide more details about what you'd like to include in the message?"
      } else if (userMessage.toLowerCase().includes("data") || userMessage.toLowerCase().includes("report")) {
        response =
          "I can analyze your business data and generate reports. What specific metrics or insights are you looking for?"
      } else if (userMessage.toLowerCase().includes("thanks") || userMessage.toLowerCase().includes("thank you")) {
        response = "You're very welcome! Is there anything else I can assist you with today?"
      } else {
        // Default responses if no keywords match
        const defaultResponses = [
          "I understand. Can you provide more details so I can help you better?",
          "Let me help you with that. What specific information do you need?",
          "I'll analyze that and get back to you with insights. Anything specific you'd like me to focus on?",
          "I can assist with that. Would you like me to provide a more detailed breakdown?",
          "I've made a note of that. Is there anything else you'd like me to help with?",
        ]
        response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: response,
          timestamp: new Date().toLocaleTimeString(),
        },
      ])
      setIsLoading(false)
    }, 1500)
  }

  const handleSendMessage = () => {
    if (input.trim() === "") return

    // Add user message
    const userMessage = {
      role: "user" as const,
      content: input.trim(),
      timestamp: new Date().toLocaleTimeString(),
    }
    setMessages((prevMessages) => [...prevMessages, userMessage])

    // Clear input
    setInput("")

    // Generate AI response
    simulateAIResponse(input)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const toggleVoiceMode = () => {
    setIsVoiceMode(!isVoiceMode)

    if (isVoiceMode) {
      toast({
        title: "Voice mode disabled",
        description: "Switching to text input mode",
      })
    } else {
      toast({
        title: "Voice mode enabled",
        description: "You can now speak to the assistant",
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
        setInput("This is a simulated voice transcription")

        // Automatically send after transcription
        setTimeout(() => {
          handleSendMessage()
        }, 500)
      }, 3000)
    } else {
      setIsRecording(false)
      toast({
        description: "Voice recording cancelled",
      })
    }
  }

  const handleFileUpload = () => {
    toast({
      title: "File upload",
      description: "File attachment functionality is coming soon",
    })
  }

  const handleImageUpload = () => {
    toast({
      title: "Image upload",
      description: "Image attachment functionality is coming soon",
    })
  }

  const handleClearConversation = () => {
    setMessages([
      {
        role: "assistant",
        content: initialMessage,
        timestamp: new Date().toLocaleTimeString(),
      },
    ])

    toast({
      title: "Conversation cleared",
      description: "All messages have been removed",
    })
  }

  const handleSaveConversation = () => {
    toast({
      title: "Conversation saved",
      description: "Your conversation has been saved successfully",
    })
  }

  return (
    <div className="flex h-[600px] flex-col rounded-lg border bg-white shadow">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === "user" ? "bg-[#0F4342] text-white" : "bg-gray-100 text-gray-800"
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium">{message.role === "user" ? "You" : "Vera AI"}</span>
                {message.timestamp && <span className="text-xs opacity-70 ml-2">{message.timestamp}</span>}
              </div>
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 text-gray-800">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"></div>
                <div
                  className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t p-4">
        <div className="flex items-center space-x-2">
          <div className="flex-1">
            {isVoiceMode ? (
              <div className="flex items-center justify-between p-2 border rounded-md">
                <Button
                  variant={isRecording ? "destructive" : "outline"}
                  onClick={handleVoiceRecord}
                  className="flex-1"
                >
                  <Mic className="h-4 w-4 mr-2" />
                  {isRecording ? "Recording... (click to stop)" : "Click to speak"}
                </Button>
                <Button variant="ghost" size="sm" onClick={toggleVoiceMode}>
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Textarea
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                className="min-h-[44px] resize-none"
              />
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={handleFileUpload} title="Attach file">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleImageUpload} title="Attach image">
              <ImageIcon className="h-4 w-4" />
            </Button>
            {!isVoiceMode && (
              <Button variant="outline" size="icon" onClick={toggleVoiceMode} title="Voice input">
                <Mic className="h-4 w-4" />
              </Button>
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" title="More options">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleClearConversation}>Clear conversation</DropdownMenuItem>
                <DropdownMenuItem onClick={handleSaveConversation}>Save conversation</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || (!isVoiceMode && input.trim() === "")}
              className="bg-[#0F4342] hover:bg-[#0a2e2d]"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

