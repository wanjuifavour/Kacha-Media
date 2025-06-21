'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NavigationHeader() {
    return (
        <nav className="border-b border-amber-200 dark:border-amber-800 bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">K</span>
                        </div>
                        <span className="text-xl font-bold text-stone-800 dark:text-stone-200">Kacha Media</span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400"
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            className="text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400"
                        >
                            Services
                        </Link>
                        <Link
                            href="/portfolio"
                            className="text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400"
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/team"
                            className="text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400"
                        >
                            Team
                        </Link>
                        <Link
                            href="/contact"
                            className="text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400"
                        >
                            Contact
                        </Link>
                        <Link href="/booking">
                            <Button className="bg-amber-700 hover:bg-amber-800 text-white">Book Consultation</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
} 