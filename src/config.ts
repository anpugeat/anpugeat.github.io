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
      skills: ["Python (psycopg2, pandas, scikit-learn)", "PostgreSQL", "Docker", "ETL Pipelines", "Unsupervised ML (UMAP, HDBSCAN)",  ],
    },
    {
      name: "Supernova Neutrino Event Analysis",
      description:
      "Built an end-to-end ML pipeline in TensorFlow/Keras to detect, classify, and denoise simulated supernova neutrino events in 10,000+ Liquid Argon Time-Projection Chamber (LArTPC) detector images. Engineered physics-based noise simulation, a ResNet-18 classifier robust to heavy noise (98% accuracy), a U-Net denoising autoencoder, and a Bayesian-optimised regression model that cut energy-prediction error by 45% (to 8% MAE).",
      link: "https://github.com/anpugeat/supernova-neutrino-detection",
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
      link: "https://github.com/anpugeat/RAG-discord-bot",
      bullets: [
        "Surveyed 400+ UK schools, generating insights informing go-to-market strategy and customer segmentation",
        "Developed a RAG-based Discord chatbot using Python, LlamaIndex, ChromaDB and OpenAI APIs",
        "Created an asynchronous Notion framework to streamline front/back-end communication",
      ],
    },
    {
      company: "Warneken Consulting",
      title: "Material Science Research Intern",
      dateRange: "Jun 2023 - Aug 2023",
      link: "https://github.com/anpugeat/UK-offshore-wind-analysis",
      bullets: [
        "Developed Python framework for lathe optimisation, evaluating 500+ materials with a scoring algorithm",
        "Created analytical dashboards in Python to identify optimal material-component pairings",
        "Devised constraint filtering algorithm ranking materials based on properties for 12 lathe components",
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
      dateRange: "2005-2019",
      description: 
        "By starting my educational journey at an international school in Beijing, I was able to immerse myself in a variety of communities and cultures, equipping me with the ability to collaborate and coexist effectively across different groups. Dulwich Beijing has provided me with a world-wise educational foundation instilling an eagerness for embracing new challenges.",
      skills: ["Physics", "Mathematics"],
    },
    {
      school: "Hong Kong University of Science and Technology",
      degree: "Bachelor of Engineering",
      dateRange: "2019-2020",
      description: 
        "I was fortunate to be accepted into HKUST with an admissions scholarship. My time there was short, however, having left the school due to safety concerns during the 2019 protests. During this time, I was able to flourish "+
        "in the academically-rigorous environment, developing my engineering fundamentals with Arduino robotics, intro programming (C++ and Java) and also mathematical foundations "+
        "through courses like multivariable calculus, fluid mechanics and differential equations courses. Beyond schoolwork, I also gained experience in engineering development pipelines, "+
        "leading a team in HKUST's TechVention competition to design a portable air purifier and placing 8th among 92 teams.",
      skills: ["Multivariable Calculus","Computing with Java","Differential Equations","Electro-Robot Design"],
    },
    {
      school: "University College London",
      degree: "Bachelor of Science in Physics",
      dateRange: "2020-2023",
      description: 
        "At UCL, I was able to further broaden my technical skillset with exposure to physics theory, rigorous mathematics and laboratory work through courses like Mathematical Methods I-III, Data Analysis & Statistics, Electromagnetic Theory and Quantum Mechanics. I was also able to thrive in numerous group settings, developing my teamwork skills with group projects on technical communication, Hall-effect testing of thin-film Bismuth, and statistical analysis of Time-Correlated Single Photon Counting. In each of these projects, I was fortunate to be awarded the highest peer-review grade. I mostly enjoyed the department's forward-looking approach. Among my favourite modules were the newly-introduced Practical Machine Learning for Physicists and Practical Physics and Computing courses, which allowed me to develop Python application and gain exposure to Keras & Tensorflow.",
      skills: ["Practical Machine Learning for Physicists","Mathematical Methods I-III","Data Analysis & Statistics","Practical Physics and Computing"],
    },
    {
      school: "University College London",
      degree: "Master of Science in Mechanical Engineering",
      dateRange: "2023 - 2025",
      description: 
        "Continuing my studies at UCL, I was able to specialise my technical skillset in engineering disciplines, covering level 7 courses spanning robotics control, power transmissions, materials, and energy theory. I learned industry-standard engineering software including ANSYS Fluent and APDL for Finite Element Analysis and Computational Fluid Dynamics. I was also able to learn key professional skills in project management, as well as end-to-end engineering development through my thesis project. Overall, my time at UCL has provided me with a versatile skillset, and I feel confident in tackling any future technical challenges.",
      skills: ["Advanced Computation in Engineering","Control and Robotics","Project Management","New and Renewable Energy Systems"],    
    },
  ],
  service: 
    "Across my University life, I've also held multiple service roles which provided valuable income while also contributing to my growth. These experiences have allowed me to develop professionally, by learning to effectively manage working responsibilities on top of academic and other commitments. Most importantly, I was able to enhance my interpersonal skills, improving my ability to coexist with others and work more effectively within any team.",
  roles: [
    {
    company: "UNIQLO",
    position: "Sales Associate",
    dateRange: "2025-Present",
    logo: "/logos/UNIQLO_logo.svg",
    description: "Delivered customer service and sales support at UNIQLO's Oxford Street store in central London.",
    },
    {
      company: "The Coffee Tree",
      position: "Barista",
      dateRange: "2024-2025",
      logo: "/logos/coffee_tree_logo.png",
      backgroundcolor: "bg-gray-800",
      description: "Managed solo high-volume coffee service at a bustling café in London Old Street.",
    },
    {
      company: "CoCo Ichibanya",
      position: "Floor Staff",
      dateRange: "2024-2025",
      logo: "/logos/coco_logo.png",
      backgroundcolor: "bg-gray-800",
      description: "Maintaining hospitality and operations at a high-traffic restaurant in Leicester Square, London.",
      },
      {
        company: "WeEnglish",
        position: "Maths & Physics Tutor",
        dateRange: "2022-2024",
        logo: "/logos/weenglish_logo.png",
        description: "Offered personalised mathematics & physics tutoring to high-school students in both English and Chinese. ",
      },
  ]
};
