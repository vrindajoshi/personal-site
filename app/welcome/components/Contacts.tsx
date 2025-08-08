import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Contacts() {
  return (
    <div id="contact" className="w-full">
      {/* Contact Section */}
      <div className="bg-[#FEFAE0] px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#112100] mb-4">
            Thanks for scrolling all the way down.
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#112100] mb-8">
            Let’s make that time worth it—let’s connect!
          </h2>

          <ul className="flex justify-center gap-10 text-4xl text-[#112100]">
            {/* Email */}
            <li className="flex items-center">
              <a
                href="mailto:vrinda.joshi@uwaterloo.ca"
                aria-label="Email"
                className="hover:text-[#3b4e2f] transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <p className="text-sm mt-2 mx-2">vrinda.joshi@uwaterloo.ca</p>
            </li>

            {/* LinkedIn */}
            <li className="flex items-center">
              <a
                href="https://www.linkedin.com/in/vrindaajoshi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#3b4e2f] transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <p className="text-sm mt-2 mx-2">in/vrindaajoshi</p>
            </li>

            <li className="flex items-center">
              <a
                href="https://www.github.com/vrindajoshi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[#3b4e2f] transition-colors"
              >
                <FontAwesomeIcon  icon={faGithub} />
              </a>
              <p className="text-sm mt-2 mx-2">GitHub</p>
            </li>

          </ul>

          <footer className='mt-5'>
  <p>&copy; Vrinda Joshi 2025</p>
</footer>
        </div>
      </div>
    </div>
  );
}