const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const getPages = () => {
    const pages = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    if (currentPage > 4) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 3) pages.push("...");

    pages.push(totalPages);

    return pages;
  };

  const pages = getPages();

  return (
    <nav className="flex items-center justify-center gap-2 pb-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 border border-slate-200 rounded-xl hover:bg-slate-100 disabled:opacity-30"
      >
        Prev
      </button>

      <div className="flex gap-2">
        {pages.map((page, i) =>
          page === "..." ? (
            <span
              key={`dots-${i}`}
              className="w-10 h-10 flex items-center justify-center text-slate-400"
            >
              …
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 flex items-center justify-center font-bold rounded-xl transition-all ${
                currentPage === page
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-100"
                  : "hover:bg-slate-100 text-slate-600"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 border border-slate-200 rounded-xl hover:bg-slate-100 disabled:opacity-30"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
