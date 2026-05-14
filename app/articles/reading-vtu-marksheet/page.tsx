import type { Metadata } from 'next';
import { ArrowLeft, FileSearch } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'How to Read Your VTU Marksheet: A Complete Guide to Grades and Fields',
    description: 'Understand every field on your VTU marksheet — USN, subject codes, CIE/SEE marks, letter grades, SGPA, result status, and what each column means for your academic record.',
};

export default function ReadingVTUMarksheetPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/articles" className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Articles
                </Link>

                <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center">
                        <FileSearch className="w-20 h-20 text-white/90" />
                    </div>

                    <div className="p-8 md:p-12">
                        <header className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                How to Read Your VTU Marksheet: Every Field Explained
                            </h1>
                            <div className="flex items-center text-gray-500 text-sm">
                                <span>Published on August 10, 2024</span>
                                <span className="mx-2">•</span>
                                <span>8 min read</span>
                            </div>
                        </header>

                        <div className="prose prose-teal max-w-none text-gray-700 space-y-6">
                            <p className="text-lg leading-relaxed">
                                When your VTU results are published, the result page can feel overwhelming at first glance — a table full of subject codes, numbers, letter grades, and result statuses. This guide decodes every single field on your VTU marksheet, so you know exactly what you are looking at and what each value means for your academic standing.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Basic Identifying Information</h2>
                            <p>At the top of your VTU result page, you will find:</p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>
                                    <strong>USN (University Seat Number):</strong> Your unique identifier at VTU. It follows a specific pattern: e.g., <code>1MH21CS001</code>. Breaking it down — <code>1</code> = lateral entry marker (for regular students it is typically absent or represented differently), <code>MH</code> = college code (MSRIT in this example), <code>21</code> = year of joining, <code>CS</code> = branch code (Computer Science), <code>001</code> = roll number. Your USN is used for all official purposes — exam registration, results, degree certificate.
                                </li>
                                <li>
                                    <strong>Student Name:</strong> As registered with VTU. This must match your school certificates exactly. Any discrepancy needs to be corrected through VTU's name correction process before you graduate.
                                </li>
                                <li>
                                    <strong>Semester:</strong> Which semester's results are being displayed. Results for different semesters are published separately.
                                </li>
                                <li>
                                    <strong>Scheme:</strong> The regulation/scheme under which you are studying (e.g., 2021 Scheme, 2018 Scheme). The scheme determines your syllabus, credit structure, and grade boundaries.
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Subject-Wise Marks Table</h2>
                            <p>The main body of your marksheet is a table. Here is what each column means:</p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>
                                    <strong>Subject Code:</strong> A unique alphanumeric code identifying the subject. For example, <code>21CS31</code> means: 2021 Scheme (21), Computer Science branch (CS), 3rd semester (3), 1st subject (1). Subject codes are used in applications, re-valuation requests, and wherever you need to specify a subject.
                                </li>
                                <li>
                                    <strong>Subject Name:</strong> The full name of the course as per the VTU syllabus.
                                </li>
                                <li>
                                    <strong>Credits:</strong> The number of credits assigned to this subject. This is what determines how much it weighs in your SGPA calculation.
                                </li>
                                <li>
                                    <strong>CIE (Continuous Internal Evaluation):</strong> Your internal assessment marks, out of 50. This is submitted by your college to VTU before the semester-end exam. It includes your internal tests, lab records, assignments, and any other internal assessments.
                                </li>
                                <li>
                                    <strong>SEE (Semester End Examination):</strong> Your university exam score, shown here out of 50 (scaled from the actual 100-mark exam). So if you see 38 in the SEE column, you actually scored 76 out of 100 in the university exam.
                                </li>
                                <li>
                                    <strong>Total:</strong> CIE + SEE = your combined marks out of 100. This total determines your letter grade.
                                </li>
                                <li>
                                    <strong>Grade:</strong> The letter grade corresponding to your total (S, A, B, C, D, E, or F). See our <Link href="/articles/vtu-grading-system" className="text-teal-600 hover:underline">VTU Grading System guide</Link> for the full breakdown.
                                </li>
                                <li>
                                    <strong>Grade Points:</strong> The numerical grade point value corresponding to your letter grade (10 for S, 9 for A, 8 for B, etc.). This is the value used in the SGPA formula.
                                </li>
                                <li>
                                    <strong>Result:</strong> Either P (Pass) or F (Fail) for each subject. You must have P in all subjects to be eligible for the next semester without a backlog.
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Summary Row: SGPA and Overall Result</h2>
                            <p>At the bottom of the subject table, you will find a summary row with:</p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>
                                    <strong>SGPA:</strong> Your Semester Grade Point Average, calculated using the formula Σ(Ci × Gi) / ΣCi. This is the key academic metric for the semester. For a detailed breakdown of how this is computed, see our <Link href="/articles/how-to-calculate-sgpa" className="text-teal-600 hover:underline">SGPA calculation guide</Link>.
                                </li>
                                <li>
                                    <strong>CGPA:</strong> Your Cumulative Grade Point Average up to and including this semester — a weighted average of all your SGPAs from semester 1 to the current one.
                                </li>
                                <li>
                                    <strong>Overall Result:</strong> "PASS" (all subjects cleared, no active backlogs) or "FAIL" (one or more subjects with an F grade). If "FAIL," the number of failed subjects may also be listed.
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Special Status Codes and Abbreviations</h2>
                            <p>You may encounter these codes on your marksheet, particularly in the result or grade columns:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>AB (Absent):</strong> You did not appear for the SEE of this subject. An AB is treated as a fail for grade purposes and creates a backlog.</li>
                                <li><strong>P (Pending):</strong> Sometimes seen during partial result publication — the marks for this subject are not yet finalized. Recheck after a few days.</li>
                                <li><strong>W (Withheld):</strong> Your result for this subject has been withheld, typically due to a malpractice or exam violation inquiry. No grade is assigned until the inquiry is resolved.</li>
                                <li><strong>NSAR:</strong> Not Satisfied Attendance Requirement — your attendance in this subject was too low to be eligible for the SEE. This is handled at the college level before the exam, but if it appears on your result, it means you were barred from writing that paper.</li>
                                <li><strong>EX (Exempted):</strong> In some older schemes, students with very high CIE marks could be exempted from re-appearing in the SEE for a subject they had marginally failed. This is rare in newer schemes.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Do If You Spot an Error</h2>
                            <p>
                                Errors on VTU marksheets — though uncommon — do occur. If you believe there is a mistake, take these steps immediately:
                            </p>
                            <ol className="list-decimal pl-6 space-y-3">
                                <li><strong>Check your CIE marks:</strong> If the CIE marks seem wrong, contact your college's examination cell first. CIE discrepancies must be raised with the college, not directly with VTU.</li>
                                <li><strong>Apply for a photocopy of your SEE answer script:</strong> VTU allows students to request a photocopy of their valued answer book. This is the first step before any re-valuation claim. There is a fee per subject and a deadline of usually 2–4 weeks from result publication.</li>
                                <li><strong>Apply for re-valuation:</strong> If the photocopy reveals that marks are incorrectly totaled or that valid answers were not credited, you can apply for re-valuation. The re-valued marks (higher or lower) replace the original marks.</li>
                                <li><strong>Contact your college's examination cell:</strong> For any discrepancy involving your student details (name spelling, USN errors, missing subjects), the college must initiate the correction through VTU.</li>
                            </ol>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Checking Your Results Online</h2>
                            <p>
                                VTU publishes results on <strong>results.vtu.ac.in</strong>. The page requires your full USN and a captcha code. Our results checker tool on this website simplifies this process — enter your USN and captcha, and get a clean view of your full marksheet with all the fields decoded as described above.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Related Articles</h3>
                                <div className="flex flex-wrap gap-3 mt-2">
                                    <Link href="/articles/vtu-grading-system" className="text-sm text-blue-600 hover:underline">VTU Grading System Explained →</Link>
                                    <Link href="/articles/how-to-calculate-sgpa" className="text-sm text-blue-600 hover:underline">How to Calculate Your SGPA →</Link>
                                </div>
                            </div>
                            <Link href="/check-results">
                                <span className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
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
