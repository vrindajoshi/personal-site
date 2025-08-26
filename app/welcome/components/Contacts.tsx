import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Contacts() {
  return (
    <div id="contact" className="w-full grid grid-cols-5 bg-[#FEFAE0]">

      <div className="col-span-1 flex items-end justify-end">
  <div className="hidden md:flex space-x-2">
    <img
      src="/assets/flower-2.svg"
      alt="Decorative flower"
      className="h-40 w-auto"
    />
    <img
      src="/assets/flower-1.svg"
      alt="Decorative flower"
      className="h-40 w-auto"
    />
  </div>
</div>

      {/* Contact Section */}
      <div className="bg-[#FEFAE0] px-4 py-12 col-span-3">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#435576] mb-4">
            Thanks for scrolling all the way down.
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#435576] mb-8">
            Let’s make that time worth it—let’s connect!
          </h2>

          <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10 text-4xl text-[#435576]">
            {/* Email */}
            <li className="flex flex-col items-center sm:flex-row">
              <a
                href="mailto:vrinda.joshi@uwaterloo.ca"
                aria-label="Email"
                className="hover:text-[#3b4e2f] transition-colors text-4xl"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <p className="text-sm mt-2 sm:mt-0 sm:ml-2">vrinda.joshi@uwaterloo.ca</p>
            </li>

            {/* LinkedIn */}
            <li className="flex flex-col items-center sm:flex-row">
              <a
                href="https://www.linkedin.com/in/vrindaajoshi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#3b4e2f] transition-colors text-4xl"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <p className="text-sm mt-2 sm:mt-0 sm:ml-2">in/vrindaajoshi</p>
            </li>

            {/* GitHub */}
            <li className="flex flex-col items-center sm:flex-row">
              <a
                href="https://www.github.com/vrindajoshi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[#3b4e2f] transition-colors text-4xl"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <p className="text-sm mt-2 sm:mt-0 sm:ml-2">GitHub</p>
            </li>
          </ul>

          <footer className="text-sm text-[#435576] pt-10">
            <p>&copy; Vrinda Joshi 2025</p>
          </footer>
        </div>
      </div>

      <div className="col-span-1 flex items-end justify-start">
  <div className="hidden md:flex space-x-2">
    <img
      src="/assets/flower-3.svg"
      alt="Decorative flower"
      className="h-40 w-auto"
    />
    <img
      src="/assets/flower-4.svg"
      alt="Decorative flower"
      className="h-40 w-auto"
    />
  </div>
</div>
    </div>
  );
}
