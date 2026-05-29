import { VercelLogo } from "@/components/TechLogos";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  FileDown,
  User,
  BadgeCheck,
  Clock,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import cvFile from "@/assets/files/cv_pdf/RobertMcMaster_Resume.docx";

const Home = () => {
  const [copied, setCopied] = useState(false);
  const email = "RobertMcMaster412@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleEmailClick = (e) => {
    if (window.innerWidth <= 640) {
      window.location.href = `mailto:${email}`;
      e.preventDefault();
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-7 sm:mt-0 md:mt-3 lg:mt-5">
      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 relative tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Robert McMaster
        </motion.h1>
        <motion.h2
          className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 relative tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I turn data into decisions
        </motion.h2>

        <motion.p
          className="text-base sm:text-xl md:text-2xl text-gray-400 mb-4 sm:mb-5 max-w-2xl mx-auto px-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Senior data professional specializing in Power BI, SQL and Python.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex justify-center space-x-3 sm:space-x-4">
            <a
              href={cvFile}
              download="RobertMcMaster_Resume.docx"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Download Resume
            </a>
            <Link
              to="/about"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white rounded-full text-sm sm:text-base font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              About Me
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleEmailClick}
              className="group flex items-center gap-2 py-2 px-1 transition-all cursor-copy sm:cursor-pointer"
              aria-label={`Email: ${email}`}
            >
              <Mail className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-400 group-hover:text-white transition-colors sm:text-base hidden sm:inline">
                {email}
              </span>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" aria-hidden="true" />
                )}
              </div>
            </button>
            <a
              href="https://linkedin.com/in/robert-mcmaster"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Visit LinkedIn profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="text-sm hidden sm:inline">linkedin.com/in/robert-mcmaster</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 justify-items-center gap-6 mt-8 sm:mt-12 max-w-xs sm:max-w-none mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center group w-full"
            whileHover={{ y: -2 }}
          >
            <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mx-auto" />
            </div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-base sm:text-lg font-semibold">5+ Years</span>
              <span className="text-xs sm:text-sm text-gray-400">Experience</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center group w-full"
            whileHover={{ y: -2 }}
          >
            <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
              <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mx-auto" />
            </div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-base sm:text-lg font-semibold">8+ Certifications</span>
              <span className="text-xs sm:text-sm text-gray-400">Power BI, Snowflake, Azure, etc.</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center group w-full"
            whileHover={{ y: -2 }}
          >
            <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mx-auto" />
            </div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-base sm:text-lg font-semibold">Dual Master's</span>
              <span className="text-xs sm:text-sm text-gray-400">MBA + MS Analytics</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
