import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'How to Calculate SGPA in VTU - Complete Step-by-Step Guide',
    description: 'A complete guide on calculating your SGPA under the VTU CBCS scheme. Includes the formula, grade point table, a full 8-subject example, and common mistakes to avoid.',
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
                                How to Calculate Your SGPA in VTU: A Complete Guide
                            </h1>
                            <div className="flex items-center text-gray-500 text-sm">
                                <span>Published on May 20, 2024</span>
                                <span className="mx-2">•</span>
                                <span>10 min read</span>
                            </div>
                        </header>

                        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
                            <p className="text-lg leading-relaxed">
                                For every VTU student, the Semester Grade Point Average (SGPA) is one of the most important numbers on your academic record. It determines your eligibility for scholarships, internships, and placements — yet many students don't fully understand how it's calculated. This guide walks you through everything: the formula, the grading table, a complete real-world example, and the mistakes that trip up most students.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is SGPA and Why Does it Matter?</h2>
                            <p>
                                SGPA stands for Semester Grade Point Average. It is a number on a scale of 0 to 10 that represents your academic performance in a single semester. Under VTU's Choice Based Credit System (CBCS), every semester has a set of subjects, each carrying a certain number of credits. Your SGPA is a weighted average of the grade points you earn across all those subjects, weighted by their respective credits.
                            </p>
                            <p>
                                SGPA matters for several reasons. Most companies that conduct campus placements at VTU-affiliated colleges have a minimum CGPA cutoff — typically 6.0 or 7.0. Your CGPA (Cumulative Grade Point Average) is itself an average of your SGPA across all semesters, so every semester's performance counts. A consistently good SGPA also makes you eligible for merit-based scholarships offered by the state government.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Credits in VTU</h2>
                            <p>
                                Before calculating SGPA, you must understand the credit system. Each subject in your semester is assigned a specific number of credits based on the number of hours taught per week and its importance to your program. Here is a general breakdown:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Theory subjects (core):</strong> Usually 3 or 4 credits. These are your main lecture-based courses like Mathematics, Data Structures, or Thermodynamics.</li>
                                <li><strong>Laboratory/Practical subjects:</strong> Usually 1 or 2 credits. These are your lab sessions tied to theory subjects.</li>
                                <li><strong>Mini-project or seminar:</strong> Usually 1 credit.</li>
                                <li><strong>Project Work (final year):</strong> Can be as high as 12–15 credits in the 8th semester.</li>
                            </ul>
                            <p>
                                The exact credit structure for your branch and scheme (2018, 2021, or NEP) will be listed in the VTU syllabus document available on the official website. Always cross-reference your own syllabus before calculating.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The SGPA Formula</h2>
                            <p>The official VTU formula for SGPA is:</p>
                            <Card className="bg-gray-50 border-blue-100 my-6">
                                <CardContent className="p-6 text-center">
                                    <p className="text-xl font-mono font-bold text-blue-800">
                                        SGPA = Σ(Ci × Gi) / ΣCi
                                    </p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        Where <strong>Ci</strong> is the Credit of each course, and <strong>Gi</strong> is the Grade Point you secured in that course.
                                    </p>
                                </CardContent>
                            </Card>
                            <p>
                                In plain English: multiply the credit value of each subject by its grade point, add up all of those products, and then divide by the total number of credits in the semester.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">VTU Grade Point Table (CBCS)</h2>
                            <p>Your raw marks from both internal assessment (CIE) and the semester-end exam (SEE) are combined to give a total out of 100. That total is then mapped to a letter grade and corresponding grade point:</p>
                            <div className="overflow-x-auto my-6">
                                <table className="w-full text-left border-collapse border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Total Marks (out of 100)</th>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Letter Grade</th>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Grade Points (Gi)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="bg-emerald-50"><td className="py-3 px-4">90 – 100</td><td className="py-3 px-4 font-bold text-emerald-700">S</td><td className="py-3 px-4 font-bold">10</td></tr>
                                        <tr><td className="py-3 px-4">80 – 89</td><td className="py-3 px-4 font-bold text-blue-700">A</td><td className="py-3 px-4 font-bold">9</td></tr>
                                        <tr><td className="py-3 px-4">70 – 79</td><td className="py-3 px-4 font-bold text-indigo-700">B</td><td className="py-3 px-4 font-bold">8</td></tr>
                                        <tr><td className="py-3 px-4">60 – 69</td><td className="py-3 px-4 font-bold text-yellow-700">C</td><td className="py-3 px-4 font-bold">7</td></tr>
                                        <tr><td className="py-3 px-4">55 – 59</td><td className="py-3 px-4 font-bold text-orange-600">D</td><td className="py-3 px-4 font-bold">6</td></tr>
                                        <tr><td className="py-3 px-4">40 – 54</td><td className="py-3 px-4 font-bold text-orange-700">E</td><td className="py-3 px-4 font-bold">5</td></tr>
                                        <tr className="bg-red-50"><td className="py-3 px-4">Below 40</td><td className="py-3 px-4 font-bold text-red-700">F</td><td className="py-3 px-4 font-bold">0</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-500 italic">Note: The exact cutoffs can vary slightly between schemes. Always verify with your specific syllabus document.</p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Full 8-Subject Example Calculation</h2>
                            <p>Let's calculate the SGPA for a typical 3rd semester CSE student under the 2021 scheme. Assume the following results:</p>
                            <div className="overflow-x-auto my-6">
                                <table className="w-full text-left border-collapse border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Subject</th>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Credits (Ci)</th>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Total Marks</th>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Grade (Gi)</th>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Ci × Gi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr><td className="py-3 px-4">Mathematics III</td><td className="py-3 px-4">4</td><td className="py-3 px-4">76</td><td className="py-3 px-4">8 (B)</td><td className="py-3 px-4 font-mono">32</td></tr>
                                        <tr><td className="py-3 px-4">Data Structures</td><td className="py-3 px-4">4</td><td className="py-3 px-4">83</td><td className="py-3 px-4">9 (A)</td><td className="py-3 px-4 font-mono">36</td></tr>
                                        <tr><td className="py-3 px-4">Digital Circuits</td><td className="py-3 px-4">3</td><td className="py-3 px-4">91</td><td className="py-3 px-4">10 (S)</td><td className="py-3 px-4 font-mono">30</td></tr>
                                        <tr><td className="py-3 px-4">Computer Organization</td><td className="py-3 px-4">3</td><td className="py-3 px-4">68</td><td className="py-3 px-4">7 (C)</td><td className="py-3 px-4 font-mono">21</td></tr>
                                        <tr><td className="py-3 px-4">Discrete Maths</td><td className="py-3 px-4">3</td><td className="py-3 px-4">72</td><td className="py-3 px-4">8 (B)</td><td className="py-3 px-4 font-mono">24</td></tr>
                                        <tr><td className="py-3 px-4">Data Structures Lab</td><td className="py-3 px-4">1</td><td className="py-3 px-4">88</td><td className="py-3 px-4">9 (A)</td><td className="py-3 px-4 font-mono">9</td></tr>
                                        <tr><td className="py-3 px-4">Digital Circuits Lab</td><td className="py-3 px-4">1</td><td className="py-3 px-4">95</td><td className="py-3 px-4">10 (S)</td><td className="py-3 px-4 font-mono">10</td></tr>
                                        <tr><td className="py-3 px-4">Seminar</td><td className="py-3 px-4">1</td><td className="py-3 px-4">90</td><td className="py-3 px-4">10 (S)</td><td className="py-3 px-4 font-mono">10</td></tr>
                                        <tr className="bg-blue-50 font-bold"><td className="py-3 px-4">Total</td><td className="py-3 px-4">20</td><td className="py-3 px-4">—</td><td className="py-3 px-4">—</td><td className="py-3 px-4 font-mono">172</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="font-semibold text-lg">
                                SGPA = 172 / 20 = <span className="text-blue-600">8.6</span>
                            </p>
                            <p>This student secured an SGPA of 8.6 for the semester, which falls in the First Class with Distinction range.</p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Mistakes Students Make</h2>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Using aggregate attendance instead of per-subject credits:</strong> SGPA is calculated per subject credit, not based on an aggregate of all subjects equally. Don't just average your grades; weight them by credits.</li>
                                <li><strong>Forgetting to include lab subjects:</strong> Many students forget to include their lab/practical credits. Labs have real credits (usually 1–2) and their grade points count toward your SGPA just like theory subjects.</li>
                                <li><strong>Using the wrong grading scheme:</strong> The grade boundaries differ slightly between the 2018 Scheme, the 2021 Scheme, and the NEP 2021 scheme. If you are using old mark ranges on a new scheme, your calculation will be wrong.</li>
                                <li><strong>Not accounting for an F grade correctly:</strong> An F grade carries 0 grade points, but the credits for that subject are still included in the denominator (ΣCi). This significantly drags down your SGPA — one failed subject in a 20-credit semester will pull your SGPA down by 0.5 to 1.5 points depending on the subject's credit value.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Your SGPA Affects CGPA Over 8 Semesters</h2>
                            <p>
                                Your CGPA is a weighted average of all your SGPAs across all semesters (weighted by total credits per semester). Since later semesters (like the 7th and 8th, where the project carries heavy credits) often have more total credits, they have a bigger influence on your final CGPA. This means a poor 1st-semester SGPA has a proportionally smaller impact on your final CGPA than a poor 7th-semester SGPA.
                            </p>
                            <p>
                                However, don't use this as an excuse to underperform early. Many placements require that you have no active backlogs, and some also check your individual semester marksheets. Consistently strong SGPAs across all eight semesters is always the safest strategy.
                            </p>
                            <p>
                                If you want to check your actual result or get your marks confirmed directly, use the result checker tool below to fetch your latest VTU marksheet.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Related Articles</h3>
                                <div className="flex flex-wrap gap-3 mt-2">
                                    <Link href="/articles/vtu-grading-system" className="text-sm text-blue-600 hover:underline">VTU Grading System Explained →</Link>
                                    <Link href="/articles/cgpa-vs-sgpa-vtu" className="text-sm text-blue-600 hover:underline">CGPA vs SGPA: Key Differences →</Link>
                                </div>
                            </div>
                            <Link href="/check-results">
                                <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
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
