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
      id: 1,
      name: "Tactical Torch",
      price: 1200,
      category: "Utility",
      stock: 15,
      description: "High-intensity LED flashlight with waterproof casing.",
    },
    {
      id: 2,
      name: "Wireless Mouse",
      price: 850,
      category: "Electronics",
      stock: 45,
      description: "Ergonomic 2.4GHz silent click optical mouse.heelo whaihi addlasjdalskjadsljkadsljkadslkajdslkadsjaldjskaljdksjalsdkajlkdsljkadsjladks",
    },
    {
      id: 3,
      name: "Steel Water Bottle",
      price: 600,
      category: "Lifestyle",
      stock: 3,
      description: "Insulated 1L stainless steel bottle for hot/cold drinks.",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: 3500,
      category: "Electronics",
      stock: 10,
      description: "RGB backlit keyboard with blue tactile switches.",
    },
    {
      id: 5,
      name: "Yoga Mat",
      price: 999,
      category: "Fitness",
      stock: 20,
      description: "Extra thick non-slip mat for home workouts.",
    },
    {
      id: 6,
      name: "Gaming Headset",
      price: 2400,
      category: "Electronics",
      stock: 0,
      description: "Over-ear headphones with noise-canceling microphone.",
    },
    {
      id: 7,
      name: "Study Lamp",
      price: 1100,
      category: "Utility",
      stock: 8,
      description: "Flexible neck desk lamp with 3 color modes.",
    },
  ]);
  
  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-8 space-y-8">
      <Header viewType={viewType} setViewType={setViewType} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ProductForm setProducts={setProducts} products={products} />
      <ProductDisplay viewType={viewType} products={products} searchQuery={searchTerm} />
      <Pagination
        totalPages={}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
