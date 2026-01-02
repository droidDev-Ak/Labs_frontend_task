import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onEditClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onEditClick={onEditClick} />
      ))}
    </div>
  );
};

export default ProductGrid;
