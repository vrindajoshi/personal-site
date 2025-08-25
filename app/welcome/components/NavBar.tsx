import { useState } from "react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses =
    "text-center py-2 px-6 bg-[#D3DADC] border border-[#D3DADC] rounded-[10px] drop-shadow text-lg font-medium hover:underline shadow-md transition-all";

  return (
    <nav
      className="text-[#435576] shadow-md"
      style={{ backgroundColor: "rgba(67, 85, 118, 0.15)" }}
    >
      <div className="grid grid-cols-5 items-center max-w-6xl mx-auto px-4 py-4">

        {/* Left Logo */}
        <div className="flex justify-center items-center col-span-1">
          <img
            src="/assets/Untitled.svg"
            alt="Flower Logo Left"
            className="h-16 w-auto"
          />
        </div>

        {/* Nav links + toggle button in center */}
        <div className="col-span-3 flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Toggle button (mobile only) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl focus:outline-none"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex flex-wrap justify-center gap-6">
            <a href="#home" className={linkClasses}>
              Home
            </a>
            <a href="#experiences" className={linkClasses}>
              Experiences
            </a>
            <a href="#projects" className={linkClasses}>
              Projects
            </a>
            <a href="#contact" className={linkClasses}>
              Contact
            </a>
          </div>
        </div>

        {/* Right Logo */}
        <div className="flex justify-center items-center col-span-1">
          <img
            src="/assets/Untitled.svg"
            alt="Flower Logo Right"
            className="h-16 w-auto"
          />
        </div>
      </div>

      {/* Mobile nav links (below nav) */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 pb-4 md:hidden">
          <a href="#home" className={linkClasses}>
            Home
          </a>
          <a href="#experiences" className={linkClasses}>
            Experiences
          </a>
          <a href="#projects" className={linkClasses}>
            Projects
          </a>
          <a href="#contact" className={linkClasses}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
