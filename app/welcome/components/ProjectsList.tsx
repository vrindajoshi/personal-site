import React from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  skills: string;
  image: string;
  repo: string;
  highlights: string[];
  tags: string[];
};

type ProjectListProps = {
  projects: Project[];
};

  const divGlow = "w-64 h-40 bg-gray-800 rounded-lg flex items-center justify-center text-white transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]"


export function ProjectsList({ projects }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {projects.map((project) => (
        <div
          key={project.id}
          className="p-6 bg-[#3b4e2f] text-[#FEFAE0] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]"
        >
          <div className="flex flex-col justify-between h-full">
            {/* Title and Description */}
            <div className="mb-4">
              <h2 className="font-semibold text-lg">{project.title}</h2>
              <h3 className="italic text-sm opacity-80">{project.description}</h3>
            </div>

            {/* Skills */}
            <p className="text-sm mb-2">
              <span role="img" aria-label="tools">🛠</span> {project.skills}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-white text-[#3b4e2f] px-2 py-1 rounded-md text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            
          

            {/* Links */}
            <div className="flex gap-4 mb-4 ">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-yellow-300"
              >
                See More ↗
              </a>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}