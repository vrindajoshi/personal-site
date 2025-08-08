import { useState } from "react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses =
    "flex-1 text-center py-2 px-4 bg-[#CCD5AE] border border-[#CCD5AE] rounded-[10px] drop-shadow text-lg font-medium hover:underline shadow-md";

  return (
    <nav className="bg-background text-foreground py-4 shadow-md">
      <div className="max-w-5xl mx-auto px-4">
        {/* Toggle button aligned right */}
        <div className="flex justify-end md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:justify-around md:items-center gap-2 mt-4 md:mt-0`}
        >
          <div className="flex flex-col md:flex-row w-full md:w-auto gap-6">
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
      </div>
    </nav>
  );
}