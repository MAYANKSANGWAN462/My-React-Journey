import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({onAdd, onCancel}) {
  const modalRef = useRef(); //my own ref for the modal component
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // valdiations ......... if invalid value are being entered
    if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '' ){ //if any of these satifies we will show the modal showing the error
      modalRef.current.open(); //now this will be showing the pop up for it when we are entering the invalid value
      return; //this is returned here as so that the further onAdd code or can say further code should not execute

    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="w-full max-w-4xl"> {/* Increased max-width */}
        <Modal ref={modalRef} buttonCaption="Okay">
          <h2 className="text-2xl font-bold text-indigo-700 my-4 font-handjet tracking-wide">Invalid Input</h2>
          <p className="text-stone-600 mb-4 font-quicksand">Oops ... looks like you forgot to enter a value</p>
          <p className="text-stone-600 mb-4 font-quicksand">Please make sure you provide a valid value for every input field.</p>
        </Modal>
        
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-200">
          <menu className="flex items-center justify-end gap-4 mb-8">
            <li>
              <button 
                className="text-indigo-600 hover:text-indigo-800 transition duration-300 font-medium font-quicksand px-4 py-2 rounded-lg hover:bg-indigo-50"
                onClick={onCancel}
              >
                Cancel
              </button>
            </li>
            <li>
              <button 
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-handjet font-bold tracking-wider"
                onClick={handleSave}
              >
                Save
              </button>
            </li>
          </menu>
          
          <div className="space-y-6">
            <Input ref={title} type="text" label="Title" />
            <Input ref={description} label="Description" textarea={true} />
            <Input ref={dueDate} type="date" label="Due Date" />
          </div>
        </div>
      </div>
    </div>
  );
}
