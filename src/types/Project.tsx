interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: {
    name: string;
    icon: string;
  }[];
  githubUrl: string;
  liveUrl?: string;
}

export default Project;
