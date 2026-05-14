import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Award, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'VTU Grading System (CBCS) Fully Explained - Grades, Credits & CGPA',
    description: 'A complete explanation of the VTU CBCS grading system. Covers letter grades, grade points, internal vs external marks, grace marks, CGPA to percentage conversion, and more.',
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
                                The VTU Grading System (CBCS): Everything Explained
                            </h1>
                            <div className="flex items-center text-gray-500 text-sm">
                                <span>Published on May 18, 2024</span>
                                <span className="mx-2">•</span>
                                <span>10 min read</span>
                            </div>
                        </header>

                        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
                            <p className="text-lg leading-relaxed">
                                The grading system at Visvesvaraya Technological University can feel like a maze, especially for first-year students transitioning from the percentage-based marking of the 10+2 system. This article demystifies the entire structure — from how your raw marks translate into letter grades, to how those grades affect your CGPA, and ultimately what that means for your degree certificate and career prospects.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A Brief History: From Old Scheme to CBCS to NEP</h2>
                            <p>
                                VTU has undergone several grading scheme reforms over the years. The traditional "Old Scheme" (pre-2010) used a straightforward percentage-based system where students received raw marks and a percentage. This changed with the introduction of the Choice Based Credit System (CBCS) around 2015, which brought in letter grades and grade points — aligning VTU with national and international educational standards.
                            </p>
                            <p>
                                The 2021 Scheme (and subsequently the NEP 2021 / OBE-CBCS scheme for newer batches) refined this further, making Outcome Based Education (OBE) the framework for teaching and assessment. While the core letter grade system remains the same, the structure of subjects, credit distribution, and the inclusion of mandatory skill development courses have all changed. Always confirm which scheme your batch follows, as it affects the number of credits per semester and the exact grade boundaries.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Absolute vs. Relative Grading</h2>
                            <p>
                                VTU uses <strong>absolute grading</strong>. This means your letter grade is determined solely by the absolute marks you score — not by how you perform relative to your classmates. If you score 85, you get an 'A' grade regardless of whether the class average was 50 or 80. This is different from some universities that use a bell-curve or relative grading system where only the top X% of students get a certain grade.
                            </p>
                            <p>
                                For students, this is both good and bad. It means your grade is entirely in your own hands — performing well guarantees a good grade. But it also means there is no "grade inflation" based on overall class difficulty.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Letter Grade Table</h2>
                            <p>Your total marks (CIE + SEE, out of 100) map to these letter grades and grade points:</p>
                            <div className="overflow-x-auto my-6">
                                <table className="w-full text-left border-collapse border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Marks Range</th>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Letter Grade</th>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Grade Points</th>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Performance Level</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="bg-emerald-50"><td className="py-3 px-4 font-mono">90 – 100</td><td className="py-3 px-4 font-bold text-emerald-700">S</td><td className="py-3 px-4 font-bold">10</td><td className="py-3 px-4">Outstanding</td></tr>
                                        <tr><td className="py-3 px-4 font-mono">80 – 89</td><td className="py-3 px-4 font-bold text-blue-700">A</td><td className="py-3 px-4 font-bold">9</td><td className="py-3 px-4">Excellent</td></tr>
                                        <tr><td className="py-3 px-4 font-mono">70 – 79</td><td className="py-3 px-4 font-bold text-indigo-700">B</td><td className="py-3 px-4 font-bold">8</td><td className="py-3 px-4">Very Good</td></tr>
                                        <tr><td className="py-3 px-4 font-mono">60 – 69</td><td className="py-3 px-4 font-bold text-yellow-700">C</td><td className="py-3 px-4 font-bold">7</td><td className="py-3 px-4">Good</td></tr>
                                        <tr><td className="py-3 px-4 font-mono">55 – 59</td><td className="py-3 px-4 font-bold text-orange-600">D</td><td className="py-3 px-4 font-bold">6</td><td className="py-3 px-4">Average</td></tr>
                                        <tr><td className="py-3 px-4 font-mono">40 – 54</td><td className="py-3 px-4 font-bold text-orange-700">E</td><td className="py-3 px-4 font-bold">5</td><td className="py-3 px-4">Pass</td></tr>
                                        <tr className="bg-red-50"><td className="py-3 px-4 font-mono">&lt; 40</td><td className="py-3 px-4 font-bold text-red-700">F</td><td className="py-3 px-4 font-bold">0</td><td className="py-3 px-4">Fail / Backlog</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Internal (CIE) and External (SEE) Marks Combine</h2>
                            <p>
                                Your final marks out of 100 for each subject are a combination of two components:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>
                                    <strong>Continuous Internal Evaluation (CIE) — 50 marks:</strong> This includes your internal tests (usually two tests, best one or average of two counted), lab records, assignments, and sometimes a quiz or project component. The exact breakdown varies by subject type (theory vs. lab vs. project).
                                </li>
                                <li>
                                    <strong>Semester End Examination (SEE) — 50 marks (scaled from 100):</strong> This is the main university exam. You write an exam worth 100 marks, and the marks are then scaled down to 50 for the final grade calculation. So if you score 70/100 in the SEE, it counts as 35/50.
                                </li>
                            </ul>
                            <p>
                                The CIE and SEE scores are added to give a total out of 100, which is then mapped to a letter grade using the table above.
                            </p>
                            <Card className="bg-yellow-50 border-yellow-200 my-6">
                                <CardContent className="p-5">
                                    <p className="font-semibold text-yellow-900">Important Passing Condition</p>
                                    <p className="text-yellow-800 text-sm mt-1">
                                        To pass a subject, you must score a minimum of <strong>35 out of 100 in the SEE</strong> (i.e., 35 marks in the university exam after scaling). Even if your CIE is perfect (50/50), failing to clear the 35-mark SEE threshold results in an automatic 'F' grade for the subject, regardless of your total.
                                    </p>
                                </CardContent>
                            </Card>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Grace Marks Policy</h2>
                            <p>
                                VTU does have a grace marks provision, though it is limited and applied at the discretion of the university. Typically, grace marks are awarded to help a student cross a critical threshold — for example, bringing a student from 39 to 40 to help them pass, or from 89 to 90 to move them into the 'S' grade bracket. However, the exact policy and limits change from time to time, and not all students are automatically eligible. Always check the latest VTU circular for the current academic year's grace marks rules.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Class Declaration Based on CGPA</h2>
                            <p>At the end of all 8 semesters (for a 4-year B.E. program), your final degree class is declared based on your overall CGPA:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>First Class with Distinction:</strong> CGPA ≥ 7.75 (no active backlogs at time of graduation)</li>
                                <li><strong>First Class:</strong> 6.75 ≤ CGPA &lt; 7.75</li>
                                <li><strong>Second Class:</strong> 6.25 ≤ CGPA &lt; 6.75</li>
                                <li><strong>Pass Class:</strong> CGPA &lt; 6.25</li>
                            </ul>
                            <p>Note that the thresholds above are approximate and subject to change. Verify against the official VTU regulations document for your scheme year.</p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Convert CGPA to Percentage</h2>
                            <p>
                                Many job applications, especially government jobs and bank PO exams, ask for your percentage rather than CGPA. VTU does not have a single official CGPA-to-percentage conversion formula. However, the widely accepted formula (used by most employers and as recommended by the Ministry of Education) is:
                            </p>
                            <Card className="bg-gray-50 border-blue-100 my-6">
                                <CardContent className="p-6 text-center">
                                    <p className="text-xl font-mono font-bold text-blue-800">
                                        Percentage = CGPA × 10
                                    </p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        Example: A CGPA of 8.2 = <strong>82%</strong>
                                    </p>
                                </CardContent>
                            </Card>
                            <p>
                                If an employer specifically asks for a VTU-certified conversion, you can request a percentage conversion certificate from your college or from VTU directly, which uses their official formula for your specific scheme.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Related Articles</h3>
                                <div className="flex flex-wrap gap-3 mt-2">
                                    <Link href="/articles/how-to-calculate-sgpa" className="text-sm text-blue-600 hover:underline">How to Calculate Your SGPA →</Link>
                                    <Link href="/articles/cgpa-vs-sgpa-vtu" className="text-sm text-blue-600 hover:underline">CGPA vs SGPA Differences →</Link>
                                </div>
                            </div>
                            <Link href="/check-results">
                                <span className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
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
