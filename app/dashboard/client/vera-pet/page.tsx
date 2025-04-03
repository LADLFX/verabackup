"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Heart,
  Star,
  Trophy,
  Calendar,
  Zap,
  Sparkles,
  Clock,
  Coffee,
  Pizza,
  Apple,
  Gamepad2,
  BookOpen,
  MessageSquare,
  BarChart2,
  Smile,
  Frown,
  Meh,
  Lock,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function VeraPetPage() {
  // Pet state - starting at level 1 with no progress
  const [happiness, setHappiness] = useState(50)
  const [energy, setEnergy] = useState(50)
  const [knowledge, setKnowledge] = useState(30)
  const [points, setPoints] = useState(0)
  const [level, setLevel] = useState(1)
  const [streak, setStreak] = useState(1)
  const [lastInteraction, setLastInteraction] = useState("Just now")
  const [mood, setMood] = useState<"happy" | "neutral" | "sad">("neutral")
  const [isAnimating, setIsAnimating] = useState(false)
  const [showReward, setShowReward] = useState(false)
  const [dailyTasksCompleted, setDailyTasksCompleted] = useState(0)

  // Achievements and rewards - all not completed for new users
  const achievements = [
    {
      name: "First Login",
      description: "Logged in for the first time",
      icon: Star,
      completed: false,
      progress: 1,
    },
    {
      name: "5-Day Streak",
      description: "Used VERA for 5 consecutive days",
      icon: Calendar,
      completed: false,
      progress: 1,
    },
    {
      name: "Data Explorer",
      description: "Viewed 10 different analytics reports",
      icon: BarChart2,
      completed: false,
      progress: 0,
    },
    {
      name: "Conversation Master",
      description: "Had 20 conversations with VERA Assistant",
      icon: MessageSquare,
      completed: false,
      progress: 0,
    },
    {
      name: "Business Guru",
      description: "Reached level 10 with your VERA pet",
      icon: Trophy,
      completed: false,
      progress: 1,
    },
  ]

  const [dailyTasks, setDailyTasks] = useState([
    { name: "Check business analytics", points: 50, completed: false },
    { name: "Respond to new reviews", points: 75, completed: false },
    { name: "Chat with VERA Assistant", points: 100, completed: false },
    { name: "Update business information", points: 50, completed: false },
    { name: "Schedule social media post", points: 75, completed: false },
  ])

  const rewards = [
    {
      name: "Advanced Analytics",
      description: "Unlock detailed business performance metrics",
      level: 5,
      icon: BarChart2,
      unlocked: false,
    },
    {
      name: "Custom Reports",
      description: "Create and save custom business reports",
      level: 7,
      icon: BookOpen,
      unlocked: false,
    },
    {
      name: "Competitor Analysis",
      description: "See how you compare to similar businesses",
      level: 10,
      icon: Trophy,
      unlocked: false,
    },
    {
      name: "AI Strategy Recommendations",
      description: "Get personalized business strategy advice",
      level: 15,
      icon: Sparkles,
      unlocked: false,
    },
  ]

  // Update mood based on happiness
  useEffect(() => {
    if (happiness > 70) setMood("happy")
    else if (happiness > 40) setMood("neutral")
    else setMood("sad")
  }, [happiness])

  // Interaction handlers
  const feedVera = (food: string) => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
      if (food === "coffee") {
        setEnergy((prev) => Math.min(prev + 20, 100))
        setPoints((prev) => prev + 25)
      } else if (food === "pizza") {
        setHappiness((prev) => Math.min(prev + 15, 100))
        setEnergy((prev) => Math.min(prev + 10, 100))
        setPoints((prev) => prev + 35)
      } else if (food === "apple") {
        setKnowledge((prev) => Math.min(prev + 15, 100))
        setEnergy((prev) => Math.min(prev + 5, 100))
        setPoints((prev) => prev + 30)
      }

      // Random chance to show reward
      if (Math.random() > 0.7) {
        setShowReward(true)
        setTimeout(() => setShowReward(false), 3000)
      }
    }, 1000)
  }

  const playWithVera = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
      setHappiness((prev) => Math.min(prev + 25, 100))
      setEnergy((prev) => Math.max(prev - 15, 0))
      setPoints((prev) => prev + 50)
    }, 1000)
  }

  const teachVera = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
      setKnowledge((prev) => Math.min(prev + 30, 100))
      setEnergy((prev) => Math.max(prev - 20, 0))
      setPoints((prev) => prev + 75)
    }, 1000)
  }

  const completeTask = (index: number) => {
    // Create a new array with the updated task
    const updatedTasks = [...dailyTasks]

    // Only proceed if the task isn't already completed
    if (!updatedTasks[index].completed) {
      // Mark the task as completed
      updatedTasks[index].completed = true

      // Update the dailyTasks state with the new array
      setDailyTasks(updatedTasks)

      // Increment the completed tasks counter
      setDailyTasksCompleted((prev) => prev + 1)

      // Award points for completing the task
      setPoints((prev) => prev + updatedTasks[index].points)

      // Update VERA's stats
      setHappiness((prev) => Math.min(prev + 10, 100))
      setKnowledge((prev) => Math.min(prev + 5, 100))
    }
  }

  // Calculate progress to next level
  const nextLevelPoints = (level + 1) * 500
  const currentLevelPoints = level * 500
  const progressToNextLevel = ((points - currentLevelPoints) / (nextLevelPoints - currentLevelPoints)) * 100

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="w-full md:w-2/3 space-y-6">
          {/* VERA Pet Card */}
          <Card className="border-2 border-[#0F4342]/20">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-2xl text-[#0F4342]">My VERA</CardTitle>
                  <CardDescription>
                    Last interaction: {lastInteraction} • Daily streak: {streak} day
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-[#0F4342] text-white font-semibold">
                    Level {level}
                  </Badge>
                  <Badge variant="outline" className="bg-amber-500 text-white font-semibold flex items-center gap-1">
                    <Star className="h-3 w-3" /> {points} pts
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-col items-center justify-center relative">
                {/* VERA Pet Avatar */}
                <div className="relative mb-6">
                  <AnimatePresence>
                    {showReward && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: -50 }}
                        exit={{ opacity: 0, y: -80 }}
                        className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-amber-500 font-bold text-lg flex items-center"
                      >
                        <Sparkles className="mr-1" /> +100 bonus points!
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    className="relative h-48 w-48 flex items-center justify-center"
                    animate={isAnimating ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/images/vera-penguin.png"
                      alt="VERA Pet"
                      width={180}
                      height={180}
                      className="object-contain"
                      priority
                    />

                    {/* Mood indicator */}
                    <div className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-md border-2 border-[#0F4342]/20">
                      {mood === "happy" && <Smile className="h-8 w-8 text-green-500" />}
                      {mood === "neutral" && <Meh className="h-8 w-8 text-amber-500" />}
                      {mood === "sad" && <Frown className="h-8 w-8 text-red-500" />}
                    </div>
                  </motion.div>
                </div>

                {/* VERA Stats */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium flex items-center">
                        <Heart className="h-4 w-4 text-red-500 mr-1" /> Happiness
                      </span>
                      <span className="text-sm">{happiness}%</span>
                    </div>
                    <Progress value={happiness} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium flex items-center">
                        <Zap className="h-4 w-4 text-amber-500 mr-1" /> Energy
                      </span>
                      <span className="text-sm">{energy}%</span>
                    </div>
                    <Progress value={energy} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium flex items-center">
                        <BookOpen className="h-4 w-4 text-blue-500 mr-1" /> Knowledge
                      </span>
                      <span className="text-sm">{knowledge}%</span>
                    </div>
                    <Progress value={knowledge} className="h-2" />
                  </div>
                </div>

                {/* Level Progress */}
                <div className="w-full space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Progress to Level {level + 1}</span>
                    <span className="text-sm">
                      {points}/{nextLevelPoints} points
                    </span>
                  </div>
                  <Progress value={progressToNextLevel} className="h-3" />
                </div>

                {/* Interaction Buttons */}
                <div className="flex flex-wrap justify-center gap-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          className="rounded-full h-12 w-12 p-0 border-2 hover:bg-amber-100 hover:border-amber-500"
                          onClick={() => feedVera("coffee")}
                        >
                          <Coffee className="h-6 w-6 text-amber-700" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Give coffee (+20 Energy)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          className="rounded-full h-12 w-12 p-0 border-2 hover:bg-red-100 hover:border-red-500"
                          onClick={() => feedVera("pizza")}
                        >
                          <Pizza className="h-6 w-6 text-red-700" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Give pizza (+15 Happiness, +10 Energy)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          className="rounded-full h-12 w-12 p-0 border-2 hover:bg-green-100 hover:border-green-500"
                          onClick={() => feedVera("apple")}
                        >
                          <Apple className="h-6 w-6 text-green-700" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Give apple (+15 Knowledge, +5 Energy)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          className="rounded-full h-12 w-12 p-0 border-2 hover:bg-purple-100 hover:border-purple-500"
                          onClick={playWithVera}
                        >
                          <Gamepad2 className="h-6 w-6 text-purple-700" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Play with My VERA (+25 Happiness, -15 Energy)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          className="rounded-full h-12 w-12 p-0 border-2 hover:bg-blue-100 hover:border-blue-500"
                          onClick={teachVera}
                        >
                          <BookOpen className="h-6 w-6 text-blue-700" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Teach My VERA (+30 Knowledge, -20 Energy)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <p className="text-sm text-muted-foreground italic text-center w-full">
                Interact with My VERA daily to earn points and unlock advanced business insights!
              </p>
            </CardFooter>
          </Card>

          {/* Daily Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" /> Daily Tasks
                <Badge className="ml-2">
                  {dailyTasksCompleted}/{dailyTasks.length} Completed
                </Badge>
              </CardTitle>
              <CardDescription>Complete these tasks to earn points and keep My VERA happy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dailyTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center">
                      <div
                        className={`h-6 w-6 rounded-full mr-3 flex items-center justify-center ${task.completed ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}
                      >
                        {task.completed ? "✓" : index + 1}
                      </div>
                      <span className={task.completed ? "line-through text-muted-foreground" : ""}>{task.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
                        +{task.points} pts
                      </Badge>
                      {!task.completed && (
                        <Button size="sm" onClick={() => completeTask(index)}>
                          Complete
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-1/3 space-y-6">
          {/* Achievements and Rewards */}
          <Tabs defaultValue="achievements" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
            </TabsList>

            <TabsContent value="achievements" className="border rounded-lg mt-2 p-4 space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${achievement.completed ? "bg-green-100" : "bg-gray-100"}`}
                  >
                    <achievement.icon
                      className={`h-5 w-5 ${achievement.completed ? "text-green-600" : "text-gray-400"}`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{achievement.name}</h4>
                      {achievement.completed && (
                        <Badge variant="outline" className="text-xs bg-green-100 text-green-800 border-green-200">
                          Completed
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    {!achievement.completed && achievement.progress !== undefined && (
                      <div className="mt-2 space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Progress</span>
                          <span>
                            {achievement.progress}/
                            {achievement.name === "5-Day Streak"
                              ? "5"
                              : achievement.name === "Data Explorer"
                                ? "10"
                                : achievement.name === "Conversation Master"
                                  ? "20"
                                  : achievement.name === "Business Guru"
                                    ? "10"
                                    : "1"}
                          </span>
                        </div>
                        <Progress
                          value={
                            (achievement.progress /
                              (achievement.name === "5-Day Streak"
                                ? 5
                                : achievement.name === "Data Explorer"
                                  ? 10
                                  : achievement.name === "Conversation Master"
                                    ? 20
                                    : achievement.name === "Business Guru"
                                      ? 10
                                      : 1)) *
                            100
                          }
                          className="h-1"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="rewards" className="border rounded-lg mt-2 p-4 space-y-4">
              {rewards.map((reward, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${reward.unlocked ? "bg-purple-100" : "bg-gray-100"}`}
                  >
                    <reward.icon className={`h-5 w-5 ${reward.unlocked ? "text-purple-600" : "text-gray-400"}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{reward.name}</h4>
                      <Badge
                        variant="outline"
                        className={`text-xs ${reward.unlocked ? "bg-purple-100 text-purple-800 border-purple-200" : "bg-amber-100 text-amber-800 border-amber-200"}`}
                      >
                        {reward.unlocked ? "Unlocked" : `Level ${reward.level}`}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{reward.description}</p>
                    {!reward.unlocked && (
                      <div className="mt-2">
                        <Button variant="outline" size="sm" className="w-full" disabled>
                          <Lock className="h-3 w-3 mr-1" /> Reach Level {reward.level} to Unlock
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div className="text-center pt-2">
                <p className="text-sm text-muted-foreground">Keep interacting with VERA to unlock more rewards!</p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Tips Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-500" /> VERA Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <p>• Interact with My VERA at least once daily to maintain your streak</p>
                <p>• Complete all daily tasks to earn bonus points</p>
                <p>• Balance My VERA's happiness, energy, and knowledge for optimal performance</p>
                <p>• Unlock advanced business insights by reaching higher levels</p>
                <p>• Share your achievements with your team to encourage engagement</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Business Insights and Automations Information */}
      <div className="w-full mt-8">
        <Card className="border-2 border-[#0F4342]/20">
          <CardHeader>
            <CardTitle className="text-xl text-[#0F4342] flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-500" /> Business Insights & Automations
            </CardTitle>
            <CardDescription>Current insights and automations powered by My VERA</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Business Insights Section */}
              <div>
                <h3 className="font-medium text-[#0F4342] mb-4 flex items-center">
                  <BarChart2 className="h-5 w-5 mr-2 text-blue-600" /> Current Business Insights
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Client Activity</h4>
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        +15%
                      </Badge>
                    </div>
                    <div className="h-10 bg-slate-100 rounded-md relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-4/5 bg-gradient-to-r from-blue-500 to-blue-300"></div>
                      <div className="absolute top-0 left-0 h-full w-full flex items-center justify-end pr-2">
                        <span className="text-xs font-medium">87 interactions</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Active clients increased by 15% this week</p>
                  </div>

                  <div className="p-4 rounded-lg border">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Customer Engagement</h4>
                      <Badge variant="outline" className="bg-amber-100 text-amber-800">
                        Stable
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      <div className="text-center p-2 bg-slate-50 rounded">
                        <div className="text-sm font-medium">42</div>
                        <div className="text-xs text-muted-foreground">Reviews</div>
                      </div>
                      <div className="text-center p-2 bg-slate-50 rounded">
                        <div className="text-sm font-medium">156</div>
                        <div className="text-xs text-muted-foreground">Visits</div>
                      </div>
                      <div className="text-center p-2 bg-slate-50 rounded">
                        <div className="text-sm font-medium">18</div>
                        <div className="text-xs text-muted-foreground">Inquiries</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">Engagement metrics from the last 7 days</p>
                  </div>

                  <div className="p-4 rounded-lg border">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Top Performing Service</h4>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">
                        Premium
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-[#0F4342]/10 flex items-center justify-center">
                        <Star className="h-4 w-4 text-[#0F4342]" />
                      </div>
                      <div>
                        <div className="font-medium">Business Consultation</div>
                        <div className="text-xs text-muted-foreground">32 bookings this month</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-sm text-center text-muted-foreground">
                  <Lock className="h-3 w-3 inline mr-1" /> Reach level {level + 2} to unlock 3 more insights
                </div>
              </div>

              {/* Current Automations Section */}
              <div>
                <h3 className="font-medium text-[#0F4342] mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-purple-600" /> Active Automations
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-green-600" />
                        </div>
                        <h4 className="font-medium">Review Response</h4>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <p className="text-sm mt-2">Automatically generates response drafts for new Google reviews</p>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Last run: Today at 9:45 AM • 3 reviews processed
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Calendar className="h-4 w-4 text-blue-600" />
                        </div>
                        <h4 className="font-medium">Appointment Reminder</h4>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <p className="text-sm mt-2">Sends reminder emails 24 hours before scheduled appointments</p>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Next run: Tomorrow at 8:00 AM • 5 reminders queued
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                          <BarChart2 className="h-4 w-4 text-amber-600" />
                        </div>
                        <h4 className="font-medium">Weekly Report</h4>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <p className="text-sm mt-2">Generates and emails performance reports every Monday</p>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Next run: Monday at 7:00 AM • 4 days from now
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-sm text-center text-muted-foreground">
                  <Lock className="h-3 w-3 inline mr-1" /> Reach level {level + 3} to unlock 2 more automations
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#0F4342]/5 rounded-lg border border-[#0F4342]/10">
              <p className="text-center font-medium text-[#0F4342]">
                The more well-fed with data My VERA is, the more she can level up and help you with advanced business
                insights and automations!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

