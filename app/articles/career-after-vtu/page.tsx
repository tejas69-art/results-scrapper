import type { Metadata } from 'next';
import { ArrowLeft, Briefcase } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Career After VTU Engineering: What to Do Next After Graduation',
    description: 'A complete guide for VTU graduates on career options — placements, higher studies (MTech/MS/MBA), GATE preparation, startup ecosystem, government jobs, and building your profile.',
};

export default function CareerAfterVTUPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/articles" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Articles
                </Link>

                <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-indigo-600 to-violet-700 flex items-center justify-center">
                        <Briefcase className="w-20 h-20 text-white/90" />
                    </div>

                    <div className="p-8 md:p-12">
                        <header className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Career After VTU Engineering: Your Complete Roadmap After Graduation
                            </h1>
                            <div className="flex items-center text-gray-500 text-sm">
                                <span>Published on August 01, 2024</span>
                                <span className="mx-2">•</span>
                                <span>11 min read</span>
                            </div>
                        </header>

                        <div className="prose prose-indigo max-w-none text-gray-700 space-y-6">
                            <p className="text-lg leading-relaxed">
                                Completing a B.E. from a VTU-affiliated college is a significant achievement — but for many students, the bigger challenge begins right after graduation: figuring out what to do next. Whether you want to get placed in a company, pursue higher studies, prepare for GATE, or explore entrepreneurship, this guide lays out your realistic options and how to pursue each one effectively.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Option 1: Campus Placements</h2>
                            <p>
                                The most common immediate path after a VTU degree is campus placement through your college's Training and Placement (T&P) cell. Companies visit campuses between August and March of your final year, and they recruit across different profiles:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>IT/Software roles:</strong> System Engineer, Software Developer, Associate Engineer — the most abundant roles for CSE, ISE, and ECE graduates from companies like Infosys, Wipro, TCS, Cognizant, and Capgemini.</li>
                                <li><strong>Core engineering roles:</strong> Manufacturing, design, and R&D roles for Mechanical, Civil, EEE, and Chemical graduates from companies in automotive, construction, and energy sectors.</li>
                                <li><strong>Product companies (FAANG-adjacent):</strong> Companies like Amazon, Microsoft, Cisco, and Samsung recruit from select VTU colleges with higher GPA cutoffs and a more rigorous selection process.</li>
                            </ul>
                            <p>
                                To maximize your placement chances: maintain a CGPA above 6.5 (ideally 7.5+), have zero active backlogs at the time of applying, build a portfolio with projects and internships, and prepare for aptitude tests (Quantitative + Verbal + Logical Reasoning) alongside DSA for software roles.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Option 2: GATE and MTech</h2>
                            <p>
                                The Graduate Aptitude Test in Engineering (GATE) is the gateway to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Admission to MTech programs at IITs, NITs, and top state universities</li>
                                <li>Recruitment at PSUs (Public Sector Undertakings) like BHEL, NTPC, IOCL, BSNL, and DRDO</li>
                                <li>Research fellowships at CSIR and BARC</li>
                            </ul>
                            <p>
                                GATE is highly competitive, with a good score typically requiring 6–12 months of dedicated preparation. Start early — ideally in your 7th semester — and focus on core fundamentals of your branch. VTU's curriculum aligns reasonably well with GATE syllabus for most branches.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Option 3: MS Abroad</h2>
                            <p>
                                Pursuing a Master of Science (MS) at a foreign university — particularly in the United States, Canada, Germany, or Australia — is a popular path for VTU graduates, especially those in CSE, ECE, and Mechanical.
                            </p>
                            <p>
                                What you typically need:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>A CGPA above 7.0 (higher for top schools — 8.0+ for universities in the US top 50)</li>
                                <li>GRE score (required by US and some other universities, though some have made it optional post-COVID)</li>
                                <li>IELTS/TOEFL for English proficiency</li>
                                <li>Strong Statement of Purpose (SOP) and Letters of Recommendation (LORs) from faculty</li>
                                <li>Research experience or internships are significant differentiators</li>
                            </ul>
                            <p>
                                Germany and France offer tuition-free or low-cost MS programs, making them increasingly popular alternatives to expensive US programs.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Option 4: MBA After Engineering</h2>
                            <p>
                                An MBA from a reputable institution (IIM, XLRI, ISB, or top state B-schools) can pivot your career from a technical track to management, product management, consulting, or finance. The CAT exam is the primary gateway to IIMs. Engineering students historically perform well in CAT's Quantitative Aptitude section, making this a viable path.
                            </p>
                            <p>
                                Most MBA programs prefer 2+ years of work experience, so it is common to work for 2–3 years after your VTU degree before pursuing an MBA. This work experience also strengthens your MBA application.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Option 5: Government Jobs and PSUs</h2>
                            <p>
                                Multiple government sector opportunities are open to VTU B.E. graduates:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>PSU recruitment via GATE score:</strong> ONGC, BPCL, IOCL, BHEL, NTPC, and many more recruit engineers based on GATE scores — no additional interview required in some cases.</li>
                                <li><strong>KPSC (Karnataka Public Service Commission):</strong> State-level government engineering jobs including PWD, KEB, and KRIDL.</li>
                                <li><strong>Indian Engineering Services (IES):</strong> Conducted by UPSC, this is the most prestigious government engineering exam. Opens central government technical roles.</li>
                                <li><strong>Defence jobs:</strong> Technical roles in the Indian Army, Navy, and Air Force (through TES, SSB, and other routes).</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Option 6: Entrepreneurship and Startups</h2>
                            <p>
                                Karnataka's startup ecosystem — particularly in Bengaluru — is one of India's most vibrant. VTU graduates have started companies in fintech, edtech, agritech, and SaaS. Resources available to you include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>VTU's Technology Business Incubators (TBIs) at select colleges — these offer mentorship, seed funding, and office space</li>
                                <li>Karnataka Startup Cell and iStart Karnataka programs for funding support</li>
                                <li>NASSCOM 10,000 Startups and other accelerator programs</li>
                            </ul>
                            <p>
                                Even if you don't start a company immediately, joining an early-stage startup as one of the first 10–20 employees can give you disproportionate learning and equity opportunity.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Building Your Profile: What Matters Most</h2>
                            <p>
                                Regardless of which path you choose, these actions will strengthen your position:
                            </p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li>Maintain a CGPA above 7.0 — it is a gating criterion for most paths.</li>
                                <li>Clear all backlogs before graduation. Active backlogs during placements or applications are serious red flags.</li>
                                <li>Do at least one substantive internship during your 6th or 7th semester — internship-to-PPO conversions are increasingly common at good companies.</li>
                                <li>Build a portfolio of 2–3 projects (hosted on GitHub, deployed as live apps) if you are pursuing software roles.</li>
                                <li>Get LinkedIn-active early — connect with seniors, alumni, and recruiters from your target companies well before placement season.</li>
                            </ol>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Related Articles</h3>
                                <div className="flex flex-wrap gap-3 mt-2">
                                    <Link href="/articles/how-to-calculate-sgpa" className="text-sm text-blue-600 hover:underline">How to Calculate Your SGPA →</Link>
                                    <Link href="/articles/vtu-backlogs-guide" className="text-sm text-blue-600 hover:underline">Clearing VTU Backlogs →</Link>
                                </div>
                            </div>
                            <Link href="/check-results">
                                <span className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
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
