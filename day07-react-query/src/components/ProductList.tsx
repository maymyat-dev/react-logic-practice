import { Link } from 'react-router';
import useProduct from '../hooks/useProduct'
import ProductSearch from './ProductSearch';
import { useState } from 'react';
import type { Filters } from '../types/product';


function ProductList() {
  const [filters, setFilters] = useState<Filters>({
    search: '',
  });

  const { data, isLoading, error } = useProduct(filters);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <ProductSearch onSearch={(value) => setFilters(value)} />

      <ul>
        {data?.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList