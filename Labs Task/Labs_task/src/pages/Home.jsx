import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/Search";
import ProductForm from "../components/ProductForm";
import ProductDisplay from "../components/ProductDisplay";
import Pagination from "../components/Pagination";

export default function App() {
  const [viewType, setViewType] = useState("table");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([
    {
      name: "Torch",
      price: 1000,
      category: "Utility",
      stock: 12,
      description: "This is torch ",
    },
    {
      name: "Torch",
      price: 1000,
      category: "Utility",
      stock: 12,
      description: "This is torch ",
    },
    {
      name: "Torch",
      price: 1000,
      category: "Utility",
      stock: 12,
      description: "This is torch ",
    },
    {
      name: "Torch",
      price: 1000,
      category: "Utility",
      stock: 12,
      description: "This is torch ",
    },
    {
      name: "Torch",
      price: 1000,
      category: "Utility",
      stock: 12,
      description: "This is torch ",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-8 space-y-8">
      <Header viewType={viewType} setViewType={setViewType} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ProductForm setProducts={setProducts} products={products} />
      <ProductDisplay viewType={viewType} products={products} />
      <Pagination
        totalPages={3}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
