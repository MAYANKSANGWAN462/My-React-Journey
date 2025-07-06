// import noProjectImage from "../assets/no-projects.png";
import noProjectImage from "../assets/project-manage.png";
import Button from "./Button";

export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center max-w-md p-8 bg-white rounded-2xl shadow-lg border border-indigo-100">
        <img
          src={noProjectImage}
          alt="An empty task list"
          className="w-16 h-16 object-contain mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold text-indigo-700 my-4 font-handjet tracking-wide">
          No Project Selected
        </h2>
        <p className="text-stone-500 mb-6 font-quicksand">
          Select a project or get started with a new one
        </p>
        <div className="mt-6">
          <Button onClick={onStartAddProject}>Create new project</Button>
        </div>
      </div>
    </div>
  );
}
