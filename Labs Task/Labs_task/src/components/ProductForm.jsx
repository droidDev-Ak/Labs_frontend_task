import { useState, useEffect } from "react";

const ProductForm = ({ setProducts, editingProduct, setEditingProduct }) => {
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


  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    } else {
      setFormData(initialState);
    }
  }, [editingProduct]);

  const handleProductAdd = () => {

    if (Object.values(formData).some((val) => val === "" || val === 0)) {
      setError("All fields are required");
      return;
    }
    if (formData.name.length >= 20) {
      setError("Name should be less than 20 characters");
      return;
    }

    if (editingProduct) {

      setProducts((prev) =>
        prev.map((p) => (p.id === editingProduct.id ? formData : p))
      );
      setEditingProduct(null); 
    } else {

      const newProduct = { ...formData, id: Date.now() };
      setProducts((prev) => [...prev, newProduct]);
    }

    setFormData(initialState);
    setError(false);
  };

  const handleDiscard = () => {
    setError(false);
    setFormData(initialState);
    if (setEditingProduct) setEditingProduct(null);
  };

  const handleChange = (name, value) => {
    setError(false);

    const finalValue =
      name === "price" || name === "stock" ? Number(value) : value;
    setFormData((prev) => ({ ...prev, [name]: finalValue }));
  };

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
        <h2 className="text-lg font-bold text-slate-800">
          {editingProduct ? "Edit Product" : "Product Editor"}
        </h2>
        {editingProduct && (
          <button
            onClick={handleDiscard}
            className="text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>
        )}
      </div>

      {/* ... keeping your existing grid and input mapping logic ... */}
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
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            );
          })}
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 mt-4 bg-red-50 border-l-4 border-red-500 rounded-md">
            <span className="text-sm font-semibold text-red-700">{error}</span>
          </div>
        )}

        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={handleProductAdd}
            className={`px-8 py-3 text-white font-semibold rounded-xl shadow-lg transition-all active:scale-95 ${
              editingProduct
                ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-100"
                : "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
            }`}
          >
            {editingProduct ? "Update Product" : "Save Product"}
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
export default ProductForm