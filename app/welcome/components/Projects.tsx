import { useEffect, useState } from 'react';
import { ProjectsList } from './ProjectsList';

export function Projects() {
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/projects')
      .then(res => {
        if (!res.ok) throw Error('Could not fetch roles.');
        return res.json();
      })
      .then(data => {
        setProjects(data);
      })
      .catch(err => {
        setError(err.message);
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div className=" w-full">
     
      {/* Content section */}
      <div className="bg-[#E9EDC9] px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#283618] my-10 align-right">
            Projects
          </h1>

          <div className="grid-rows-2 ">
              {error && <div className="text-red-400 text-center">{error}</div>}
              {!projects && !error && <div className="text-[#FEFAE0] text-center">Loading...</div>}
              {projects && <ProjectsList projects={projects} />}
          </div>
          
        </div>
      </div>
       {/* Bottom wave */}
      <div className="bg-[#E9EDC9]">
        <img src="/assets/wave (1).svg" alt="Top Wave" className="w-full" />
      </div>
    </div>
  );
}
