import { useState } from "react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses =
    "flex-1 opacity-100 text-center py-2 px-6 bg-[#D3DADC] border border-[#D3DADC] rounded-[10px] drop-shadow text-lg font-medium hover:underline shadow-md";

  return (
    <nav className="text-foreground shadow-md" style={{ backgroundColor: "rgba(67, 85, 118, 0.15)" }}>
   <img
  src="/assets/flower4.svg"
  alt="Flower"
  className="max-h-sm filter invert(1) brightness(0) saturate(1000%)"
/>
      <div className="py-8 max-w-5xl mx-auto px-4">
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