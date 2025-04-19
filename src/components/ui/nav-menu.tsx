
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";
import { Button } from "./button";

export const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper function to check if a path is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/4eab6907-ad5b-4dcd-8d0c-59a6abc4a575/Infinity+Fencing+Logo.png" 
              alt="Infinity Fencing NW"
              className="h-12"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600 transition"
            }>
              Home
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => 
              isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600 transition"
            }>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600 transition"
            }>
              Contact
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="https://www.instagram.com/infinityfencingnw/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-gray-600 hover:text-blue-600 transition" />
            </a>
            <a href="https://www.youtube.com/@InfinityFencingNW" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-5 h-5 text-gray-600 hover:text-blue-600 transition" />
            </a>
            <a href="https://www.tiktok.com/@infinityfencingnw" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 text-gray-600 hover:text-blue-600 transition" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.321 5.562a5.122 5.122 0 0 1 .244 5.085A5.269 5.269 0 0 1 17 13.164V6.562h2.321zM17 5.562V2h-2v11.164a3.002 3.002 0 0 1-4.583 2.532 3.002 3.002 0 0 1-1.417-4l-1.732-1a5.002 5.002 0 0 0 9.732.968V5.562z"/>
              </svg>
            </a>
            <Button variant="outline" asChild>
              <a href="tel:3602001005" className="flex items-center space-x-2">
                <span>📞</span>
                <span>360.200.1005</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-2">
              <span className={`block w-8 h-0.5 bg-gray-600 transform transition ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-gray-600 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-gray-600 transform transition ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-4">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? "text-blue-600 font-medium px-4 py-2" : "text-gray-700 hover:text-blue-600 transition px-4 py-2"
            }>
              Home
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => 
              isActive ? "text-blue-600 font-medium px-4 py-2" : "text-gray-700 hover:text-blue-600 transition px-4 py-2"
            }>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive ? "text-blue-600 font-medium px-4 py-2" : "text-gray-700 hover:text-blue-600 transition px-4 py-2"
            }>
              Contact
            </NavLink>
            <div className="flex items-center space-x-6 px-4 py-2">
              <a href="https://www.instagram.com/infinityfencingnw/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-gray-600" />
              </a>
              <a href="https://www.youtube.com/@InfinityFencingNW" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 text-gray-600" />
              </a>
              <a href="https://www.tiktok.com/@infinityfencingnw" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.321 5.562a5.122 5.122 0 0 1 .244 5.085A5.269 5.269 0 0 1 17 13.164V6.562h2.321zM17 5.562V2h-2v11.164a3.002 3.002 0 0 1-4.583 2.532 3.002 3.002 0 0 1-1.417-4l-1.732-1a5.002 5.002 0 0 0 9.732.968V5.562z"/>
                </svg>
              </a>
            </div>
            <Button variant="outline" asChild className="mx-4">
              <a href="tel:3602001005" className="flex items-center justify-center space-x-2">
                <span>📞</span>
                <span>360.200.1005</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
