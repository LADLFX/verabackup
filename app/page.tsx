import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-2xl font-bold text-[#0F4342]">Vera AI</div>
          <nav className="hidden space-x-6 md:flex">
            <Link href="/about" className="text-gray-600 hover:text-[#0F4342]">
              About
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-[#0F4342]">
              Features
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#0F4342]">
              Contact
            </Link>
          </nav>
          <Link href="/login">
            <Button className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">Login</Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Carousel className="w-full">
            <CarouselContent>
              {/* Slide 1: Welcome */}
              <CarouselItem>
                <Card className="p-8">
                  <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold text-[#0F4342] md:text-4xl">Welcome to Vera AI</h2>
                    <p className="text-lg text-gray-600">
                      Your AI-powered business assistant that seamlessly connects to your business systems.
                    </p>
                    <img
                      src="/placeholder.svg?height=300&width=600"
                      alt="Vera AI Welcome"
                      className="mx-auto rounded-lg"
                    />
                  </div>
                </Card>
              </CarouselItem>

              {/* Slide 2: What is this app */}
              <CarouselItem>
                <Card className="p-8">
                  <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold text-[#0F4342] md:text-4xl">What is Vera AI?</h2>
                    <p className="text-lg text-gray-600">
                      Vera is proactive software that connects seamlessly to your Microsoft suite, emails, phone system,
                      CRM, software and website. Once connected, she begins to understand how your business operates —
                      how tasks flow, where time is lost, and how you prefer to get things done.
                    </p>
                    <img
                      src="/placeholder.svg?height=300&width=600"
                      alt="Vera AI Features"
                      className="mx-auto rounded-lg"
                    />
                  </div>
                </Card>
              </CarouselItem>

              {/* Slide 3: What can I use */}
              <CarouselItem>
                <Card className="p-8">
                  <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold text-[#0F4342] md:text-4xl">What can I use Vera for?</h2>
                    <p className="text-lg text-gray-600">
                      Vera connects with your CRM, Microsoft tools, phone system, emails, and website. She learns how
                      your business works, automates admin tasks, drafts emails in your tone, summarizes calls and
                      meetings, and acts as your mobile, voice-activated assistant.
                    </p>
                    <img
                      src="/placeholder.svg?height=300&width=600"
                      alt="Vera AI Use Cases"
                      className="mx-auto rounded-lg"
                    />
                  </div>
                </Card>
              </CarouselItem>

              {/* Slide 4: Deploying services */}
              <CarouselItem>
                <Card className="p-8">
                  <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold text-[#0F4342] md:text-4xl">Deploying Services</h2>
                    <p className="text-lg text-gray-600">
                      Vera seamlessly integrates with your existing systems. Our team will help you set up and configure
                      Vera to work with your business tools, ensuring a smooth transition and maximum productivity.
                    </p>
                    <img
                      src="/placeholder.svg?height=300&width=600"
                      alt="Vera AI Deployment"
                      className="mx-auto rounded-lg"
                    />
                  </div>
                </Card>
              </CarouselItem>

              {/* Slide 5: I'm ready */}
              <CarouselItem>
                <Card className="p-8">
                  <div className="space-y-6 text-center">
                    <h2 className="text-3xl font-bold text-[#0F4342] md:text-4xl">I'm Ready to Get Started</h2>
                    <p className="text-lg text-gray-600">
                      Take the next step and transform how your business operates with Vera AI. Click the button below
                      to get started.
                    </p>
                    <Link href="/login">
                      <Button className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e] px-8 py-6 text-lg">
                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative mr-2" />
              <CarouselNext className="relative ml-2" />
            </div>
          </Carousel>

          <div className="mt-16 space-y-8">
            <h2 className="text-3xl font-bold text-[#0F4342] md:text-4xl">About Vera AI</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#0F4342]">Your AI-powered business assistant</h3>
                <p className="text-gray-600">
                  Vera is proactive software that connects seamlessly to your Microsoft suite, emails, phone system,
                  CRM, software and website. Once connected, she begins to understand how your business operates — how
                  tasks flow, where time is lost, and how you prefer to get things done.
                </p>
                <p className="text-gray-600">
                  But what sets Vera apart isn't just what she does. It's how she works with you. She adapts to your
                  rhythm. Learns your preferences. Understands how you operate. Then supports your business in the best
                  way possible — without fuss, without friction, and without ever needing a day off.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#0F4342]">Key Functions</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Connects with your CRM, Microsoft tools, phone system, emails, and website</li>
                  <li>• Learns how your business works and identifies opportunities to streamline</li>
                  <li>• Automates admin, updates records, and handles follow-ups behind the scenes</li>
                  <li>• Drafts and replies to emails in your tone and style</li>
                  <li>• Summarises calls, meetings, and actions — and logs them automatically</li>
                  <li>• Acts as your mobile, voice-activated assistant for hands-free productivity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#0F4342] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xl font-bold">Vera AI</h3>
              <p>Your AI-powered business assistant</p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Contact</h3>
              <p>Email: info@veraai.com</p>
              <p>Phone: +44 123 456 7890</p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Legal</h3>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-8 text-center">
            <p>© {new Date().getFullYear()} Vera AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

