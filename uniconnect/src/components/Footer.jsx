
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">AMIGO College</h3>
            <p className="mb-4">Shaping future leaders with a commitment to excellence in education and innovation.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-blue-400 transition-colors">Programs</Link></li>
              <li><Link to="/admissions" className="hover:text-blue-400 transition-colors">Admissions</Link></li>
              <li><Link to="/campus-life" className="hover:text-blue-400 transition-colors">Campus Life</Link></li>
              <li><Link to="/research" className="hover:text-blue-400 transition-colors">Research</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:info@amigocollege.edu" className="hover:text-blue-400 transition-colors">info@amigocollege.edu</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>123 Education St, Knowledge City, ST 12345</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Stay updated with our latest news and events.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-blue-950 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} AMIGO College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}