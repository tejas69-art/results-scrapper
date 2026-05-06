import type { Metadata } from 'next';
import { ArrowLeft, BookOpen, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Tips for VTU External Exams - Maximize Your Grades',
    description: 'Proven strategies, study techniques, and tips for preparing for your semester-end VTU external exams and maximizing your final SGPA.',
};

export default function ExamPreparationPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/articles" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Articles
                </Link>

                <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-purple-500 to-fuchsia-600 flex items-center justify-center">
                        <Target className="w-20 h-20 text-white/90" />
                    </div>

                    <div className="p-8 md:p-12">
                        <header className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Top Strategies to Ace Your VTU External Exams
                            </h1>
                            <div className="flex items-center text-gray-500 text-sm">
                                <span>Published on June 05, 2024</span>
                                <span className="mx-2">•</span>
                                <span>8 min read</span>
                            </div>
                        </header>

                        <div className="prose prose-purple max-w-none text-gray-700 space-y-6">
                            <p className="text-lg leading-relaxed">
                                Preparing for VTU external examinations can be a daunting task, especially with a vast syllabus and technical subjects. However, thousands of students excel every semester not necessarily by studying 24/7, but by studying <em>smart</em>. Here are proven strategies to help you maximize your scores and boost your SGPA.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. The Power of Previous Year Question Papers (PYQPs)</h2>
                            <p>
                                If there is a single most important tip for VTU exams, this is it. VTU has a known tendency to repeat question patterns and sometimes exact questions from previous years.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Collect at least the last 3-4 years of question papers for your specific scheme (e.g., 2018 scheme vs 2021 scheme).</li>
                                <li>Analyze which topics are frequently asked. You will often notice that 60-70% of the paper comes from a core set of repeated concepts.</li>
                                <li>Practice solving these papers under timed conditions to improve your writing speed.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Understand the Choice-Based Credit System (CBCS) Structure</h2>
                            <p>
                                Don't just study blindly from page 1 to page 500. Understand how the question paper is structured. Usually, the syllabus is divided into 5 modules.
                            </p>
                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-5 my-4">
                                <h3 className="font-bold text-purple-900 mb-2">Module Strategy</h3>
                                <p className="text-sm text-purple-800">
                                    The exam paper typically has 10 full questions, with 2 questions from each module. You must answer 5 full questions, choosing exactly one from each module.
                                    <br/><br/>
                                    <strong>Strategy:</strong> Ensure you are 100% thorough with at least 3 entire modules. This guarantees you 60 marks easily. For the remaining 2 modules, study the most frequently asked questions (using PYQPs).
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Presentation Matters as Much as Content</h2>
                            <p>
                                VTU evaluators have hundreds of papers to check in a short time. Make your paper easy to evaluate. A neat presentation can fetch you those extra crucial marks.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Write neatly:</strong> Use a high-quality pen. Underline key terms, definitions, and final answers with a pencil.</li>
                                <li><strong>Draw diagrams:</strong> In engineering, a labeled diagram is often worth a thousand words. Draw large, clear block diagrams, circuit diagrams, or flowcharts wherever relevant.</li>
                                <li><strong>Use bullet points:</strong> Avoid writing massive paragraphs. Break your answers down into crisp, numbered points.</li>
                                <li><strong>Start fresh:</strong> Always start a new "full question" (e.g., Q1a, Q1b) on a new page.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Maximize Your Internals (CIE)</h2>
                            <p>
                                Your final grade is a combination of Continuous Internal Evaluation (CIE) and Semester End Examination (SEE). The maximum marks for internals are usually 50 (depending on your scheme).
                            </p>
                            <p>
                                Getting 40+ out of 50 in internals takes off immense pressure from the external exam. If you score 45 in internals, you only need 45 in externals to secure an 'S' or 'A' grade (90 total). Treat your internal assessment tests with the same seriousness as external exams.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Stick to Prescribed Textbooks</h2>
                            <p>
                                While local author books (like Sunstar or technical publications) are great for quick revision and passing, referring to the standard textbooks prescribed in the VTU syllabus is essential for securing distinction. The question paper setters reference these standard textbooks. Look at the reference list at the end of your syllabus copy.
                            </p>
                        </div>
                        
                        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Ready to Check Your Progress?</h3>
                                <p className="text-sm text-gray-600">See if your preparation paid off.</p>
                            </div>
                            <Link href="/check-results">
                                <span className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors text-sm">
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
