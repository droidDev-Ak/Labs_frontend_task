const ProductTableRow = ({ product: p, onEditClick, editingProduct }) => {
  const isEditing = editingProduct?.id === p.id;

  return (
    <tr
      className={`transition-all duration-200 border-l-4 ${
        isEditing
          ? "bg-blue-100 border-l-blue-600 shadow-sm"
          : "hover:bg-slate-50 border-l-transparent"
      }`}
    >
      <td className="px-4 py-3">
        <div className="font-medium text-slate-900 text-sm">{p.name}</div>
      </td>

      <td className="px-4 py-3">
        <div className="text-xs text-slate-600 line-clamp-1">
          {p.description || "No description"}
        </div>
      </td>

      <td className="px-4 py-3">
        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
          {p.category}
        </span>
      </td>

      <td className="px-4 py-3">
        <div className="flex items-center">
          <span
            className={`h-2 w-2 rounded-full mr-2 ${
              p.stock < 5 ? "bg-amber-500" : "bg-emerald-500"
            }`}
          />
          <span
            className={`text-sm font-medium ${
              p.stock < 5 ? "text-amber-600" : "text-slate-700"
            }`}
          >
            {p.stock}
          </span>
          <span className="ml-1 text-xs text-slate-400">pcs</span>
        </div>
      </td>

      <td className="px-4 py-3 font-medium text-slate-900">₹ {p.price}</td>

      <td className="px-4 py-3 text-right">
        <button
          onClick={() => onEditClick(isEditing ? null : p)}
          className={`inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
            isEditing
              ? "bg-blue-600 text-white shadow-md"
              : "text-blue-600 hover:bg-blue-50 hover:text-blue-800"
          }`}
        >
          {isEditing ? "Close" : "Edit"}
        </button>
      </td>
    </tr>
  );
};

export default ProductTableRow;
