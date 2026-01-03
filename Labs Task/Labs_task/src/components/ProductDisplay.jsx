import { useMemo } from "react";
import ProductTable from "./ProductTable";
import ProductGrid from "./ProductGrid";

const ProductDisplay = ({
  viewType,
  products,

  currentPage,

  ITEMS_PER_PAGE,
  editingProduct,
  onEditClick,
}) => {
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return products.slice(startIndex, endIndex);
  }, [products, currentPage, ITEMS_PER_PAGE]);

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
      <ProductTable
        products={paginatedProducts}
        onEditClick={onEditClick}
        editingProduct={editingProduct}
      />
    );
  }

  return (
    <ProductGrid
      products={paginatedProducts}
      onEditClick={onEditClick}
      editingProduct={editingProduct}
    />
  );
};

export default ProductDisplay;
