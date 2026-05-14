import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AutoAds from "@/components/AdSense/AutoAds";
import CookieConsent from "@/components/CookieConsent";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "VTU Results Checker - Check Your VTU Exam Results",
    description: "Check your VTU (Visvesvaraya Technological University) exam results quickly and calculate your SGPA. Enter your USN and get instant results with grade analysis.",
    keywords: "VTU results, VTU exam results, USN, SGPA calculator, VTU grade checker, Visvesvaraya Technological University",
    authors: [{ name: "VTU Results" }],
    icons: {
        icon: [
            { url: "/favicon.png", sizes: "any" },
            { url: "/favicon.png", type: "image/png" },
        ],
        apple: "/favicon.png",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "VTU Results Checker",
        title: "VTU Results Checker - Check Your VTU Exam Results",
        description: "Check your VTU exam results and calculate SGPA instantly",
    },
    twitter: {
        card: "summary_large_image",
        title: "VTU Results Checker",
        description: "Check your VTU exam results and calculate SGPA instantly",
    },
    robots: {
        index: true,
        follow: true,
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: "VTU Results",
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    themeColor: "#2563eb",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <AutoAds />
                <Analytics />
                <meta name="google-site-verification" content="AsaD0fwpq5RcANj2FkiBquGleiQDu5hcXa6CD1x1lTE" />
            </head>
            <body className={inter.className}>
                {/* Header Navigation */}
                <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="text-xl font-bold text-blue-600">
                                VTU Results
                            </Link>
                            <nav className="flex gap-6">
                                <Link href="/check-results" className="text-blue-600 font-semibold hover:text-blue-800 text-sm transition-colors">
                                    Check Results
                                </Link>
                                <Link href="/articles" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                                    Articles
                                </Link>
                                <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                                    About
                                </Link>
                                <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                                    Privacy
                                </Link>
                                <Link href="/terms-of-service" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                                    Terms
                                </Link>
                                <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                                    Contact
                                </Link>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="min-h-screen">
                    {children}
                </main>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12 mt-12 border-t-4 border-blue-600">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="md:col-span-2">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">VTU</span>
                                    Results & Resources
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-md">
                                    Your ultimate unofficial companion for navigating Visvesvaraya Technological University. 
                                    We provide lightning-fast result checking, SGPA calculation, and high-quality academic guides.
                                </p>
                                <p className="text-gray-500 text-xs italic border-l-2 border-gray-700 pl-3">
                                    Disclaimer: This is an independent, unofficial platform and is not affiliated with, endorsed by, or sponsored by VTU.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-4 text-gray-200">Quick Links</h3>
                                <ul className="space-y-3 text-sm">
                                    <li><Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Home</Link></li>
                                    <li><Link href="/check-results" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Check Results</Link></li>
                                    <li><Link href="/articles" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Articles & Guides</Link></li>
                                    <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>About Us</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-4 text-gray-200">Legal & Support</h3>
                                <ul className="space-y-3 text-sm">
                                    <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Privacy Policy</Link></li>
                                    <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Terms of Service</Link></li>
                                    <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Contact Support</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                            <p>&copy; {new Date().getFullYear()} VTU Results Checker. All rights reserved.</p>
                            <p className="mt-2 md:mt-0">Designed for students, by students.</p>
                        </div>
                    </div>
                </footer>

                {/* Cookie Consent */}
                <CookieConsent />


            </body>
        </html>
    );
}
