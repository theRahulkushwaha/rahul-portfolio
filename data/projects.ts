type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  type: "Personal" | "Freelance";
  status: "Completed" | "In Progress";
  github: string;
  live: string;
  readme: string;
};

export const projects: Project[] = [
  {
    title: "Echoo",
    description:
      "Real-time chat application with authentication and socket-based messaging for seamless communication.",
    tech: ["React Native","expo"," TypeScript ", "Node.js", "Socket.io", "JWT","MongoDB"],
    image: "/projects/echoo.png",
    type: "Personal",
    status: "Completed",
    github: "https://github.com/theRahulkushwaha/Echoo",
    live: "",
    readme: "https://github.com/theRahulkushwaha/Echoo/blob/main/README.md",
  },
  {
    title: "Floryn Stayz",
    description:
      "Modern hotel booking website with responsive UI and optimized user experience.",
    tech: ["Next.js"," TypeScript ","Tailwind CSS",],
    image: "/images/projects/floryn.png",
    type: "Freelance",
    status: "In Progress",
    github: "https://github.com/theRahulkushwaha/florynstayz",
    live: "https://florynstayz.vercel.app/",
    readme: "https://github.com/theRahulkushwaha/florynstayz/blob/main/README.md",
  },
  {
    title: "CityZen 2.0",
    description:
      "AI-powered smart city dashboard for real-time monitoring and analytics.",
    tech: ["React", "Flask", "Firebase", "AI"],
    image: "/images/projects/cityzen.png",
    type: "Personal",
    status: "Completed",
    github: "https://github.com/theRahulkushwaha/CityZen-2.0",
    live: "",
    readme: "https://github.com/theRahulkushwaha/CityZen-2.0#readme",
  },
  {
    title: "Ticket App",
    description:
      "Mobile ticket booking application with smooth UI and real-time booking features.",
    tech: ["React Native"," TypeScript ", "Expo", ],
    image: "/images/projects/ticket.png",
    type: "Personal",
    status: "Completed",
    github: "https://github.com/theRahulkushwaha/pixelwand-ticket-app",
    live: "",
    readme: "https://github.com/theRahulkushwaha/pixelwand-ticket-app#readme",
  },
  
  {
    title: "Yoga App",
    description:
      "Fitness and yoga mobile application with guided sessions and user-friendly UI.",
    tech: ["React Native", "Expo"],
    image: "/images/projects/yoga.png",
    type: "Personal",
    status: "Completed",
    github: "https://github.com/theRahulkushwaha/YogaApp",
    live: "",
    readme: "https://github.com/theRahulkushwaha/YogaApp#readme",
  },
  {
    title: "LegalMind",
    description:
      "Legal assistance platform leveraging AI for smart legal insights and guidance.",
    tech: ["React", "Node.js"],
    image: "/images/projects/legal.png",
    type: "Personal",
    status: "Completed",
    github: "https://github.com/theRahulkushwaha/LegalMind",
    live: "",
    readme: "https://github.com/theRahulkushwaha/LegalMind#readme",
  },
  {
    title: "Chat Assignment App",
    description:
      "Chat-based assignment submission platform with messaging and task management features.",
    tech: ["React Native", "Node.js"],
    image: "/images/projects/chat.png",
    type: "Personal",
    status: "Completed",
    github: "https://github.com/theRahulkushwaha/ChatAssignmentApp",
    live: "",
    readme: "https://github.com/theRahulkushwaha/ChatAssignmentApp#readme",
  },
  {
    title: "Chintu",
    description:
      "Basic application built for learning and experimenting with frontend concepts.",
    tech: ["JavaScript"],
    image: "/images/projects/chintu.png",
    type: "Personal",
    status: "Completed",
    github: "https://github.com/theRahulkushwaha/Chintu",
    live: "",
    readme: "https://github.com/theRahulkushwaha/Chintu#readme",
  },
  {
    title: "GreenPath",
    description:
      "Sustainability-focused project promoting eco-friendly practices and awareness.",
    tech: ["JavaScript"],
    image: "/images/projects/greenpath.png",
    type: "Personal",
    status: "Completed",
    github: "https://github.com/theRahulkushwaha/Greenpath",
    live: "",
    readme: "https://github.com/theRahulkushwaha/Greenpath#readme",
  },
  {
    title: "AcciAlert",
    description:
      "Accident detection and alert system using real-time data and automation.",
    tech: ["Python"],
    image: "/images/projects/acci.png",
    type: "Personal",
    status: "Completed",
    github: "https://github.com/theRahulkushwaha/AcciAlert",
    live: "",
    readme: "https://github.com/theRahulkushwaha/AcciAlert#readme",
  },
] ;