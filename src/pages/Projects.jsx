import { ScrollAnimation } from "@/components/ScrollAnimation";

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Featured Projects
        </h2>
      </ScrollAnimation>
      <ScrollAnimation>
        <p className="text-gray-400 text-lg">Projects coming soon.</p>
      </ScrollAnimation>
    </div>
  );
};

export default Projects;
