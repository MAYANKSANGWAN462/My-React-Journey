import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";

export default function Modal({ref,children,buttonCaption}){
    const dialogRef = useRef();
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialogRef.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-6 rounded-xl shadow-2xl bg-gradient-to-br from-stone-100 to-stone-50 border border-stone-300 animate-fadeIn">
            {children}
            <form method="dialog" className="mt-6 text-right"><Button>{buttonCaption}</Button></form>
        </dialog>,
        document.getElementById('modal-root')
    );
}


///////////////////////FOR REACT OLDER VERSION/////////////////////////
// USING OF THE FORWARD REF AS WE ARE NOT BE ABLE TO PASS THE REF DIRECTLY
// import { forwardRef , useImperativeHandle, useRef } from "react";
// import { createPortal } from "react-dom";

// const Modal = forwardRef(function Modal({children},ref){
//     const dialogRef = useRef();
//     useImperativeHandle(ref,()=>{
//         return{
//             open(){
//                 dialogRef.current.showModal();
//             }
//         };
//     });

//     return createPortal(
//         <dialog ref={dialogRef}>
//             {children}
//         </dialog>,
//         document.getElementById('modal-root')
//     );
// });

// export default Modal;
