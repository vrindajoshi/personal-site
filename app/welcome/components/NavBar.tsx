import { useState } from "react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses =
    "shadow-md py-2 px-6 my-2 bg-[#CCD5AE] border border-[#CCD5AE] rounded-[10px] drop-shadow text-lg font-medium hover:underline text-center";

  return (
    <nav className="bg-background text-foreground py-4 px-6 shadow-md">
      <div className="max-w-5xl mx-auto">
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
          className={`flex flex-col md:flex-row md:justify-around md:items-center ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
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
    </nav>
  );
}
