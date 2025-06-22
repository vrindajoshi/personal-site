import { NavBar } from './components/NavBar';
import { Main } from './components/Main';
import { Experiences } from './components/Experiences';
import { Projects } from './components/Projects';



export function Welcome() {
  return (
    <div className="base bg-white">
       <NavBar/>
       <Main/>
      <Experiences/>
      <Projects/>
    
    </div>
  );
}

