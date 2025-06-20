export function NavBar() {
  return (
    <nav className="bg-background text-foreground py-4 px-6 shadow-md">
      <div className="flex justify-around flex-wrap max-w-5xl mx-auto">
        <a
          href="#home"
          className="shadow-md py-[1vh] px-[3vw] my-[1vh] bg-[#CCD5AE] border border-[#CCD5AE] rounded-[10px] drop-shadow text-lg font-medium hover:underline"
        >
          Home
        </a>
        <a
          href="#experiences"
          className="shadow-md py-[1vh] px-[3vw] my-[1vh] bg-[#CCD5AE] border border-[#CCD5AE] rounded-[10px] drop-shadow text-lg font-medium hover:underline"
        >
          Experiences
        </a>
        <a
          href="#projects"
          className="shadow-md py-[1vh] px-[3vw] my-[1vh] bg-[#CCD5AE] border border-[#CCD5AE] rounded-[10px] drop-shadow text-lg font-medium hover:underline"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="shadow-md py-[1vh] px-[3vw] my-[1vh] bg-[#CCD5AE] border border-[#CCD5AE] rounded-[10px] drop-shadow text-lg font-medium hover:underline"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
