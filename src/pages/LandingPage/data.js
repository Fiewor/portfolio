export const education = [
  {
    degree: "M.Sc. Computer Science and Technology",
    institution: "Crawford University, Igbesa, Nigeria",
    period: "01.2021 - 10.2022",
    grade: "GPA 4.18 / 5.00",
  },
  {
    degree: "B.Sc. Computer Science and Technology",
    institution: "Crawford University, Igbesa, Nigeria",
    period: "11.2014 - 07.2018",
    grade: "Second Class Honours (Upper Division), GPA 4.26 / 5.00",
  },
];

export const researchInterests = [
  "Artificial Intelligence in Education (AIEd)",
  "AI-assisted grading and feedback",
  "Teacher-in-the-loop and human-in-the-loop assessment systems",
  "Multilingual and code-switched educational NLP/ASR for African classrooms",
  "Multi-agent safety, validation, and auditability in grading pipelines",
  "Psychometrics, grading validity, and responsible educational AI",
];

export const publications = [
  {
    title:
      "Teacher-in-the-Loop AI Assessment for African Classrooms: Paper-Based Grading, Offline Exams, and Code-Switched Oral Verification",
    authors: "J. O. Fiewor (sole author)",
    venue: "Accepted, NeurIPS 2026 Workshop on Global South AI (23 Sept 2026)",
    summary:
      "A 60-script shadow-mode study of paper-based grading under teacher review, a code-switched speech-recognition comparison on consented classroom recordings (English with Nigerian Pidgin, Yoruba, Swahili, and isiZulu) plus a 30-clip African benchmark, and an offline path for exam generation and essay grading on teacher hardware. Language-hypothesis routing reduced mean WER from 0.63 to 0.15 and the downstream score gap from 2.9 to 1.3 marks out of 10.",
    link: "https://openreview.net/forum?id=IlKAI77Iwm",
    linkLabel: "OpenReview (public release pending)",
  },
];

export const researchArtifacts = [
  {
    name: "Intro Python paper-assessment scripts",
    type: "Dataset",
    description:
      "De-identified handwritten exam scripts, lecturer reference scores, and reproduction code for the shadow-mode grading study.",
    link: "https://huggingface.co/datasets/fiewor/intro-python-paper-assessment-scripts",
  },
  {
    name: "GradrAI Viva code-switched speech benchmark",
    type: "Dataset",
    description:
      "Consented classroom recordings of code-switched student explanations used to evaluate speech recognition for oral assessment.",
    link: "https://huggingface.co/datasets/fiewor/gradrai-viva-codeswitch-benchmark",
  },
  {
    name: "Offline AI assessment on consumer hardware",
    type: "Technical write-up",
    description:
      "How GradrAI runs exam generation and grading fully offline with Gemma 4 for low-connectivity classrooms.",
    link: "https://dev.to/fiewor/how-gemma-4-helped-us-cut-the-last-wire-keeping-ai-out-of-african-classrooms-315i",
  },
];

export const achievements = [
  {
    title: "UNDP Nigeria & FSD Africa Innovation Challenge – Winner (2025)",
    details:
      "One of three winners of the UNDP Nigeria and FSD Africa Innovation Challenge, for work with RapidMedicare.",
    link: "https://rapidmed.care/",
    linkLabel: "rapidmed.care",
  },
  {
    title: "Google Gemini National #BuildWithAI Hackathon – 3rd Place (2024)",
    details:
      "Built the initial GradrAI MVP in three days using Google Gemini. Independently implemented the frontend in under four hours after a teammate became unavailable, and contributed the AI-driven backend component.",
  },
  {
    title: "MongoDB World Hackathon – 2nd Place (2022)",
    details:
      "Co-developed 'Good News', a web platform that surfaces positive news stories globally using the GDELT dataset. The project placed 2nd out of 600+ international participants.",
  },
  {
    title:
      "Open Source Contributor & Demo Day Speaker @ IBM Call for Code for Racial Justice (2021–2022)",
    details:
      "Contributed to IBM’s Call for Code for Racial Justice open-source initiatives, focusing on internationalization (i18n) and accessibility (a11y) for the Truth Loop project. Also served as a Hacktoberfest Demo Day speaker.",
  },
];

export const experience = [
  {
    role: "Founder & Lead AI Engineer",
    company: "GradrAI",
    timeline: "11.2024 - Present",
    description:
      "Founded and lead GradrAI, an end-to-end AI assessment platform for paper-based exams, computer-based tests, and AI-driven mock tests. Evolved the grading engine from an Azure OCR and keyword pipeline to an LLM-driven system on Google Gemini and Vertex AI, then shipped it as a multi-agent system built with Google ADK and deployed on Vertex AI Agent Engine. Its pipelines chain specialised agents for preprocessing, rubric-based grading, referee cross-checking that routes low-confidence results to teacher review, weakness detection, personalised practice generation, and result aggregation, with MCP tools for database and storage access. Ran shadow-mode evaluations on 60 paper-based scripts, built code-switched oral-verification experiments, and delivered an offline CBT pipeline that runs on an on-device model for low-connectivity classrooms.",
  },
  {
    role: "Full-Stack Developer",
    company: "VerifyEd",
    timeline: "02.2025 - Present",
    description:
      "Build and maintain issuer-facing and recipient-facing systems for a digital credentialing platform that issues and verifies educational credentials. Shipped landscape-optimised certificate downloads and one-click LinkedIn sharing, improved server-side rendering for reliable crawling and link previews, resolved verification incidents caused by XRPL ledger congestion, and designed a script to recover unused XRP from dormant wallets, saving the company over $1,000.",
  },
  {
    role: "Full-Stack Developer",
    company: "Consolidated Hallmark Insurance",
    timeline: "01.2023 - 06.2025",
    description:
      "Contributed to the development of a unified internal API automating core insurance workflows. Played a key role in insourcing the travel insurance portal, streamlining the purchase journey from seven steps to three, and implementing complex workflows such as group purchases, bulk policy issuance, and Buy Now, Pay Later (BNPL) functionality.",
  },
  {
    role: "Junior Frontend Developer",
    company: "HelloHub",
    timeline: "02.2022 - 10.2022",
    description:
      "Improved mobile responsiveness of the admin dashboard by translating Figma designs into production-ready React components. Wrote test-driven frontend code, refactored components to TypeScript, and gained hands-on experience with component-driven development and clean architecture practices.",
  },
  {
    role: "Frontend Web Development Intern",
    company: "Zuri",
    timeline: "03.2021 - 07.2021",
    description:
      "Developed a lease management web application while collaborating in an Agile team environment. Worked with HTML, CSS, and Gulp, and gained foundational experience in professional software development workflows.",
  },
];

export const teaching = [
  {
    role: "Google Cloud Platform Mentor",
    organisation: "Google Africa Developer Scholarship",
    timeline: "06.2021 - 12.2021",
    description:
      "Mentored learners working through Google Cloud Platform content and practical cloud-computing exercises.",
  },
  {
    role: "High School Computer Science Teacher",
    organisation: "Apostolic Faith Secondary School",
    timeline: "01.2019 - 11.2019",
    description:
      "Taught secondary-school computer science and supported students in foundational computing concepts and practical digital skills.",
  },
];

export const certificates = [
  {
    name: "5-Day AI Agents Intensive Course with Google",
    issuer: "Kaggle & Google",
    date: "2025",
  },
  {
    name: "Qiskit Fall Fest 2025 (Participation)",
    issuer: "IBM Quantum",
    date: "2025",
  },
  {
    name: "Python Coder",
    issuer: "Kaggle",
    date: "2025 - Present",
  },
  {
    name: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "2025 - Present",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University",
    date: "2024 - Present",
  },
  {
    name: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "2021 - 2024",
  },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2023 - Present",
  },
  {
    name: "Google Cloud Platform Fundamentals: Core Infrastructure",
    issuer: "Google Cloud",
    date: "2021 - Present",
  },
  {
    name: "IBM Carbon Design System Developer Essentials (React)",
    issuer: "IBM",
    date: "2021 - Present",
  },
  {
    name: "freeCodeCamp Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2020 - Present",
  },
];
