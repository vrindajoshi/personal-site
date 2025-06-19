import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Main() {
  return (
    <div className="bg-[#CCD5AE] text-black py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-15">

          <div className="flex-shrink-0">
            <img
              src="/assets/headshot.JPG"
              alt="Vrinda's Headshot"
              className="rounded-full w-48 h-48 object-cover border-4 border-black shadow-md"/>
          </div>

            <h1 className="text-6xl font-bold mb-4">Vrinda Joshi</h1>

            <ul className="flex gap-6 text-4xl">
              <li>
                <a
                  href="https://github.com/VrindaJoshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/joshivrinda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:v32joshi@uwaterloo.ca"
                  aria-label="Email"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 text-lg leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
  );
}
