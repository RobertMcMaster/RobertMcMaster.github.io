import { Calendar } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const certificates = [
  {
    title: "SnowPro Core",
    issuer: "Snowflake",
    date: "Active",
    description:
      "Validates expertise in Snowflake's cloud data platform, covering architecture, data loading, performance optimization, and security.",
    skills: ["Snowflake", "Cloud Data", "SQL", "Data Architecture"],
  },
  {
    title: "Power BI Data Analyst Associate (PL-300)",
    issuer: "Microsoft",
    date: "Active",
    description:
      "Demonstrates ability to prepare data, model data, visualize data, and analyze data using Microsoft Power BI.",
    skills: ["Power BI", "DAX", "Power Query", "Data Modeling"],
  },
  {
    title: "Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    date: "Active",
    description:
      "Covers foundational knowledge of core data concepts and Microsoft Azure data services.",
    skills: ["Azure", "Relational Data", "Non-Relational Data", "Analytics"],
  },
  {
    title: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "Active",
    description:
      "Validates foundational knowledge of cloud concepts and Azure services, security, privacy, compliance, and trust.",
    skills: ["Azure", "Cloud Computing", "Security", "Infrastructure"],
  },
  {
    title: "Power Platform Fundamentals (PL-900)",
    issuer: "Microsoft",
    date: "Active",
    description:
      "Demonstrates understanding of Microsoft Power Platform capabilities including Power BI, Power Apps, Power Automate, and Power Virtual Agents.",
    skills: ["Power Platform", "Power Automate", "Power Apps", "Power BI"],
  },
  {
    title: "Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    date: "Active",
    description:
      "Covers foundational AI and machine learning concepts and related Microsoft Azure services.",
    skills: ["Azure AI", "Machine Learning", "Cognitive Services", "NLP"],
  },
  {
    title: "Certified SAFe Practitioner",
    issuer: "Scaled Agile",
    date: "Active",
    description:
      "Demonstrates knowledge of the Scaled Agile Framework (SAFe) for enterprise-level Agile planning and execution.",
    skills: ["SAFe", "Agile", "PI Planning", "Lean-Agile"],
  },
  {
    title: "Certified Scrum Master",
    issuer: "Scrum Alliance",
    date: "Active",
    description:
      "Validates ability to facilitate Scrum ceremonies, remove impediments, and coach teams on Agile principles.",
    skills: ["Scrum", "Agile", "Sprint Planning", "Team Facilitation"],
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">Certificates</h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Eight active certifications across cloud data platforms, business
          intelligence, and Agile methodologies.
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <ScrollAnimation key={cert.title}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5 h-full flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-lg font-semibold leading-snug">{cert.title}</h3>
              </div>
              <div className="flex items-center justify-between text-gray-400 mb-3">
                <span className="text-base">{cert.issuer}</span>
                <div className="flex items-center gap-1.5 text-sm">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="text-green-400">{cert.date}</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                {cert.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs bg-white/10 rounded-full text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
