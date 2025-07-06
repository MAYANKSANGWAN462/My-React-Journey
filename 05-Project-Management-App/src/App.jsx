import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, //undefined means we are doing nothing
    projects: [],
    tasks: [],
  });

  function handleAddTask(text){ //here this text is we getting from the NewTask.jsx --- >> function handleClick(){}
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text, // this is the text we obtained from the NewTask.jsx 
        projectId: prevState.selectedProjectId, //id fo the project to which this task belong so managing the projectId also
        id: taskId,
      };
      return{
        ...prevState, //managing the previous states
        tasks : [...prevState.tasks,newTask], //in thsi we are spreading all the exisiting tasks so that we will not loose them and then adding the newtask after those tasks
      };
    });
  }

  function handleDeleteTask(id){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectProject(id){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        selectedProjectId : id
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState, //we are also managing the previous state which are not changed
        selectedProjectId: null, // null means we are adding a new project
      };
    });
  }

  function handleCancelAddProject(){ //here we are setting up the selectedProjectId back to the undefined
    setProjectsState((prevState) => {
      return{
        ...prevState,
        selectedProjectId : undefined,
      };
    });
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id : projectId,
      };
      return{
        ...prevState,
        selectedProjectId : undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId : undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId), //the projects array should be edited in the immuatable way so that we don't edit the original array in memory
      };
    });
  }

  console.log(projectsState);
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks} />;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  }
  else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  return (
  <main className="h-screen flex bg-gradient-to-br from-indigo-50 to-white">
    <ProjectsSidebar 
      onStartAddProject={handleStartAddProject} 
      projects={projectsState.projects} 
      onSelectProject={handleSelectProject} 
      selectedProjectId={projectsState.selectedProjectId}
    />
    
    <div className="flex-1 flex overflow-y-auto">
      {content}
    </div>
  </main>
);
}

export default App;