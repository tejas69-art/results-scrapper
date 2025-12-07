import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info, Calculator, Zap, Shield, Star } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About - VTU Results Checker',
    description: 'Learn about VTU Results Checker, a fast and reliable way to check your VTU exam results and calculate SGPA.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100 mb-6 border border-blue-200">
                        <Info className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-blue-700">About Us</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About VTU Results Checker</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Your trusted companion for checking VTU examination results and calculating academic performance metrics
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calculator className="w-6 h-6 text-blue-600" />
                                What We Do
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 space-y-4">
                            <p>
                                VTU Results Checker is a web-based service designed to help students of
                                Visvesvaraya Technological University (VTU) quickly access their examination results
                                and academic performance metrics.
                            </p>
                            <p>
                                We provide a simple, fast, and user-friendly interface to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Check your semester examination results</li>
                                <li>View detailed subject-wise performance</li>
                                <li>Calculate your SGPA (Semester Grade Point Average)</li>
                                <li>Analyze your academic performance with visual metrics</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Zap className="w-6 h-6 text-blue-600" />
                                Why Choose Us
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Star className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold">Fast & Reliable</h3>
                                        <p className="text-sm">Get your results instantly with our optimized fetching system</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Star className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold">SGPA Calculator</h3>
                                        <p className="text-sm">Automatically calculate your SGPA with customizable credit values</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Star className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold">User-Friendly</h3>
                                        <p className="text-sm">Clean, intuitive interface designed for students</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Star className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold">No Data Storage</h3>
                                        <p className="text-sm">Your results are fetched in real-time; we don't store your data</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card className="shadow-lg mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl">How It Works</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-6 bg-blue-50 rounded-lg">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    1
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Enter Details</h3>
                                <p className="text-sm text-gray-600">
                                    Provide your USN and the VTU result page URL
                                </p>
                            </div>
                            <div className="text-center p-6 bg-blue-50 rounded-lg">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    2
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Fetch Results</h3>
                                <p className="text-sm text-gray-600">
                                    We securely fetch your results from VTU's servers
                                </p>
                            </div>
                            <div className="text-center p-6 bg-blue-50 rounded-lg">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    3
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">View & Calculate</h3>
                                <p className="text-sm text-gray-600">
                                    See your results and calculate SGPA instantly
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="shadow-lg mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Shield className="w-6 h-6 text-blue-600" />
                            Privacy & Security
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-700 space-y-4">
                        <p>
                            We take your privacy seriously. Here's what you need to know:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>No Data Storage:</strong> We do not store your USN or examination results on our servers.
                                All data is fetched in real-time and displayed directly to you.
                            </li>
                            <li>
                                <strong>Secure Connections:</strong> All communication between your browser and our service is encrypted.
                            </li>
                            <li>
                                <strong>No Account Required:</strong> You don't need to create an account or provide personal information.
                            </li>
                            <li>
                                <strong>Transparent:</strong> Read our{' '}
                                <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                                    Privacy Policy
                                </Link>{' '}
                                for complete details.
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                    <CardContent className="p-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Disclaimer</h2>
                        <p className="text-gray-700 mb-4">
                            VTU Results Checker is an independent service and is <strong>not affiliated with
                                Visvesvaraya Technological University (VTU)</strong>. We provide a convenient way to access
                            publicly available result data.
                        </p>
                        <p className="text-gray-700">
                            For official results and academic records, please visit the{' '}
                            <a
                                href="https://vtu.ac.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline font-semibold"
                            >
                                official VTU website
                            </a>.
                        </p>
                    </CardContent>
                </Card>

                <div className="text-center mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h2>
                    <p className="text-gray-600 mb-6">
                        We're here to help! If you have any questions or feedback, please don't hesitate to reach out.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
