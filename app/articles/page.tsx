import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Articles & Guides - VTU Results Checker',
    description: 'Read our latest guides on VTU results calculation, grading system, and academic tips.',
};

export default function ArticlesIndex() {
    const articles = [
        {
            title: 'How to Calculate Your SGPA Correctly',
            slug: 'how-to-calculate-sgpa',
            description: 'A step-by-step guide to understanding the VTU credit system and calculating your Semester Grade Point Average manually.',
            date: '2024-05-20'
        },
        {
            title: 'Understanding the VTU Grading System (CBCS)',
            slug: 'vtu-grading-system',
            description: 'Demystifying the Choice Based Credit System (CBCS), grade points, and what each letter grade means for your degree.',
            date: '2024-05-18'
        }
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
                        Everything you need to know about your academic results and performance analysis.
                    </p>
                </div>

                <div className="grid gap-6">
                    {articles.map((article) => (
                        <Link href={`/articles/${article.slug}`} key={article.slug} className="block group">
                            <Card className="transition-all duration-300 hover:shadow-lg hover:border-blue-300 border-gray-200">
                                <CardHeader>
                                    <CardTitle className="text-xl md:text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {article.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm text-gray-500">
                                        Published on {article.date}
                                    </CardDescription>
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
