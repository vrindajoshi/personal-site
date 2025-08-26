import { useEffect, useState } from 'react';
import { ProjectsList } from './ProjectsList';

export function Projects() {
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);
  const divGlow = "w-64 h-40 bg-gray-800 rounded-lg flex items-center justify-center text-white transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]"

  useEffect(() => {
    fetch('https://personal-site-db.vercel.app/projects')
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
    <div id="projects" className=" w-full">
     
      {/* Content section */}
      <div className="bg-[#D3DADC] px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#435576] my-10 align-right">
            Projects
          </h1>

          <div className="grid-rows-2 ">
              {error && <div className="text-red-400 text-center">{error}</div>}
              {!projects && !error && <div className="text-[#435576] text-center">Loading...</div>}
              {projects && <ProjectsList projects={projects} />}
          </div>
          
        </div>
      </div>
       {/* Bottom wave */}
      <div className="bg-[#D3DADC] mt-20">
        <img src="/assets/wave (1).svg" alt="Top Wave" className="w-full" />
      </div>
    </div>
  );
}
