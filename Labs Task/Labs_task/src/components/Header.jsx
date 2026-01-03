const Header = ({ viewType, setViewType }) => (
  <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
    <div>
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
        Inventory Portal
      </h1>
      <p className="text-slate-500 mt-1">
        Manage your products and stock levels
      </p>
    </div>
    <div className="flex items-center bg-slate-100 p-1 rounded-xl w-fit">
      <button
        onClick={() => setViewType("table")}
        className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
          viewType === "table"
            ? "bg-white text-blue-600 shadow-sm"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        Table View
      </button>
      <button
        onClick={() => setViewType("card")}
        className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
          viewType === "card"
            ? "bg-white text-blue-600 shadow-sm"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        Card View
      </button>
    </div>
  </header>
);

export default Header;
