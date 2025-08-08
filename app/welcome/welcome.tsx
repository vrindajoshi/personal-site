import { NavBar } from './components/NavBar';
import { Main } from './components/Main';
import { Experiences } from './components/Experiences';
import { Projects } from './components/Projects';
import { Contacts } from './components/Contacts';
import CursorGlow from './components/CursorGlow';



export function Welcome() {
  return (

    <div className="base bg-white">

           
      <CursorGlow />

       <NavBar/>
       <Main/>
      <Experiences/>
      <Projects/>
      <Contacts/>
      
    
    </div>
  );
}

