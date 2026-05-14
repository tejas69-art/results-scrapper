import type { Metadata } from 'next';
import { ArrowLeft, Calendar, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'VTU Attendance Rules Explained: 85%, Condonation & What Happens if You Fall Short',
    description: 'A complete guide to VTU attendance rules — the 85% mandate, how condonation works, medical leave policies, duty leave, and practical tips to protect your exam eligibility.',
};

export default function AttendanceRulesPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/articles" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Articles
                </Link>

                <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                        <Calendar className="w-20 h-20 text-white/90" />
                    </div>

                    <div className="p-8 md:p-12">
                        <header className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                VTU Attendance Rules Explained: The 85% Mandate and What It Means for You
                            </h1>
                            <div className="flex items-center text-gray-500 text-sm">
                                <span>Published on June 01, 2024</span>
                                <span className="mx-2">•</span>
                                <span>9 min read</span>
                            </div>
                        </header>

                        <div className="prose prose-emerald max-w-none text-gray-700 space-y-6">
                            <p className="text-lg leading-relaxed">
                                Of all the academic regulations at Visvesvaraya Technological University, the attendance requirement is arguably the one that causes the most stress among students. A shortage of attendance can prevent you from sitting in your semester-end exams — regardless of how prepared you are. This article comprehensively explains the rules, what happens when you fall short, the condonation process, different types of leaves, and practical strategies to stay on the right side of the 85% mark.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Golden Rule: 85% Attendance Per Subject</h2>
                            <p>
                                According to VTU regulations, every student must maintain a minimum of <strong>85% attendance in each subject individually</strong> — including both theory classes and practical (laboratory) sessions. This is not an aggregate rule. You cannot compensate for poor attendance in Physics by having 100% in Mathematics. Each subject is evaluated independently.
                            </p>
                            <p>
                                For example, if your Theory of Computation subject has 60 classes in a semester, you must attend at least 51 of them (85% of 60 = 51). Missing 10 or more would put you in attendance shortage for that specific subject.
                            </p>

                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8 flex items-start gap-4">
                                <AlertTriangle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-orange-800 text-lg mb-2">What Happens if You Fall Short?</h3>
                                    <p className="text-orange-900 text-sm">
                                        If your attendance in any subject falls below the minimum required threshold — even after applying for condonation — you will not be permitted to appear in the University Semester End Examination (SEE) for that subject. You will receive a "NSAR" (Not Satisfied Attendance Requirement) status. This means you must re-register for the course the next time it is offered, which typically results in a year gap or a delayed graduation.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Calculate Your Attendance Percentage</h2>
                            <p>The formula is straightforward:</p>
                            <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto text-blue-900">
                                Attendance (%) = (Classes Attended / Total Classes Conducted) × 100
                            </pre>
                            <p>
                                Example: If a subject had 72 classes and you attended 62:
                                <br />
                                <code>(62 / 72) × 100 = 86.1%</code> — You are safe, just above the 85% mark.
                            </p>
                            <p>
                                But if you attended only 59: <code>(59 / 72) × 100 = 81.9%</code> — You are in shortage and will need to apply for condonation.
                            </p>
                            <p>
                                Most colleges update attendance registers bi-weekly. It is your responsibility to track your own attendance — do not wait for the college to notify you of a shortage. By the time the shortage is officially communicated, you may have already missed your window to recover.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Condonation: The 10% Lifeline</h2>
                            <p>
                                If you fall below 85% due to a genuine emergency, VTU provides a provision called <strong>Condonation of Attendance</strong>. This allows the Vice-Chancellor to grant an exemption of up to 10% shortage, bringing the effective minimum down to 75%.
                            </p>
                            <p>Key points about condonation:</p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Not automatic:</strong> Condonation must be formally recommended by the Principal of your college. You cannot apply to VTU directly — you must go through your institution.</li>
                                <li><strong>Only for valid reasons:</strong> The most commonly accepted reasons are:
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>Serious illness requiring hospitalization (medical certificate from a registered medical practitioner required)</li>
                                        <li>Participation in inter-university/state/national-level sports or cultural events on behalf of VTU or your college</li>
                                        <li>Participation in NSS/NCC camps approved by the university</li>
                                    </ul>
                                </li>
                                <li><strong>Documentation is mandatory:</strong> You must submit proof immediately upon returning to college. Submitting a medical certificate at the end of the semester will almost certainly be rejected.</li>
                                <li><strong>The absolute floor is 75%:</strong> Even with a granted condonation, you cannot write the exam if attendance is below 75%. There is no exception to this.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Leaves and How They Work</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Medical Leave</h3>
                            <p>
                                If you fall sick during the semester, approach your class teacher or HOD immediately with a medical certificate. Some colleges have an internal policy of marking these days as "on duty" rather than absent, provided the certificate is from a recognized hospital. Even if the college does not grant "on duty" status, submitting the certificate early creates a paper trail that strengthens any future condonation application.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Duty Leave (OD)</h3>
                            <p>
                                Duty leave is granted when you are representing the college or university in an official capacity. This includes sports events, technical fests, cultural festivals, paper presentations at other colleges, or industrial visits organized by the department. For OD leave to count, the event must be officially approved by your Head of Department <em>before</em> you leave. If you attend an event without prior approval, those days will count as absent.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">VTU-Recognized National Events</h3>
                            <p>
                                Students selected to represent Karnataka or VTU at national or international sporting events are entitled to attendance consideration under VTU special provisions. The sports coordinator at your college needs to formally communicate this to the university and the college administration.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Happens in Practice: The Typical Timeline</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Week 1–10:</strong> Attendance is taken regularly. Students should be tracking their own attendance.</li>
                                <li><strong>Week 10–12:</strong> Most colleges conduct an internal attendance audit and post shortage lists. Check the notice board and your college's ERP portal.</li>
                                <li><strong>Week 14–15:</strong> Final attendance is frozen. The Principal submits condonation applications to VTU if applicable.</li>
                                <li><strong>Before SEE:</strong> Hall tickets are issued only to students with satisfactory attendance. Students with NSAR status do not receive hall tickets for affected subjects.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Practical Tips to Protect Your Attendance</h2>
                            <ol className="list-decimal pl-6 space-y-3">
                                <li><strong>Always target 90%+, not 85%:</strong> Aim for a buffer. Target 90% so that if you fall sick for a few days, you're still comfortably above 85% without needing condonation.</li>
                                <li><strong>Track it subject by subject, not as an average:</strong> Your aggregate might look fine, but one subject with low attendance will still get you barred. Keep a personal spreadsheet or use your college's app to track each subject independently.</li>
                                <li><strong>Communicate proactively:</strong> If you are sick or dealing with a family emergency, WhatsApp your class teacher and CC the HOD. Even a short message establishes a record.</li>
                                <li><strong>Don't skip labs casually:</strong> Lab sessions are typically 3 hours per session, but attendance is counted as a single entry. Missing one lab session can equal missing multiple theory classes in percentage terms because labs often have fewer total sessions.</li>
                                <li><strong>Get OD approved in advance:</strong> If you're attending an event that qualifies as duty leave, get the OD letter signed by your HOD before you go — not after you return.</li>
                            </ol>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Related Articles</h3>
                                <div className="flex flex-wrap gap-3 mt-2">
                                    <Link href="/articles/vtu-grading-system" className="text-sm text-blue-600 hover:underline">VTU Grading System Explained →</Link>
                                    <Link href="/articles/exam-preparation-tips" className="text-sm text-blue-600 hover:underline">Tips for VTU External Exams →</Link>
                                </div>
                            </div>
                            <Link href="/check-results">
                                <span className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors text-sm whitespace-nowrap">
                                    Check Results Tool
                                </span>
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
