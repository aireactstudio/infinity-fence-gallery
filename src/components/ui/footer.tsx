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
              <a 
                href="https://www.instagram.com/infinityfencingnw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/@InfinityFencingNW" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@infinityfencingnw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M12 2v14m0 0a5 5 0 1 0 5 5m-5-5a5 5 0 1 1-5-5m5 5V2m0 0a8 8 0 0 0 8-8H6a8 8 0 0 0 8 8" />
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
