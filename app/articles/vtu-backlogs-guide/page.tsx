import type { Metadata } from 'next';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'VTU Backlogs Guide: How to Clear Them Fast and Protect Your Career',
    description: 'Everything VTU students need to know about backlogs — what they are, how they affect placements, the supplementary exam process, and strategies to clear them quickly.',
};

export default function VTUBacklogsGuidePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/articles" className="inline-flex items-center text-red-600 hover:text-red-800 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Articles
                </Link>

                <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
                        <AlertCircle className="w-20 h-20 text-white/90" />
                    </div>

                    <div className="p-8 md:p-12">
                        <header className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                VTU Backlogs Explained: How to Clear Them Fast and Protect Your Career
                            </h1>
                            <div className="flex items-center text-gray-500 text-sm">
                                <span>Published on July 15, 2024</span>
                                <span className="mx-2">•</span>
                                <span>10 min read</span>
                            </div>
                        </header>

                        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
                            <p className="text-lg leading-relaxed">
                                Getting a backlog in VTU is stressful, but it is far from the end of the road. Thousands of students clear backlogs every year and go on to secure excellent placements and career opportunities. This guide explains what a VTU backlog is, how it impacts your academic record, and the concrete steps you can take to clear it as quickly as possible.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is a VTU Backlog?</h2>
                            <p>
                                A backlog (officially an "arrear") occurs when you receive an 'F' grade — your total marks (CIE + SEE combined) fall below 40 out of 100, OR your scaled SEE score is below 35 out of 100. An 'F' grade carries 0 grade points and no credits toward your degree.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Active backlog:</strong> A subject you have failed and not yet cleared — shows as a pending 'F' on your record.</li>
                                <li><strong>Historical backlog (cleared):</strong> A subject you previously failed but subsequently passed in a re-examination. Still visible but marked as cleared.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Backlogs Hit Your SGPA and CGPA</h2>
                            <p>
                                An 'F' contributes 0 grade points, but the subject's credits remain in the denominator of the SGPA formula. Failing a 4-credit subject in a 20-credit semester can pull your SGPA down by up to 2.0 points. When you clear the backlog in a supplementary exam, the new grade replaces the 'F' in that original semester's calculation — improving your historical SGPA and your overall CGPA.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Impact on Campus Placements</h2>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Top-tier IT and core companies:</strong> Require zero active backlogs at the time of application. An active backlog disqualifies you entirely from their campus drive.</li>
                                <li><strong>Mid-tier companies and startups:</strong> Often allow cleared backlogs, as long as all subjects are cleared before the joining date.</li>
                                <li><strong>Government PSUs:</strong> Typically require no backlogs at the time of applying, with document verification of your full academic record.</li>
                                <li><strong>Higher studies abroad:</strong> Foreign universities may ask for a written explanation for any backlog on your transcript.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The VTU Supplementary Exam Process</h2>
                            <p>VTU holds supplementary examinations in which students with backlogs can re-attempt failed subjects:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Eligibility:</strong> Any student with an 'F' grade can re-appear. Your original CIE marks carry forward — you only retake the SEE.</li>
                                <li><strong>Timing:</strong> Usually held once a year, around February–March, following the odd semester results.</li>
                                <li><strong>Registration:</strong> Done through your college examination cell before the stated deadline. A per-subject fee applies. Missing the deadline means waiting another year.</li>
                                <li><strong>Exam format:</strong> Identical to the regular SEE — same pattern, same duration, same marking scheme.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Strategies to Clear Backlogs Efficiently</h2>
                            <ol className="list-decimal pl-6 space-y-3">
                                <li><strong>Diagnose why you failed.</strong> Was it conceptual confusion, exam anxiety, attendance issues, or lack of preparation time? Each cause needs a different fix.</li>
                                <li><strong>Use Previous Year Question Papers (PYQPs) aggressively.</strong> Since your CIE is locked in, your supplementary effort is entirely SEE-focused. You need only 35+ in the SEE to pass. PYQPs reveal which topics are high-yield.</li>
                                <li><strong>Apply for photocopy and re-valuation if you believe you were graded unfairly.</strong> VTU allows students to request a photocopy of their valued answer script and, if warranted, a formal re-valuation. Applications must be submitted within 2–4 weeks of result publication.</li>
                                <li><strong>Do not let one backlog create a cascade.</strong> Stay focused on your current semester subjects as well — neglecting them while stressed about a backlog can create more arrears.</li>
                                <li><strong>Seek peer or faculty help.</strong> If the subject was conceptually difficult, find a classmate who excelled in it or approach the faculty member who taught the course for guidance.</li>
                            </ol>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">VTU Maximum Duration Policy</h2>
                            <p>
                                Under the CBCS scheme, students have a maximum of <strong>6 years</strong> to complete a 4-year B.E. program (2 additional years beyond standard duration). If all credits are not completed within this period, students may be required to re-register for specific failed courses. Always verify the current policy with your college's examination cell, as VTU updates these rules through circulars.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Bigger Picture: A Backlog Is Not a Dead End</h2>
                            <p>
                                Many successful engineers and professionals had backlogs during their VTU years. What matters most is how quickly and decisively you act to clear them. Treat the supplementary exam with the same seriousness as the regular SEE, use PYQPs strategically, and don't let the stress of one subject damage your performance in others. Track your results as soon as they are published — our results checker can help you get your marks the moment they go live, so you can begin planning immediately.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Related Articles</h3>
                                <div className="flex flex-wrap gap-3 mt-2">
                                    <Link href="/articles/vtu-supplementary-exams" className="text-sm text-blue-600 hover:underline">VTU Supplementary Exams Guide →</Link>
                                    <Link href="/articles/exam-preparation-tips" className="text-sm text-blue-600 hover:underline">VTU Exam Preparation Tips →</Link>
                                </div>
                            </div>
                            <Link href="/check-results">
                                <span className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
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
