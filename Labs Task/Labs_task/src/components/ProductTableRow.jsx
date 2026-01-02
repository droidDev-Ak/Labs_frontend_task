const ProductTableRow = ({ product: p }) => {
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="px-4 py-3">
        <div className="font-medium text-slate-900 text-sm">
          {p.name}
        </div>
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

      <td className="px-4 py-3 font-medium text-slate-900">
        ₹ {p.price}
      </td>

      <td className="px-4 py-3 text-right">
        <button className="inline-flex items-center text-blue-600 hover:text-blue-800 text-xs font-medium px-2 py-1 hover:bg-blue-50 rounded">
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ProductTableRow;
