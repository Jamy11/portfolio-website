export const navigation = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "laptop",
    items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Responsive UI"],
  },
  {
    title: "Backend",
    icon: "laptop",
    items: ["Django REST API", "Node.js", "PHP", "Firebase", "API Design"],
  },
  {
    title: "Machine Learning",
    icon: "brain",
    items: [
      "Data Preprocessing",
      "Model Evaluation",
      "TensorFlow",
      "Keras",
      "CNNs",
    ],
  },
  {
    title: "Workflow",
    icon: "arrow",
    items: [
      "GitHub",
      "Jira",
      "Testing",
      "Debugging",
      "Performance Optimization",
    ],
  },
];

export const experience = [
  {
    title: "Software Engineer",
    company: "BrainStorm Force",
    period: "Aug 2021 - Dec 2022",
    summary:
      "Developed 3 custom skins for the Presto Player plugin, along with contributing additional features to improve functionality and user experience. Worked on Spectra Pro, implementing major architectural improvements, optimizing the codebase, and contributing to pro-level features. Focused on scalability, maintainability, and delivering high-quality, production-ready components.",
  },
  {
    title: "Teaching Assistant",
    company: "AIUB",
    period: "May 2021 - Aug 2021",
    summary:
      "Supported 40+ students in strengthening core programming concepts through lab sessions, code reviews, and hands-on debugging. Improved students’ problem-solving skills by providing structured guidance and practical examples.",
  },
];

export const projects = [
  {
    name: "Brain Tumor Detection and Segmentation",
    blurb:
      "A full-stack MRI analysis app combining a Django REST backend, a Next.js frontend, and a TensorFlow model for real-time predictions.",
    stack: "Next.js, Django REST API, TensorFlow, Keras",
    github: "https://github.com/Jamy11/Brain-Tumor-Classification-segmentation",
  },
  {
    name: "Air Quality Prediction",
    blurb:
      "A machine learning project using regression techniques and feature engineering to predict air quality with strong model performance.",
    stack: "Python, pandas, scikit-learn, Matplotlib",
    github:
      "https://github.com/Jamy11/Air-Quality-Prediction-Using-Regression-Models",
  },
  {
    name: "Multi-Layer Convolutional Image Processing",
    blurb:
      "An image-processing experiment focused on convolution, activation, and pooling behavior across 2D and 3D implementations.",
    stack: "Python, NumPy, TensorFlow, OpenCV",
    github:
      "https://github.com/Jamy11/convolutionpadding-maxpooling-relu-sigmoid-implementation",
  },
  {
    name: "Online Job Portal",
    blurb:
      "A responsive job platform with authentication, job applications, and real-time interactions for both candidates and employers.",
    stack: "Node.js, MongoDB, Firebase, JavaScript",
    github: "https://github.com/Jamy11/onlne-job-portal",
  },
];
