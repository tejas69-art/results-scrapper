import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Articles & Guides for VTU Students - Results, SGPA, Exams & Career',
    description: 'In-depth articles and guides for VTU students — covering SGPA calculation, grading system, attendance rules, exam strategies, backlogs, supplementary exams, career options, and more.',
};

export default function ArticlesIndex() {
    const articles = [
        {
            title: 'How to Calculate Your SGPA in VTU: A Complete Guide',
            slug: 'how-to-calculate-sgpa',
            description: 'A complete step-by-step guide to calculating SGPA under the VTU CBCS scheme. Includes the formula, full 8-subject example, grade point table, and common mistakes.',
            date: '2024-05-20',
            tag: 'Guide',
            tagColor: 'text-blue-600 bg-blue-50',
        },
        {
            title: 'The VTU Grading System (CBCS): Everything Explained',
            slug: 'vtu-grading-system',
            description: 'Demystifying the CBCS grading scheme — absolute vs relative grading, CIE and SEE marks, grace marks policy, class declaration thresholds, and CGPA to percentage conversion.',
            date: '2024-05-18',
            tag: 'Explained',
            tagColor: 'text-emerald-600 bg-emerald-50',
        },
        {
            title: 'VTU Attendance Rules: The 85% Mandate and Condonation Explained',
            slug: 'vtu-attendance-rules',
            description: 'Everything about the 85% attendance rule — how to calculate it, condonation, medical leave, duty leave, what happens if you fall short, and tips to stay safe.',
            date: '2024-06-01',
            tag: 'Policy',
            tagColor: 'text-teal-600 bg-teal-50',
        },
        {
            title: 'Top Strategies to Ace Your VTU External Exams',
            slug: 'exam-preparation-tips',
            description: 'Proven strategies including PYQP analysis, the 3-module approach, presentation tips, CIE maximization, subject-specific tactics, and a 30-day study plan.',
            date: '2024-06-05',
            tag: 'Tips',
            tagColor: 'text-purple-600 bg-purple-50',
        },
        {
            title: 'How VTU Results Are Published: A Complete Guide',
            slug: 'how-vtu-results-work',
            description: 'The full behind-the-scenes process — valuation camps, data entry, audit stages, publication on results.vtu.ac.in, typical timelines, and what to do right after results drop.',
            date: '2024-07-10',
            tag: 'Guide',
            tagColor: 'text-blue-600 bg-blue-50',
        },
        {
            title: 'VTU Backlogs Explained: How to Clear Them Fast and Protect Your Career',
            slug: 'vtu-backlogs-guide',
            description: 'What a backlog is, how it hits your SGPA, how different companies treat active vs cleared backlogs, and concrete strategies to clear arrears in supplementary exams.',
            date: '2024-07-15',
            tag: 'Guide',
            tagColor: 'text-red-600 bg-red-50',
        },
        {
            title: 'Career After VTU Engineering: Your Complete Roadmap',
            slug: 'career-after-vtu',
            description: 'A comprehensive look at all career options after a VTU B.E. — campus placements, GATE, MS abroad, MBA, government jobs, PSUs, entrepreneurship, and profile-building tips.',
            date: '2024-08-01',
            tag: 'Career',
            tagColor: 'text-indigo-600 bg-indigo-50',
        },
        {
            title: 'How to Read Your VTU Marksheet: Every Field Explained',
            slug: 'reading-vtu-marksheet',
            description: 'Decode every column on your VTU result page — USN, subject codes, CIE/SEE marks, letter grades, SGPA, CGPA, status codes (AB, W, NSAR), and what to do if you spot an error.',
            date: '2024-08-10',
            tag: 'Explained',
            tagColor: 'text-teal-600 bg-teal-50',
        },
        {
            title: 'VTU Supplementary Exams: Complete Guide to Registration and Preparation',
            slug: 'vtu-supplementary-exams',
            description: 'Everything about VTU supplementary (re) exams — eligibility, registration process step-by-step, how CIE marks carry forward, preparation strategy, and what happens after you pass.',
            date: '2024-08-20',
            tag: 'Guide',
            tagColor: 'text-orange-600 bg-orange-50',
        },
        {
            title: 'CGPA vs SGPA in VTU: Key Differences and What Actually Matters',
            slug: 'cgpa-vs-sgpa-vtu',
            description: 'Clear up the CGPA vs SGPA confusion — definitions, calculation formulas, a 4-semester example, and which metric matters more for placements, GATE, MS abroad, and your degree class.',
            date: '2024-09-01',
            tag: 'Explained',
            tagColor: 'text-blue-600 bg-blue-50',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100 mb-6 border border-blue-200">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-blue-700">Resources</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Articles & Guides</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        In-depth guides for VTU students — from understanding your results and calculating SGPA, to clearing backlogs and planning your career after engineering.
                    </p>
                </div>

                <div className="grid gap-6">
                    {articles.map((article) => (
                        <Link href={`/articles/${article.slug}`} key={article.slug} className="block group">
                            <Card className="transition-all duration-300 hover:shadow-lg hover:border-blue-300 border-gray-200">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded ${article.tagColor}`}>
                                            {article.tag}
                                        </span>
                                        <CardDescription className="text-sm text-gray-500">
                                            {article.date}
                                        </CardDescription>
                                    </div>
                                    <CardTitle className="text-xl md:text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {article.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        {article.description}
                                    </p>
                                    <div className="mt-4 text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        Read Article →
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
