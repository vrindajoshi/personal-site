import React, { useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  skills: string;
  image: string;
  repo: string;
  highlights: string[];
  tags: [string, string][]; // [tag, color]
};

type ProjectListProps = {
  projects: Project[];
};

export function ProjectsList({ projects }: ProjectListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter projects if a tag is selected
  const filteredProjects = selectedTag
    ? projects.filter((project) =>
        project.tags.some(([tag]) => tag === selectedTag)
      )
    : projects;

  return (
    <div>
      {/* Show selected filter + clear option */}
      {selectedTag && (
        <div className="mb-4 flex items-center gap-4">
          <span className="text-sm">
            Filtering by: <strong>{selectedTag}</strong>
          </span>
          <button
            onClick={() => setSelectedTag(null)}
            className="text-xs px-2 py-1 bg-red-300 text-white rounded-md hover:bg-red-400"
          >
            Clear Filter
          </button>
        </div>
      )}

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-[#3b4e2f] text-[#FEFAE0] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]"
          >
            <div className="flex flex-col justify-between h-full">
              {/* Title and Description */}
              <div className="mb-4">
                <h2 className="font-semibold text-lg">{project.title}</h2>
                <h3 className="italic text-sm opacity-80">
                  {project.description}
                </h3>
              </div>

              {/* Skills */}
              <p className="text-sm mb-2">
                <span role="img" aria-label="tools">
                  🛠
                </span>{" "}
                {project.skills}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(([tag, color], id) => (
                  <button
                    key={id}
                    onClick={() => setSelectedTag(tag)}
                    className="bg-white px-2 py-1 rounded-md text-xs font-medium hover:bg-black"
                    style={{ color }}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mb-4">
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
    </div>
  );
}
