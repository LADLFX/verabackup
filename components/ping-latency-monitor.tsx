"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Activity, RefreshCw } from "lucide-react"

export function PingLatencyMonitor() {
  const [pingData, setPingData] = useState<number[]>([42, 38, 45, 40, 43, 41, 39])
  const [refreshing, setRefreshing] = useState(false)
  const [avgLatency, setAvgLatency] = useState(0)
  const { toast } = useToast()

  // Calculate average latency when pingData changes
  useEffect(() => {
    const total = pingData.reduce((acc, val) => acc + val, 0)
    setAvgLatency(Math.round(total / pingData.length))
  }, [pingData])

  // Simulate auto-update of ping data
  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random ping value between 35-55ms
      const newPing = Math.floor(Math.random() * 20) + 35

      // Add new ping and remove oldest to maintain array length
      setPingData((prevData) => {
        const newData = [...prevData.slice(1), newPing]
        return newData
      })
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  // Manual refresh handler
  const handleRefresh = () => {
    setRefreshing(true)

    // Generate a new random ping value
    const newPing = Math.floor(Math.random() * 20) + 35

    // Simulate a network request
    setTimeout(() => {
      setPingData((prevData) => {
        const newData = [...prevData.slice(1), newPing]
        return newData
      })

      setRefreshing(false)

      toast({
        title: "Latency updated",
        description: `Current latency: ${newPing}ms`,
      })
    }, 1000)
  }

  // Determine color based on latency value
  const getLatencyColor = (value: number) => {
    if (value < 40) return "bg-green-500"
    if (value < 50) return "bg-amber-500"
    return "bg-red-500"
  }

  const getPingStatus = () => {
    if (avgLatency < 40) return "Excellent"
    if (avgLatency < 50) return "Good"
    if (avgLatency < 60) return "Fair"
    return "Poor"
  }

  return (
    <Card>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">Ping Latency</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleRefresh}
          disabled={refreshing}
          className="h-8 w-8 p-0"
          aria-label="Refresh latency data"
        >
          <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold flex items-center gap-2">
          <span>{avgLatency} ms</span>
          <span className="text-sm font-normal text-gray-500">({getPingStatus()})</span>
        </div>
        <div className="mt-4 h-20">
          <div className="flex h-16 items-end space-x-1">
            {pingData.map((ping, i) => (
              <div
                key={i}
                className={`w-full rounded-sm ${getLatencyColor(ping)}`}
                style={{ height: `${(ping / 100) * 100}%` }}
                title={`${ping}ms`}
              ></div>
            ))}
          </div>
          <div className="mt-1 flex justify-between text-xs text-gray-500">
            <span>1 min ago</span>
            <span>Now</span>
          </div>
        </div>
        <div className="mt-3 text-xs flex items-center justify-center">
          <Activity className="h-3 w-3 mr-1 text-gray-400" />
          <span className="text-gray-500">Live monitoring active</span>
        </div>
      </CardContent>
    </Card>
  )
}

