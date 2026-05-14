import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'CGPA vs SGPA in VTU: Key Differences, How They Are Calculated, and What They Mean',
    description: 'Understand the difference between CGPA and SGPA in VTU — how each is calculated, how they relate to your degree class, and which one matters more for placements and higher studies.',
};

export default function CGPAVsSGPAPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/articles" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Articles
                </Link>

                <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                        <TrendingUp className="w-20 h-20 text-white/90" />
                    </div>

                    <div className="p-8 md:p-12">
                        <header className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                CGPA vs SGPA in VTU: Key Differences, Calculations, and What Actually Matters
                            </h1>
                            <div className="flex items-center text-gray-500 text-sm">
                                <span>Published on September 01, 2024</span>
                                <span className="mx-2">•</span>
                                <span>8 min read</span>
                            </div>
                        </header>

                        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
                            <p className="text-lg leading-relaxed">
                                Two of the most important numbers in a VTU student's academic life are SGPA and CGPA. While most students have a general sense of what these mean, many confuse them or don't fully understand how they interact — and which one matters more for different situations like placements, GATE, or higher studies abroad. This article clears up the confusion once and for all.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Core Definitions</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                                <Card className="bg-blue-50 border-blue-200">
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-blue-900 text-xl mb-2">SGPA</h3>
                                        <p className="text-blue-800 text-sm font-semibold mb-1">Semester Grade Point Average</p>
                                        <p className="text-blue-700 text-sm">Measures your academic performance in a <strong>single semester</strong>. Calculated at the end of each semester, from Semester 1 through Semester 8. Scale: 0 to 10.</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-purple-50 border-purple-200">
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-purple-900 text-xl mb-2">CGPA</h3>
                                        <p className="text-purple-800 text-sm font-semibold mb-1">Cumulative Grade Point Average</p>
                                        <p className="text-purple-700 text-sm">Measures your <strong>overall academic performance</strong> from all semesters combined, up to and including the most recent one. Scale: 0 to 10.</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How SGPA is Calculated</h2>
                            <p>SGPA for a single semester is calculated using the formula:</p>
                            <Card className="bg-gray-50 border-gray-200 my-4">
                                <CardContent className="p-5 text-center">
                                    <p className="text-lg font-mono font-bold text-blue-800">SGPA = Σ(Ci × Gi) / ΣCi</p>
                                    <p className="text-sm text-gray-500 mt-1">Ci = credit of subject i, Gi = grade points in subject i</p>
                                </CardContent>
                            </Card>
                            <p>For example, if in Semester 3 you have 5 subjects with a total of 20 credits and your weighted grade point total is 172, your SGPA = 172 / 20 = <strong>8.6</strong>.</p>
                            <p>See our <Link href="/articles/how-to-calculate-sgpa" className="text-blue-600 hover:underline">detailed SGPA calculation guide</Link> for a complete step-by-step example with all 8 subjects.</p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How CGPA is Calculated</h2>
                            <p>CGPA is a weighted average of your SGPAs, weighted by the total number of credits in each semester:</p>
                            <Card className="bg-gray-50 border-gray-200 my-4">
                                <CardContent className="p-5 text-center">
                                    <p className="text-lg font-mono font-bold text-purple-800">CGPA = Σ(SGPAn × Cn) / ΣCn</p>
                                    <p className="text-sm text-gray-500 mt-1">SGPAn = SGPA of semester n, Cn = total credits in semester n</p>
                                </CardContent>
                            </Card>
                            <p>
                                This means semesters with more credits have a larger influence on your CGPA. Typically, final-year semesters (Semester 7 and especially Semester 8, where the project often carries 12–15 credits) have higher total credits. A strong performance in these semesters can meaningfully improve your final CGPA.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A Practical Example Across 4 Semesters</h2>
                            <div className="overflow-x-auto my-6">
                                <table className="w-full text-left border-collapse border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Semester</th>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">Total Credits</th>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">SGPA</th>
                                            <th className="py-3 px-4 border-b font-semibold text-gray-900">SGPA × Credits</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr><td className="py-3 px-4">Semester 1</td><td className="py-3 px-4">20</td><td className="py-3 px-4">7.5</td><td className="py-3 px-4 font-mono">150</td></tr>
                                        <tr><td className="py-3 px-4">Semester 2</td><td className="py-3 px-4">22</td><td className="py-3 px-4">8.0</td><td className="py-3 px-4 font-mono">176</td></tr>
                                        <tr><td className="py-3 px-4">Semester 3</td><td className="py-3 px-4">21</td><td className="py-3 px-4">8.6</td><td className="py-3 px-4 font-mono">180.6</td></tr>
                                        <tr><td className="py-3 px-4">Semester 4</td><td className="py-3 px-4">23</td><td className="py-3 px-4">9.0</td><td className="py-3 px-4 font-mono">207</td></tr>
                                        <tr className="bg-blue-50 font-bold"><td className="py-3 px-4">Total</td><td className="py-3 px-4">86</td><td className="py-3 px-4">—</td><td className="py-3 px-4 font-mono">713.6</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="font-semibold">CGPA after 4 semesters = 713.6 / 86 = <span className="text-blue-600">8.3</span></p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">SGPA vs CGPA: Which Matters More and When?</h2>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>
                                    <strong>Campus placements:</strong> Most companies look at your <strong>CGPA</strong> as the primary filter. A typical cutoff is 6.0 or 7.0 CGPA. Individual SGPAs are rarely scrutinized unless you have a very low SGPA in a recent semester, which might be probed in an interview.
                                </li>
                                <li>
                                    <strong>GATE and MTech:</strong> Your <strong>CGPA</strong> is listed on the GATE application and later on university applications. Most IITs and NITs have a CGPA cutoff around 6.0–6.5 for MTech admissions.
                                </li>
                                <li>
                                    <strong>MS abroad:</strong> Foreign universities typically look at your CGPA converted to their scale. Individual SGPAs may be reviewed if there is a significant dip (e.g., a very low SGPA in one semester) — you may be asked to explain it in your SOP.
                                </li>
                                <li>
                                    <strong>Government PSU recruitment via GATE:</strong> CGPA is listed in the application but GATE score is the primary selection criterion. Some PSUs do have minimum CGPA requirements.
                                </li>
                                <li>
                                    <strong>Degree class declaration:</strong> VTU declares your final degree class based on your overall <strong>CGPA</strong> across all 8 semesters (First Class with Distinction: ≥7.75, First Class: 6.75–7.74).
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can a Bad Early SGPA Kill Your CGPA?</h2>
                            <p>
                                A poor SGPA in Semester 1 or 2 is damaging, but not irreversible. Since CGPA is credit-weighted, and early semesters often have slightly fewer credits than later ones, strong performance in semesters 4–8 can substantially recover your CGPA. However, the recovery is gradual — each semester's weight is roughly equal (15–25 credits out of a total ~170 credits for the degree), so one good semester won't erase the impact of one bad one.
                            </p>
                            <p>
                                The clearest path: consistently improve semester-on-semester. Even going from a 6.5 SGPA in Sem 1 to 8.0+ in Sems 5–8 can bring a final CGPA into the 7.5–8.0 range — which is respectable for most opportunities.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Checking Your Current SGPA and CGPA</h2>
                            <p>
                                As soon as your VTU results are published, you can check your SGPA and CGPA directly from your result page. Use our result checker tool to retrieve your marksheet — your SGPA and CGPA are listed at the bottom of the subject table.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Related Articles</h3>
                                <div className="flex flex-wrap gap-3 mt-2">
                                    <Link href="/articles/how-to-calculate-sgpa" className="text-sm text-blue-600 hover:underline">How to Calculate Your SGPA →</Link>
                                    <Link href="/articles/vtu-grading-system" className="text-sm text-blue-600 hover:underline">VTU Grading System Explained →</Link>
                                </div>
                            </div>
                            <Link href="/check-results">
                                <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                                    Check Your Results Now
                                </span>
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
