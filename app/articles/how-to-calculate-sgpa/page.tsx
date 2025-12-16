import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'How to Calculate SGPA - VTU Results',
    description: 'A comprehensive guide on calculating your Semester Grade Point Average (SGPA) for VTU students under the CBCS scheme.',
};

export default function SGPAGuidePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/articles" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Articles
                </Link>

                <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
                        <Calculator className="w-20 h-20 text-white/90" />
                    </div>

                    <div className="p-8 md:p-12">
                        <header className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                How to Calculate Your SGPA Correctly
                            </h1>
                            <div className="flex items-center text-gray-500 text-sm">
                                <span>Published on May 20, 2024</span>
                                <span className="mx-2">•</span>
                                <span>5 min read</span>
                            </div>
                        </header>

                        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
                            <p className="text-lg leading-relaxed">
                                The Semester Grade Point Average (SGPA) is the primary metric used by Visvesvaraya Technological University (VTU)
                                to measure a student's academic performance in a single semester. Understanding how it works is crucial for tracking
                                your progress and planning your academic goals.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Formula</h2>
                            <p>
                                The SGPA is calculated using the following formula:
                            </p>
                            <Card className="bg-gray-50 border-blue-100 my-6">
                                <CardContent className="p-6 text-center">
                                    <p className="text-xl font-mono font-bold text-blue-800">
                                        SGPA = Σ(Ci × Gi) / ΣCi
                                    </p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        Where <strong>Ci</strong> is the Credit assigned to the course, and <strong>Gi</strong> is the Grade Point secured.
                                    </p>
                                </CardContent>
                            </Card>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Calculation</h2>
                            <ol className="list-decimal pl-6 space-y-4">
                                <li>
                                    <strong>Identify Credits (C):</strong> Each subject has a specific number of credits assigned to it based on its importance
                                    and teaching hours. Labs usually have lower credits (1-2) compared to core subjects (3-4).
                                </li>
                                <li>
                                    <strong>Determine Grade Points (G):</strong> Your marks in each subject are converted to Grade Points.
                                    For example, a score of 90-100 is an 'S' grade (10 points).
                                </li>
                                <li>
                                    <strong>Calculate Credit Points (C × G):</strong> Multiply the credits of each subject by the grade points you secured.
                                </li>
                                <li>
                                    <strong>Sum It Up:</strong> Add all the Credit Points together. Then, add all the Credits together.
                                </li>
                                <li>
                                    <strong>Divide:</strong> Divide the total Credit Points by the total Credits.
                                </li>
                            </ol>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Example Scenario</h2>
                            <p>
                                Let's say you have 3 subjects:
                            </p>
                            <div className="overflow-x-auto my-6">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200">
                                            <th className="py-3 px-4 font-semibold text-gray-900">Subject</th>
                                            <th className="py-3 px-4 font-semibold text-gray-900">Credits (C)</th>
                                            <th className="py-3 px-4 font-semibold text-gray-900">Grade (G)</th>
                                            <th className="py-3 px-4 font-semibold text-gray-900">Credit Points (C×G)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr>
                                            <td className="py-3 px-4">Maths</td>
                                            <td className="py-3 px-4">4</td>
                                            <td className="py-3 px-4">9 (A)</td>
                                            <td className="py-3 px-4">36</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">Physics</td>
                                            <td className="py-3 px-4">4</td>
                                            <td className="py-3 px-4">8 (B)</td>
                                            <td className="py-3 px-4">32</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">Lab</td>
                                            <td className="py-3 px-4">2</td>
                                            <td className="py-3 px-4">10 (S)</td>
                                            <td className="py-3 px-4">20</td>
                                        </tr>
                                        <tr className="bg-blue-50 font-bold">
                                            <td className="py-3 px-4">Total</td>
                                            <td className="py-3 px-4">10</td>
                                            <td className="py-3 px-4">-</td>
                                            <td className="py-3 px-4">88</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="font-semibold text-lg">
                                SGPA = 88 / 10 = <span className="text-blue-600">8.8</span>
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Use Our Calculator?</h2>
                            <p>
                                Manual calculation is prone to errors, especially when dealing with 7-8 subjects.
                                Our <strong>VTU Results Checker</strong> automatically parses your result, assigns the likely credits
                                (allowing you to edit them), and computes the SGPA instantly.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-lg font-bold mb-4">Ready to check your result?</h3>
                            <Link href="/">
                                <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                                    Check Results Now
                                </span>
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
