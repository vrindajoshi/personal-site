import { NavBar } from './components/NavBar';
import { Main } from './components/Main';


export function Welcome() {
  return (
    <div className="base bg-white">
       <NavBar/>
       <Main/>

    </div>
  );
}

