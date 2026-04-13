import { useState, type FormEvent } from "react";
import type { Filters } from "../types/product";

type ProductSearchProps = {
  onSearch: (filters: Filters) => void
}

function ProductSearch({ onSearch }: ProductSearchProps) {
  const [title, setTitle] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [category, setCategory] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch({
      title: title,
      minPrice: minPrice,
      maxPrice: maxPrice,
      category: category
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 p-4 border rounded">
      <input
        type="search"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Search title..."
        className="border p-1"
      />

      <input
        type="number"
        onChange={(e) => setMinPrice(Number(e.target.value))} 
        placeholder="Min price"
        className="border p-1"
      />

      <input
        type="number"
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        placeholder="Max price"
        className="border p-1"
      />

      <select onChange={(e) => setCategory(e.target.value)} className="border p-1">
        <option value="">All Categories</option>
        <option value="1">Clothes</option>
        <option value="2">Furniture</option>
        <option value="3">Shoes</option>
        <option value="4">Electronics</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
        Search
      </button>
    </form>
  );
}

export default ProductSearch;