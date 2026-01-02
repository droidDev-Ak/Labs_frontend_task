const ProductDisplay = ({ viewType, products }) => {
  if (viewType === "table") {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase">
                Details
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase">
                Category
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase">
                Price
              </th>
              <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {/* {products.map((p) => (
              <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-900">
                  {p.name}
                </td>
                <td className="px-6 py-4 text-slate-600">{p.category}</td>
                <td className="px-6 py-4 font-bold text-slate-900">
                  ${p.price}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg">
                    Edit
                  </button>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
        >
          <span className="text-[10px] font-black uppercase text-blue-500">
            {p.category}
          </span>
          <h3 className="font-bold text-slate-900 text-lg">{p.name}</h3>
          <div className="mt-6 flex justify-between items-end">
            <p className="text-2xl font-black text-slate-900">${p.price}</p>
            <button className="text-blue-600 font-medium text-sm">Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
