import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Main() {
  return (
    <div className="bg-[#CCD5AE] text-black py-16 px-8">

        <div className="grid grid-flow-col grid-rows-3 gap-4 max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 mt-15 mb-0 pb-0">
          <div className="row-span-3">
              <div className="flex-shrink-0">
                <img src="/assets/headshot.JPG"
                alt="Vrinda's Headshot"
                className="rounded-full w-48 h-48 object-cover border-4 border-[#112100] shadow-md"/>
              </div>
          </div>

          <div className="col-span-2 display-block flex">
            <div className="flex-shrink-0">
            <img
              src="/assets/VrindaJoshi.PNG"
              alt="Vrinda's Headshot"
              className="h-12 my-6 mx-4"/>
            </div>

            <ul className="flex gap-6 text-5xl my-6 align-right text-[#112100] flex">
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
                  href="https://www.linkedin.com/in/vrindaajoshi/"
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

          <div className="md:col-span-3 flex justify-center md:justify-start">
            <div className="flex items-center gap-4 border-2 border-black rounded-[10px] mx-4 px-4 py-2">
              <h2 className="text-xl font-semibold text-[#112100]">Systems Design Engineering</h2>
            </div>
            <div className="flex items-center gap-4 py-2">
              <h2 className="text-xl text-[#112100] items-center">@ University of Waterloo</h2>
            </div>
          </div>

        </div>
        {/*<div className="grid max-w-4xl mx-auto flex flex-col md:flex-row">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>*/}

      </div>
  );
}
