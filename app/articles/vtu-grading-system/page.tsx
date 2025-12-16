import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Award, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'VTU Grading System (CBCS) Explained',
    description: 'Detailed explanation of the VTU Choice Based Credit System (CBCS) grading scheme, grade points, and percentages.',
};

export default function GradingSystemPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/articles" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Articles
                </Link>

                <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-emerald-600 to-teal-700 flex items-center justify-center">
                        <Award className="w-20 h-20 text-white/90" />
                    </div>

                    <div className="p-8 md:p-12">
                        <header className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Understanding the VTU Grading System
                            </h1>
                            <div className="flex items-center text-gray-500 text-sm">
                                <span>Published on May 18, 2024</span>
                                <span className="mx-2">•</span>
                                <span>4 min read</span>
                            </div>
                        </header>

                        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
                            <p className="text-lg leading-relaxed">
                                Under the Choice Based Credit System (CBCS), Visvesvaraya Technological University (VTU) follows an absolute grading system.
                                This means your performance is evaluated based on the absolute marks you secure in the University examinations.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Letter Grades</h2>
                            <p>
                                Instead of raw marks, your final result card displays a "Letter Grade" for each subject.
                                Each letter grade corresponds to a range of marks and carries specific "Grade Points" used for SGPA/CGPA calculation.
                            </p>

                            <div className="overflow-x-auto my-6">
                                <table className="w-full text-left border-collapse border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Marks Range</th>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Letter Grade</th>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Grade Points</th>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="bg-emerald-50">
                                            <td className="py-3 px-4 font-mono">90 - 100</td>
                                            <td className="py-3 px-4 font-bold text-emerald-700">S</td>
                                            <td className="py-3 px-4 font-bold">10</td>
                                            <td className="py-3 px-4">Outstanding</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-mono">80 - 89</td>
                                            <td className="py-3 px-4 font-bold text-blue-700">A</td>
                                            <td className="py-3 px-4 font-bold">9</td>
                                            <td className="py-3 px-4">Excellent</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-mono">70 - 79</td>
                                            <td className="py-3 px-4 font-bold text-indigo-700">B</td>
                                            <td className="py-3 px-4 font-bold">8</td>
                                            <td className="py-3 px-4">Very Good</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-mono">60 - 69</td>
                                            <td className="py-3 px-4 font-bold text-yellow-700">C</td>
                                            <td className="py-3 px-4 font-bold">7</td>
                                            <td className="py-3 px-4">Good</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-mono">50 - 59</td>
                                            <td className="py-3 px-4 font-bold text-orange-700">D</td>
                                            <td className="py-3 px-4 font-bold">6</td>
                                            <td className="py-3 px-4">Above Average</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-mono">40 - 49</td>
                                            <td className="py-3 px-4 font-bold text-orange-600">E</td>
                                            <td className="py-3 px-4 font-bold">5</td>
                                            <td className="py-3 px-4">Average</td>
                                        </tr>
                                        <tr className="bg-red-50">
                                            <td className="py-3 px-4 font-mono">&lt; 40</td>
                                            <td className="py-3 px-4 font-bold text-red-700">F</td>
                                            <td className="py-3 px-4 font-bold">0</td>
                                            <td className="py-3 px-4">Fail</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Passing Criteria</h2>
                            <p>
                                To pass a subject, you must usually score at least <strong>35%</strong> in the Semester End Examination (External)
                                and a total of <strong>40%</strong> (Internal + External) effectively.
                            </p>
                            <p>
                                If you secure an 'F' grade, it means you have failed the course and must reappear for the examination,
                                unless the course is an elective that you choose to drop (if permitted).
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Class Declaration</h2>
                            <p>
                                Your final degree class is declared based on your CGPA (Cumulative Grade Point Average) at the end of the program:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>First Class with Distinction:</strong> CGPA ≥ 7.75</li>
                                <li><strong>First Class:</strong> 6.75 ≤ CGPA &lt; 7.75</li>
                                <li><strong>Second Class:</strong> CGPA &lt; 6.75</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
