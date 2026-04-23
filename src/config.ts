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
    "Hi there - thanks for stopping by. If you've already seen my CV, consider this the story behind it.\n\nI'm a STEM graduate shaped by an international academic journey across Beijing, Hong Kong, and London. It was during my degrees that I discovered how much I enjoyed the modules involving data analysis, coding, and machine learning — enough that I kept going on my own, working through material from UCL's MSc in Data Science and Machine Learning alongside courses on Coursera and other accredited platforms.\n\nThat self-directed exploration confirmed what I'd started to suspect: Data Science is the field I want to build my career in. I'm drawn to the mix of rigorous problem-solving, engineering craft, and the satisfaction of turning messy data into decisions that matter.\n\nTake a look around — I hope what you find here makes the case that I'd be a strong addition to your team."
    ,
  skills: ["Python", "PostgreSQL", "ETL Pipelines", "pandas / NumPy / scikit-learn", "Machine Learning (CNNs, ResNets, U-Nets)", "Tensorflow / Keras", "Unsupervised ML (UMAP, HDBSCAN, k-means)", "RAG / LLMs (LlamaIndex, ChromaDB, OpenAI API)"],
  projects: [
    {
      name: "TFTExodia.com - Analytics Platform",
      description:
        "Built an end-to-end analytics platform that mines 200k+ high-elo Teamfight Tactics matches to surface meta team compositions via unsupervised ML, identifying 35+ distinct archetypes — including several untracked by sites like MetaTFT. Engineered a Python ingestion pipeline against the Riot Games API into a normalised PostgreSQL schema (Dockerised, psycopg2 ETL), with daily automated refreshes via launchd. Clustered compositions using MultiLabelBinarizer features, UMAP (Jaccard) for dimensionality reduction, and HDBSCAN. Frontend in TypeScript/Next.js with Tailwind, deployed on Vercel.",
      link: "https://tftexodia.com",
        skills: ["Python (psycopg2, pandas, scikit-learn)", "PostgreSQL", "Docker", "ETL Pipelines", "Unsupervised ML (UMAP, HDBSCAN)",  ],
    },
    {
      name: "Supernova Neutrino Event Analysis",
      description:
      "Built an end-to-end ML pipeline in TensorFlow/Keras to detect, classify, and denoise simulated supernova neutrino events in 10,000+ Liquid Argon Time-Projection Chamber (LArTPC) detector images. Engineered physics-based noise simulation, a ResNet-18 classifier robust to heavy noise (98% accuracy), a U-Net denoising autoencoder, and a Bayesian-optimised regression model that cut energy-prediction error by 45% (to 8% MAE).",
      link: "https://github.com/anpugeat/supernova-neutrino-classification",
      skills: ["Python", "Tensorflow / Keras", "Machine Learning (CNNs, ResNets, U-Nets)", "Image Classification & Denoising", "Regression"],
    },
    {
      name: "Fluorescence Decay Analysis for Time-Resolved Spectroscopy",
      description:
        "Built a Python/MATLAB pipeline to extract signal from noisy, high-throughput photon-count time series, developing a novel tail-fitting methodology for multi-exponential decay models. Applied weighted least-squares regression with custom preprocessing (statistical truncation, residual filtering) to handle heteroscedastic noise, validated against ground truth at 98.0% accuracy on lifetime, 97.5% on amplitude, and 96.3% on rotational correlation times.",
      link: "https://github.com/anpugeat/fluorescence-decay-analysis",
      skills: ["MATLAB", "Statistical Modelling & Regression", "Signal Processing & Noise Handling", "Data Preprocessing"],
    },
    {
      name: "Shaking Table to Extract Microplastics from River Shorelines",
      description:
        "Pioneered a novel application of shaking tables (a mining technology) for shoreline microplastics removal. Reduced a 6-dimensional parameter space to 2 key drivers using Plackett-Burman fractional factorial screening and ANOVA significance testing. Fit quadratic response-surface models via Central Composite Design on a synthetic-sediment dataset, optimising recovery to 88.1%, separation efficiency to 75.3%, and purity to 85.8%. Diagnosed distribution shift on out-of-sample River Thames field data (recovery dropped to ~60%) and traced the gap to unmodelled covariates (organic matter, biofouling) altering feature distributions.",
      link: "https://github.com/anpugeat/microplastics-removal-project",
      skills: ["Design of Experiments (Plackett-Burman, Central Composite Design)", "Statistical Modelling / Response Surface Methodology", "Feature Selection & Dimensionality Reduction", "Minitab"],
    },
    {
      name: "UK Energy Transition Research & Offshore Wind Analysis Framework",
      description:
        "Built a Python simulation pipeline (NumPy, Matplotlib, PyWake) modelling stochastic wind patterns via Weibull/Rayleigh distributions and vectorised power-curve calculations to forecast turbine output, validated against the DTU PyWake benchmark — optimising site and turbine selection to a Levelised Cost of Electricity of £42/MWh (14% below market) at a 63.4% capacity factor (408 GWh/year).",
      link: "https://github.com/anpugeat/UK-offshore-wind-analysis",
      skills: ["Python", "Statistical Modelling", "Time-Series Analysis", "ETL Pipelines"],
    },
  ],
  experience: [
    {
      company: "Edue",
      title: "Software Engineering Intern",
      dateRange: "Sep 2023 - Feb 2024",
      description:
      "A Python-based Discord bot that answers student coursework questions with citations grounded in their actual textbooks and research papers, built on a Retrieval-Augmented Generation (RAG) pipeline.\n\nRather than relying on a generic LLM that may hallucinate, Edue Bot retrieves relevant passages from a curated library of course materials and uses them as context for its responses — giving students answers they can trust and trace back to source.",
      link: "https://github.com/anpugeat/RAG-discord-bot",
      bullets: [
        "Ingests heterogeneous educational documents (PDFs, DOCX) into a clean, searchable knowledge base",
        "Performs semantic search over embedded course content to surface the most relevant passages for any question",
        "Routes queries intelligently between LLMs - heavier models for complex reasoning, lighter ones for casual chat - to keep inference costs low without sacrificing answer quality",
        "Enforces per-user rate limits to ensure fair access across a shared student community",
      ],
    },
    {
      company: "Warneken Consulting",
      title: "Material Science Research Intern",
      dateRange: "Jun 2023 - Aug 2023",
      description:
      "Built an end-to-end materials selection pipeline that combines engineering requirements analysis with a custom database and multi-criteria optimisation to recommend optimal materials for each component of a precision lathe.",
      bullets: [
        "Designed a SQLite materials database (200+ candidates) with ingestion from the Materials Project API, MatWeb, and literature sources. Added schema validation, provenance tracking, and confidence flags to handle messy, heterogeneous inputs.",
        "Encoded engineering requirements as a quantitative scoring framework — hard constraints plus weighted objectives across 10+ properties (stiffness, damping, thermal expansion, cost) using Ashby performance indices.",
        "Python (pandas, NumPy, scikit-learn) implementing constraint filtering, normalised multi-criteria scoring, and Pareto-front extraction to produce ranked shortlists per component.",
      ],
    },
    {
      company: "Sinovision-Tech",
      title: "Test Engineering Intern",
      dateRange: "Jun 2022 - Aug 2022",
      bullets: [
        "Developed diagnostic protocols for CT scanner circuitry using oscilloscopes, multimeters and signal analysers",
        "Conducted root cause analysis using schematics and signal tracing, achieving 95% accuracy on 200+ assemblies",
        "Applied statistical process control to circuit monitoring, reducing testing time by 40%",
      ],
    },
  ],
  education: [
    {
      school: "Dulwich College Beijing",
      degree: "International Baccalaureate",
      dateRange: "2017-2019",
      description: 
        "Graduated with an IB Diploma score of 40/45, including 7/7 in Higher Level Physics, 6/7 in Higher Level Mathematics, and 7/7 in Chinese. Wrote an A-grade Extended Essay, \"Measuring the Mass of Jupiter via Telescope,\" using telescopic observations of Jupiter's moons and Kepler's Third Law to calculate the planet's mass from collected orbital data — an early hands-on experience in turning raw measurements into quantitative results. Also served as Sports Prefect, leading the school's Terry Fox Run and annual sports awards.",
      skills: ["Physics HL", "Mathematics HL", "Chinese SL"],
    },
    {
      school: "Hong Kong University of Science and Technology",
      degree: "Bachelor of Engineering",
      dateRange: "2019-2020",
      description: 
        "Accepted into HKUST with an admissions scholarship. My time there was cut short after I left due to safety concerns during the 2019 protests, but I made the most of the rigorous academic environment — building strong quantitative and programming foundations through coursework in multivariable calculus, differential equations, and object-oriented programming in C++ and Java. Beyond the classroom, I led a team in HKUST's TechVention competition to design a portable air purifier, placing 8th out of 92 teams and gaining hands-on experience with end-to-end engineering development and cross-functional collaboration.",
      skills: ["Multivariable Calculus","Differential Equations","Object-Oriented Programming"],
    },
    {
      school: "University College London",
      degree: "Bachelor of Science in Physics",
      dateRange: "2020-2023",
      description: 
      "Built a strong quantitative foundation through coursework in Mathematical Methods I-III, Data Analysis & Statistics, Electromagnetic Theory, and Quantum Mechanics. Applied these methods in hands-on research projects including Hall-effect characterisation of thin-film Bismuth and statistical analysis of Time-Correlated Single Photon Counting data — receiving the highest peer-review grade in every group project. Specialised electives in Practical Machine Learning for Physicists and Practical Physics and Computing developed my Python proficiency and gave me production experience with Keras and TensorFlow for model development on experimental datasets.",
      skills: ["Practical Machine Learning for Physicists","Mathematical Methods I-III","Data Analysis & Statistics","Practical Physics and Computing"],
    },
    {
      school: "University College London",
      degree: "Master of Science in Mechanical Engineering",
      dateRange: "2023 - 2025",
      description: 
      "Extended my technical foundation into computational modelling and simulation at Level 7, working with large numerical datasets through ANSYS Fluent and APDL for CFD and Finite Element Analysis. Coursework spanned robotics control, power transmissions, materials science, and energy systems — each requiring data-driven analysis and algorithmic problem-solving. My thesis delivered an end-to-end engineering project from problem definition through implementation and validation, complemented by formal training in project management and technical delivery.",
      skills: ["Advanced Computation in Engineering","Control and Robotics","Project Management","New and Renewable Energy Systems"],    
    },
  ],
  service: 
    "Throughout university, I balanced academic work with part-time roles across retail, hospitality, and tutoring. Beyond providing income, these positions sharpened skills directly relevant to data work: operating under pressure, prioritising competing demands, communicating clearly with diverse audiences, and maintaining accuracy in fast-moving environments.",
  roles: [
    {
    company: "UNIQLO",
    position: "Sales Associate",
    dateRange: "2025-Present",
    logo: "/logos/UNIQLO_logo.svg",
    description: "Worked the shop floor and tills at the Oxford Street flagship, one of UNIQLO's busiest stores in Europe, serving several hundred customers per shift. Operated POS and stock systems accurately under sustained pressure, and learned to read demand patterns across the day to anticipate where staffing and stock attention were needed.",
    },
    {
      company: "The Coffee Tree",
      position: "Barista",
      dateRange: "2024-2025",
      logo: "/logos/coffee_tree_logo.png",
      backgroundcolor: "bg-gray-800",
      description: "Ran solo service during peak hours at a high-volume Old Street café, handling order intake, drink preparation, and queue management simultaneously. ",
    },
    {
      company: "CoCo Ichibanya",
      position: "Supervisor",
      dateRange: "2024-2025",
      logo: "/logos/coco_logo.png",
      backgroundcolor: "bg-gray-800",
      description: "Managed floor operations at a high-traffic Leicester Square restaurant, coordinating between front-of-house, kitchen, and customers during peak service. ",
      },
      {
        company: "WeEnglish",
        position: "Maths & Physics Tutor",
        dateRange: "2022-2024",
        logo: "/logos/weenglish_logo.png",
        description: "Delivered one-to-one maths and physics tutoring to high-school students, bilingually in English and Mandarin. Tailored explanations of abstract quantitative concepts to each student's level, and strived to maintain visually simulating content.",
      },
  ]
};
