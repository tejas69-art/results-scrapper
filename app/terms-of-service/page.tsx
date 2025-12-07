import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service - VTU Results Checker',
    description: 'Terms of Service for using VTU Results Checker. Read our terms and conditions.',
};

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100 mb-6 border border-blue-200">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-blue-700">Legal</span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
                    <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
                </div>

                <Card className="shadow-lg">
                    <CardContent className="p-8 space-y-6 text-gray-700">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using VTU Results Checker ("the Service"), you accept and agree to be bound by the
                                terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not
                                use the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                            <p className="mb-4">
                                VTU Results Checker is a web-based service that allows students to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Check their VTU (Visvesvaraya Technological University) examination results</li>
                                <li>Calculate SGPA (Semester Grade Point Average)</li>
                                <li>View detailed subject-wise performance</li>
                            </ul>
                            <p className="mt-4">
                                The Service fetches result data from VTU's official website and presents it in an organized format.
                                We are an independent service and are not affiliated with VTU.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                            <p className="mb-4">As a user of this Service, you agree to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide accurate and valid information (USN and result URL)</li>
                                <li>Use the Service only for lawful purposes</li>
                                <li>Not attempt to interfere with the proper functioning of the Service</li>
                                <li>Not use the Service to violate any applicable laws or regulations</li>
                                <li>Not attempt to gain unauthorized access to any portion of the Service</li>
                                <li>Not use automated systems or software to extract data from the Service</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclaimer of Warranties</h2>
                            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-4">
                                <p className="font-semibold mb-2">IMPORTANT DISCLAIMER:</p>
                                <p>
                                    The Service is provided "AS IS" and "AS AVAILABLE" without any warranties of any kind, either express
                                    or implied. We do not guarantee the accuracy, completeness, or timeliness of the results displayed.
                                </p>
                            </div>
                            <p className="mb-4">
                                While we strive to provide accurate information, we cannot guarantee that:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>The results displayed are error-free or accurate</li>
                                <li>The Service will be available at all times without interruption</li>
                                <li>Any errors in the Service will be corrected</li>
                                <li>SGPA calculations are 100% accurate (credits must be manually entered)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                            <p className="mb-4">
                                To the fullest extent permitted by law, VTU Results Checker and its operators shall not be liable for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Any direct, indirect, incidental, special, or consequential damages</li>
                                <li>Loss of profits, data, or other intangible losses</li>
                                <li>Damages resulting from your use or inability to use the Service</li>
                                <li>Damages resulting from reliance on information obtained through the Service</li>
                                <li>Damages resulting from unauthorized access to or alteration of your data</li>
                            </ul>
                            <p className="mt-4">
                                Users should always verify their results with official VTU sources. We are not responsible for any
                                academic or administrative decisions made based on results displayed through our Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
                            <p className="mb-4">
                                The Service and its original content, features, and functionality are owned by VTU Results Checker
                                and are protected by international copyright, trademark, and other intellectual property laws.
                            </p>
                            <p>
                                VTU examination results and related data are the property of Visvesvaraya Technological University.
                                We only provide a convenient way to access publicly available information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
                            <p className="mb-4">
                                Our Service may contain links to third-party websites or services, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>VTU's official website</li>
                                <li>Advertisement networks (Google AdSense)</li>
                                <li>Analytics services</li>
                            </ul>
                            <p className="mt-4">
                                We are not responsible for the content, privacy policies, or practices of any third-party websites
                                or services. You acknowledge and agree that we shall not be liable for any damage or loss caused by
                                use of or reliance on any such content or services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Advertisements</h2>
                            <p>
                                The Service is supported by advertisements provided by Google AdSense. By using the Service, you
                                acknowledge that:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Advertisements may be displayed on various pages</li>
                                <li>We use cookies and similar technologies for advertising purposes</li>
                                <li>You can opt out of personalized advertising through your ad settings</li>
                                <li>We are not responsible for the content of third-party advertisements</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy</h2>
                            <p>
                                Your use of the Service is also governed by our{' '}
                                <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                                Please review our Privacy Policy to understand how we collect, use, and protect your information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
                            <p>
                                You agree to indemnify and hold harmless VTU Results Checker and its operators from any claims,
                                damages, losses, liabilities, and expenses (including legal fees) arising from:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Your use of the Service</li>
                                <li>Your violation of these Terms of Service</li>
                                <li>Your violation of any rights of another party</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications to Service</h2>
                            <p>
                                We reserve the right to modify or discontinue the Service (or any part thereof) at any time, with
                                or without notice. We shall not be liable to you or any third party for any modification, suspension,
                                or discontinuance of the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
                            <p>
                                We reserve the right to update or modify these Terms of Service at any time without prior notice.
                                Your continued use of the Service after any such changes constitutes your acceptance of the new
                                Terms of Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
                            <p>
                                These Terms of Service shall be governed by and construed in accordance with the laws of India,
                                without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
                            <p>
                                If you have any questions about these Terms of Service, please contact us through our{' '}
                                <a href="/contact" className="text-blue-600 hover:underline">contact page</a>.
                            </p>
                        </section>

                        <section className="bg-red-50 p-6 rounded-lg border border-red-200">
                            <h3 className="text-xl font-bold text-red-900 mb-3">Final Reminder</h3>
                            <p className="text-red-800">
                                This Service is provided for informational purposes only. Always verify your results with official
                                VTU sources. We are not affiliated with VTU and are not responsible for any errors or discrepancies
                                in the displayed information.
                            </p>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
