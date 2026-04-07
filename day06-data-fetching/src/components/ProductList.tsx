import React from 'react'
import useProducts from '../lib/useProducts';


function ProductList() {
    const { data, isLoading, isError, error } = useProducts();
    
    if (isLoading) return <div>Loading....</div>
    if (isError) return <div>Error: {error.message}</div>
  return (
      <ul>
          {
              data?.map((product) => (
                  <li key={product.id}>{product.title}{product.price}</li>
              ))
          }
    </ul>
  )
}

export default ProductList