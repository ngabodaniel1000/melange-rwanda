import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300">
      <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Mélange Rwanda</h3>
              <p className="text-sm leading-relaxed mb-4">
                Empowering Rwanda's youth through quality education, skills development, and meaningful career opportunities.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-primary" />
                  <span>Kigali, Rwanda</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                  <a href="mailto:hello@melangerwanda.org" className="hover:text-white transition-colors">
                    hello@melangerwanda.org
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                  <a href="tel:+250788123456" className="hover:text-white transition-colors">
                    +250 (0) 788 123 456
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#current-openings" className="hover:text-white transition-colors">
                    Current Openings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <p>&copy; 2024 Mélange Rwanda. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
