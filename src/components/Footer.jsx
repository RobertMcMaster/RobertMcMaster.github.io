import { Link } from 'react-router-dom'
import { LineChart, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const pageLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    // { name: 'Projects', path: '/projects' },  // commented out for now
    { name: 'Certificates', path: '/certificates' },
    // { name: 'Blog', path: '/blog' },  // commented out for now
    { name: 'Interests', path: '/hobbies' },
    { name: 'Contact', path: '/contact' },
  ]

  const col1 = pageLinks.slice(0, 4)
  const col2 = pageLinks.slice(4)

  return (
    <footer className="relative mt-24">
      <div className="absolute inset-0 bg-[#0d1b3e]/80 backdrop-blur-xl" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12">

          {/* 1 — Name / Title / Location */}
          <div className="space-y-2">
            <Link to="/" className="flex items-center space-x-2">
              <LineChart className="w-5 h-5 text-white" aria-hidden="true" />
              <span className="text-base font-bold text-white">Robert McMaster</span>
            </Link>
            <p className="text-sm text-gray-400">Senior Data Analyst</p>
            <p className="text-sm text-gray-500">Pittsburgh, PA</p>
          </div>

          {/* 2 — Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:RobertMcMaster412@gmail.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  aria-label="Email Robert McMaster"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  RobertMcMaster412@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/robert-mcmaster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  aria-label="LinkedIn profile"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  linkedin.com/in/robert-mcmaster
                </a>
              </li>
              <li>
                <a
                  href="tel:+14124189094"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  aria-label="Call Robert McMaster"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  412-418-9094
                </a>
              </li>
            </ul>
          </div>

          {/* 3 — Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div>
                {col1.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div>
                {col2.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Robert McMaster. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
