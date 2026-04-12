import React, { useState } from 'react'

interface ProductSearchProps {
  onSearch: (filters: {
    search: string;
    minPrice?: number;
    maxPrice?: number;
    category?: number;
  }) => void;
}

function ProductSearch({ onSearch }: ProductSearchProps) {
  const [input, setInput] = useState('');
  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();
  const [category, setCategory] = useState<number | undefined>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch({
      search: input,
      minPrice,
      maxPrice,
      category,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search"
      />

      <input
        type="number"
        placeholder="Min price"
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Max price"
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />

      <select onChange={(e) => setCategory(Number(e.target.value))}>
        <option value="">All</option>
        <option value="1">Clothes</option>
        <option value="2">Furniture</option>
        <option value="3">Shoes</option>
        <option value="4">Computer Category</option>
      </select>

      <button type="submit">Search</button>
    </form>
  );
}

export default ProductSearch