import { useEffect, useMemo } from "react";
import ProductTable from "./ProductTable";
import ProductGrid from "./ProductGrid";

const ProductDisplay = ({
  viewType,
  products,
  searchQuery,
  currentPage,
  setCurrentPage,
  ITEMS_PER_PAGE,
  editingProduct,
  onEditClick,
  setTotalPage,
}) => {
  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products;
    return products.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);
  useEffect(() => {
    const total = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    setTotalPage(total);

    setCurrentPage(1);
  }, [filteredProducts, ITEMS_PER_PAGE, setTotalPage, setCurrentPage]);
  if (!filteredProducts || filteredProducts.length === 0) {
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

  return <ProductGrid products={paginatedProducts} onEditClick={onEditClick} />;
};

export default ProductDisplay;
