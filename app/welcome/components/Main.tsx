import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export function Main(){
    return (
    <div className="bg-[#CCD5AE] text-foreground py-4 px-6">
        <div className="max-h-5xl max-w-5xl mx-auto">
            <div className="image">
                <img src="" alt="" />
            </div>
            <div className="title">
                <h1>Vrinda Joshi</h1>
            </div>
            <div className="links">
                <li><a href="https://github.com/VrindaJoshi"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://www.linkedin.com/in/joshivrinda/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="mailto:v32joshi@uwaterloo.ca"><FontAwesomeIcon icon={faEnvelope} /></a></li>
            </div>
            <div className="description">
                <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </h3>
            </div>
        </div>
    </div>
    );
}