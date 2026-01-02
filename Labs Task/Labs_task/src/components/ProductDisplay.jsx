import { useMemo } from "react";
import ProductTable from "./ProductTable";
import ProductGrid from "./ProductGrid";

const ProductDisplay = ({
  viewType,
  products,
  searchQuery,
  currentPage,
  ITEMS_PER_PAGE,
  onEditClick,
  setTotalPage,
}) => {
  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products;
    return products.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);
  setTotalPage(Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

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
      <ProductTable products={paginatedProducts} onEditClick={onEditClick} />
    );
  }

  return <ProductGrid products={paginatedProducts} onEditClick={onEditClick} />;
};

export default ProductDisplay;
