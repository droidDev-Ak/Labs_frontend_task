const ProductDisplay = ({ viewType, products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="flex items-center justify-center p-8 bg-white rounded-lg border border-dashed border-slate-200">
        <p className="text-slate-500 text-sm font-medium">
          No products found. Add one above.
        </p>
      </div>
    );
  }

  if (viewType === "table") {
    return (
      <div className="bg-white rounded-lg border border-slate-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">
                Product Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">
                Description
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">
                Category
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">
                Stock
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">
                Price
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 align-middle min-w-37.5">
                  <div className="font-medium text-slate-900 text-sm">
                    {p.name}
                  </div>
                </td>

                <td className="px-4 py-3 align-middle min-w-50 max-w-75">
                  <div className="text-xs text-slate-600 line-clamp-2">
                    {p.description || "No description"}
                  </div>
                </td>

                <td className="px-4 py-3 align-middle min-w-25">
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 whitespace-nowrap">
                    {p.category}
                  </span>
                </td>

                <td className="px-4 py-3 align-middle min-w-25">
                  <div className="flex items-center">
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
                    </div>
                    <span className="ml-1 text-xs text-slate-400">pcs</span>
                  </div>
                </td>

                <td className="px-4 py-3 align-middle font-medium text-slate-900 min-w-25">
                  ₹ {p.price}
                </td>

                <td className="px-4 py-3 text-right align-middle min-w-20">
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-800 text-xs font-medium px-2 py-1 hover:bg-blue-50 rounded transition-colors">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-all max-w-60  w-full"
        >
          <div className="p-3">
            <div className="flex items-start justify-between mb-2">
              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-50 text-blue-700 truncate max-w-[70%]">
                {p.category}
              </span>
              <span
                className={`h-2 w-2 rounded-full mt-1 ${
                  p.stock > 0 ? "bg-emerald-500" : "bg-red-500"
                }`}
              />
            </div>

            <h3 className="font-semibold text-slate-900 text-sm mb-1 truncate">
              {p.name}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3 h-8">
              {p.description || "No description provided."}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  Price
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  ${p.price}
                </p>
              </div>

              <div className="text-right">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  Stock
                </p>
                <p
                  className={`text-sm font-semibold ${
                    p.stock < 5 ? "text-amber-600" : "text-slate-700"
                  }`}
                >
                  {p.stock} pcs
                </p>
              </div>

              <button className="p-1.5 rounded-md bg-slate-50 hover:bg-blue-50 hover:text-blue-600 text-slate-500 transition-colors ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
