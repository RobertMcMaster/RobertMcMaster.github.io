import { Suspense, lazy, useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Hobbies = lazy(() => import("./pages/Hobbies"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Per-page SEO metadata
const pageMeta = {
  "/": {
    title: "Robert T. McMaster - Senior Data Professional | Power BI & SQL Expert",
    description:
      "Robert T. McMaster — Senior Data Professional specializing in Power BI, SQL, Snowflake, and cloud data architecture. Based in Pittsburgh, PA.",
  },
  "/about": {
    title: "About - Robert T. McMaster | Senior Data Professional",
    description:
      "Learn about Robert T. McMaster — MBA & MS Analytics graduate, Senior Data Professional with 3+ years of experience transforming data into business decisions.",
  },
  "/projects": {
    title: "Projects - Robert T. McMaster | Data & Analytics Portfolio",
    description:
      "Explore analytics and data engineering projects built by Robert T. McMaster using Power BI, SQL, Python, and Azure.",
  },
  "/skills": {
    title: "Skills - Robert T. McMaster | SQL, Power BI, Snowflake, Python",
    description:
      "Technical skills of Robert T. McMaster — SQL, Power BI, Snowflake, Python, Azure, Data Vault, ETL, and more.",
  },
  "/experience": {
    title: "Experience - Robert T. McMaster | Senior Data Professional",
    description:
      "Professional experience of Robert T. McMaster at Schneider Downs and Data Ideology in data analytics and business intelligence.",
  },
  "/education": {
    title: "Education - Robert T. McMaster | MBA & MS Analytics",
    description:
      "Educational background of Robert T. McMaster — MBA and MS Analytics from Duquesne University, BS Computer Science from Allegheny College.",
  },
  "/certificates": {
    title: "Certificates - Robert T. McMaster | Azure, Power BI, Snowflake",
    description:
      "Professional certifications of Robert T. McMaster including SnowPro Core, Power BI PL-300, and six Microsoft Azure certifications.",
  },
  "/contact": {
    title: "Contact - Robert T. McMaster | Senior Data Professional",
    description:
      "Get in touch with Robert T. McMaster for job opportunities, collaborations, or analytics consulting. Based in Pittsburgh, PA.",
  },
  "/blog": {
    title: "Blog - Robert T. McMaster | Data & Analytics Articles",
    description:
      "Articles by Robert T. McMaster on SQL, Power BI, data modeling, and analytics engineering.",
  },
  "/hobbies": {
    title: "Hobbies - Robert T. McMaster | Beyond the Data",
    description:
      "Hobbies and interests of Robert T. McMaster — golf, pickleball, chess, cycling, and more.",
  },
};

// Hook to update document title + meta description on route change
function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] || {
      title: "Robert T. McMaster - Senior Data Professional",
      description:
        "Portfolio of Robert T. McMaster — Senior Data Professional specializing in Power BI, SQL, Snowflake, and cloud data architecture.",
    };

    document.title = meta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl)
      ogUrl.setAttribute(
        "content",
        `https://robertmcmaster.github.io${location.pathname}`,
      );

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical)
      canonical.setAttribute(
        "href",
        `https://robertmcmaster.github.io${location.pathname}`,
      );
  }, [location]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <SEOUpdater />
      <div className="min-h-screen flex flex-col">
        <Background3D />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
