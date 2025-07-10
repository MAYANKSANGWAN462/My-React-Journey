import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// const Modal = forwardRef(function Modal({ children }, ref) {
export default function Modal({ open, children }) {
  const dialogRef = useRef();

  // useImperativeHandle(ref, () => {
  //   return {
  //     open: () => {
  //       dialog.current.showModal();
  //     },
  //     close: () => {
  //       dialog.current.close();
  //     },
  //   };
  // });
  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]); //will run when the open is changed from true to false or from false to true not when it is same then it will not run

  return createPortal(
    // <dialog className="modal" ref={dialogRef} open={open}>
    <dialog className="modal" ref={dialogRef} >
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

// export default Modal;
