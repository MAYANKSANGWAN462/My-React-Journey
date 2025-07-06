import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/4 min-w-[280px] px-6 py-8 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white md:w-72 rounded-r-2xl shadow-2xl animate-slideInLeft border-r border-indigo-700">
      <h2 className="mb-8 font-bold tracking-wider uppercase text-indigo-100 font-handjet text-4xl">
        YOUR PROJECTS
      </h2>
      <div className="mb-8">
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-4">
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-4 py-3 rounded-lg my-2 transition-all duration-300 font-quicksand flex items-center";
          if(project.id === selectedProjectId){
            cssClasses += ' bg-white text-indigo-800 shadow-lg font-medium';
          }
          else{
            cssClasses += ' text-indigo-100 hover:bg-indigo-700 hover:text-white';
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                <span className="w-3 h-3 rounded-full bg-indigo-400 mr-3"></span>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}