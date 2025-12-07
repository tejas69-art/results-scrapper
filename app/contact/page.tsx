'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Mail, Send } from 'lucide-react';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would send this data to a backend
        console.log({ name, email, message });
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setName('');
            setEmail('');
            setMessage('');
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100 mb-6 border border-blue-200">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-blue-700">Contact</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have questions, feedback, or need assistance? We'd love to hear from you!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl">Send us a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {submitted ? (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-green-900 mb-2">Message Sent!</h3>
                                    <p className="text-green-700">
                                        Thank you for contacting us. We'll get back to you soon.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your full name"
                                            required
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your.email@example.com"
                                            required
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="message">Message</Label>
                                        <textarea
                                            id="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="How can we help you?"
                                            required
                                            rows={6}
                                            className="mt-2 flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                    >
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>

                    {/* Contact Information & FAQ */}
                    <div className="space-y-6">
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-2xl">Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-gray-700">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                                    <p className="text-sm">
                                        For general inquiries and support, please use the contact form.
                                        We typically respond within 24-48 hours.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                                    <p className="text-sm">
                                        We aim to respond to all inquiries within 1-2 business days.
                                        During peak periods (exam result season), it may take slightly longer.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg bg-blue-50 border-blue-200">
                            <CardHeader>
                                <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Where do I find the result URL?</h3>
                                    <p className="text-sm text-gray-700">
                                        Visit the official VTU website and navigate to the results section.
                                        Copy the URL of the result page where you would normally enter your USN.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Is my data secure?</h3>
                                    <p className="text-sm text-gray-700">
                                        Yes! We don't store your USN or results. All data is fetched in real-time
                                        from VTU servers and displayed directly to you.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Why is the SGPA showing 0?</h3>
                                    <p className="text-sm text-gray-700">
                                        You need to manually select the credits for each subject in the dropdown.
                                        Once you set the credits, the SGPA will be calculated automatically.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Are you affiliated with VTU?</h3>
                                    <p className="text-sm text-gray-700">
                                        No, we are an independent service. For official results, please visit
                                        the VTU website.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
                                <p className="text-sm text-gray-700 mb-4">
                                    Before contacting us, check our{' '}
                                    <a href="/about" className="text-blue-600 hover:underline">About page</a>{' '}
                                    for more information about how our service works.
                                </p>
                                <p className="text-sm text-gray-700">
                                    For privacy-related questions, please review our{' '}
                                    <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
