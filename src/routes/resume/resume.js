const education = [
  {
    institution: "Virginia Tech",
    location: "Blacksburg, VA",
    degree: "Masters of Engineering in Computer Science",
    dates: "Jan 2024 - Present (Expected Graduation in Spring 2025)",
  },
  {
    institution: "Virginia Tech",
    location: "Blacksburg, VA",
    degree: "Bachelors of Science in Computational Modeling and Data Analytics",
    additional: "Minors: Computer Science, Mathematics, Statistics",
    dates: "Aug 2020 - Dec 2023",
  },
];

const experience = [
  {
    title: "Software Engineering Intern",
    company: "Commonwealth Center for Advanced Manufacturing",
    location: "Prince George, VA",
    dates: "May 2024 - Present",
  },
  {
    title: "Undergraduate Teaching Assistant",
    company: "Virginia Tech Academy of Data Science",
    location: "Blacksburg, VA",
    details: "CMDA-3634: Parallel Computing",
    dates: "January 2023 - December 2024",
  },
  {
    title: "Software Engineering Intern",
    company: "Commonwealth Center for Advanced Manufacturing",
    location: "Prince George, VA",
    dates: "May 2023 - August 2023",
  },
  {
    title: "Software Engineering Intern",
    company: "Terazo",
    location: "Richmond, VA",
    dates: "June 2022 - August 2022",
  },
];

const skills = {
  languages:
    "Go, Python, Rust, C, C++, Lua, JavaScript, TypeScript, Bash, R, Java, HTML, CSS, LaTeX, Typst",

  // libraries: "Numpy, Pandas, Matplotlib, Tidyverse, ggplot2",
  frameworks: "Flask, React, Electron, Svelte, HTMX",

  machineLearningAI:
    "TensorFlow, Keras, PyTorch, Scikit-Learn, Numpy, Pandas, Matplotlib, Tidyverse, ggplot2, Ollama",
  parallelComputing: "OpenMP, MPI, CUDA, Goroutines",

  databases:
    "MongoDB, SQLite, PostgresQL, InfluxDB, Prometheus, Grafana, MySQL",

  devTools: {
    operatingSystems: "Linux, Windows, macOS",
    versionControl: "Git, GitHub, GitLab",
    containerization: "Docker, Kubernetes",
    editors: "Neovim, Vim, VSCode",
    configurationManagement: "Nix",
    cloudServices: "Amazon Web Services",
  },

  messagingTools: "MQTT, HTTP, WebSockets, Apache Kafka, TCP, RPC",
  architectureTools: "dbdiagram.io, PlantUML",
};

export { education, experience, skills };
