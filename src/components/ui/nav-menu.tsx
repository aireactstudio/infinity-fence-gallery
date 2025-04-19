import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";
import { Button } from "./button";

export const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5 text-gray-600 hover:text-blue-600 transition"
              >
                <path d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h8.25" />
                <path d="M16.5 12c1.5 0 3-1.5 3-3v-3l-3 3z" />
                <path d="M16.5 12c-1.5 0-3-1.5-3-3V6l3 3z" />
                <path d="M10.5 16.5c0 1.242 1.008 2.25 2.25 2.25s2.25-1.008 2.25-2.25-1.008-2.25-2.25-2.25-2.25 1.008-2.25 2.25z" />
              </svg>
            </a>
            <Button variant="outline" asChild>
              <a href="tel:3602001005" className="flex items-center space-x-2">
                <span>📞</span>
                <span>360.200.1005</span>
              </a>
            </Button>
          </div>

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
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5 text-gray-600"
                >
                  <path d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h8.25" />
                  <path d="M16.5 12c1.5 0 3-1.5 3-3v-3l-3 3z" />
                  <path d="M16.5 12c-1.5 0-3-1.5-3-3V6l3 3z" />
                  <path d="M10.5 16.5c0 1.242 1.008 2.25 2.25 2.25s2.25-1.008 2.25-2.25-1.008-2.25-2.25-2.25-2.25 1.008-2.25 2.25z" />
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
