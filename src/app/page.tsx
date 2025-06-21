import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PixelatedImageReveal from "@/components/ui/pixelated-image-reveal"
import { ArrowRight, Play, Award, Camera, BarChart3 } from "lucide-react"
import Link from "next/link"
import NavigationHeader from "@/components/ui/navigation-header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-stone-900 dark:to-amber-950">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                Africa's Authentic Storyteller
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-6">
                Revolutionizing African{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  Brand Storytelling
                </span>
              </h1>
              <p className="text-xl text-stone-600 dark:text-stone-400 mb-8 leading-relaxed">
                We merge cutting-edge technology with authentic narratives, delivering unparalleled media quality—one
                frame, one story, one connection at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white">
                    Start Your Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-700 text-amber-700 hover:bg-amber-50 dark:border-amber-600 dark:text-amber-400"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 p-8 flex items-center justify-center">
                <PixelatedImageReveal
                  defaultImg="/image1.jpg"
                  revealImg="/image2.jpg"
                  alt="Kacha Media Showcase"
                  gridSize={10}
                  animationDuration={0.3}
                  pixelColor="#ff0000"
                  staggerFrom="center"
                  className="rounded-2xl object-cover w-[full] h-[full] max-w-none"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-stone-800 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900 dark:text-stone-100">30+ Projects</p>
                    <p className="text-sm text-stone-600 dark:text-stone-400">Delivered This Year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Our Creative Wings
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              Two specialized wings working in harmony to deliver exceptional brand experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Creative Wing */}
            <Card className="border-amber-200 dark:border-amber-800 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mr-4">
                    <Camera className="h-6 w-6 text-amber-700 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Creative Wing</h3>
                    <p className="text-stone-600 dark:text-stone-400">Storytelling & Production</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Digital Media Branch</h4>
                    <ul className="text-stone-600 dark:text-stone-400 space-y-1">
                      <li>• Emotion-driven wedding films</li>
                      <li>• SME "Brand Hero" videos</li>
                      <li>• Documentary projects</li>
                      <li>• AI-powered post-production</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Creative Tech Branch</h4>
                    <ul className="text-stone-600 dark:text-stone-400 space-y-1">
                      <li>• Interactive QR-linked content</li>
                      <li>• AI-powered editing pipelines</li>
                      <li>• VR/AR storytelling</li>
                      <li>• Tech prototypes</li>
                    </ul>
                  </div>
                </div>

                <Link href="/services/creative">
                  <Button className="w-full mt-6 bg-amber-700 hover:bg-amber-800">Explore Creative Services</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Marketing Wing */}
            <Card className="border-amber-200 dark:border-amber-800 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                    <BarChart3 className="h-6 w-6 text-orange-700 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Marketing Wing</h3>
                    <p className="text-stone-600 dark:text-stone-400">Strategy & Growth</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Strategy Branch</h4>
                    <ul className="text-stone-600 dark:text-stone-400 space-y-1">
                      <li>• Market analysis & trends</li>
                      <li>• Partnership development</li>
                      <li>• Brand positioning</li>
                      <li>• Competitive analysis</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Consultation Branch</h4>
                    <ul className="text-stone-600 dark:text-stone-400 space-y-1">
                      <li>• Client success management</li>
                      <li>• Sales pipeline optimization</li>
                      <li>• PR & media relations</li>
                      <li>• Testimonial campaigns</li>
                    </ul>
                  </div>
                </div>

                <Link href="/services/marketing">
                  <Button className="w-full mt-6 bg-orange-700 hover:bg-orange-800">Explore Marketing Services</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">30+</div>
              <div className="text-amber-100">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">22%</div>
              <div className="text-amber-100">Faster Production</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-amber-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-amber-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900 dark:bg-stone-950">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Tell Your Story?</h2>
          <p className="text-xl text-stone-300 mb-8">
            Let's create something extraordinary together. Book a consultation and discover how we can elevate your
            brand.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Schedule Your Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 dark:bg-stone-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="text-xl font-bold">Kacha Media</span>
              </div>
              <p className="text-stone-400">
                Africa's premier digital branding company, revolutionizing storytelling through technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <Link href="/services/creative" className="hover:text-amber-400">
                    Creative Wing
                  </Link>
                </li>
                <li>
                  <Link href="/services/marketing" className="hover:text-amber-400">
                    Marketing Wing
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-amber-400">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <Link href="/about" className="hover:text-amber-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-amber-400">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amber-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <Link href="/booking" className="hover:text-amber-400">
                    Book Consultation
                  </Link>
                </li>
                <li>
                  <a href="mailto:contact@kachamedia.com" className="hover:text-amber-400">
                    contact@kachamedia.com
                  </a>
                </li>
                <li>
                  <a href="tel:+254700000000" className="hover:text-amber-400">
                    +254 705 646 549
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
            <p>&copy; 2025 Kacha Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
