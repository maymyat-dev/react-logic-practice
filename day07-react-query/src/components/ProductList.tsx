import { Link } from 'react-router';
import useProduct from '../hooks/useProduct';
import ProductSearch from './ProductSearch';
import { useState } from 'react';
import type { Filters } from '../types/product';

function ProductList() {
  const [filter, setFilter] = useState<Filters>({
    title: "",
    minPrice: 0,
    maxPrice: 0,
    category: "",
  });

  const { data, isLoading, error } = useProduct(filter);

  if (isLoading) return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-500 font-medium">Curating your collection...</p>
    </div>
  );

  if (error) return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-red-50 border border-red-200 rounded-xl text-center">
      <p className="text-red-600 font-semibold">Error loading products</p>
      <p className="text-red-500 text-sm mt-1">{error.message}</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Our Products</h1>
          <p className="text-gray-500 mt-1">Discover our handpicked selections.</p>
        </div>
        <div className="w-full md:w-auto">
          <ProductSearch onSearch={setFilter} />
        </div>
      </div>

      {data && data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.map((product) => (
            <Link 
              to={`/products/${product.id}`} 
              key={product.id} 
              className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-square bg-gray-50 overflow-hidden">
                <img 
                  src={product.images[0] || 'https://via.placeholder.com/300'} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-gray-900 font-semibold text-lg leading-snug group-hover:text-blue-600 transition-colors line-clamp-1">
                  {product.title}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price.toLocaleString()}
                  </span>
                  <span className="text-sm font-medium text-blue-600 group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">No products found</h3>
          <p className="text-gray-500">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}

export default ProductList;