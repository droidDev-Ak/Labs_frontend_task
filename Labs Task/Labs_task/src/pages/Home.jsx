import { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/Search";
import ProductForm from "../components/ProductForm";
import ProductDisplay from "../components/ProductDisplay";
import Pagination from "../components/Pagination";

export default function App() {
  const [viewType, setViewType] = useState("table");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [editingProduct, setEditingProduct] = useState(null);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Ultra Torch 1",
      price: 1245,
      category: "Utility",
      stock: 12,
      description: "High-intensity LED flashlight for outdoor use.",
    },
    {
      id: 2,
      name: "Pro Mouse 2",
      price: 890,
      category: "Electronics",
      stock: 45,
      description: "Ergonomic wireless mouse with silent clicks.",
    },
    {
      id: 3,
      name: "Max Bottle 3",
      price: 650,
      category: "Lifestyle",
      stock: 4,
      description: "Insulated stainless steel water bottle.",
    },
    {
      id: 4,
      name: "Lite Keyboard 4",
      price: 3200,
      category: "Electronics",
      stock: 15,
      description: "Compact mechanical keyboard with RGB.",
    },
    {
      id: 5,
      name: "Classic Mat 5",
      price: 950,
      category: "Fitness",
      stock: 20,
      description: "Non-slip yoga mat for home workouts.",
    },
    {
      id: 6,
      name: "Ultra Headset 6",
      price: 2100,
      category: "Electronics",
      stock: 0,
      description: "Noise-cancelling gaming headset.",
    },
    {
      id: 7,
      name: "Pro Lamp 7",
      price: 1150,
      category: "Decor",
      stock: 8,
      description: "Modern LED desk lamp with dimming.",
    },
    {
      id: 8,
      name: "Max Watch 8",
      price: 4500,
      category: "Electronics",
      stock: 32,
      description: "Smartwatch with heart rate monitoring.",
    },
    {
      id: 9,
      name: "Lite Speaker 9",
      price: 1800,
      category: "Electronics",
      stock: 7,
      description: "Portable Bluetooth speaker with deep bass.",
    },
    {
      id: 10,
      name: "Classic Charger 10",
      price: 450,
      category: "Utility",
      stock: 50,
      description: "Fast-charging wall adapter.",
    },
    {
      id: 11,
      name: "Ultra Torch 11",
      price: 1300,
      category: "Utility",
      stock: 10,
      description: "Heavy-duty torch for camping.",
    },
    {
      id: 12,
      name: "Pro Mouse 12",
      price: 920,
      category: "Electronics",
      stock: 25,
      description: "Bluetooth optical mouse for travel.",
    },
    {
      id: 13,
      name: "Max Bottle 13",
      price: 700,
      category: "Lifestyle",
      stock: 2,
      description: "Glass bottle with protective sleeve.",
    },
    {
      id: 14,
      name: "Lite Keyboard 14",
      price: 2800,
      category: "Electronics",
      stock: 5,
      description: "Wireless membrane keyboard.",
    },
    {
      id: 15,
      name: "Classic Mat 15",
      price: 1100,
      category: "Fitness",
      stock: 14,
      description: "Eco-friendly natural rubber mat.",
    },
    {
      id: 16,
      name: "Ultra Headset 16",
      price: 3500,
      category: "Electronics",
      stock: 11,
      description: "Studio quality studio headphones.",
    },
    {
      id: 17,
      name: "Pro Lamp 17",
      price: 1400,
      category: "Decor",
      stock: 19,
      description: "Ambient floor lamp for living room.",
    },
    {
      id: 18,
      name: "Max Watch 18",
      price: 5200,
      category: "Electronics",
      stock: 6,
      description: "Premium stainless steel smartwatch.",
    },
    {
      id: 19,
      name: "Lite Speaker 19",
      price: 1500,
      category: "Electronics",
      stock: 22,
      description: "Waterproof shower speaker.",
    },
    {
      id: 20,
      name: "Classic Charger 20",
      price: 600,
      category: "Utility",
      stock: 40,
      description: "Universal laptop charger.",
    },
    {
      id: 21,
      name: "Ultra Torch 21",
      price: 1100,
      category: "Utility",
      stock: 3,
      description: "Pocket-sized emergency light.",
    },
    {
      id: 22,
      name: "Pro Mouse 22",
      price: 1150,
      category: "Electronics",
      stock: 18,
      description: "Vertical ergonomic mouse.",
    },
    {
      id: 23,
      name: "Max Bottle 23",
      price: 550,
      category: "Lifestyle",
      stock: 0,
      description: "BPA-free plastic sports bottle.",
    },
    {
      id: 24,
      name: "Lite Keyboard 24",
      price: 4200,
      category: "Electronics",
      stock: 9,
      description: "Full-sized mechanical gaming board.",
    },
    {
      id: 25,
      name: "Classic Mat 25",
      price: 800,
      category: "Fitness",
      stock: 30,
      description: "Thin travel-friendly yoga mat.",
    },
    {
      id: 26,
      name: "Ultra Headset 26",
      price: 1950,
      category: "Electronics",
      stock: 15,
      description: "Over-ear office headset.",
    },
    {
      id: 27,
      name: "Pro Lamp 27",
      price: 900,
      category: "Decor",
      stock: 21,
      description: "Clip-on reading light.",
    },
    {
      id: 28,
      name: "Max Watch 28",
      price: 3800,
      category: "Electronics",
      stock: 13,
      description: "Fitness tracker with GPS.",
    },
    {
      id: 29,
      name: "Lite Speaker 29",
      price: 2400,
      category: "Electronics",
      stock: 4,
      description: "Multi-room home audio speaker.",
    },
    {
      id: 30,
      name: "Classic Charger 30",
      price: 850,
      category: "Utility",
      stock: 12,
      description: "Multi-port USB charging station.",
    },
    {
      id: 31,
      name: "Ultra Torch 31",
      price: 1450,
      category: "Utility",
      stock: 8,
      description: "Searchlight with long range.",
    },
    {
      id: 32,
      name: "Pro Mouse 32",
      price: 750,
      category: "Electronics",
      stock: 33,
      description: "Wired gaming mouse with RGB.",
    },
    {
      id: 33,
      name: "Max Bottle 33",
      price: 1200,
      category: "Lifestyle",
      stock: 10,
      description: "Smart bottle with hydration reminders.",
    },
    {
      id: 34,
      name: "Lite Keyboard 34",
      price: 1500,
      category: "Electronics",
      stock: 27,
      description: "Folding Bluetooth keyboard.",
    },
    {
      id: 35,
      name: "Classic Mat 35",
      price: 2500,
      category: "Fitness",
      stock: 6,
      description: "Extra wide professional mat.",
    },
    {
      id: 36,
      name: "Ultra Headset 36",
      price: 4800,
      category: "Electronics",
      stock: 2,
      description: "Wireless hi-fi headphones.",
    },
    {
      id: 37,
      name: "Pro Lamp 37",
      price: 2200,
      category: "Decor",
      stock: 11,
      description: "Smart LED strip lights.",
    },
    {
      id: 38,
      name: "Max Watch 38",
      price: 6000,
      category: "Electronics",
      stock: 5,
      description: "Hybrid luxury smartwatch.",
    },
    {
      id: 39,
      name: "Lite Speaker 39",
      price: 900,
      category: "Electronics",
      stock: 48,
      description: "Compact mini speaker.",
    },
    {
      id: 40,
      name: "Classic Charger 40",
      price: 300,
      category: "Utility",
      stock: 100,
      description: "Standard micro-USB cable.",
    },
    {
      id: 41,
      name: "Ultra Torch 41",
      price: 1750,
      category: "Utility",
      stock: 14,
      description: "Rechargeable work light.",
    },
    {
      id: 42,
      name: "Pro Mouse 42",
      price: 1350,
      category: "Electronics",
      stock: 9,
      description: "High-precision trackball mouse.",
    },
    {
      id: 43,
      name: "Max Bottle 43",
      price: 950,
      category: "Lifestyle",
      stock: 17,
      description: "Infuser bottle for fruit water.",
    },
    {
      id: 44,
      name: "Lite Keyboard 44",
      price: 3800,
      category: "Electronics",
      stock: 3,
      description: "Hot-swappable mechanical board.",
    },
    {
      id: 45,
      name: "Classic Mat 45",
      price: 1250,
      category: "Fitness",
      stock: 22,
      description: "Alignment-marked yoga mat.",
    },
    {
      id: 46,
      name: "Ultra Headset 46",
      price: 1200,
      category: "Electronics",
      stock: 30,
      description: "In-ear wired earbuds.",
    },
    {
      id: 47,
      name: "Pro Lamp 47",
      price: 3100,
      category: "Decor",
      stock: 4,
      description: "Vintage Edison bulb lamp.",
    },
    {
      id: 48,
      name: "Max Watch 48",
      price: 2500,
      category: "Electronics",
      stock: 16,
      description: "Kid-friendly smartwatch.",
    },
    {
      id: 49,
      name: "Lite Speaker 49",
      price: 3200,
      category: "Electronics",
      stock: 8,
      description: "Bookshelf speakers (Pair).",
    },
    {
      id: 50,
      name: "Classic Charger 50",
      price: 1200,
      category: "Utility",
      stock: 20,
      description: "Wireless charging pad.",
    },
    {
      id: 51,
      name: "Ultra Torch 51",
      price: 1900,
      category: "Utility",
      stock: 6,
      description: "Solar powered lantern.",
    },
    {
      id: 52,
      name: "Pro Mouse 52",
      price: 650,
      category: "Electronics",
      stock: 41,
      description: "Basic 3-button office mouse.",
    },
    {
      id: 53,
      name: "Max Bottle 53",
      price: 850,
      category: "Lifestyle",
      stock: 0,
      description: "Collapsible silicone bottle.",
    },
    {
      id: 54,
      name: "Lite Keyboard 54",
      price: 1900,
      category: "Electronics",
      stock: 14,
      description: "Splash-proof office keyboard.",
    },
    {
      id: 55,
      name: "Classic Mat 55",
      price: 3000,
      category: "Fitness",
      stock: 2,
      description: "Memory foam exercise mat.",
    },
    {
      id: 56,
      name: "Ultra Headset 56",
      price: 6500,
      category: "Electronics",
      stock: 10,
      description: "Active noise cancelling pro headphones.",
    },
    {
      id: 57,
      name: "Pro Lamp 57",
      price: 1800,
      category: "Decor",
      stock: 15,
      description: "Sunset projection lamp.",
    },
    {
      id: 58,
      name: "Max Watch 58",
      price: 4200,
      category: "Electronics",
      stock: 7,
      description: "Rugged outdoor sports watch.",
    },
    {
      id: 59,
      name: "Lite Speaker 59",
      price: 4500,
      category: "Electronics",
      stock: 3,
      description: "Large party speaker with light show.",
    },
    {
      id: 60,
      name: "Classic Charger 60",
      price: 950,
      category: "Utility",
      stock: 25,
      description: "Car charger with dual ports.",
    },
    {
      id: 61,
      name: "Ultra Torch 61",
      price: 1550,
      category: "Utility",
      stock: 18,
      description:
        "Multi-functional magnetic work light with 360-degree rotation.",
    },
    {
      id: 62,
      name: "Pro Mouse 62",
      price: 2100,
      category: "Electronics",
      stock: 2,
      description:
        "High-performance gaming mouse with adjustable DPI and weights.",
    },
  ]);
  const ITEMS_PER_PAGE = 6;
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);
  const [totalPage,setTotalPage] = useState(0);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-8 space-y-8">
      <Header viewType={viewType} setViewType={setViewType} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ProductForm
        setProducts={setProducts}
        editingProduct={editingProduct}
        setEditingProduct={setEditingProduct}
      />
      <ProductDisplay
        viewType={viewType}
        setTotalPage={setTotalPage}
        products={products}
        searchQuery={searchQuery}
        currentPage={currentPage}
        ITEMS_PER_PAGE={ITEMS_PER_PAGE}
        onEditClick={(product) => setEditingProduct(product)}
      />
      <Pagination
        totalPages={totalPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
