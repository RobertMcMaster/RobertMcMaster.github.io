import {
  Database,
  BarChart2,
  Code2,
  Cloud,
  GitBranch,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { PythonLogo, GitLogo } from "@/components/TechLogos";

const skills = [
  {
    category: "Database & Architecture",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "SQL (Advanced)", icon: <Database className="w-4 h-4" /> },
      { name: "Snowflake", icon: <Cloud className="w-4 h-4" /> },
      { name: "SQL Server", icon: <Database className="w-4 h-4" /> },
      { name: "Oracle", icon: <Database className="w-4 h-4" /> },
      { name: "Data Vault", icon: <GitBranch className="w-4 h-4" /> },
      { name: "Star Schema", icon: <GitBranch className="w-4 h-4" /> },
    ],
  },
  {
    category: "BI & Visualization",
    icon: <BarChart2 className="w-6 h-6" />,
    items: [
      { name: "Power BI", icon: <BarChart2 className="w-4 h-4" /> },
      { name: "DAX", icon: <Code2 className="w-4 h-4" /> },
      { name: "Power Query / M", icon: <Code2 className="w-4 h-4" /> },
      { name: "Excel", icon: <BarChart2 className="w-4 h-4" /> },
      { name: "Matplotlib", icon: <BarChart2 className="w-4 h-4" /> },
      { name: "Seaborn", icon: <BarChart2 className="w-4 h-4" /> },
    ],
  },
  {
    category: "Programming & Automation",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: "Python", icon: <PythonLogo /> },
      { name: "Pandas", icon: <Code2 className="w-4 h-4" /> },
      { name: "NumPy", icon: <Code2 className="w-4 h-4" /> },
      { name: "Power Automate", icon: <Zap className="w-4 h-4" /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    items: [
      { name: "Azure", icon: <Cloud className="w-4 h-4" /> },
      { name: "Azure DevOps", icon: <GitBranch className="w-4 h-4" /> },
      { name: "GitHub", icon: <GitLogo /> },
      { name: "ETL Pipelines", icon: <Zap className="w-4 h-4" /> },
    ],
  },
  {
    category: "Data Modeling",
    icon: <GitBranch className="w-6 h-6" />,
    items: [
      { name: "Data Vault 2.0", icon: <GitBranch className="w-4 h-4" /> },
      { name: "Star Schema", icon: <GitBranch className="w-4 h-4" /> },
      { name: "Normalization", icon: <Database className="w-4 h-4" /> },
      { name: "ERD Design", icon: <GitBranch className="w-4 h-4" /> },
    ],
  },
  {
    category: "Methodologies",
    icon: <Users className="w-6 h-6" />,
    items: [
      { name: "Agile / SAFe", icon: <Users className="w-4 h-4" /> },
      { name: "Scrum", icon: <Users className="w-4 h-4" /> },
      { name: "Sprint Planning", icon: <Wrench className="w-4 h-4" /> },
      { name: "Stakeholder Mgmt", icon: <Users className="w-4 h-4" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Technical Skills
        </h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          A comprehensive overview of my technical expertise across data
          engineering, business intelligence, and cloud platforms.
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup) => (
          <ScrollAnimation key={skillGroup.category}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5 h-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Skills;
