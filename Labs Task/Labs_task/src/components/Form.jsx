const ProductForm = () => (
  <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
    <div className="p-6 border-b border-slate-100 bg-slate-50/50">
      <h2 className="text-lg font-bold text-slate-800">Product Editor</h2>
    </div>
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {["Product Name", "Price ($)", "Category", "Stock Level"].map(
          (label) => (
            <div key={label} className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                {label}
              </label>
              <input
                type={
                  label.includes("Price") || label.includes("Stock")
                    ? "number"
                    : "text"
                }
                placeholder={`Enter ${label}`}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
          )
        )}
      </div>
      <div className="mt-6 space-y-2">
        <label className="text-xs font-bold text-slate-500 uppercase ml-1">
          Product Description
        </label>
        <textarea
          rows="3"
          placeholder="Tell us more..."
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        />
      </div>
      <div className="mt-8 flex items-center gap-4">
        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95">
          Save Product
        </button>
        <button className="px-8 py-3 text-slate-600 font-medium hover:bg-slate-100 rounded-xl transition-all">
          Discard
        </button>
      </div>
    </div>
  </section>
);

export default ProductForm;
