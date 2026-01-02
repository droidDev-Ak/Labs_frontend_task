import { useState } from "react";

const ProductForm = ({ setProducts }) => {
  const fields = [
    { "Product Name": "name" },
    { "Price ($)": "price" },
    { Category: "category" },
    { "Stock Level": "stock" },
    { Description: "description" },
  ];
  const initialState = {
    name: "",
    description: "",
    stock: 0,
    category: "",
    price: 0,
  };
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(false);
  const handleProductAdd = () => {
    if (
      Object.values(formData).some((field) => {
        return field == "" || field == 0;
      })
    ) {
      setError(true);
      return;
    }
    setProducts((prev) => [...prev, formData]);
    setFormData(initialState);
  };

  const handleDiscard = () => {
    setError(false);
    setFormData(initialState);
  };
  const handleChange = (name, value) => {
    setError(false);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50">
        <h2 className="text-lg font-bold text-slate-800">Product Editor</h2>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fields.map((field) => {
            const keyName = Object.keys(field)[0];
            const values = Object.values(field)[0];

            return (
              <div key={keyName} className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                  {keyName}
                </label>
                <input
                  type={
                    keyName.includes("Price") || keyName.includes("Stock")
                      ? "number"
                      : "text"
                  }
                  value={formData[values]}
                  onChange={(e) => handleChange(values, e.target.value)}
                  placeholder={`Enter ${keyName}`}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            );
          })}
        </div>
        {error && (
          <div className="flex items-center gap-2 p-3 mt-4 bg-red-50 border-l-4 border-red-500 rounded-md">
            <svg
              className="w-5 h-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-semibold text-red-700">
              All fields are required
            </span>
          </div>
        )}
        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={handleProductAdd}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
          >
            Save Product
          </button>
          <button
            onClick={handleDiscard}
            className="px-8 py-3 text-slate-600 font-medium hover:bg-slate-100 rounded-xl transition-all"
          >
            Discard
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductForm;
