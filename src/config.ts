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
      school: "University College London",
      degree: "Master of Science in Mechanical Engineering",
      dateRange: "2023 - 2025",
      description: 
        "",
    },
    {
      school: "University College London",
      degree: "Bachelor of Science in Physics",
      dateRange: "2020-2023",
      description: 
        "",
    },
    {
      school: "Hong Kong University of Science and Technology",
      degree: "Bachelor of Engineering",
      dateRange: "2019-2020",
      description: 
        "",
    },
  ],
};
