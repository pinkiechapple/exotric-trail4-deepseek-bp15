import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../utils/contact';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-saffron-500 to-saffron-700 p-2 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">{COMPANY_INFO.name}</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">{COMPANY_INFO.tagline}</p>
            <p className="text-sm text-gray-400">Est. {COMPANY_INFO.established}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-saffron-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-sm hover:text-saffron-400 transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-sm hover:text-saffron-400 transition-colors">
                  Tours & Itineraries
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-saffron-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-saffron-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-saffron-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Popular Tours</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/tours/royal-rajasthan" className="text-sm hover:text-saffron-400 transition-colors">
                  Royal Rajasthan Odyssey
                </Link>
              </li>
              <li>
                <Link to="/tours/golden-triangle" className="text-sm hover:text-saffron-400 transition-colors">
                  Classic Golden Triangle
                </Link>
              </li>
              <li>
                <Link to="/tours/himalayan-kingdoms" className="text-sm hover:text-saffron-400 transition-colors">
                  Himalayan Kingdoms
                </Link>
              </li>
              <li>
                <Link to="/tours/south-india" className="text-sm hover:text-saffron-400 transition-colors">
                  South India Explorer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron-400 flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p>{COMPANY_INFO.address.line1}</p>
                  <p>{COMPANY_INFO.address.line2}</p>
                  <p>
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
                  </p>
                  <p>{COMPANY_INFO.address.country}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-saffron-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm hover:text-saffron-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-saffron-400 flex-shrink-0" />
                <a href="mailto:info@exotictrails.com" className="text-sm hover:text-saffron-400 transition-colors">
                  info@exotictrails.com
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-saffron-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-saffron-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Crafted with passion for
            incredible journeys.
          </p>
        </div>
      </div>
    </footer>
  );
}
