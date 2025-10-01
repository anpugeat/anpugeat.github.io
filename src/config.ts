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
    "Hi there! You've probably seen my CV already. This is just a little more about me. \n\n I'm an eager STEM graduate from a globally-diverse "+
    "background, having studied at international hubs like Beijing, Hong Kong and London. "+
    
    "Upon completing my degrees, I had recalled a thorough enjoyment out of completing a variety of data analysis, coding and machine learning modules. "+
    "I found myself self-learning a number of Data Science and ML modules from both UCL's MSc Data Science and ML course as well as accredited "+
    "teaching programs like Coursera. I've confirmed now that, for my career, Data Science is what I want to do. I am excited for the chance at a role in "+
    "this field and to dedicate myself fully towards it. "+
    "This website offers a bit more insight into who I am - I hope you will find that I am a good fit for your company!"
    
    ,
  skills: ["Python", "SQL", "Tensorflow", "Keras", "Pandas", "SciPy", "Plotly", "GIT", "ChromaDB"],
  projects: [
    {
      name: "Shaking Table to Extract Microplastics from River Shorelines",
      description:
        "Inspired by the Mining Industry's Wilfley Tables which sort gold from crushed rock, I developed a cheap, portable shaking table with a novel flexure guide system to remove microplastics from the River Thames",
      link: "https://github.com/anpugeat/microplastics-removal-project",
      skills: ["Fusion360", "Minitab", "MATLAB"],
    },
    {
      name: "Machine Learning Analysis Framework for Supernova Neutrino Detection",
      description:
        "Using physics-based noise simulation, CNNs, U-Net autoencoders, and Bayesian-optimised networks, I developed an ML framework to identify supernova neutrino events from MicroBooNE's Liquid-Argon Time-Projection Chamber data",
      link: "https://github.com/anpugeat/supernova-neutrino-detection",
      skills: ["Python", "Tensorflow", "Keras"],
    },
    {
      name: "Analysis Algorithm for Multi-Exponential Fluorescence Decay",
      description:
        "I devised a novel tail-fitting algorithm for the Time-Correlated Single Photon Counting data from biological proteins, resolving convoluted anisotropic data like enzyme binding states and rotational correlation times",
      link: "https://github.com/anpugeat/fluorescence-decay-analysis",
      skills: ["OriginPro", "MATLAB", "Python"],
    },
    {
      name: "UK Energy Transition Research & Offshore Wind Analysis Framework",
      description:
        "I conducted a quantitative analysis of the UK's energy transition and designed an optimised offshore wind farm using geospatial analysis: incorporating wind mapping, power curve modelling and Rayleigh distribution analyses.",
      link: "https://github.com/anpugeat/UK-offshore-wind-analysis",
      skills: ["Python", "PyWake", "Data Visualisation"],
    },
  ],
  experience: [
    {
      company: "Edue",
      title: "Project Engineering Intern",
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
        description: "Offerred personalised mathematics & physics tutoring to high-school students in both English and Chinese. ",
      },
  ]
};
