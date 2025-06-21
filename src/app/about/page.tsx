import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Eye, Users, Zap, Award, Globe } from "lucide-react"
import Link from "next/link"
import NavigationHeader from "@/components/ui/navigation-header"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-stone-900 dark:to-amber-950">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
              About Kacha Media
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-6">
              Authentic Stories,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Cutting-Edge Tech
              </span>
            </h1>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              We're not just another media company. We're storytellers, innovators, and brand architects dedicated to
              revolutionizing how African brands connect with their audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-amber-200 dark:border-amber-800">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-amber-700 dark:text-amber-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Our Vision</h2>
                </div>
                <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                  "To revolutionize African brand storytelling by merging cutting-edge technology with authentic
                  narratives, ensuring every visual resonates deeply with its audience."
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 dark:border-orange-800">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-orange-700 dark:text-orange-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Our Mission</h2>
                </div>
                <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                  "To deliver unparalleled media quality—one frame, one story, one connection at a time."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Our Unique Approach
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              We combine traditional storytelling with innovative technology to create experiences that truly connect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-amber-200 dark:border-amber-800">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-amber-700 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-4">Authenticity Algorithm™</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Our proprietary approach ensures every story we tell is genuine, culturally relevant, and emotionally
                  resonant.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-200 dark:border-orange-800">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-orange-700 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-4">AI-Powered Production</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  We leverage cutting-edge AI tools to deliver 30% faster output without compromising on quality or
                  creativity.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-amber-200 dark:border-amber-800">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-amber-700 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-4">African Focus</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  We understand the African market, culture, and audience, creating content that truly speaks to local
                  communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Structure */}
      <section className="py-20 bg-white dark:bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">Our Structure</h2>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              Two specialized wings working in perfect harmony to deliver exceptional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Creative Wing */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">Creative Wing</h3>
                <p className="text-stone-600 dark:text-stone-400 mb-6">
                  Director of Creative & Innovation (Interim CCO)
                </p>
              </div>

              <div className="space-y-4">
                <Card className="border-amber-200 dark:border-amber-800">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-stone-900 dark:text-stone-100 mb-3">Digital Media Branch</h4>
                    <ul className="text-stone-600 dark:text-stone-400 space-y-2">
                      <li>• Lead Videographer/Photographer</li>
                      <li>• Post-Production Editor</li>
                      <li>• Motion Graphics Designer</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-amber-100 dark:border-amber-800">
                      <p className="text-sm font-medium text-amber-700 dark:text-amber-400">Key Deliverables:</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400">
                        Wedding films, SME videos, documentaries
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 dark:border-amber-800">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-stone-900 dark:text-stone-100 mb-3">Creative Tech Branch</h4>
                    <ul className="text-stone-600 dark:text-stone-400 space-y-2">
                      <li>• Interactive Content Developer</li>
                      <li>• AI Specialist</li>
                      <li>• VR/AR Storyteller (Future Role)</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-amber-100 dark:border-amber-800">
                      <p className="text-sm font-medium text-amber-700 dark:text-amber-400">Key Deliverables:</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400">
                        AI pipelines, interactive content, tech prototypes
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Marketing Wing */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">Marketing Wing</h3>
                <p className="text-stone-600 dark:text-stone-400 mb-6">Director of Strategy & Growth (Interim CMO)</p>
              </div>

              <div className="space-y-4">
                <Card className="border-orange-200 dark:border-orange-800">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-stone-900 dark:text-stone-100 mb-3">Strategy Branch</h4>
                    <ul className="text-stone-600 dark:text-stone-400 space-y-2">
                      <li>• Market Analyst</li>
                      <li>• Partnerships Manager</li>
                      <li>• Brand Strategist</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-orange-100 dark:border-orange-800">
                      <p className="text-sm font-medium text-orange-700 dark:text-orange-400">Key Deliverables:</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400">
                        Market analysis, partnerships, brand positioning
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 dark:border-orange-800">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-stone-900 dark:text-stone-100 mb-3">Consultation Branch</h4>
                    <ul className="text-stone-600 dark:text-stone-400 space-y-2">
                      <li>• Client Success Manager</li>
                      <li>• Sales Lead</li>
                      <li>• PR Specialist</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-orange-100 dark:border-orange-800">
                      <p className="text-sm font-medium text-orange-700 dark:text-orange-400">Key Deliverables:</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400">
                        Client retention, sales pipelines, PR campaigns
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-orange-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Let's discuss how our unique approach can elevate your brand and tell your story authentically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-700"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
