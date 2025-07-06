import Tasks from "./Tasks";

export default function SelectedProject({project,onDelete,onAddTask,onDeleteTask,tasks}){
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
    
    return(
        <div className="flex-1 p-8">
            <div className="max-w-3xl mx-auto">
                <header className="pb-6 mb-6 border-b-2 border-stone-200">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-indigo-700 mb-2 font-handjet tracking-wide">{project.title}</h1>
                        <button className="text-stone-500 hover:text-red-600 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-stone-100 font-quicksand" onClick={onDelete}>
                            Delete
                        </button>
                    </div>
                    <p className="mb-4 text-stone-500 font-quicksand">{formattedDate}</p>
                    <p className="text-stone-600 whitespace-pre-wrap font-quicksand">{project.description}</p>
                </header>
                <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
            </div>
        </div>
    );
}