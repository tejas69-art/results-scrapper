'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, GraduationCap, Award, Target, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AdUnit from '@/components/AdSense/AdUnit';
import InFeedAd from '@/components/AdSense/InFeedAd';

const API_URL = "/api/single-post";

interface Subject {
    id: string;
    code: string;
    name: string;
    credits: number;
    internal: number;
    external: number;
    total: number;
    marks: number;
    grade: string;
    gradePoints: number;
    result: string;
    announcedDate: string;
}

interface ParsedResult {
    usn: string;
    studentName: string;
    semester: number;
    subjects: Subject[];
}

const getGradeFromMarks = (marks: number) => {
    if (marks >= 90) return { grade: 'S', points: 10 };
    if (marks >= 80) return { grade: 'A', points: 9 };
    if (marks >= 70) return { grade: 'B', points: 8 };
    if (marks >= 60) return { grade: 'C', points: 7 };
    if (marks >= 50) return { grade: 'D', points: 6 };
    if (marks >= 40) return { grade: 'E', points: 5 };
    return { grade: 'F', points: 0 };
};

const parseHTMLResult = (html: string, usn: string): ParsedResult | null => {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Extract student name
        const nameRegex = /Student Name[\s\S]*?<td[^>]*><b>:\s*<\/b>\s*([^<]+)<\/td>/i;
        const nameMatch = nameRegex.exec(html);
        const studentName = nameMatch ? nameMatch[1].trim() : 'Unknown';

        // Extract semester
        const semesterRegex = /Semester\s*:\s*(\d+)/i;
        const semesterMatch = semesterRegex.exec(html);
        const semester = semesterMatch ? Number.parseInt(semesterMatch[1], 10) : 0;

        // Extract subjects from divTable
        const subjects: Subject[] = [];
        const tableBodies = doc.querySelectorAll('.divTableBody');

        // Find the main result table (usually the first one with subject data)
        tableBodies.forEach((tableBody) => {
            const rows = tableBody.querySelectorAll('.divTableRow');

            rows.forEach((row) => {
                // Skip header row (check if it contains "Subject Code")
                const firstCell = row.querySelector('.divTableCell');
                if (firstCell?.textContent?.includes('Subject Code')) return;

                const cells = row.querySelectorAll('.divTableCell');
                if (cells.length >= 7) {
                    const code = cells[0].textContent?.trim() || '';
                    const name = cells[1].textContent?.trim() || '';
                    const internal = Number.parseInt(cells[2].textContent?.trim() || '0', 10);
                    const external = Number.parseInt(cells[3].textContent?.trim() || '0', 10);
                    const total = Number.parseInt(cells[4].textContent?.trim() || '0', 10);
                    const result = cells[5].textContent?.trim() || '';
                    const announcedDate = cells[6].textContent?.trim() || '';

                    // Only process if we have a valid code and name
                    if (code && name && code.length > 0 && name.length > 0) {
                        // Calculate percentage (assuming max is 100, but some subjects have 200 max)
                        const maxMarks = total > 100 ? 200 : 100;
                        const percentage = maxMarks > 0 ? (total / maxMarks) * 100 : 0;
                        const gradeData = getGradeFromMarks(percentage);

                        // Estimate credits (default to 4, can be adjusted)
                        const credits = 0;

                        subjects.push({
                            id: `${code}-${subjects.length}`,
                            code,
                            name,
                            credits,
                            internal,
                            external,
                            total,
                            marks: percentage,
                            grade: gradeData.grade,
                            gradePoints: gradeData.points,
                            result,
                            announcedDate
                        });
                    }
                }
            });
        });

        return {
            usn,
            studentName,
            semester,
            subjects
        };
    } catch (error) {
        console.error('Error parsing HTML:', error);
        return null;
    }
};

const VTUResults = () => {
    const [usn, setUsn] = useState('');
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [parsedResult, setParsedResult] = useState<ParsedResult | null>(null);
    const [sgpa, setSgpa] = useState<number>(0);
    const [totalCredits, setTotalCredits] = useState<number>(0);

    const calculateSGPA = (subjects: Subject[]) => {
        let totalGradePoints = 0;
        let totalCreds = 0;

        subjects.forEach(subject => {
            if (subject.total > 0 && subject.credits > 0) {
                totalGradePoints += subject.gradePoints * subject.credits;
                totalCreds += subject.credits;
            }
        });

        const calculatedSGPA = totalCreds > 0 ? totalGradePoints / totalCreds : 0;
        setSgpa(Math.round(calculatedSGPA * 100) / 100);
        setTotalCredits(totalCreds);
    };

    const updateSubjectCredits = (subjectId: string, newCredits: number) => {
        if (!parsedResult) return;

        const updatedSubjects = parsedResult.subjects.map(subject =>
            subject.id === subjectId ? { ...subject, credits: newCredits } : subject
        );

        setParsedResult({
            ...parsedResult,
            subjects: updatedSubjects
        });
    };

    useEffect(() => {
        if (parsedResult?.subjects) {
            calculateSGPA(parsedResult.subjects);
        }
    }, [parsedResult]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setParsedResult(null);

        if (!usn.trim() || !url.trim()) {
            setError('Please enter both USN and URL');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    usn: usn.trim().toUpperCase(),
                    index_url: url.trim()
                }),
            });

            if (!response.ok) {
                let errorMessage = `HTTP error! status: ${response.status}`;
                try {
                    const errorData = await response.json();
                    if (errorData.detail) {
                        errorMessage = Array.isArray(errorData.detail)
                            ? errorData.detail.map((e: any) => e.msg || JSON.stringify(e)).join(', ')
                            : errorData.detail;
                    } else if (errorData.message) {
                        errorMessage = errorData.message;
                    } else if (typeof errorData === 'string') {
                        errorMessage = errorData;
                    }
                } catch {
                    errorMessage = response.statusText || errorMessage;
                }
                throw new Error(errorMessage);
            }

            const data = await response.json();

            const usnKey = usn.trim().toUpperCase();
            let htmlContent = '';

            // Handle different response formats
            if (typeof data === 'string') {
                htmlContent = data;
            } else if (data.html) {
                htmlContent = data.html;
            } else if (data[usnKey]) {
                htmlContent = data[usnKey];
            } else {
                // Try to find the HTML in any key
                const firstKey = Object.keys(data)[0];
                if (firstKey && data[firstKey]) {
                    // If the value is a string, use it; if it's an object, check for html property
                    if (typeof data[firstKey] === 'string') {
                        htmlContent = data[firstKey];
                    } else if (data[firstKey].html) {
                        htmlContent = data[firstKey].html;
                    } else {
                        throw new Error('No result data found in response');
                    }
                } else {
                    throw new Error('No result data found in response');
                }
            }

            // Debug logging
            console.log('Response data type:', typeof data);
            console.log('Response data keys:', typeof data === 'object' ? Object.keys(data) : 'N/A');
            console.log('Response data:', data);
            console.log('Extracted HTML length:', htmlContent.length);
            console.log('HTML preview (first 500 chars):', htmlContent.substring(0, 500));

            if (!htmlContent || htmlContent.trim().length === 0) {
                throw new Error('Empty HTML content received from server. Please verify the USN and URL are correct.');
            }

            const parsed = parseHTMLResult(htmlContent, usnKey);
            if (parsed) {
                if (parsed.subjects.length === 0) {
                    throw new Error('No subject data found in the result. The HTML structure might be different than expected. Please check the console for details.');
                }
                setParsedResult(parsed);
            } else {
                throw new Error('Failed to parse result data. Please check the console for details.');
            }
        } catch (err: any) {
            setError(err.message || 'Failed to fetch results. Please check your USN and URL.');
            console.error('Error fetching results:', err);
        } finally {
            setLoading(false);
        }
    };

    const getGradeDescription = (sgpa: number) => {
        if (sgpa >= 9) return 'Outstanding Performance';
        if (sgpa >= 8) return 'Excellent Performance';
        if (sgpa >= 7) return 'Very Good Performance';
        if (sgpa >= 6) return 'Good Performance';
        if (sgpa >= 5) return 'Average Performance';
        return 'Below Average Performance';
    };

    const getSGPAColor = (sgpa: number) => {
        if (sgpa >= 9) return 'from-emerald-500 to-green-600';
        if (sgpa >= 8) return 'from-blue-500 to-indigo-600';
        if (sgpa >= 7) return 'from-purple-500 to-pink-600';
        if (sgpa >= 6) return 'from-yellow-500 to-orange-600';
        if (sgpa >= 5) return 'from-orange-500 to-red-600';
        return 'from-red-500 to-red-700';
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            {/* Loading Modal */}
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 mx-4 max-w-md w-full border-2 border-blue-100 animate-in fade-in zoom-in duration-300">
                        <div className="flex flex-col items-center text-center space-y-6">
                            {/* Animated Spinner */}
                            <div className="relative">
                                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-blue-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                            </div>

                            {/* Loading Text */}
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-gray-900">
                                    Fetching Your Results...
                                </h3>
                                <div className="space-y-2">
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        This may take a few seconds as we depend on <span className="font-semibold text-blue-600">free resources</span> to keep this service available to everyone.
                                    </p>
                                    <p className="text-sm font-medium text-blue-700">
                                        Thank you for your patience! 🙏
                                    </p>
                                </div>
                            </div>

                            {/* Progress Dots */}
                            <div className="flex gap-2">
                                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="container mx-auto px-4 max-w-6xl">
                {/* Top Ad */}
                <AdUnit
                    adSlot="1234567890"
                    adFormat="horizontal"
                    className="mb-8"
                />

                {/* VTU Results Form */}
                {!parsedResult && (
                    <div className="bg-white rounded-lg p-6 mb-8 shadow-md border border-gray-200">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">Check Your VTU Results</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-2xl mx-auto">
                            <div>
                                <Label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                                    Result URL
                                </Label>
                                <Input
                                    id="url"
                                    type="url"
                                    value={url}
                                    onChange={e => setUrl(e.target.value)}
                                    placeholder="Enter the VTU result page URL"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="usn" className="block text-sm font-medium text-gray-700 mb-2">
                                    USN (University Seat Number)
                                </Label>
                                <Input
                                    id="usn"
                                    type="text"
                                    value={usn}
                                    onChange={e => setUsn(e.target.value.toUpperCase())}
                                    placeholder="Enter your USN (e.g., 1AM21CS202)"
                                    required
                                    pattern="^[1-4][A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}$"
                                    title="Enter a valid VTU USN (e.g., 1AM21CS202)"
                                    className="uppercase"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white"
                                disabled={loading}
                            >
                                {loading ? 'Fetching Results...' : 'Get Results'}
                            </Button>
                            {error && (
                                <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
                                    {error}
                                </div>
                            )}
                        </form>

                        {/* In-Feed Ad below form */}
                        <InFeedAd adSlot="2345678901" className="mt-8" />
                    </div>
                )}

                {/* Results Display */}
                {parsedResult && (
                    <div className="space-y-8">
                        {/* Header */}
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100 mb-6 border border-blue-200">
                                <Calculator className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium text-blue-700">VTU Results</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                                {parsedResult.studentName}
                            </h1>
                            <p className="text-lg text-gray-600">
                                USN: {parsedResult.usn} | Semester: {parsedResult.semester}
                            </p>
                        </div>

                        {/* Main Results Grid */}
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                            {/* Subjects List */}
                            <div className="xl:col-span-2">
                                <Card className="bg-white shadow-lg border border-gray-200">
                                    <CardHeader>
                                        <CardTitle className="text-gray-900 flex items-center gap-2">
                                            <GraduationCap className="w-5 h-5 text-blue-600" />
                                            Subject Results
                                        </CardTitle>
                                        <CardDescription className="text-gray-600">
                                            Your semester results with marks and grades
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {parsedResult.subjects.map((subject, index) => (
                                            <React.Fragment key={subject.id}>
                                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
                                                        <div className="lg:col-span-3">
                                                            <Label className="text-gray-700 text-sm font-medium">Subject Code</Label>
                                                            <div className="bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-900 font-semibold">
                                                                {subject.code}
                                                            </div>
                                                        </div>

                                                        <div className="lg:col-span-4">
                                                            <Label className="text-gray-700 text-sm font-medium">Subject Name</Label>
                                                            <div className="bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-900">
                                                                {subject.name}
                                                            </div>
                                                        </div>

                                                        <div className="lg:col-span-2">
                                                            <Label className="text-gray-700 text-sm font-medium">Total Marks</Label>
                                                            <div className="bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-center font-semibold">
                                                                {subject.total}
                                                            </div>
                                                        </div>

                                                        <div className="lg:col-span-1">
                                                            <Label className="text-gray-700 text-sm font-medium">Grade</Label>
                                                            <div className="bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-center font-semibold">
                                                                {subject.grade}
                                                            </div>
                                                        </div>

                                                        <div className="lg:col-span-1">
                                                            <Label className="text-gray-700 text-sm font-medium">Points</Label>
                                                            <div className="bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-center">
                                                                {subject.gradePoints}
                                                            </div>
                                                        </div>

                                                        <div className="lg:col-span-1">
                                                            <Label className="text-gray-700 text-sm font-medium">Credits</Label>
                                                            <Select
                                                                value={subject.credits.toString()}
                                                                onValueChange={(value) => updateSubjectCredits(subject.id, Number.parseInt(value, 10))}
                                                            >
                                                                <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                                                                    <SelectValue placeholder="Select Credits" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {Array.from({ length: 15 }).map((_, i) => (
                                                                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                                                                            {i + 1} Credit{i === 0 ? '' : 's'}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                        </div>

                                                        <div className="lg:col-span-1">
                                                            <Label className="text-gray-700 text-sm font-medium">Result</Label>
                                                            <div className={`border border-gray-300 rounded-md px-3 py-2 text-center font-semibold ${subject.result === 'P' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                                                                }`}>
                                                                {subject.result}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 text-xs text-gray-500">
                                                        Internal: {subject.internal} | External: {subject.external} | Announced: {subject.announcedDate}
                                                    </div>
                                                </div>

                                                {/* Insert in-feed ad after every 3 subjects */}
                                                {(index + 1) % 3 === 0 && index < parsedResult.subjects.length - 1 && (
                                                    <InFeedAd adSlot={`${3456789012 + index}`} />
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </CardContent>
                                </Card>
                            </div>

                            {/* SGPA Panel */}
                            <div className="space-y-6">
                                {/* SGPA Card */}
                                <Card className={`bg-gradient-to-br ${getSGPAColor(sgpa)}/10 border border-gray-200 shadow-lg`}>
                                    <CardHeader>
                                        <CardTitle className="text-gray-900 flex items-center gap-2">
                                            <Award className="w-6 h-6 text-blue-600" />
                                            Your SGPA
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <div className={`text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${getSGPAColor(sgpa)} mb-4`}>
                                            {sgpa.toFixed(2)}
                                        </div>
                                        <div className="flex items-center justify-center gap-2 mb-4">
                                            <Star className={`w-5 h-5 ${sgpa >= 9 ? 'text-yellow-500' : 'text-gray-400'}`} />
                                            <p className="text-gray-700 font-medium text-sm sm:text-base">{getGradeDescription(sgpa)}</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mt-6">
                                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                                                <div className="text-gray-600 text-xs sm:text-sm">Total Credits</div>
                                                <div className="text-gray-900 text-lg sm:text-xl font-bold">{totalCredits}</div>
                                            </div>
                                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                                                <div className="text-gray-600 text-xs sm:text-sm">Percentage</div>
                                                <div className="text-gray-900 text-lg sm:text-xl font-bold">{(sgpa * 10).toFixed(1)}%</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Sidebar Ad */}
                                <AdUnit
                                    adSlot="4567890123"
                                    adFormat="vertical"
                                />

                                {/* Performance Metrics */}
                                <Card className="bg-white shadow-lg border border-gray-200">
                                    <CardHeader>
                                        <CardTitle className="text-gray-900 flex items-center gap-2">
                                            <Target className="w-5 h-5 text-blue-600" />
                                            Performance Metrics
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600">Class</span>
                                                <span className="text-gray-900 font-medium text-sm">
                                                    {(() => {
                                                        if (sgpa >= 7.5) return 'First Class with Distinction';
                                                        if (sgpa >= 6) return 'First Class';
                                                        if (sgpa >= 5) return 'Second Class';
                                                        return 'Pass Class';
                                                    })()}
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className={`h-2 rounded-full bg-gradient-to-r ${getSGPAColor(sgpa)}`}
                                                    style={{ width: `${(sgpa / 10) * 100}%` }}
                                                ></div>
                                            </div>
                                            <div className="text-xs text-gray-500 text-center">
                                                SGPA Progress: {sgpa.toFixed(2)}/10.0
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Action Button */}
                                <Button
                                    onClick={() => {
                                        setParsedResult(null);
                                        setUsn('');
                                        setUrl('');
                                    }}
                                    variant="outline"
                                    className="w-full"
                                >
                                    Check Another Result
                                </Button>
                            </div>
                        </div>

                        {/* Bottom Ad */}
                        <AdUnit
                            adSlot="5678901234"
                            adFormat="horizontal"
                            className="mt-8"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default VTUResults;
