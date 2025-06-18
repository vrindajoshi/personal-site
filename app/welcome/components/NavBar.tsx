export function NavBar() {
  return (
    <nav className="bg-background text-foreground py-4 px-6">
      <div className="flex justify-around flex-wrap max-w-5xl mx-auto">
        <a
          href="#home"
          className="py-[1vh] px-[3vw] my-[1vh] mx-[1vw] bg-[#CCD5AE] border border-[#CCD5AE] rounded-[10px] drop-shadow text-lg font-medium hover:underline"
        >
          Home
        </a>
        <a
          href="#experiences"
          className="py-[1vh] px-[3vw] my-[1vh] mx-[1vw] bg-[#CCD5AE] border border-[#CCD5AE] rounded-[10px] drop-shadow text-lg font-medium hover:underline"
        >
          Experiences
        </a>
        <a
          href="#projects"
          className="py-[1vh] px-[3vw] my-[1vh] mx-[1vw] bg-[#CCD5AE] border border-[#CCD5AE] rounded-[10px] drop-shadow text-lg font-medium hover:underline"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="py-[1vh] px-[3vw] my-[1vh] mx-[1vw] bg-[#CCD5AE] border border-[#CCD5AE] rounded-[10px] drop-shadow text-lg font-medium hover:underline"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
