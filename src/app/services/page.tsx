import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Camera, Video, Zap, BarChart3, Handshake, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import NavigationHeader from "@/components/ui/navigation-header"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-stone-900 dark:to-amber-950">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-6">
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Brand Solutions
              </span>
            </h1>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              From creative storytelling to strategic marketing, our two specialized wings deliver end-to-end brand
              experiences that resonate with your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Creative Wing Services */}
      <section className="py-20 bg-white dark:bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Creative Wing Services
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              Storytelling quality, tech integration, and project execution at the highest level.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Digital Media Branch */}
            <Card className="border-amber-200 dark:border-amber-800">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center">
                    <Video className="h-5 w-5 text-amber-700 dark:text-amber-400" />
                  </div>
                  <CardTitle className="text-stone-900 dark:text-stone-100">Digital Media Branch</CardTitle>
                </div>
                <p className="text-stone-600 dark:text-stone-400">Content creation & production excellence</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Wedding Cinematography</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Emotion-driven films using our Authenticity Algorithm™
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">SME Brand Videos</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      "Brand Hero" videos that tell your business story
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Documentary Projects</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Long-form storytelling with cultural authenticity
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
                      AI-Powered Post-Production
                    </h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      30% faster editing without compromising quality
                    </p>
                  </div>
                </div>
                <Link href="/booking?service=digital-media">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800">Book Digital Media Service</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Creative Tech Branch */}
            <Card className="border-orange-200 dark:border-orange-800">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-orange-700 dark:text-orange-400" />
                  </div>
                  <CardTitle className="text-stone-900 dark:text-stone-100">Creative Tech Branch</CardTitle>
                </div>
                <p className="text-stone-600 dark:text-stone-400">Technology-driven storytelling innovation</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Interactive QR Content</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      QR-linked videos for restaurants and retail
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">AI Editing Pipelines</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Automated workflows using Runway ML and more
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">VR/AR Storytelling</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Immersive narratives for premium experiences
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Tech Prototypes</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Custom solutions for unique brand challenges
                    </p>
                  </div>
                </div>
                <Link href="/booking?service=creative-tech">
                  <Button className="w-full bg-orange-700 hover:bg-orange-800">Book Creative Tech Service</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Marketing Wing Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Marketing Wing Services
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              Client acquisition, brand visibility, and revenue growth through strategic marketing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Strategy Branch */}
            <Card className="border-orange-200 dark:border-orange-800">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-orange-700 dark:text-orange-400" />
                  </div>
                  <CardTitle className="text-stone-900 dark:text-stone-100">Strategy Branch</CardTitle>
                </div>
                <p className="text-stone-600 dark:text-stone-400">Data-driven marketing and partnerships</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Market Analysis</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Research trends like 22% digital content growth in Kenya
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Partnership Development</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Strategic collaborations with wedding planners and SME hubs
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Brand Positioning</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Position your brand as "Africa's Authentic Storyteller"
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Competitive Analysis</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Deep market insights and positioning strategies
                    </p>
                  </div>
                </div>
                <Link href="/booking?service=strategy">
                  <Button className="w-full bg-orange-700 hover:bg-orange-800">Book Strategy Consultation</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Consultation Branch */}
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                    <Handshake className="h-5 w-5 text-red-700 dark:text-red-400" />
                  </div>
                  <CardTitle className="text-stone-900 dark:text-stone-100">Consultation Branch</CardTitle>
                </div>
                <p className="text-stone-600 dark:text-stone-400">Client onboarding and retention excellence</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Client Success Management</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Pre-shoot consultations and post-delivery follow-ups
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Sales Pipeline</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Goal: 30+ projects per year with optimized closing
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">PR & Media Relations</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Media features and compelling case studies
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Testimonial Campaigns</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Client retention programs and success stories
                    </p>
                  </div>
                </div>
                <Link href="/booking?service=consultation">
                  <Button className="w-full bg-red-700 hover:bg-red-800">Book Consultation Service</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-white dark:bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">Service Packages</h2>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              Choose the perfect package for your brand's needs, or let us create a custom solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-amber-200 dark:border-amber-800 relative">
              <CardHeader>
                <Badge className="w-fit bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 mb-2">
                  Starter
                </Badge>
                <CardTitle className="text-2xl text-stone-900 dark:text-stone-100">Brand Foundation</CardTitle>
                <p className="text-stone-600 dark:text-stone-400">Perfect for new businesses and startups</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-stone-600 dark:text-stone-400">
                  <li>• Brand strategy consultation</li>
                  <li>• Basic video content (2-3 pieces)</li>
                  <li>• Social media content package</li>
                  <li>• Market positioning analysis</li>
                </ul>
                <Link href="/booking?package=starter">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-orange-200 dark:border-orange-800 relative scale-105 shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <Badge className="w-fit bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 mb-2">
                  Professional
                </Badge>
                <CardTitle className="text-2xl text-stone-900 dark:text-stone-100">Brand Amplification</CardTitle>
                <p className="text-stone-600 dark:text-stone-400">Comprehensive solution for growing brands</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-stone-600 dark:text-stone-400">
                  <li>• Full brand strategy & positioning</li>
                  <li>• Premium video production (5-7 pieces)</li>
                  <li>• Interactive content development</li>
                  <li>• Partnership development</li>
                  <li>• Client success management</li>
                </ul>
                <Link href="/booking?package=professional">
                  <Button className="w-full bg-orange-700 hover:bg-orange-800">
                    Choose Professional <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-800 relative">
              <CardHeader>
                <Badge className="w-fit bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 mb-2">
                  Enterprise
                </Badge>
                <CardTitle className="text-2xl text-stone-900 dark:text-stone-100">Brand Transformation</CardTitle>
                <p className="text-stone-600 dark:text-stone-400">Complete brand ecosystem for established companies</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-stone-600 dark:text-stone-400">
                  <li>• Complete brand transformation</li>
                  <li>• Unlimited video content</li>
                  <li>• VR/AR storytelling experiences</li>
                  <li>• Dedicated account management</li>
                  <li>• Custom tech solutions</li>
                  <li>• PR & media campaign management</li>
                </ul>
                <Link href="/booking?package=enterprise">
                  <Button className="w-full bg-red-700 hover:bg-red-800">
                    Go Enterprise <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-orange-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Let's discuss which services and packages align with your brand goals and budget.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50">
              Schedule Your Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
