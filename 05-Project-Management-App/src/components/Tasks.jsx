// This component is maintaining the tasks in the particular project and also connecting the --->> NewTask.jsx <<--- so that we can add the new task to the exisiting task
import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6 font-handjet tracking-wide">Tasks</h2>
      
      <div className="mb-8">
        <NewTask onAdd={onAdd} />
      </div>

      {tasks.length === 0 && (
        <div className="bg-indigo-50 rounded-xl p-6 text-center border border-indigo-100 max-w-2xl mx-auto">
          <p className="text-indigo-500 font-quicksand italic">
            This project does not have any tasks yet.
          </p>
        </div>
      )}

      {tasks.length > 0 && (
        <ul className="space-y-3 max-w-2xl mx-auto">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-indigo-50">
              <span className="font-quicksand text-stone-700">{task.text}</span>
              <button 
                className="text-stone-400 hover:text-red-500 transition-colors duration-200 px-2 py-1 rounded hover:bg-stone-50 font-quicksand text-sm"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
