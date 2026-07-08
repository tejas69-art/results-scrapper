export interface JobListing {
    id: string;
    title: string;
    company: string;
    location: string;
    type: 'Internship' | 'Full-time' | 'Contract' | 'Remote';
    category: string;
    description: string;
    url: string;
    logoUrl?: string;
    postedDate: string;
}

export const JOBS_DATA: JobListing[] = [
    {
        "id": "onlinestudy4u-ibm-off-campus-drive",
        "title": "IBM Off Campus Drive – Customer Success Engineer Intern",
        "company": "IBM",
        "location": "India",
        "type": "Internship",
        "category": "Software Development",
        "description": "IBM Off Campus Drive: IBM seeks talented engineering students to fill an Internship with Customer Success Engineering. The internship provides hands-on ...",
        "url": "https://careers.ibm.com/en_US/careers/JobDetail?jobId=116910",
        "postedDate": "2026-05-24T09:57:25.000Z"
    },
    {
        "id": "onlinestudy4u-drdo-recruitment-drive",
        "title": "DRDO Recruitment Drive – Paid Internship at ACEM Nasik DRDO 2026 | Engineering Students",
        "company": "DRDO Recruitment Drive",
        "location": "India",
        "type": "Internship",
        "category": "Software Development",
        "description": "DRDO Recruitment Drive: Advanced Centre for Energetic Materials (ACEM), a top facility of the Defence Research and Development Organisation (DRDO), ...",
        "url": "https://www.naukri.com/campus/contests/career-fair-2026",
        "postedDate": "2026-05-24T12:53:12.000Z"
    },
    {
        "id": "onlinestudy4u-tii-off-campus-hiring",
        "title": "TII Off Campus Hiring – Tech and Retail Operations Apprenticeship",
        "company": "TII Off Campus Hiring",
        "location": "India",
        "type": "Internship",
        "category": "Software Development",
        "description": "TII Off Campus Hiring: TII is accepting applications for Apprenticeship positions for the 2026 batch of graduates. This is a great ...",
        "url": "https://www.linkedin.com/posts/mallangi-vamsidhar-reddy-3a80b7285_referralalert-hiring-apprenticeship-share-7462892460860440576-RKC8/",
        "postedDate": "2026-05-24T14:24:36.000Z"
    },
    {
        "id": "onlinestudy4u-sopra-steria-off-campus-hiring",
        "title": "Sopra Steria Off Campus Hiring – Engineer Trainee Role",
        "company": "Sopra Steria Off Campus",
        "location": "Noida, India",
        "type": "Internship",
        "category": "Software Development",
        "description": "Sopra Steria Off Campus Hiring: Sopra Steria is seeking enthusiastic engineering graduates to fill an engineer trainee post in Noida. This is a ...",
        "url": "https://www.linkedin.com/posts/rahulmca2310_hiring-referral-soprasteria-share-7464614911034216448-WzDq/",
        "postedDate": "2026-05-25T15:40:15.000Z"
    },
    {
        "id": "onlinestudy4u-ssc-cgl-recruitment",
        "title": "SSC CGL Recruitment Apply Online for 12,256 Vacancies",
        "company": "SSC",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "SSC CGL Recruitment: The Staff Selection Commission (SSC) has released its official notification for the SSC combined Graduate Level (CGL) Examination ...",
        "url": "https://ssc.gov.in/candidate-portal/one-time-registration/home-page",
        "postedDate": "2026-05-25T16:11:53.000Z"
    },
    {
        "id": "onlinestudy4u-deloitte-new-off-campus-hiring-drive",
        "title": "Deloitte HiringDrive – Associate Analyst – Executive Assistant Support – USI Leadership Support Centre",
        "company": "Deloitte",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Deloitte New Off Campus Hiring Drive: Deloitte Support Services India Private Limited offers an excellent opportunity for talented individuals to ...",
        "url": "https://usijobs.deloitte.com/en_US/careersUSI/JobDetail/USI-EH26-Enabling-Areas-UK-Executive-Assistant-Support-Associate-Analyst/326470",
        "postedDate": "2026-05-27T04:50:32.000Z"
    },
    {
        "id": "onlinestudy4u-wipro-new-off-campus-hiring",
        "title": "Wipro Hiring Graduate Engineer Trainee Role",
        "company": "Wipro",
        "location": "India",
        "type": "Internship",
        "category": "Software Development",
        "description": "Wipro New Off Campus Hiring: Wipro Limited seeks a talented Graduate Engineer Trainee to join its test team located in ...",
        "url": "https://careers.wipro.com/job/Graduate-Engineer-Trainee/172373-en_US",
        "postedDate": "2026-05-27T05:09:59.000Z"
    },
    {
        "id": "onlinestudy4u-tech-mahindra-new-hiring",
        "title": "Tech Mahindra Hiring International Customer Support – Voice Process Role",
        "company": "Tech Mahindra",
        "location": "Noida, India",
        "type": "Internship",
        "category": "Software Development",
        "description": "Tech Mahindra New Hiring: Tech Mahindra is hiring for International Customer Support Voice Process jobs in Noida. This is a permanent work-from-office job ...",
        "url": "https://www.linkedin.com/posts/priya-chaudhary-a92a85169_tech-mahindra-is-hiring-international-share-7464952397866594304-9Ozb/",
        "postedDate": "2026-05-28T16:04:22.000Z"
    },
    {
        "id": "onlinestudy4u-bsnl-new-recruitment",
        "title": "BSNL JTO Recruitment 2026: Apply Online for 100 Posts, Check Eligibility, Salary & Important Dates",
        "company": "BSNL",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "BSNL JTO Recruitment 2026: Bharat Sanchar Nigam Limited Junior Telecom Officer Recruitment 2026 announcement has been made for 100 vacancies. practical tips you ...",
        "url": "https://externalexam.bsnl.co.in/",
        "postedDate": "2026-05-28T16:26:06.000Z"
    }
];
