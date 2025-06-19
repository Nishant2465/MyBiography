
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname;
    if (path === "/") return "HOME";
    return path.substring(1).toUpperCase();
  });

  const navItems = [
    { name: "HOME", path: "/" },
    //{ name: "SHOP", path: "/shop" },
    { name: "RESUME", path: "/blog" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" }
  ];

  const handleNavClick = (item: { name: string; path: string }) => {
    setActiveLink(item.name);
    navigate(item.path);
  };

  return (
    <header className="w-full bg-background shadow-sm border-b border-border">
      {/* Logo */}
      <div className="text-center py-8">
        <h1 className="font-script text-5xl md:text-6xl text-foreground mb-2">
          Nishant Sharma
        </h1>
        <p className="text-sm tracking-widest text-muted-foreground uppercase">
          Software Engineer
        </p>
      </div>

      {/* Navigation */}
      <nav className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`py-4 text-sm tracking-wider transition-colors duration-200 ${
                    activeLink === item.name
                      ? "text-foreground border-b-2 border-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              {/*<button className="p-4 hover:bg-accent transition-colors duration-200 rounded-md">
                <ShoppingBag className="w-5 h-5 text-muted-foreground" />
              </button>*/}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;