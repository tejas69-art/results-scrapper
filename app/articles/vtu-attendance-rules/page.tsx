import type { Metadata } from 'next';
import { ArrowLeft, Calendar, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'VTU Attendance Rules Explained - Condonation & Shortage',
    description: 'Everything you need to know about the 85% attendance rule, condonation policies, and what happens if you fall short in VTU.',
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
                                VTU Attendance Rules Explained: The 85% Mandate
                            </h1>
                            <div className="flex items-center text-gray-500 text-sm">
                                <span>Published on June 01, 2024</span>
                                <span className="mx-2">•</span>
                                <span>6 min read</span>
                            </div>
                        </header>

                        <div className="prose prose-emerald max-w-none text-gray-700 space-y-6">
                            <p className="text-lg leading-relaxed">
                                Visvesvaraya Technological University (VTU) is known for its strict academic policies, and perhaps none is more strictly enforced than the attendance requirement. Falling short of the required attendance can lead to a dreaded "NSAR" (Not Satisfied Attendance Requirement) or "Shortage of Attendance" status, preventing you from writing the semester-end external exams.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Golden Rule: 85% Attendance</h2>
                            <p>
                                According to VTU regulations, every student is expected to attend <strong>100%</strong> of the classes. However, acknowledging that students might face unforeseen circumstances such as illness or personal emergencies, VTU mandates a minimum of <strong>85% attendance</strong> in each subject (both theory and practical/laboratory).
                            </p>
                            <p>
                                Note that this 85% is calculated <em>per subject</em>, not as an aggregate across all subjects. If you have 95% in Mathematics but only 70% in Physics, you will be barred from taking the Physics examination.
                            </p>

                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8 flex items-start gap-4">
                                <AlertTriangle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-orange-800 text-lg mb-2">What Happens if You Fall Short?</h3>
                                    <p className="text-orange-900 text-sm">
                                        If your attendance in a subject falls below the minimum required threshold (even after condonation), you will not be permitted to appear for the University examination in that subject. You will have to re-register and repeat the course when it is offered next, which often means an extra year.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Condonation: The 10% Lifeline</h2>
                            <p>
                                What if you fall below 85% due to a genuine medical emergency? VTU provides a provision called "Condonation of Attendance."
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>The Vice-Chancellor of VTU has the authority to condone a shortage of attendance up to <strong>10%</strong>.</li>
                                <li>This means the absolute minimum attendance you can have, after condonation, is <strong>75%</strong>.</li>
                                <li>Condonation is <strong>not automatic</strong>. It must be recommended by the Principal of your college.</li>
                                <li>It is only granted for valid reasons, such as severe illness or participation in university-approved extracurricular activities (like sports or cultural events at the state/national level).</li>
                                <li>You must provide documented proof (e.g., a legitimate medical certificate from a recognized medical practitioner) immediately upon returning to college.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Calculate Your Attendance Percentage</h2>
                            <p>
                                Calculating your attendance is straightforward. You need to know the total number of classes conducted and the number of classes you attended.
                            </p>
                            <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto text-blue-900">
                                Attendance % = (Classes Attended / Total Classes Conducted) × 100
                            </pre>
                            <p>
                                For example, if a subject had 50 classes in a semester, and you attended 42:
                                <br />
                                <code>(42 / 50) × 100 = 84%</code>
                            </p>
                            <p>
                                In this scenario, you would be 1% short of the 85% mandate and would require condonation from the Principal to write the exam.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tips to Maintain Good Attendance</h2>
                            <ol className="list-decimal pl-6 space-y-3">
                                <li><strong>Track it yourself:</strong> Do not rely solely on the college administration. Keep a personal log of your absences for each subject.</li>
                                <li><strong>Buffer Zone:</strong> Always aim for 90% or above. Keep the 15% allowance strictly for emergencies, not for casual skipping.</li>
                                <li><strong>Communicate:</strong> If you are sick, inform your class teacher or HOD immediately. Don't wait until the end of the semester to submit medical certificates.</li>
                                <li><strong>Participate Smartly:</strong> If you represent the college in sports or fests, ensure your faculty coordinator has submitted your attendance exemption letters to the respective departments beforehand.</li>
                            </ol>
                        </div>
                        
                        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Check Your Academic Performance</h3>
                                <p className="text-sm text-gray-600">See how your attendance reflects on your final grades.</p>
                            </div>
                            <Link href="/check-results">
                                <span className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors text-sm">
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
