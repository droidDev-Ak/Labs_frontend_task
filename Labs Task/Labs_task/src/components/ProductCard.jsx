const ProductCard = ({ product: p, onEditClick, editingProduct }) => {
  const isEditing = editingProduct?.id === p.id;

  return (
    <div
      className={`rounded-2xl border transition-all flex flex-col
        ${
          isEditing
            ? "bg-blue-50 border-blue-500 shadow-md"
            : "bg-white border-slate-200 hover:border-blue-400 hover:shadow-md"
        }`}
    >
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase bg-blue-50 text-blue-600">
            {p.category}
          </span>
          <span
            className={`h-2.5 w-2.5 rounded-full ring-4 ring-white shadow-sm ${
              p.stock > 0 ? "bg-emerald-500" : "bg-red-500"
            }`}
          />
        </div>

        <h3 className="font-bold text-slate-800 text-base mb-1 truncate">
          {p.name}
        </h3>

        <p className="text-sm text-slate-500 line-clamp-2 mb-4 h-10">
          {p.description || "No description provided."}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <p className="text-[10px] uppercase text-slate-400 font-bold">
              Price
            </p>
            <p className="text-base font-bold text-slate-900">₹ {p.price}</p>
          </div>

          <div className="text-right">
            <p className="text-[10px] uppercase text-slate-400 font-bold">
              Stock
            </p>
            <p
              className={`text-base font-bold ${
                p.stock < 5 ? "text-amber-500" : "text-slate-700"
              }`}
            >
              {p.stock}{" "}
              <span className="text-xs font-medium text-slate-400">pcs</span>
            </p>
          </div>

          <button
            onClick={() => onEditClick(p)}
            className={`p-2 rounded-xl transition-all ml-2 shadow-sm border
              ${
                isEditing
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-slate-50 text-slate-400 border-slate-100 hover:bg-blue-600 hover:text-white"
              }`}
          >
            {isEditing ? (
              "Close"
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
