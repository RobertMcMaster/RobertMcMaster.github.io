import { MapPin, Award, BookOpen } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const educationData = [
  {
    school: "Duquesne University",
    subtitle: "Palumbo-Donahue School of Business",
    location: "Pittsburgh, PA",
    duration: "Graduated December 2025",
    degree: "Master of Business Administration (MBA)",
    grade: "GPA: 3.94 / 4.0",
    highlights: [
      "Strategic Management",
      "Financial Analysis",
      "Operations Management",
      "Leadership & Organizational Behavior",
    ],
    description:
      "Developed the business acumen to translate data insights into organizational strategy, financial decision-making, and executive communication.",
  },
  {
    school: "Duquesne University",
    subtitle: "Palumbo-Donahue School of Business",
    location: "Pittsburgh, PA",
    duration: "Graduated August 2022",
    degree: "Master of Science in Analytics and Information Management",
    grade: "GPA: 3.85 / 4.0",
    highlights: [
      "Data Mining",
      "Predictive Analytics",
      "Database Management",
      "Business Intelligence",
    ],
    description:
      "Built a rigorous foundation in data analysis, predictive modeling, and enterprise information systems that directly informs my approach to analytics engineering.",
  },
  {
    school: "Allegheny College",
    subtitle: "",
    location: "Meadville, PA",
    duration: "Graduated May 2021",
    degree: "Bachelor of Science in Computer Science",
    grade: "GPA: 3.62 / 4.0",
    highlights: [
      "Data Structures & Algorithms",
      "Software Development",
      "Operating Systems",
    ],
    description:
      "Established the technical foundation that underpins my career, developing core proficiency in SQL and Python alongside fundamental software development principles and computer science theory.",
  },
];

const Education = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">Education</h2>
      </ScrollAnimation>

      <div className="space-y-8">
        {educationData.map((edu) => (
          <ScrollAnimation key={`${edu.school}-${edu.degree}`}>
            <div className="bg-gray-800/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">{edu.school}</h3>
                  {edu.subtitle && (
                    <p className="text-gray-400 text-sm mt-0.5">{edu.subtitle}</p>
                  )}
                </div>
                <span className="text-sm text-gray-400 whitespace-nowrap bg-white/5 px-3 py-1.5 rounded-full self-start">
                  {edu.duration}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-gray-300 text-sm mb-5">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-gray-400" />
                  {edu.degree}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  {edu.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-gray-400" />
                  {edu.grade}
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                  >
                    {item}
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

export default Education;
