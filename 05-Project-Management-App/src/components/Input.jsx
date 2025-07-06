export default function Input({ ref,label, textarea, ...props }) {
  const classes =
    "w-full p-3 border-2 rounded-lg border-stone-300 bg-stone-50 text-stone-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 font-quicksand shadow-sm";
  return (
    <p className="flex flex-col gap-2 mb-6">
      <label className="text-sm font-semibold uppercase text-indigo-700 tracking-wide font-handjet">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} rows="5" />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
}

// OR USING THE FORWARDREF 
// import { forwardRef } from "react";

// const Input = forwardRef(function Input({ label, textarea, ...props },ref) {
//   const classes =
//     "w-full p-2 border-b-2 rounded-md border-stone-300 bg-stone-100 text-stone-700 focus:outline-none focus:border-stone-600 transition-all duration-200";
//   return (
//     <p className="flex flex-col gap-2 mb-6">
//       <label className="text-sm font-semibold uppercase text-stone-500 tracking-wide">
//         {label}
//       </label>
//       {textarea ? (
//         <textarea ref={ref} className={classes} {...props} />
//       ) : (
//         <input ref={ref} className={classes} {...props} />
//       )}
//     </p>
//   );
// });

// export default Input;
