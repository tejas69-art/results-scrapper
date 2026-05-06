import React from 'react';
import { HomeContent } from '@/components/HomeContent';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCards } from '@/components/ServiceCards';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import Link from 'next/link';
import { BookOpen, ArrowRight, Bell, Calendar } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <HeroSection />

            {/* Latest Updates & Guides Section - NEW CONTENT */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <Bell className="w-6 h-6 text-blue-600" />
                                Latest Updates & Guides
                            </h2>
                            <p className="text-gray-600">Stay informed with the latest VTU news and academic tips.</p>
                        </div>
                        <Link href="/articles" className="mt-4 md:mt-0 text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 group">
                            View all articles
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Article Card 1 */}
                        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden flex flex-col">
                            <div className="h-40 bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-gray-100 flex items-center justify-center p-6">
                                <BookOpen className="w-12 h-12 text-blue-300" />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">Guide</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">How to Calculate SGPA Correctly</h3>
                                <p className="text-gray-600 text-sm mb-4 flex-1">
                                    A step-by-step guide to understanding the VTU credit system and calculating your Semester Grade Point Average manually.
                                </p>
                                <Link href="/articles/how-to-calculate-sgpa" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center mt-auto">
                                    Read more →
                                </Link>
                            </div>
                        </div>

                        {/* Article Card 2 */}
                        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden flex flex-col">
                            <div className="h-40 bg-gradient-to-br from-emerald-50 to-teal-50 border-b border-gray-100 flex items-center justify-center p-6">
                                <Calendar className="w-12 h-12 text-emerald-300" />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">Policy</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">VTU Attendance Rules Explained</h3>
                                <p className="text-gray-600 text-sm mb-4 flex-1">
                                    Everything you need to know about the 85% attendance rule, condonation policies, and what happens if you fall short.
                                </p>
                                <Link href="/articles/vtu-attendance-rules" className="text-emerald-600 hover:text-emerald-800 text-sm font-medium flex items-center mt-auto">
                                    Read more →
                                </Link>
                            </div>
                        </div>

                        {/* Article Card 3 */}
                        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden flex flex-col">
                            <div className="h-40 bg-gradient-to-br from-purple-50 to-fuchsia-50 border-b border-gray-100 flex items-center justify-center p-6">
                                <BookOpen className="w-12 h-12 text-purple-300" />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-2">Tips</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Tips for VTU External Exams</h3>
                                <p className="text-gray-600 text-sm mb-4 flex-1">
                                    Proven strategies for preparing for your semester-end external exams and maximizing your final grades.
                                </p>
                                <Link href="/articles/exam-preparation-tips" className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center mt-auto">
                                    Read more →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Cards */}
            <ServiceCards />

            {/* About Section */}
            <AboutSection />

            {/* Detailed Services Section */}
            <ServicesSection />

            {/* Additional Content Section for AdSense Compliance */}
            <div className="py-12 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <HomeContent />
                </div>
            </div>
            
            {/* SEO Content Injection */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl prose prose-blue prose-lg text-gray-700">
                    <h2>Your Ultimate VTU Academic Companion</h2>
                    <p>
                        Welcome to the most comprehensive unofficial resource platform for students of Visvesvaraya Technological University (VTU). 
                        Our platform is designed to bridge the gap between complex university data and student accessibility. Whether you are looking for 
                        your latest semester results, trying to decipher the intricacies of the Choice Based Credit System (CBCS), or seeking guidance 
                        on how to maintain the required attendance percentage, you'll find it all here.
                    </p>
                    <p>
                        We understand that navigating academic regulations can be daunting. That's why we regularly publish in-depth articles, 
                        how-to guides, and practical tips tailored specifically for engineering students across Karnataka. Our goal is to empower you 
                        with the knowledge you need to excel in your coursework and successfully complete your degree.
                    </p>
                    <h3>Why Trust Our Tools?</h3>
                    <p>
                        While we are an independent platform, our tools, such as the SGPA calculator and result aggregator, are built using the exact 
                        formulas and schemas defined by the university. By inputting your data, you get instant, accurate calculations that help you 
                        track your academic progression without the hassle of manual computation.
                    </p>
                    <p>
                        <em>Disclaimer: This platform is not affiliated with, endorsed by, or sponsored by Visvesvaraya Technological University. 
                        It is an independent initiative created by students, for students. Always verify critical information against official VTU circulars.</em>
                    </p>
                </div>
            </div>
        </div>
    );
}
