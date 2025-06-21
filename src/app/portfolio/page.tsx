import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink, Award, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import NavigationHeader from "@/components/ui/navigation-header"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Savanna Ventures Brand Film",
      category: "SME Brand Video",
      wing: "Creative",
      client: "Savanna Ventures",
      year: "2024",
      description:
        "A compelling brand story showcasing Kenya's leading agritech startup and their impact on rural farming communities.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Brand Story", "Documentary Style", "AI-Enhanced"],
      results: "300% increase in brand awareness, 150% boost in investor inquiries",
    },
    {
      id: 2,
      title: "Amara & David Wedding Film",
      category: "Wedding Cinematography",
      wing: "Creative",
      client: "Private Client",
      year: "2024",
      description: "An emotion-driven wedding film capturing authentic moments using our Authenticity Algorithm™.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Wedding", "Authenticity Algorithm™", "Emotional Storytelling"],
      results: "Featured in 3 wedding magazines, 50+ referrals generated",
    },
    {
      id: 3,
      title: "Nairobi Eats Interactive Menu",
      category: "Interactive QR Content",
      wing: "Creative Tech",
      client: "Nairobi Eats Restaurant",
      year: "2024",
      description: "QR-linked video content for restaurant menus, showcasing dishes with immersive storytelling.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Interactive", "QR Technology", "Food & Beverage"],
      results: "40% increase in order value, 25% improvement in customer engagement",
    },
    {
      id: 4,
      title: "TechHub Kenya Growth Strategy",
      category: "Brand Strategy",
      wing: "Marketing",
      client: "TechHub Kenya",
      year: "2024",
      description: "Comprehensive brand positioning and market analysis for East Africa's premier tech incubator.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Strategy", "Market Analysis", "Tech Sector"],
      results: "200% increase in startup applications, expanded to 3 new cities",
    },
    {
      id: 5,
      title: "Heritage Crafts Documentary",
      category: "Documentary Project",
      wing: "Creative",
      client: "Kenya Cultural Foundation",
      year: "2023",
      description: "A 30-minute documentary preserving traditional Kenyan craftsmanship for future generations.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Documentary", "Cultural Heritage", "Long-form"],
      results: "Screened at 5 international film festivals, UNESCO recognition",
    },
    {
      id: 6,
      title: "GreenTech Solutions Campaign",
      category: "Integrated Campaign",
      wing: "Both",
      client: "GreenTech Solutions",
      year: "2023",
      description: "Full-service brand campaign combining creative storytelling with strategic market positioning.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Integrated Campaign", "Sustainability", "Multi-platform"],
      results: "500% ROI, expanded to 5 African markets",
    },
  ]

  const categories = [
    "All",
    "SME Brand Video",
    "Wedding Cinematography",
    "Interactive QR Content",
    "Brand Strategy",
    "Documentary Project",
    "Integrated Campaign",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-stone-900 dark:to-amber-950">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
              Our Portfolio
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-6">
              Stories That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Resonate
              </span>
            </h1>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              Explore our collection of authentic brand stories, innovative campaigns, and transformative projects that
              have helped businesses across Africa connect with their audiences.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-amber-700 hover:bg-amber-800 text-white"
                    : "border-amber-200 text-amber-700 hover:bg-amber-50 dark:border-amber-800 dark:text-amber-400 dark:hover:bg-amber-950"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white dark:bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="border-amber-200 dark:border-amber-800 overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="lg" className="bg-white text-stone-900 hover:bg-stone-100">
                      <Play className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${project.wing === "Creative"
                        ? "bg-amber-600 text-white"
                        : project.wing === "Marketing"
                          ? "bg-orange-600 text-white"
                          : "bg-gradient-to-r from-amber-600 to-orange-600 text-white"
                        }`}
                    >
                      {project.wing} Wing
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-stone-900">
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="outline"
                      className="text-amber-700 border-amber-200 dark:text-amber-400 dark:border-amber-800"
                    >
                      {project.category}
                    </Badge>
                    <div className="flex items-center text-stone-500 dark:text-stone-400">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.client}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-3">{project.title}</h3>

                  <p className="text-stone-600 dark:text-stone-400 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg mb-6">
                    <div className="flex items-center mb-2">
                      <Award className="h-4 w-4 text-amber-700 dark:text-amber-400 mr-2" />
                      <span className="font-medium text-stone-900 dark:text-stone-100">Results</span>
                    </div>
                    <p className="text-sm text-stone-600 dark:text-stone-400">{project.results}</p>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-amber-700 hover:bg-amber-800">
                      <Play className="mr-2 h-4 w-4" />
                      View Case Study
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-amber-200 text-amber-700 hover:bg-amber-50 dark:border-amber-800 dark:text-amber-400"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-amber-100">Real results from authentic storytelling</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-amber-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-amber-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-amber-100">Awards Won</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">300%</div>
              <div className="text-amber-100">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-stone-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-400 mb-8">
            Let's discuss how we can help your brand achieve similar results with authentic storytelling and strategic
            innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-amber-700 text-amber-700 hover:bg-amber-50 dark:border-amber-600 dark:text-amber-400"
              >
                Discuss Your Vision
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
