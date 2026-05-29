import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BadgeCheck, Briefcase, TrendingUp, Globe } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import profileImg from "@/assets/profile/profile.jpg";
import cvFile from "@/assets/files/cv_pdf/RobertMcMaster_Resume.docx";

const About = () => {
  const achievements = [
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "8+ Certifications",
      description: "Azure, Power BI, Snowflake, SAFe & Scrum",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "3+ Years",
      description: "Professional analytics experience",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "3.94 GPA",
      description: "Duquesne University MBA",
    },
  ];

  const interests = [
    "Data Engineering",
    "Business Intelligence",
    "Cloud Architecture",
    "Process Automation",
    "Machine Learning",
    "Data Visualization",
  ];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.h2 className="text-4xl font-bold mb-8 gradient-text">
          About Me
        </motion.h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollAnimation>
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img
              src={profileImg}
              alt="Robert McMaster"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Hi, I'm Robert — a Senior Data Analyst with a passion for building
              data systems that help organizations make better decisions. I work
              at the intersection of data engineering, business intelligence, and
              stakeholder strategy.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I hold an MBA and an MS in Analytics and Information Management
              from Duquesne University, alongside a BS in Computer Science from
              Allegheny College. That combination of technical depth and business
              acumen shapes how I approach every project — from designing Data
              Vault models to presenting insights to executives.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Most recently I've been optimizing large-scale SQL pipelines,
              building Power BI dashboards for healthcare operations, and
              automating manual processes with Power Automate — reducing errors
              and reclaiming hours every week for the teams I support.
            </p>
          </div>

          <ScrollAnimation>
            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Quick Facts
              </h3>
              <ul className="list-none space-y-3">
                {[
                  "Based in Pittsburgh, PA",
                  "MBA + MS Analytics — Duquesne University",
                  "BS Computer Science — Allegheny College",
                ].map((fact) => (
                  <motion.li
                    key={fact}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-white rounded-full" />
                    <span>{fact}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="flex justify-start space-x-4">
              <a
                href={cvFile}
                download="RobertMcMaster_Resume.docx"
                className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Download Resume
              </a>
              <Link
                to="/skills"
                className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                My Skills
              </Link>
            </div>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>

      {/* Achievements section — commented out for now
      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <ScrollAnimation key={achievement.title}>
                <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-white mb-4">{achievement.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
      */}

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Areas of Interest
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest) => (
              <ScrollAnimation key={interest}>
                <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{interest}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
