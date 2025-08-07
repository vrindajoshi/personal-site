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

export function ProjectsList({ projects }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="p-6 bg-[#3b4e2f] text-[#FEFAE0] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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

            {/* Highlights */}
            {project.highlights.length > 0 && (
              <ul className="list-disc list-inside text-sm mb-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            )}

            {/* Links */}
            <div className="flex gap-4 mb-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:text-yellow-300"
              >
                Live Site
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:text-yellow-300"
              >
                GitHub Repo
              </a>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="rounded-full w-40 h-40 object-cover border-4 border-[#112100] shadow-md"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}