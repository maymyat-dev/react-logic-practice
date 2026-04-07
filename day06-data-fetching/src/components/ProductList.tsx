import useProduct from '../hooks/useProducts'
import { Link } from "react-router";

function ProductList() {
    const { data, isLoading, error } = useProduct();

    if(isLoading) return <div>Loading...</div>;
    if(error) return <div>{error.message}</div>;
  return (
      <ul className='flex justify-between flex-wrap'>
          {
              data?.map((product) => (
                  <Link to={`/products/${product.id}`}>
                      <li key={product.id} className='md:w-1/3 sm:w-2/3 w-full'>
                          <img src={product.image} alt={product.title} />
                          <p>{product.title}</p>
                      </li>
                      
                    </Link>
              ))
          }
    </ul>
  )
}

export default ProductList