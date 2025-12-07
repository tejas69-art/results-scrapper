import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - VTU Results Checker',
    description: 'Privacy Policy for VTU Results Checker. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100 mb-6 border border-blue-200">
                        <ShieldCheck className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-blue-700">Legal</span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                    <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
                </div>

                <Card className="shadow-lg">
                    <CardContent className="p-8 space-y-6 text-gray-700">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                            <p>
                                Welcome to VTU Results Checker ("we," "our," or "us"). We are committed to protecting your privacy
                                and ensuring the security of your personal information. This Privacy Policy explains how we collect,
                                use, disclose, and safeguard your information when you visit our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Information You Provide</h3>
                            <p className="mb-4">
                                When you use our VTU Results checking service, you provide us with:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Your University Seat Number (USN)</li>
                                <li>VTU result page URL</li>
                                <li>Any information you voluntarily provide through our contact form</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.2 Automatically Collected Information</h3>
                            <p className="mb-4">
                                When you visit our website, we automatically collect certain information, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>IP address</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Referring website addresses</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                            <p className="mb-4">We use the information we collect to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Fetch and display your VTU examination results</li>
                                <li>Calculate your SGPA based on the results</li>
                                <li>Improve our website and services</li>
                                <li>Respond to your inquiries and support requests</li>
                                <li>Analyze website usage and trends</li>
                                <li>Prevent fraudulent or unauthorized use of our services</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
                            <p className="mb-4">
                                We use cookies and similar tracking technologies to track activity on our website and store certain
                                information. Cookies are files with a small amount of data that are sent to your browser from a website
                                and stored on your device.
                            </p>
                            <p className="mb-4">We use cookies for:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Remembering your preferences and settings</li>
                                <li>Understanding how you use our website</li>
                                <li>Improving website performance</li>
                            </ul>
                            <p className="mt-4">
                                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                                However, if you do not accept cookies, you may not be able to use some portions of our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Google AdSense</h2>
                            <p className="mb-4">
                                We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve
                                ads based on your prior visits to our website or other websites. Google's use of advertising cookies
                                enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
                            </p>
                            <p className="mb-4">
                                You may opt out of personalized advertising by visiting{' '}
                                <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                    Google Ads Settings
                                </a>. Alternatively, you can opt out of third-party vendor's use of cookies for personalized advertising by visiting{' '}
                                <a href="https://www.aboutads.info/choices/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                    www.aboutads.info
                                </a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational security measures to protect your personal information.
                                However, please note that no method of transmission over the Internet or method of electronic storage is 100%
                                secure. While we strive to use commercially acceptable means to protect your personal information, we cannot
                                guarantee its absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                            <p>
                                We do not store your USN or result data on our servers. Result data is fetched in real-time from VTU's
                                servers and displayed to you directly. We only retain automatically collected information (like analytics
                                data) for as long as necessary to fulfill the purposes outlined in this Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
                            <p>
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                                or content of these third-party sites. We encourage you to read the privacy policies of any third-party
                                sites you visit.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                            <p>
                                Our service is intended for students and individuals of all ages. We do not knowingly collect personal
                                information from children under 13 without parental consent. If you are a parent or guardian and believe
                                your child has provided us with personal information, please contact us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
                            <p>
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                                Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy
                                Policy periodically for any changes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Your Rights</h2>
                            <p className="mb-4">Depending on your location, you may have the following rights:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>The right to access your personal information</li>
                                <li>The right to rectify inaccurate personal information</li>
                                <li>The right to erase your personal information</li>
                                <li>The right to restrict processing of your personal information</li>
                                <li>The right to data portability</li>
                                <li>The right to object to processing</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <ul className="list-none space-y-2">
                                <li>Through our <a href="/contact" className="text-blue-600 hover:underline">contact page</a></li>
                                <li>By visiting this page on our website: <a href="/" className="text-blue-600 hover:underline">{process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app'}</a></li>
                            </ul>
                        </section>

                        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">GDPR Compliance</h2>
                            <p>
                                If you are a resident of the European Economic Area (EEA), you have certain data protection rights.
                                We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your
                                personal information. If you wish to be informed about what personal information we hold about you
                                and if you want it to be removed from our systems, please contact us.
                            </p>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
