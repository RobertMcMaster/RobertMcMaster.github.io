import { motion } from "framer-motion";
import { MapPin, Building2, ArrowRight } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const experiences = [
  {
    company: "Schneider Downs",
    location: "Pittsburgh, PA",
    type: "Full-time",
    roles: [
      { title: "Senior Data Analyst", period: "May 2026 — Present" },
    ],
    description: [
      "Manage client relations across engagements, serving as the primary analytical point of contact",
      "Develop enterprise-level Power BI dashboards used by executives to analyze company performance and inform strategic decision making",
      "Translate ambiguous stakeholder requirements into clear technical deliverables across various industries",
    ],
  },
  {
    company: "Data Ideology",
    location: "Pittsburgh, PA",
    type: "Full-time",
    roles: [
      { title: "Senior Data Analyst", period: "Dec 2025 — May 2026" },
      { title: "Data Analyst",         period: "Apr 2022 — Dec 2025" },
    ],
    description: [
      "Led data architecture design for a large-scale modernization initiative, ensuring alignment between complex business logic and technical specifications",
      "Served as the technical lead for Power BI reporting across multiple client engagements",
      "Collaborated with business stakeholders to design and implement Data Vault and Star Schema models for an 8-system healthcare modernization initiative",
      "Developed optimized SQL-based transformations for 1.2 billion insurance records, utilizing execution plans and indexing to reduce query runtimes by 88%",
      "Built Power BI dashboards analyzing claims data that enable operations teams to identify trends, investigate root causes, and drive data-informed decisions",
      "Automated manual claims validation processes via Power Automate, parsing PDFs directly into SQL to eliminate 100% of manual entry errors and reduce weekly processing time by 83%",
      "Translated ambiguous stakeholder requirements into clear technical deliverables by defining MVPs and managing Agile sprint backlogs",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Professional Experience
        </h2>
      </ScrollAnimation>

      <div className="space-y-8 sm:space-y-10">
        {experiences.map((exp) => (
          <ScrollAnimation key={exp.company}>
            <div className="group bg-gray-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="flex items-start gap-4 mb-5">
                <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors flex-shrink-0">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-base sm:text-lg mb-2">{exp.company}</p>
                  <div className="space-y-1">
                    {exp.roles.map((role) => (
                      <div key={role.title + role.period} className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-lg sm:text-xl font-bold">{role.title}</h3>
                        <span className="text-sm text-gray-400">{role.period}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-gray-300 mb-6 text-sm sm:text-base">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </span>
                <span className="text-gray-600">•</span>
                <span className="px-2 py-0.5 text-xs bg-white/10 rounded-full">
                  {exp.type}
                </span>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                  >
                    <ArrowRight className="w-4 h-4 mt-1 text-gray-500 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;
