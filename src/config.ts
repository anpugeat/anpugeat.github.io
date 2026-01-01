export const siteConfig = {
  name: "Alexander Pugeat",
  title: "Physics & Mechanical Engineering Graduate", 
  description: "Portfolio website of Alexander Pugeat",
  accentColor: "#1d4ed8",
  social: {
    email: "alexpugeat@gmail.com",
    linkedin: "https://linkedin.com/in/anpugeat",
    github: "https://github.com/anpugeat",
  },
  aboutMe:
    "Hi! You've probably seen my CV already. This is just a little more about me. \n\n I'm an eager STEM graduate from a globally-diverse "+
    "background, having studied at international hubs like Beijing, Hong Kong and London. "+
    
    "Upon completing my degrees, I had recalled a thorough enjoyment out of completing a variety of data analysis, coding and machine learning modules. "+
    "I found myself self-learning a number of Data Science, Data Engineering & Machine Learning modules from both UCL's MSc Data Science and ML course as well as accredited "+
    "third-party teaching programs. I know that this is what I want to do and am eager for the opportunity to learn and grow in this field. "+
    "This website offers a bit more insight into who I am - I hope you will find that I am a good fit for your company!"
    ,
  skills: [
    "Python",
    "SQL",
    "LlamaIndex (RAG)",
    "Docker",
    "AWS (S3/EC2)",
    "PostgreSQL",
    "PyTorch",
    "TensorFlow",
    "Pandas",
    "Git",
  ],
  projects: [
    {
      name: "Supernova Neutrino Event Analysis (Deep Learning)",
      description:
        "Architected an end-to-end DL pipeline (TensorFlow) to detect neutrino events in high-noise environments. Engineered a custom ResNet-18 for energy regression and U-Net for denoising, reducing Mean Absolute Error (MAE) by 45%.",
      link: "https://github.com/anpugeat/supernova-neutrino-detection", 
      skills: ["Python", "TensorFlow", "Computer Vision", "Autoencoders"],
    },
    {
      name: "RAG-Based AI Chatbot (Discord)",
      description:
        "Architected an asynchronous RAG Discord Charbot using LlamaIndex, OpenAI and Discord.py, with persistent vector storage, enabling semantic retrieval over custom documents such as textbooks. ",
      link: "https://github.com/anpugeat/RAG-discord-bot", 
      skills: ["LlamaIndex", "OpenAI API", "Vector DB", "ETL"],
    },
    {
      name: "Wilfley Table Design & Optimisation for Microplastic Separation",
      description:
        "Pioneered a novel application of shaking tables (a mining technology) for shoreline microplastics removal. Used Plackett-Burmann screening algorithms, ANOVA and Central-Composite Design of experiments to optimise microplastic recovery to 88%.",
      link: "https://github.com/anpugeat/microplastics-removal-project",
      skills: ["Python", "Minitab", "Multivariate Analysis"],
    },
    {
      name: "Fluorescence Decay Analysis for Time-Resolved Spectroscopy",
      description:
        "Developed a novel tail-fitting algorithm for Time-Correlated Single Photon Counting data. Implemented bi-exponential fitting algorithms achieving 98.0% accuracy in lifetime determination for biological systems.",
      link: "https://github.com/anpugeat/fluorescence-decay-analysis",
      skills: ["Python", "Statistical Modelling", "Algorithm Design"],
    },
  ],
  experience: [
    {
      company: "Edue Limited",
      title: "Software Engineering Intern", 
      dateRange: "Sep 2023 - Feb 2024",
      link: "https://github.com/anpugeat/RAG-discord-bot",
      bullets: [
        "Architected an asynchronous RAG Discord Chatbot using LlamaIndex and OpenAI with persistent vector storage.",
        "Engineered a data ingestion pipeline aggregating 400+ institutional datasets to evaluate market fit.",
        "Optimised community retention methods using automated Discord systems and semantic guardrails.",
      ],
    },
    {
      company: "Warneken Consulting",
      title: "Material Science Research Intern",
      dateRange: "Jun 2023 - Aug 2023",
      link: "", 
      bullets: [
        "Engineered a Python ETL script to ingest and normalise properties for 500+ materials.",
        "Developed a decision-support module using Pandas/Seaborn to visualise high-dimensional data.",
        "Architected a constraint-satisfaction algorithm reducing search space by 95%.",
      ],
    },
    {
      company: "Sinovision-Tech",
      title: "Test Engineering Intern",
      dateRange: "Jun 2022 - Aug 2022",
      bullets: [
        "Engineered systematic diagnostic workflows for scanner circuitry, utilising signal analysis pipelines.",
        "Achieved 95% diagnostic accuracy across 200+ assemblies by correlating failure patterns.",
        "Deployed Statistical Process Control (SPC) to monitor performance, reducing manual logging by 35%.",
      ],
    },
  ],
  education: [
    {
      school: "University College London",
      degree: "MSc Mechanical Engineering",
      dateRange: "2023 - 2025",
      description:
        "Specialised in computational engineering and robotics. Mastered industry-standard simulation tools and focused on 'Advanced Computation in Engineering' and data-driven control systems. Further developed modelling and analytical skills.",
      skills: ["Advanced Computation in Engineering", "Control and Robotics", "Project Management"],
    },
    {
      school: "University College London",
      degree: "BSc Physics (2:1)",
      dateRange: "2020 - 2023",
      description:
        "Focus on rigorous mathematical modeling and computational physics. Excelled in 'Practical Machine Learning for Physicists' and 'Data Analysis & Statistics', gaining early exposure to TensorFlow and stochastic modeling.",
        skills: ["Practical Machine Learning for Physicists","Mathematical Methods I-III","Data Analysis & Statistics","Practical Physics and Computing"],
    },
    {
      school: "Hong Kong University of Science and Technology",
      degree: "Bachelor of Engineering (Exchange/Transfer)",
      dateRange: "2019 - 2020",
      description:
        "Admissions Scholarship recipient. Established engineering fundamentals in C++, Java, Multivariable Calculus and Fluid Dynamics before transferring to UCL.",
        skills: ["Multivariable Calculus","Fluid Dynamics","Computing with Java","Differential Equations","Electro-Robot Design"],
    },
  ],
  service:
    "I have balanced my academic career with service and sales roles that required high-volume management, customer-facing communication, and team reliability.",
  roles: [
    {
      company: "UNIQLO",
      position: "Sales Associate",
      dateRange: "2025-Present",
      logo: "/logos/UNIQLO_logo.svg",
      description: "Sales support and inventory management at UNIQLO's Oxford Street flagship.",
    },
    {
      company: "The Coffee Tree",
      position: "Barista",
      dateRange: "2024-2025",
      logo: "/logos/coffee_tree_logo.png",
      backgroundcolor: "bg-gray-800",
      description: "Managed solo high-volume coffee service in Old Street.",
    },
    {
      company: "CoCo Ichibanya",
      position: "Floor Staff",
      dateRange: "2024-2025",
      logo: "/logos/coco_logo.png",
      backgroundcolor: "bg-gray-800",
      description: "Operations and hospitality at Leicester Square location.",
    },
    {
      company: "WeEnglish",
      position: "STEM Tutor",
      dateRange: "2022-2024",
      logo: "/logos/weenglish_logo.png",
      description: "Personalised Mathematics & Physics tutoring (English/Chinese).",
    },
  ],
};
