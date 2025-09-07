
export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {children}
    </button>
  );
}
