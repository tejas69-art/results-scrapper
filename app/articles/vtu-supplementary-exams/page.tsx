import type { Metadata } from 'next';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'VTU Supplementary Exams: Complete Guide to Registration, Dates & Preparation',
    description: 'Everything VTU students need to know about supplementary examinations — eligibility, registration process, timelines, how CIE marks carry forward, and how to prepare effectively.',
};

export default function VTUSupplementaryExamsPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/articles" className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Articles
                </Link>

                <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                        <RefreshCw className="w-20 h-20 text-white/90" />
                    </div>

                    <div className="p-8 md:p-12">
                        <header className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                VTU Supplementary Exams: Your Complete Guide to Eligibility, Registration, and Preparation
                            </h1>
                            <div className="flex items-center text-gray-500 text-sm">
                                <span>Published on August 20, 2024</span>
                                <span className="mx-2">•</span>
                                <span>9 min read</span>
                            </div>
                        </header>

                        <div className="prose prose-orange max-w-none text-gray-700 space-y-6">
                            <p className="text-lg leading-relaxed">
                                If you have received an 'F' grade in one or more subjects at VTU, the supplementary examination is your primary route to clearing those backlogs. Understanding the process — from when the exam is held, to how to register, to how your marks are calculated — is critical to making the most of this opportunity. This guide covers everything you need to know about VTU supplementary exams.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is a VTU Supplementary Examination?</h2>
                            <p>
                                A supplementary examination (also informally called a "re-exam," "arrear exam," or "backlog exam") is a university-conducted examination that allows students who have failed one or more subjects to reappear for the Semester End Examination (SEE) component of those subjects. It is NOT a separate course — you are retaking the same exam, for the same syllabus, under the same marking scheme.
                            </p>
                            <p>
                                Key points:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>The supplementary exam only covers the SEE component. Your CIE (internal) marks from when you originally took the course are retained and carry forward.</li>
                                <li>If you pass the supplementary exam, the new grade replaces your 'F' in your academic record for that original semester.</li>
                                <li>Your SGPA for that original semester is recalculated with the new grade — improving your academic record retroactively.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Who is Eligible for the Supplementary Exam?</h2>
                            <p>Any VTU student who has received an 'F' grade in a subject is eligible to appear for the supplementary exam for that subject, subject to these conditions:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Attendance requirement for the supplementary:</strong> Since you already attended the original course, there is no new attendance requirement for the supplementary exam itself. You simply register and appear.</li>
                                <li><strong>Maximum duration limit:</strong> If you have been in the program for more than the maximum allowed duration (typically 6 years for a 4-year program), you may not be eligible. Consult your college's examination cell.</li>
                                <li><strong>Fee payment:</strong> Supplementary exam registration requires payment of a per-subject fee. This fee is non-refundable, so register only for subjects you intend to appear for.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">When Are VTU Supplementary Exams Held?</h2>
                            <p>
                                VTU typically conducts supplementary examinations once a year, though the exact scheduling can vary:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Odd semester supplementary (for subjects failed in odd semester SEE):</strong> Usually held around February–April, a few months after the odd semester results are published.</li>
                                <li><strong>Even semester supplementary:</strong> Usually held around August–October, following the even semester results.</li>
                                <li>Sometimes VTU conducts a combined supplementary (odd + even semester arrears together). The actual dates are announced through official VTU circulars and your college's exam notice boards.</li>
                            </ul>
                            <p className="font-medium text-orange-700 bg-orange-50 border border-orange-200 rounded-lg p-4">
                                Important: There is no fixed calendar. Always watch for official VTU notifications and your college's examination cell announcements. Missing the registration deadline typically means waiting another full year.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Registration Process: Step by Step</h2>
                            <ol className="list-decimal pl-6 space-y-3">
                                <li>
                                    <strong>Wait for the official notification.</strong> VTU publishes a circular announcing the supplementary exam schedule, including registration dates and fees. This is usually published 6–8 weeks before the exam.
                                </li>
                                <li>
                                    <strong>Contact your college's examination cell.</strong> Registration for supplementary exams is done through your college, not directly with VTU. Approach the college exam cell as soon as the notification is out.
                                </li>
                                <li>
                                    <strong>Select your subjects carefully.</strong> You must specify which failed subjects you want to appear for. Cross-check your result to confirm the subject codes of your arrears. See our <Link href="/articles/reading-vtu-marksheet" className="text-orange-600 hover:underline">marksheet reading guide</Link> for help identifying subject codes.
                                </li>
                                <li>
                                    <strong>Pay the exam fee.</strong> Fees are typically paid via Demand Draft (DD) in favor of "The Registrar, VTU" or through an online payment portal, depending on the current process. Confirm the payment method with your college.
                                </li>
                                <li>
                                    <strong>Collect your hall ticket.</strong> A few days before the exam, your hall ticket (admit card) will be issued through your college. You MUST carry it to the exam hall along with your original college ID.
                                </li>
                            </ol>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How CIE Marks Carry Forward</h2>
                            <p>
                                Your CIE marks from the original attempt of the course are automatically carried forward. This means:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>If you had 40/50 in CIE and scored 30/50 (60/100 in the SEE) — which scales to 15/50 — giving a total of 55, you would pass with a 'D' grade. No need to redo any internal assessments.</li>
                                <li>If your CIE itself was very low (e.g., 20/50) and you were unable to score enough in the SEE, the high SEE score required to compensate is substantial. In such cases, check with your college whether there is any mechanism to improve CIE marks (some colleges allow this under exceptional circumstances, but it is not a standard VTU provision).</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Prepare for the Supplementary Exam</h2>
                            <p>Since you are only required to pass the SEE component (scoring 35+ out of the actual 100-mark exam), your preparation strategy should be highly focused:</p>
                            <ol className="list-decimal pl-6 space-y-3">
                                <li><strong>Start with PYQPs.</strong> Solve the last 5 years of question papers for your specific subject and scheme. Identify which questions and topics are repeated most frequently. These are your highest priority areas.</li>
                                <li><strong>Focus on the 3-module strategy.</strong> The exam has 5 modules; you answer one question from each. Master at least 3 modules completely before attempting to cover everything — this guarantees 60 marks.</li>
                                <li><strong>Don't re-study everything from scratch.</strong> Focus only on the topics that appear in PYQPs. The supplementary exam typically follows the same question pattern as the regular exam.</li>
                                <li><strong>Practice writing neatly and quickly.</strong> Presentation matters even in supplementary exams. Use bullet points, diagrams, and clear headings. See our full exam tips guide for detailed presentation strategies.</li>
                                <li><strong>Give yourself at least 4–6 weeks of preparation</strong> for each failed subject. Cramming a 5-module course in less time rarely yields passing results.</li>
                            </ol>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">After the Supplementary Exam: What Happens Next</h2>
                            <p>
                                Results for supplementary exams are published separately from the regular semester results, usually 4–8 weeks after the exam. You can check your result on the VTU results portal using your USN, or use our result checker tool.
                            </p>
                            <p>
                                If you pass, your academic record is updated — the 'F' grade is replaced, and your SGPA/CGPA for the relevant semester is recalculated. Your degree certificate and consolidated marksheet (issued at graduation) will show the improved grades, though it will still note that the subject was cleared in a supplementary attempt.
                            </p>
                            <p>
                                If you still fail the supplementary exam, you can appear again in the next supplementary window. There is no limit on the number of supplementary attempts within the maximum duration policy.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Related Articles</h3>
                                <div className="flex flex-wrap gap-3 mt-2">
                                    <Link href="/articles/vtu-backlogs-guide" className="text-sm text-blue-600 hover:underline">VTU Backlogs Complete Guide →</Link>
                                    <Link href="/articles/exam-preparation-tips" className="text-sm text-blue-600 hover:underline">VTU Exam Preparation Tips →</Link>
                                </div>
                            </div>
                            <Link href="/check-results">
                                <span className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
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
