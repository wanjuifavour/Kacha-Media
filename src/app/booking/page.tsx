"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, Mail, Phone, Building, MessageSquare, CheckCircle } from "lucide-react"
import NavigationHeader from "@/components/ui/navigation-header"

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    package: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  })

  const services = [
    { id: "digital-media", name: "Digital Media Production", wing: "Creative", price: "From $2,500" },
    { id: "creative-tech", name: "Creative Tech Solutions", wing: "Creative", price: "From $3,500" },
    { id: "strategy", name: "Brand Strategy & Analysis", wing: "Marketing", price: "From $1,500" },
    { id: "consultation", name: "Client Success & Consultation", wing: "Marketing", price: "From $800" },
    { id: "wedding", name: "Wedding Cinematography", wing: "Creative", price: "From $2,000" },
    { id: "sme-video", name: "SME Brand Videos", wing: "Creative", price: "From $1,800" },
    { id: "interactive", name: "Interactive QR Content", wing: "Creative", price: "From $1,200" },
    { id: "custom", name: "Custom Solution", wing: "Both", price: "Quote on Request" },
  ]

  const packages = [
    { id: "starter", name: "Brand Foundation", price: "$5,000 - $8,000" },
    { id: "professional", name: "Brand Amplification", price: "$12,000 - $20,000" },
    { id: "enterprise", name: "Brand Transformation", price: "$25,000+" },
  ]

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Consultation booked successfully! We'll contact you within 24 hours.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-stone-900 dark:to-amber-950">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
              Book Your Consultation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-6">
              Let&apos;s Create Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Brand Story
              </span>
            </h1>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              Schedule a consultation with our experts to discuss your project, explore our services, and create a
              custom solution for your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-stone-900 dark:text-stone-100 flex items-center">
                    <Calendar className="mr-3 h-6 w-6 text-amber-700 dark:text-amber-400" />
                    Schedule Your Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="flex items-center text-stone-700 dark:text-stone-300">
                          <User className="mr-2 h-4 w-4" />
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="flex items-center text-stone-700 dark:text-stone-300">
                          <Mail className="mr-2 h-4 w-4" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="mt-1"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="flex items-center text-stone-700 dark:text-stone-300">
                          <Phone className="mr-2 h-4 w-4" />
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="mt-1"
                          placeholder="+254 700 000 000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="flex items-center text-stone-700 dark:text-stone-300">
                          <Building className="mr-2 h-4 w-4" />
                          Company/Organization
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="mt-1"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <Label className="text-stone-700 dark:text-stone-300 mb-3 block">Select Service *</Label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {services.map((service) => (
                          <div
                            key={service.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedService === service.id
                              ? "border-amber-500 bg-amber-50 dark:bg-amber-950"
                              : "border-stone-200 dark:border-stone-700 hover:border-amber-300"
                              }`}
                            onClick={() => {
                              setSelectedService(service.id)
                              setFormData({ ...formData, service: service.id })
                            }}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium text-stone-900 dark:text-stone-100">{service.name}</h4>
                              <Badge variant="outline" className="text-xs">
                                {service.wing}
                              </Badge>
                            </div>
                            <p className="text-sm text-amber-700 dark:text-amber-400 font-medium">{service.price}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Package Selection */}
                    <div>
                      <Label className="text-stone-700 dark:text-stone-300 mb-3 block">
                        Interested in a Package? (Optional)
                      </Label>
                      <div className="grid md:grid-cols-3 gap-3">
                        {packages.map((pkg) => (
                          <div
                            key={pkg.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-all ${formData.package === pkg.id
                              ? "border-orange-500 bg-orange-50 dark:bg-orange-950"
                              : "border-stone-200 dark:border-stone-700 hover:border-orange-300"
                              }`}
                            onClick={() => setFormData({ ...formData, package: pkg.id })}
                          >
                            <h4 className="font-medium text-stone-900 dark:text-stone-100 mb-1">{pkg.name}</h4>
                            <p className="text-sm text-orange-700 dark:text-orange-400 font-medium">{pkg.price}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Date and Time Selection */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date" className="flex items-center text-stone-700 dark:text-stone-300">
                          <Calendar className="mr-2 h-4 w-4" />
                          Preferred Date *
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          required
                          value={selectedDate}
                          onChange={(e) => {
                            setSelectedDate(e.target.value)
                            setFormData({ ...formData, preferredDate: e.target.value })
                          }}
                          className="mt-1"
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                      <div>
                        <Label className="flex items-center text-stone-700 dark:text-stone-300">
                          <Clock className="mr-2 h-4 w-4" />
                          Preferred Time *
                        </Label>
                        <Select
                          value={selectedTime}
                          onValueChange={(value: string) => {
                            setSelectedTime(value)
                            setFormData({ ...formData, preferredTime: value })
                          }}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time: string) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="flex items-center text-stone-700 dark:text-stone-300">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Project Details & Questions
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="mt-1"
                        rows={4}
                        placeholder="Tell us about your project, goals, timeline, and any specific questions you have..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Book Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Consultation Info */}
              <Card className="border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="text-stone-900 dark:text-stone-100">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-700 dark:text-amber-400 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-900 dark:text-stone-100">Discovery Call</h4>
                      <p className="text-sm text-stone-600 dark:text-stone-400">
                        45-60 minute consultation to understand your needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-700 dark:text-amber-400 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-900 dark:text-stone-100">Custom Proposal</h4>
                      <p className="text-sm text-stone-600 dark:text-stone-400">
                        Tailored solution with timeline and pricing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-700 dark:text-amber-400 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-900 dark:text-stone-100">Project Kickoff</h4>
                      <p className="text-sm text-stone-600 dark:text-stone-400">
                        Begin creating your authentic brand story
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <CardTitle className="text-stone-900 dark:text-stone-100">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-orange-700 dark:text-orange-400" />
                    <span className="text-stone-600 dark:text-stone-400">contact@kachamedia.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-orange-700 dark:text-orange-400" />
                    <span className="text-stone-600 dark:text-stone-400">+254 700 000 000</span>
                  </div>
                  <div className="pt-3 border-t border-orange-100 dark:border-orange-800">
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Available Monday - Friday, 9 AM - 6 PM EAT
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="border-stone-200 dark:border-stone-700 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold">JM</span>
                    </div>
                    <blockquote className="text-stone-700 dark:text-stone-300 mb-4">
                      &quot;Kacha Media transformed our brand story completely. Their authentic approach and cutting-edge
                      technology delivered results beyond our expectations.&quot;
                    </blockquote>
                    <cite className="text-sm font-medium text-amber-700 dark:text-amber-400">
                      - Jane Mwangi, CEO, Savanna Ventures
                    </cite>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
