'use client';

import React from 'react';
import { Calculator, BookOpen, Bell, GraduationCap, CheckCircle } from 'lucide-react';

const serviceDetails = [
    {
        number: '1',
        icon: Calculator,
        title: 'VTU SGPA/CGPA Calculator',
        description: 'Utilize our standout feature, the VTU SGPA/CGPA calculator, to simplify grade calculations. Enter your marks, select your branch, and instantly determine your SGPA and CGPA, saving time and reducing the risk of errors.',
        features: [
            'Automatic grade point calculation based on VTU formula',
            'Support for both CBCS and Non-CBCS schemes',
            'Editable credits for custom calculations',
            'Instant percentage conversion'
        ],
        color: 'blue',
    },
    {
        number: '2',
        icon: BookOpen,
        title: 'Comprehensive Results Access',
        description: 'Access a wealth of exam results across all semesters and academic years. Whether you need regular results or revaluation marks, find everything in one place with our organized exam event selection.',
        features: [
            'All exam sessions from 2021 onwards',
            'Regular and Revaluation results',
            'Multiple scheme support (CBCS, Non-CBCS)',
            'Batch result checking for entire class'
        ],
        color: 'purple',
    },
    {
        number: '3',
        icon: Bell,
        title: 'Staying Informed',
        description: 'Stay updated with VTU\'s dynamic environment through our platform. Get access to the latest exam results as soon as they are published, ensuring you never miss an important update.',
        features: [
            'Real-time result fetching from VTU servers',
            'Instant notifications when new results are added',
            'Historical result archives',
            'Direct links to official VTU resources'
        ],
        color: 'emerald',
    },
    {
        number: '4',
        icon: GraduationCap,
        title: 'Academic Performance Tracking',
        description: 'Track your academic journey with detailed performance metrics. View your grades, calculate your class standing, and understand where you stand compared to passing criteria.',
        features: [
            'Visual SGPA progress tracking',
            'Class categorization (FCD, FC, SC)',
            'Subject-wise grade breakdown',
            'Performance improvement suggestions'
        ],
        color: 'orange',
    },
];

const colorClasses = {
    blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        numberBg: 'bg-blue-600',
    },
    purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
        numberBg: 'bg-purple-600',
    },
    emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        iconBg: 'bg-emerald-100',
        iconColor: 'text-emerald-600',
        numberBg: 'bg-emerald-600',
    },
    orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
        numberBg: 'bg-orange-600',
    },
};

export const ServicesSection = () => {
    return (
        <section id="services" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Services in Detail
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            At VTU Results, we offer a range of services designed to empower VTU students
                            throughout their academic careers. Here's what we provide:
                        </p>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-8">
                        {serviceDetails.map((service, index) => {
                            const IconComponent = service.icon;
                            const colors = colorClasses[service.color as keyof typeof colorClasses];

                            return (
                                <div
                                    key={index}
                                    className={`${colors.bg} rounded-2xl p-6 md:p-8 border ${colors.border}`}
                                >
                                    <div className="flex flex-col md:flex-row gap-6">
                                        {/* Number Badge */}
                                        <div className="flex-shrink-0">
                                            <div className={`w-12 h-12 ${colors.numberBg} rounded-xl flex items-center justify-center text-white font-bold text-xl`}>
                                                {service.number}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className={`w-10 h-10 ${colors.iconBg} rounded-lg flex items-center justify-center`}>
                                                    <IconComponent className={`w-5 h-5 ${colors.iconColor}`} />
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900">
                                                    {service.title}
                                                </h3>
                                            </div>

                                            <p className="text-gray-700 mb-4 leading-relaxed">
                                                {service.description}
                                            </p>

                                            {/* Features */}
                                            <ul className="grid md:grid-cols-2 gap-2">
                                                {service.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-start gap-2">
                                                        <CheckCircle className={`w-4 h-4 ${colors.iconColor} flex-shrink-0 mt-0.5`} />
                                                        <span className="text-sm text-gray-600">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
