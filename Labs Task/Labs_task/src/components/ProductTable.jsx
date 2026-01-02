import ProductTableRow from "./ProductTableRow";

const ProductTable = ({ products,onEditClick }) => {
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
            <ProductTableRow key={p.id} product={p} onEditClick={onEditClick} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
