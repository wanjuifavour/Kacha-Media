import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Camera, BarChart3, Users, Award, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import NavigationHeader from "@/components/ui/navigation-header"

export default function TeamPage() {
  const leadership = [
    {
      name: "Sarah Kimani",
      role: "Director of Creative & Innovation (Interim CCO)",
      wing: "Creative Wing",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With 8+ years in African media production, Sarah leads our creative vision and ensures every story we tell resonates authentically with local audiences.",
      expertise: ["Storytelling Strategy", "Tech Integration", "Project Leadership"],
      achievements: [
        "Led 100+ successful projects",
        "Pioneer of Authenticity Algorithm™",
        "Featured in Media Innovation Awards",
      ],
    },
    {
      name: "David Ochieng",
      role: "Director of Strategy & Growth (Interim CMO)",
      wing: "Marketing Wing",
      image: "/placeholder.svg?height=300&width=300",
      bio: "David brings strategic marketing expertise and data-driven insights to help brands achieve measurable growth across African markets.",
      expertise: ["Market Analysis", "Brand Strategy", "Growth Hacking"],
      achievements: ["300% average client ROI", "Expanded 20+ brands across Africa", "Marketing Strategy Expert"],
    },
  ]

  const creativeTeam = [
    {
      name: "Michael Wanjiku",
      role: "Lead Videographer/Photographer",
      branch: "Digital Media Branch",
      image: "/placeholder.svg?height=250&width=250",
      specialties: ["Wedding Cinematography", "SME Brand Videos", "Authenticity Algorithm™"],
      experience: "5+ years",
    },
    {
      name: "Grace Akinyi",
      role: "Post-Production Editor",
      branch: "Digital Media Branch",
      image: "/placeholder.svg?height=250&width=250",
      specialties: ["AI-Enhanced Editing", "Color Grading", "Motion Graphics"],
      experience: "4+ years",
    },
    {
      name: "James Muthomi",
      role: "Motion Graphics Designer",
      branch: "Digital Media Branch",
      image: "/placeholder.svg?height=250&width=250",
      specialties: ["Brand Animation", "Logo Design", "Visual Effects"],
      experience: "6+ years",
    },
    {
      name: "Priscilla Wanjiru",
      role: "Interactive Content Developer",
      branch: "Creative Tech Branch",
      image: "/placeholder.svg?height=250&width=250",
      specialties: ["QR-Linked Content", "Interactive Media", "UX Design"],
      experience: "3+ years",
    },
    {
      name: "Kevin Omondi",
      role: "AI Specialist",
      branch: "Creative Tech Branch",
      image: "/placeholder.svg?height=250&width=250",
      specialties: ["Runway ML", "Automated Workflows", "Tech Innovation"],
      experience: "4+ years",
    },
  ]

  const marketingTeam = [
    {
      name: "Linda Njeri",
      role: "Market Analyst",
      branch: "Strategy Branch",
      image: "/placeholder.svg?height=250&width=250",
      specialties: ["Market Research", "Trend Analysis", "Data Insights"],
      experience: "5+ years",
    },
    {
      name: "Robert Kiprotich",
      role: "Partnerships Manager",
      branch: "Strategy Branch",
      image: "/placeholder.svg?height=250&width=250",
      specialties: ["Strategic Alliances", "Business Development", "Relationship Management"],
      experience: "7+ years",
    },
    {
      name: "Angela Mwende",
      role: "Brand Strategist",
      branch: "Strategy Branch",
      image: "/placeholder.svg?height=250&width=250",
      specialties: ["Brand Positioning", "Market Entry", "Competitive Analysis"],
      experience: "6+ years",
    },
    {
      name: "Peter Kamau",
      role: "Client Success Manager",
      branch: "Consultation Branch",
      image: "/placeholder.svg?height=250&width=250",
      specialties: ["Client Relations", "Project Management", "Success Metrics"],
      experience: "4+ years",
    },
    {
      name: "Mary Wangari",
      role: "Sales Lead",
      branch: "Consultation Branch",
      image: "/placeholder.svg?height=250&width=250",
      specialties: ["Sales Strategy", "Deal Closing", "Pipeline Management"],
      experience: "5+ years",
    },
    {
      name: "Daniel Kipchoge",
      role: "PR Specialist",
      branch: "Consultation Branch",
      image: "/placeholder.svg?height=250&width=250",
      specialties: ["Media Relations", "Case Studies", "Brand Visibility"],
      experience: "3+ years",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-stone-900 dark:to-amber-950">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">Our Team</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-6">
              The Minds Behind{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Authentic Stories
              </span>
            </h1>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              Meet the passionate storytellers, strategists, and innovators who bring your brand vision to life with
              authenticity and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white dark:bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">Leadership Team</h2>
            <p className="text-xl text-stone-600 dark:text-stone-400">
              Visionary leaders driving innovation and excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {leadership.map((leader) => (
              <Card key={leader.name} className="border-amber-200 dark:border-amber-800 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="relative">
                      <img
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`${leader.wing === "Creative Wing" ? "bg-amber-600 text-white" : "bg-orange-600 text-white"
                            }`}
                        >
                          {leader.wing}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">{leader.name}</h3>
                      <p className="text-amber-700 dark:text-amber-400 font-medium mb-4">{leader.role}</p>
                      <p className="text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">{leader.bio}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {leader.expertise.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Key Achievements</h4>
                        <ul className="text-sm text-stone-600 dark:text-stone-400 space-y-1">
                          {leader.achievements.map((achievement) => (
                            <li key={achievement}>• {achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-amber-200 text-amber-700 hover:bg-amber-50 dark:border-amber-800 dark:text-amber-400"
                        >
                          <Linkedin className="h-4 w-4 mr-1" />
                          LinkedIn
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-amber-200 text-amber-700 hover:bg-amber-50 dark:border-amber-800 dark:text-amber-400"
                        >
                          <Mail className="h-4 w-4 mr-1" />
                          Email
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Wing Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Creative Wing Team
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-400">
              Storytellers and tech innovators crafting authentic narratives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeTeam.map((member) => (
              <Card
                key={member.name}
                className="border-amber-200 dark:border-amber-800 text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-amber-600 text-white text-xs">{member.experience}</Badge>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">{member.name}</h3>
                  <p className="text-amber-700 dark:text-amber-400 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-stone-600 dark:text-stone-400 mb-4">{member.branch}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2 text-sm">Specialties</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="border-amber-200 text-amber-700 hover:bg-amber-50 dark:border-amber-800 dark:text-amber-400"
                  >
                    <Mail className="h-3 w-3 mr-1" />
                    Contact
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Wing Team */}
      <section className="py-20 bg-white dark:bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Marketing Wing Team
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-400">
              Strategic minds driving growth and market expansion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingTeam.map((member) => (
              <Card
                key={member.name}
                className="border-orange-200 dark:border-orange-800 text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-orange-600 text-white text-xs">{member.experience}</Badge>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">{member.name}</h3>
                  <p className="text-orange-700 dark:text-orange-400 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-stone-600 dark:text-stone-400 mb-4">{member.branch}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2 text-sm">Specialties</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="border-orange-200 text-orange-700 hover:bg-orange-50 dark:border-orange-800 dark:text-orange-400"
                  >
                    <Mail className="h-3 w-3 mr-1" />
                    Contact
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-orange-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="h-8 w-8 text-amber-700" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Join Our Growing Team</h2>
          <p className="text-xl text-amber-100 mb-8">
            We're always looking for passionate storytellers, creative technologists, and strategic minds to join our
            mission of revolutionizing African brand storytelling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50">
              <Award className="mr-2 h-4 w-4" />
              View Open Positions
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-700"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Your Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
