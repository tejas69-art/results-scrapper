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
                <footer className="bg-gray-900 text-white py-8 mt-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-lg font-bold mb-4">VTU Results</h3>
                                <p className="text-gray-400 text-sm">
                                    Check your VTU exam results and calculate SGPA instantly.
                                    We provide a simple and fast way to view your academic performance.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                                    <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                                    <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-4">Legal</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                                    <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
                            <p>&copy; {new Date().getFullYear()} VTU Results Checker. All rights reserved.</p>
                            <p className="mt-2">Not affiliated with VTU. For official results, visit the VTU website.</p>
                        </div>
                    </div>
                </footer>

                {/* Cookie Consent */}
                <CookieConsent />

                {/* Third-party Assessment/Ad Script */}
                <Script id="nap5k-tag" strategy="afterInteractive">
                    {`
            (function () {
              var s = document.createElement('script');
              s.src = 'https://nap5k.com/tag.min.js';
              s.dataset.zone = '10300336';
              s.async = true;
              document.body.appendChild(s);
            })();
          `}
                </Script>


            </body>
        </html>
    );
}
