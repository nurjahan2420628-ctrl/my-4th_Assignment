import { useState } from "react";
import logoText from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">

       
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
          aria-label="Open menu"
        >
          
          <img
            src={hamburger}
            alt="Menu"
            className="h-6 w-6"
          />
        </button>

        
        <a
          href="#home"
          className="flex items-center gap-2"
        >
         
          <img
            src={logoText}
            alt="Dev Stack"
            className="h-20 w-30 object-contain"
          />

          
        </a>

      
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
            >
              {link.name}
            </a>
          ))}
        </div>

        
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-gray-700 hover:text-pink-500">
            Sign In
          </button>

          <button className="brand-gradient rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
            Sign Up
          </button>
        </div>
      </nav>

      
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-500"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;