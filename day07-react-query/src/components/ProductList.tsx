import { Link } from 'react-router';
import useProduct from '../hooks/useProduct'

function ProductList() {
    const { data, isLoading, error } = useProduct();

    if(isLoading) return <div>Loading...</div>;
    if(error) return <div>{error.message}</div>;
  return (
      <ul>
          {
              data?.map((product) => (
                  <li key={product.id}>
                      <Link to={`/products/${product.id}`}>{product.title}</Link>
                  </li>
              ))
          }
    </ul>
  )
}

export default ProductList