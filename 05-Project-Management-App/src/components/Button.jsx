export default function Button({ children, ...props }) {
  return (
    <button
      className="px-6 py-2 text-sm md:text-base rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 font-handjet font-bold tracking-wider"
      {...props}
    >
      {children}
    </button>
  );
}
