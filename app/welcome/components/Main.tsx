import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Main() {
  return (
    <div id="home" className="bg-[#D3DADC] text-black py-16 px-6 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Headshot */}
        <div className="flex-shrink-0">
          <img
            src="/assets/headshot.JPG"
            alt="Vrinda's Headshot"
            className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-md border-4 border-white shadow-md"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col w-full">
          {/* Name + Icons */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-[#435576] mb-4 md:mb-0">
              Vrinda Joshi
            </h1>

            <ul className="flex gap-6 text-3xl md:text-4xl text-[#435576]">
              <li>
                <a
                  href="https://github.com/VrindaJoshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-[#FEFAE0]"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vrindaajoshi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[#FEFAE0]"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:vrinda.joshi@uwaterloo.ca"
                  aria-label="Email"
                  className="hover:text-[#435576]"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </div>

          {/* School Info */}
          <div className="flex flex-col md:flex-row md:items-center mt-6 gap-4">
            <div className="flex items-center border-2 border-[#435576] rounded-[10px] px-4 py-2 hover:bg-[#435576] transition-colors">
              <h2 className="text-lg md:text-xl font-semibold text-[#435576] hover:text-[#FEFAE0]">
                Systems Design Engineering
              </h2>
            </div>
            <div className="flex items-center">
              <h2 className="text-lg md:text-xl text-[#435576]">
                @ University of Waterloo
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
