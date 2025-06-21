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
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Building, User } from "lucide-react"
import Link from "next/link"
import NavigationHeader from "@/components/ui/navigation-header"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const inquiryTypes = [
    "General Inquiry",
    "Project Quote",
    "Partnership Opportunity",
    "Media Interview",
    "Career Opportunity",
    "Technical Support",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Thank you for your message! We'll get back to you within 24 hours.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-stone-900 dark:to-amber-950">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-6">
              Let's Start a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              Ready to transform your brand story? We'd love to hear from you. Reach out to discuss your project, ask
              questions, or explore partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-stone-900 dark:text-stone-100 flex items-center">
                    <MessageSquare className="mr-3 h-6 w-6 text-amber-700 dark:text-amber-400" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-stone-700 dark:text-stone-300">Inquiry Type *</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-stone-700 dark:text-stone-300">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="mt-1"
                          placeholder="Brief subject line"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-stone-700 dark:text-stone-300">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="mt-1"
                        rows={6}
                        placeholder="Tell us about your project, questions, or how we can help you..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="text-stone-900 dark:text-stone-100">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-amber-700 dark:text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-900 dark:text-stone-100">Office Address</h4>
                      <p className="text-stone-600 dark:text-stone-400">
                        Westlands, Nairobi
                        <br />
                        Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-amber-700 dark:text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-900 dark:text-stone-100">Phone</h4>
                      <p className="text-stone-600 dark:text-stone-400">+254 700 000 000</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-amber-700 dark:text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-900 dark:text-stone-100">Email</h4>
                      <p className="text-stone-600 dark:text-stone-400">contact@kachamedia.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-amber-700 dark:text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-900 dark:text-stone-100">Business Hours</h4>
                      <p className="text-stone-600 dark:text-stone-400">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <CardTitle className="text-stone-900 dark:text-stone-100">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/booking">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">Schedule Consultation</Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="w-full border-amber-200 text-amber-700 hover:bg-amber-50 dark:border-amber-800 dark:text-amber-400"
                    >
                      View Our Services
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      variant="outline"
                      className="w-full border-orange-200 text-orange-700 hover:bg-orange-50 dark:border-orange-800 dark:text-orange-400"
                    >
                      See Our Work
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">Urgent Project?</h4>
                    <p className="text-sm text-red-700 dark:text-red-300 mb-4">
                      For time-sensitive projects or urgent inquiries, call our priority line:
                    </p>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                      <Phone className="mr-2 h-4 w-4" />
                      +254 700 000 001
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white dark:bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">Visit Our Office</h2>
            <p className="text-xl text-stone-600 dark:text-stone-400">
              Located in the heart of Nairobi's business district
            </p>
          </div>

          <div className="bg-stone-200 dark:bg-stone-700 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-stone-500 dark:text-stone-400 mx-auto mb-4" />
              <p className="text-stone-600 dark:text-stone-400">Interactive map would be integrated here</p>
              <p className="text-sm text-stone-500 dark:text-stone-500">Westlands, Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-400">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            <Card className="border-amber-200 dark:border-amber-800">
              <CardContent className="p-6">
                <h3 className="font-bold text-stone-900 dark:text-stone-100 mb-2">
                  What's the typical timeline for a project?
                </h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Project timelines vary based on scope and complexity. Simple brand videos typically take 2-3 weeks,
                  while comprehensive campaigns can take 6-12 weeks. We'll provide a detailed timeline during your
                  consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 dark:border-amber-800">
              <CardContent className="p-6">
                <h3 className="font-bold text-stone-900 dark:text-stone-100 mb-2">
                  Do you work with international clients?
                </h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Yes! While we're based in Kenya, we work with clients across Africa and internationally. We can manage
                  projects remotely and travel for on-location shoots when needed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 dark:border-amber-800">
              <CardContent className="p-6">
                <h3 className="font-bold text-stone-900 dark:text-stone-100 mb-2">
                  What makes your Authenticity Algorithm™ unique?
                </h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Our proprietary approach combines cultural insights, emotional intelligence, and data-driven
                  storytelling to ensure every narrative resonates authentically with African audiences while
                  maintaining universal appeal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
