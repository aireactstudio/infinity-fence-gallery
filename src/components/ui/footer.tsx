
import { Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Infinity Fencing North West LLC</h3>
            <p className="text-gray-400 mt-6 font-light italic">
              "Nice fences. Nice people."
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <p>Hours: Daily 8am – 6pm</p>
              <p>Email: build@infinityfencingnw.com</p>
              <p>Phone: 360.200.1005</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Wood Fencing</li>
              <li>Chainlink Fencing</li>
              <li>Custom Automated Gates</li>
              <li>Security Fencing</li>
              <li>Commercial Fencing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/infinityfencingnw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@InfinityFencingNW" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@infinityfencingnw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 015.4 5.82C4.1 4.5 3.5 2.8 3.5 1h3.4c-.2 2.2.4 3.4 2 4.8-4.7 0-8 2.7-8 8.8 0 3.2 1.2 5.5 3.3 6.8 2.1 1.3 4.6 1.3 6.7 0 2.1-1.3 3.3-3.6 3.3-6.8v-6c1.4 1 3 1.7 4.8 1.7v-3.4c-1.4 0-2.6-.3-3.7-.9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Infinity Fencing North West LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
