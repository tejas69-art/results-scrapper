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
        "id": "onlinestudy4u-rrb-new-recruitment",
        "title": "RRB New Recruitment 2026 | Junior Engineer JE – Apply Online for 3993 Vacancies",
        "company": "RRB",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "RRB New Recruitment 2026: Railway Recruitment Board (RRB), Ministry of Railways, has announced RRB J. Engineer JET Recruitment 2026 for candidates who ...",
        "url": "https://www.rrbapply.gov.in/#/auth/landing",
        "postedDate": "2026-08-15T14:10:43.000Z"
    },
    {
        "id": "onlinestudy4u-lt-new-hiring-drive",
        "title": "L&T HiringDrive | GenAI Trainee Recruitment 2026 – B.Tech/M.Tech | Powai",
        "company": "L&T",
        "location": "India",
        "type": "Internship",
        "category": "Software Development",
        "description": "L&#38;T New Hiring Drive: L&#38;T Precision Engineering &#38; Systems is seeking applicants to fill an GenAI Trainee job at the L&#38;T Innovation Campus, Powai. This ...",
        "url": "https://larsentoubrocareers.peoplestrong.com/job/detail/LNT_GT_1820286",
        "postedDate": "2026-08-14T05:35:33.000Z"
    },
    {
        "id": "onlinestudy4u-deleitte-off-campus-big-hiring",
        "title": "Deleitte Off Campus Big Hiring | Services Support Associate I – Hyderabad",
        "company": "Deleitte Off Campus Big",
        "location": "Hyderabad, India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Deleitte Off Campus Big Hiring: Deleitte are hiring to fill the Service Support Associate &#8211; Talent Processes and Support &#8211; Learning Administration job ...",
        "url": "https://usijobs.deloitte.com/en_US/careersUSI/JobDetail/USI-EH27-MFUK-HRS-Learning-Admin-Services-Support-Associate-I-Talent-Processes-and-Business-Support/357426",
        "postedDate": "2026-08-12T18:01:15.000Z"
    },
    {
        "id": "onlinestudy4u-isro-new-recruitment",
        "title": "ISRO New Recruitment 2026 | Assistant & Junior Personal Assistant Role | Apply Online for 242 Posts (Last Date Extended)",
        "company": "ISRO",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "ISRO New Recruitment 2026: Are you looking for a government job after you graduate? This is because the Indian Space Research Organisation (ISRO) has ...",
        "url": "https://cdn.digialm.com//EForms/configuredHtml/1258/101396//Index.html",
        "postedDate": "2026-08-12T06:38:40.000Z"
    },
    {
        "id": "onlinestudy4u-swiggy-new-hiring-drive",
        "title": "Swiggy HiringDrive | Application for Video Editor Role",
        "company": "Swiggy",
        "location": "Mumbai, India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Swiggy New Hiring Drive: Swiggy is looking for Video Editors for its Servd Business, previously called Mumbai Foodie. The job is located ...",
        "url": "https://docs.google.com/forms/d/e/1FAIpQLSelY-aBHJ-ZRLSIcpDwzDRUMgPyv8SxhTmsKs6MG1UzsXAqhw/viewform",
        "postedDate": "2026-08-11T15:18:12.000Z"
    },
    {
        "id": "onlinestudy4u-american-express-new-hiring",
        "title": "American Express Hiring| Apprentice Role",
        "company": "American Express",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "American Express New Hiring: American Express is hiring Apprentices for Credit &#38; Fraud Risk (CFR) in Gurugram, Haryana. This is a 12-month ...",
        "url": "https://careers.americanexpress.com/en/sites/CX_1/job/26012309?keyword=26012309&mode=location",
        "postedDate": "2026-08-11T15:27:43.000Z"
    },
    {
        "id": "onlinestudy4u-google-new-drive",
        "title": "Google New Drive | Google AI Essentials Specialisation 2026 | Free AI Skills Course by Google Experts",
        "company": "Google",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Google AI Essentials Specialization is a simple AI course designed for professionals, students and everyone who wishes to master the ...",
        "url": "https://www.coursera.org/specializations/ai-essentials-google",
        "postedDate": "2026-08-11T15:34:58.000Z"
    },
    {
        "id": "onlinestudy4u-mindfire-solutions-hiring",
        "title": "Mindfire Solutions Hiring Freshers 2026 | Associate Software Engineer | Work From Home",
        "company": "Mindfire Solutions",
        "location": "Remote (India)",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Mindfire Solutions Hiring: Mindfire Solutions is hiring freshers for the Associate Software Engineer job. This job is ideal for those who are looking ...",
        "url": "https://www.linkedin.com/posts/supriya-gupta-aa4a99386_hiring-freshersjobs-fresherhiring-share-7491334515890782208-He2J/",
        "postedDate": "2026-08-07T12:50:37.000Z"
    },
    {
        "id": "onlinestudy4u-infosys-new-big-hiring-drive",
        "title": "Infosys New Big Hiring Drive | Technical Process Executive Role",
        "company": "Infosys",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Infosys New Big Hiring Drive: Are you looking for an IT support job for newcomers in a well-known company? It is the Tech Process ...",
        "url": "https://career.infosys.com/jobdesc?jobReferenceCode=PROGEN-EXTERNAL-250230&sourceId=41",
        "postedDate": "2026-08-06T08:57:37.000Z"
    },
    {
        "id": "onlinestudy4u-iamneo-biggest-off-campus-hiring",
        "title": "iamneo Biggest Off Campus Hiring | Junior Technical Trainer Recruitment 2026 | Freshers Hiring Across India",
        "company": "Off Campus",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "iamneo Biggest Off Campus Hiring: Are you looking for the most recent junior technical trainer Jobs 2026? An exciting opportunity is open ...",
        "url": "https://www.linkedin.com/posts/hiringnow-iamneo-wilp-share-7490249775771082752-gJsl/",
        "postedDate": "2026-08-04T14:20:17.000Z"
    },
    {
        "id": "onlinestudy4u-tcs-new-big-hiring",
        "title": "TCS New Big Hiring | TCS BPS Hiring for 2027",
        "company": "TCS",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "TCS New Big Hiring: TCS BPS Recruitment 2027 Registration is now open to eligible graduates of the Science, Commerce or Arts ...",
        "url": "https://www.tcs.com/careers/india/tcs-bps-fresher-hiring",
        "postedDate": "2026-08-04T08:55:51.000Z"
    },
    {
        "id": "onlinestudy4u-zensar-off-campus-hiring",
        "title": "Zensar Off-Campus Hiring | Fresher’s Opportunity for DevOps Engineer Trainee 2026",
        "company": "Zensar Off",
        "location": "India",
        "type": "Internship",
        "category": "Software Development",
        "description": "Zensar Off-Campus Hiring: Looking for a DevOps Engineer Trainee Job in India? Zensar has announced a fantastic job opportunity for students who ...",
        "url": "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAYjM7UpUM1cxNkFONVFBQ0dHR0MzUDMwV1c5Sko0WS4u",
        "postedDate": "2026-08-03T16:40:17.000Z"
    },
    {
        "id": "onlinestudy4u-ibps-biggest-hiring-drive",
        "title": "IBPS Biggest Hiring Drive | IBPS Clerk (CSA) 16th Recruitment 2026: Apply Online for 11,403 Customer Service Associate Posts",
        "company": "IBPS Biggest",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "IBPS Biggest Hiring Drive: The Institute of Banking Personnel Selection (IBPS) has published an IBPS Clerk (CSA) 16th Recruitment 2026 Notice in relation to 11403 ...",
        "url": "https://www.ibps.in/index.php/clerical-cadre-xvi/",
        "postedDate": "2026-08-03T12:55:30.000Z"
    },
    {
        "id": "onlinestudy4u-amazon-biggest-hiring-drive",
        "title": "Amazon Biggest Hiring Drive | Amazon Work From Home Customer Service & Technical Support Jobs 2026 | Remote Jobs in India | Apply Online",
        "company": "Amazon",
        "location": "Remote (India)",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Amazon Biggest Hiring Drive: Are you in search of a work-from-home job in India with an internationally known company? Amazon offers exciting customer ...",
        "url": "https://jobs.amazon.in/virtual-customer-service-associate",
        "postedDate": "2026-08-02T06:30:03.000Z"
    },
    {
        "id": "onlinestudy4u-accenture-new-biggest-hiring",
        "title": "Accenture New Biggest Hiring | AI/ML Computational Science Associate Role",
        "company": "Accenture",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Accenture New Biggest Hiring: Are you searching for an Accenture AI/ML Computational Sciences Associate Recruitment 2026 chance? This is a fantastic job option ...",
        "url": "https://www.accenture.com/in-en/careers/jobdetails?id=AIOC-S01655439_en",
        "postedDate": "2026-07-31T17:20:36.000Z"
    },
    {
        "id": "onlinestudy4u-tcs-new-biggest-hiring-drive",
        "title": "TCS New Biggest Hiring Drive | Customer Support – Voice / Non-Voice Role",
        "company": "TCS",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "TCS New Biggest Hiring Drive: Are you looking at job opportunities at Tata Consultancy Services for new graduates for 2026? Tata Consultancy ...",
        "url": "https://www.linkedin.com/feed/update/urn:li:share:7487921273440837632/",
        "postedDate": "2026-07-31T13:21:57.000Z"
    },
    {
        "id": "onlinestudy4u-birlasoft-new-hiring-drive",
        "title": "Birlasoft HiringDrive | Apprentice (Intern) – Non – Engineering Graduates | 2026 Passout Batch",
        "company": "Birlasoft",
        "location": "India",
        "type": "Internship",
        "category": "Software Development",
        "description": "Birlasoft New Hiring Drive: Birlasoft has announced a great apprenticeship (Intern) Employment 2026 chance for students who are fresh out of the 2026 class ...",
        "url": "https://app.joinsuperset.com/join/#/signup/student/jobprofiles/9e3bca6d-aea8-4948-ae78-a047b1e4cfc1",
        "postedDate": "2026-07-28T05:26:28.000Z"
    },
    {
        "id": "onlinestudy4u-cognizant-biggest-drive",
        "title": "Cognizant Biggest Drive | Customer Service Role",
        "company": "Cognizant",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Cognizant Biggest Drive: Are you seeking a private job in India working for a top global IT service company? A brand new Cognizant Walk-in ...",
        "url": "https://www.linkedin.com/posts/shameek-r-bb4350361_cognizant-walkindrive-hiring-share-7487395613681250304-xY3R/",
        "postedDate": "2026-07-28T05:36:24.000Z"
    },
    {
        "id": "onlinestudy4u-infosys-new-off-campus-hiring",
        "title": "Infosys Hiring| Freshers BE-Computer Science for Data-Non-Voice Role",
        "company": "Infosys",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Infosys New Off Campus Hiring: Are you looking for the most recent Infosys BPM opportunities for new graduates? A new job opening ...",
        "url": "https://www.naukri.com/job-listings-hiring-for-freshers-be-computer-science-for-data-non-voice-bnglr-infosys-bpm-bengaluru-0-to-0-years-150626023323",
        "postedDate": "2026-07-27T13:46:37.000Z"
    },
    {
        "id": "onlinestudy4u-tech-mahindra-big-hiring",
        "title": "Tech Mahindra Big Hiring | Associate Role",
        "company": "Tech Mahindra",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Tech Mahindra Big Hiring: Tech Mahindra has launched an exciting opportunity for recruitment for those with experience who want to ...",
        "url": "https://www.linkedin.com/jobs/view/4441895390/",
        "postedDate": "2026-07-27T13:30:53.000Z"
    },
    {
        "id": "onlinestudy4u-tech-mahindra-new-big-hiring",
        "title": "Tech Mahindra New Big Hiring | Junior Software Engineer – Role",
        "company": "Tech Mahindra",
        "location": "Pune, India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Tech Mahindra New Big Hiring: Jobs for junior software engineers in Pune remain a popular starting point for students looking ...",
        "url": "https://www.naukri.com/job-listings-junior-software-engineer-pune-tech-mahindra-ltd-pune-0-to-0-years-030726024717",
        "postedDate": "2026-07-26T13:26:29.000Z"
    },
    {
        "id": "onlinestudy4u-salesforce-new-hiring-drive",
        "title": "Salesforce HiringDrive | Summer 2027 Intern – Software Engineer",
        "company": "Salesforce",
        "location": "India",
        "type": "Internship",
        "category": "Software Development",
        "description": "Salesforce New Hiring Drive: Salesforce New Hiring Drive: Jobs for software engineer interns in India remain a magnet for students ...",
        "url": "https://salesforce.wd12.myworkdayjobs.com/External_Career_Site/job/India---Bangalore/Summer-2027-Intern---Software-Engineer_JR337715",
        "postedDate": "2026-07-26T13:43:44.000Z"
    },
    {
        "id": "onlinestudy4u-pwc-new-off-campus-hiring",
        "title": "PwC New Off-Campus Hiring | AWS Data and Analytics Advisory Role",
        "company": "PwC New Off",
        "location": "Gurgaon, India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "PwC New Off-Campus Hiring: AWS jobs in Gurgaon keep attracting professionals who are focused on cloud-based infrastructure as well as ...",
        "url": "https://pwc.wd3.myworkdayjobs.com/Global_Experienced_Careers/job/Gurugram-10-C/IN-Specialist--AWS--Data-and-Analytics-Advisory-Gurgaon_747314WD-2",
        "postedDate": "2026-07-26T14:03:19.000Z"
    },
    {
        "id": "onlinestudy4u-dhl-off-campus-drive",
        "title": "DHL Off Campus Drive | Software Engineer Role",
        "company": "Off Campus",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "DHL Off Campus Drive: Job opportunities for Software Engineers in Indore remain a magnet for people looking for secure careers ...",
        "url": "https://careers.dhl.com/global/en/job/DPDHGLOBALAV336444ENGLOBALEXTERNAL/Software-Engineer",
        "postedDate": "2026-07-26T12:49:40.000Z"
    },
    {
        "id": "onlinestudy4u-hcltech-new-biggest-hiring",
        "title": "HCLTech New Biggest Hiring | 𝐆𝐫𝐚𝐝𝐮𝐚𝐭𝐞 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫 𝐓𝐫𝐚𝐢𝐧𝐞𝐞𝐬 For Multiple Roles",
        "company": "HCLTech",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "HCLTech New Biggest Hiring: HCLTech invites applications for Graduate Engineering Trainee posts that are specifically targeted for the 2026 B.Tech batch. This is ...",
        "url": "https://www.linkedin.com/feed/update/urn:li:activity:7486091877700562944/",
        "postedDate": "2026-07-24T04:30:52.000Z"
    },
    {
        "id": "onlinestudy4u-wipro-biggest-hiring-drive",
        "title": "Wipro Biggest Hiring Drive | Trainee (Backend) Role",
        "company": "Wipro",
        "location": "India",
        "type": "Internship",
        "category": "Software Development",
        "description": "Wipro Biggest Hiring Drive: Wipro announces job openings for freshers in 2025 and 2026 graduate batches. This recruitment drive offers Wipro trainees jobs in ...",
        "url": "https://www.linkedin.com/posts/mohil-706663319_please-fill-out-this-form-share-7484919436735315968-QUST/",
        "postedDate": "2026-07-24T05:33:19.000Z"
    },
    {
        "id": "onlinestudy4u-google-new-hiring-drive",
        "title": "Google HiringDrive | Multiple Job Opportunities",
        "company": "Google",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Google New Hiring Drive: Are you an enthusiastic person who is looking for hands-on experience in the field of technology? Applications ...",
        "url": "https://www.linkedin.com/posts/mohammed-sawood-7285a4251_google-googleapprenticeship-googlecareers-share-7485096350255267840-WuSV/",
        "postedDate": "2026-07-22T06:41:49.000Z"
    },
    {
        "id": "onlinestudy4u-ibm-new-off-campus-hiring",
        "title": "IBM Hiring| Software Engineer – Confluent Role",
        "company": "IBM",
        "location": "Bengaluru, India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "IBM New Off Campus Hiring: This Software Engineer job in Bangalore provides a fantastic opportunity for young professionals and recent ...",
        "url": "https://careers.ibm.com/en_US/careers/JobDetail?jobId=124850",
        "postedDate": "2026-07-17T08:20:25.000Z"
    },
    {
        "id": "onlinestudy4u-accenture-new-off-campus-drive",
        "title": "Accenture New Off-Campus Drive |  System and Application Services Associate Role",
        "company": "Accenture",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Accenture New Off-Campus Drive: This job is a great opportunity for young professionals and fresh graduates looking for new IT jobs ...",
        "url": "https://indiacampus.accenture.com/myzone/accenture/1/jobs/129361/job-details",
        "postedDate": "2026-07-17T08:29:32.000Z"
    },
    {
        "id": "onlinestudy4u-recruit-crm-new-hiring-drive",
        "title": "Recruit CRM HiringDrive | Trainee Software Engineer Role",
        "company": "Recruit CRM",
        "location": "India",
        "type": "Internship",
        "category": "Software Development",
        "description": "Recruit CRM New Hiring Drive: The Recruit CRM platform is a prominent bootstrapped SaaS platform for the industry of technology ...",
        "url": "https://www.linkedin.com/feed/update/urn:li:activity:7483426277144715265/",
        "postedDate": "2026-07-16T15:46:40.000Z"
    },
    {
        "id": "onlinestudy4u-binmile-off-campus-hiring",
        "title": "Binmile Off-Campus Hiring | Software Developer Trainee (Freshers) Role",
        "company": "Binmile Off",
        "location": "India",
        "type": "Internship",
        "category": "Software Development",
        "description": "Do you possess a 2025, twenty-26 B.Tech, MCA, or BCA graduate who is looking to start your career in the ...",
        "url": "https://www.linkedin.com/posts/rashika-gupta-aa7a83153_hiring-freshers-softwaredeveloper-share-7483088693772177409-aQAd/",
        "postedDate": "2026-07-16T15:54:17.000Z"
    },
    {
        "id": "onlinestudy4u-microsoft-new-hiring",
        "title": "Microsoft Hiring| Software Engineering INTERN Role",
        "company": "Microsoft",
        "location": "India",
        "type": "Internship",
        "category": "Software Development",
        "description": "Microsoft New Hiring: It is a Software Engineering Internship that offers hands-on experience in developing practical solutions to complex technical ...",
        "url": "https://apply.careers.microsoft.com/careers/job/1970393556911730",
        "postedDate": "2026-07-15T13:28:33.000Z"
    },
    {
        "id": "onlinestudy4u-deloitte-new-big-off-campus-hiring",
        "title": "Deloitte New Big Off-Campus Hiring | Associate Analyst Role",
        "company": "Deloitte",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Deloitte New Big Off-Campus Hiring: The Associate Analyst position for Cloud Infrastructure offers a strong possibility for those who want ...",
        "url": "https://southasiacareers.deloitte.com/job/Bengaluru-Associate-Analyst-Cloud-Infrastructure-Bengaluru-Engineering-Hybrid-Cloud-Engineering/56966344/",
        "postedDate": "2026-07-12T13:20:35.000Z"
    },
    {
        "id": "onlinestudy4u-moglix-off-campus-hiring",
        "title": "Moglix Off Campus Hiring | Fresher Software Engineer Role",
        "company": "Moglix Off Campus",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Moglix Off Campus Hiring: This position provides a fantastic chance for students of software engineering in the 2025-2026 batches to ...",
        "url": "https://www.linkedin.com/posts/kanika-k-8098a1a1_were-hiring-software-engineer-freshers-for-share-7481292690677071872-N09U/",
        "postedDate": "2026-07-11T13:52:46.000Z"
    },
    {
        "id": "onlinestudy4u-myanatomy-new-hiring-drive",
        "title": "MyAnatomy HiringDrive | Enterprise Sales Trainee Program 2026",
        "company": "MyAnatomy",
        "location": "India",
        "type": "Internship",
        "category": "Software Development",
        "description": "MyAnatomy New Hiring Drive: MyAnatomy invites applications to the Training Program for Enterprise Sales 2026, which is a 12-month paid internship for ...",
        "url": "https://match.myanatomy.in/corporate/customCampaign/view?publicLink=e1a1bbc08201a25669c239eb6ad26eca;3d6ce508a62659a91496c52dc95f70c044864dbaa1f047e67dbae281df1c73fcf475811411534e637fcaff6e1407db7dfe6014e25061621189262e4fd02f12ccbac7f0eb90701de8a1342979d153f21aea1adeeeca770d27e65a3c8b7ad909ae9114d6faf344057f0332a662d601f4936d2f9b9a21c8da999c0acf7c18709d052e6980c744b0a038e236bae3051aeac0511576fc4ff948ae445df3a50c06b2cdba7cae2d5753165829ee360f3f2fcd517256c9496e4c0c75758294719bab5c75&source=n#apply",
        "postedDate": "2026-07-09T15:48:59.000Z"
    },
    {
        "id": "onlinestudy4u-tata-new-big-hiring-drive",
        "title": "Tata New Big Hiring Drive | Engineer – Technology & Platform Development Role",
        "company": "Tata",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Tata New Big Hiring Drive: The job focuses on the development of software testing, deployment and debugging. The job entails developing ...",
        "url": "https://jobs.tatacommunications.com/jobs/8121880692?channel=TGlua2VkSW4=",
        "postedDate": "2026-07-09T15:59:00.000Z"
    },
    {
        "id": "onlinestudy4u-cisco-new-off-campus-drive",
        "title": "Cisco New Off Campus Drive | Software Engineer-India Engineering/UHR-FY27",
        "company": "Cisco",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Cisco New Off Campus Drive: This job offers the chance for graduates in 2027 who wish to work with Cisco&#8217;s ...",
        "url": "https://careers.cisco.com/global/en/job/CISCISGLOBAL2016168EXTERNALENGLOBAL/Software-Engineer-India-Engineering-UHR-FY27-Code-with-Cisco",
        "postedDate": "2026-07-09T16:09:54.000Z"
    },
    {
        "id": "onlinestudy4u-salesforce-new-big-off-campus-hiring",
        "title": "Salesforce New Big Off Campus Hiring | Associate Technical Support Engineer Role",
        "company": "Salesforce",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Salesforce New Big Off Campus Hiring: Are you looking for a job in one of the top cloud-based technology companies? Salesforce has ...",
        "url": "https://salesforce.wd12.myworkdayjobs.com/External_Career_Site/job/India---Bangalore/Associate-Technical-Support-Engineer_JR350727",
        "postedDate": "2026-07-09T16:16:18.000Z"
    },
    {
        "id": "onlinestudy4u-ibps-so-recruitment",
        "title": "IBPS SO Recruitment 2026 Notification PDF Out: Check 745 Specialist Posts, Eligibility, Exam Pattern & Salary",
        "company": "IBPS SO",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "IBPS SO Recruitment 2026: The Institute of Banking Personnel Selection (IBPS) has released the official IBPS SO 2026 Notification for ...",
        "url": "https://ibpsreg.ibps.in/crpspxvimy26/",
        "postedDate": "2026-07-03T03:20:46.000Z"
    },
    {
        "id": "onlinestudy4u-exl-hiring-drive",
        "title": "EXL Hiring Drive | Associate – Data Analyst Role",
        "company": "EXL",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "EXL Hiring Drive: An exciting opportunity is available as an Associate Data Analyst to be part of our expanding staff ...",
        "url": "https://fa-ewjt-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_2/job/16594",
        "postedDate": "2026-07-07T10:51:21.000Z"
    },
    {
        "id": "onlinestudy4u-comviva-off-campus-hiring",
        "title": "Comviva Off Campus Hiring | Tech Support Internship",
        "company": "Comviva Off Campus",
        "location": "India",
        "type": "Internship",
        "category": "Software Development",
        "description": "Comviva Off Campus Hiring: Comviva offers the Tech Support internship in Tech Operations and Production Support for engineering students who are eligible. The ...",
        "url": "https://www.linkedin.com/feed/update/urn:li:activity:7480156810574725120/",
        "postedDate": "2026-07-07T10:58:27.000Z"
    },
    {
        "id": "onlinestudy4u-indiamart-new-hiring-drive",
        "title": "IndiaMART HiringDrive | Associate Engineer/Intern",
        "company": "IndiaMART",
        "location": "India",
        "type": "Internship",
        "category": "Software Development",
        "description": "IndiaMART New Hiring Drive: IndiaMart is India&#8217;s biggest B2B marketplace and is a top single-source solution for all your business ...",
        "url": "https://docs.google.com/forms/d/e/1FAIpQLSc3-K8zCRIt7hN5y8cIlTdIdRkZ7S0mD_XoykfOVaXS1snYtg/viewform?pli=1",
        "postedDate": "2026-07-07T11:11:56.000Z"
    },
    {
        "id": "onlinestudy4u-qualcomm-off-campus-drive",
        "title": "Qualcomm Off Campus Drive | Engineer/Associate Engineer – AI Platform Role",
        "company": "Off Campus",
        "location": "Hyderabad, India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Qualcomm Off Campus Drive: Qualcomm is looking for skilled AI Platform Engineers and Associate AI Engineers in Hyderabad to lead large-scale AI initiatives. This job ...",
        "url": "https://careers.qualcomm.com/careers/job/446719463158",
        "postedDate": "2026-07-07T11:31:53.000Z"
    },
    {
        "id": "onlinestudy4u-capgemini-new-big-hiring",
        "title": "Capgemini New Big Hiring | Associate Software Engineer Role",
        "company": "Capgemini",
        "location": "Pune, India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Capgemini New Big Hiring: Capgemini is seeking applications to fill the Assistant Software Engineer job in Pune. It is an entry-level Software Engineering ...",
        "url": "https://careers.capgemini.com/job/Pune-Associate-Software-Engineer/1411967133/",
        "postedDate": "2026-07-07T11:56:49.000Z"
    },
    {
        "id": "onlinestudy4u-accenture-new-big-hiring",
        "title": "Accenture New Big Hiring | Web Developer Associate Role",
        "company": "Accenture",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Accenture New Big Hiring: A renowned international professional services company is seeking an experienced Web Developer Associate for its Marketing ...",
        "url": "https://www.accenture.com/in-en/careers/jobdetails?id=AIOC-S01648534_en&title=Web+Developer+Associate",
        "postedDate": "2026-07-07T13:56:57.000Z"
    },
    {
        "id": "onlinestudy4u-wipro-new-biggest-hiring-drive",
        "title": "Wipro New Biggest Hiring Drive | (WILP) WE – B.ET 2025 & 2026 FY’27",
        "company": "Wipro",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "Wipro New Biggest Hiring Drive: Are you seeking a new career after completing your diploma? It is possible to find a ...",
        "url": "https://app.joinsuperset.com/join/#/signup/student/jobprofiles/f00af2c5-aa20-48b8-b3d9-33f733e31da3",
        "postedDate": "2026-07-08T14:35:30.000Z"
    },
    {
        "id": "onlinestudy4u-tcs-new-off-campus-drive",
        "title": "TCS New Off Campus Drive | iON NQT",
        "company": "TCS",
        "location": "India",
        "type": "Full-time",
        "category": "Software Development",
        "description": "TCS New Off Campus Drive: The TCS iON National Qualifier Test (TCS iON NQT) July 2026 registration process is open to those ...",
        "url": "https://www.tcsion.com/hub/national-qualifier-test/",
        "postedDate": "2026-07-08T14:43:00.000Z"
    },
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
    }
];
