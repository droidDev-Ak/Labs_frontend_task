const Pagination = ({ totalPages, currentPage, onPageChange }) => (
  <nav className="flex items-center justify-center gap-2 pb-12">
    <button className="p-2 border border-slate-200 rounded-xl hover:bg-slate-100 disabled:opacity-30">
      Prev
    </button>
    <div className="flex gap-2">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`w-10 h-10 flex items-center justify-center font-bold rounded-xl transition-all ${
            currentPage === i + 1
              ? "bg-blue-600 text-white shadow-lg shadow-blue-100"
              : "hover:bg-slate-100 text-slate-600"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
    <button className="p-2 border border-slate-200 rounded-xl hover:bg-slate-100">
      Next
    </button>
  </nav>
);

export default Pagination
