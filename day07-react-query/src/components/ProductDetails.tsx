import useProductDetails from '../hooks/useProductDetails';
import { useParams } from 'react-router';

function ProductDetails() {
    const {id} = useParams();
    const productId = Number(id)
    const { data, isLoading, error } = useProductDetails(productId);

    if(isLoading) return <div>Loading...</div>;
    if(error) return <div>{error.message}</div>;
  return (
      <div className='flex'>
          <div>
              <img src={data?.images[0]} alt={data?.title} className='w-64' />
          </div>
          <div>
              <h1>{data?.title}</h1>
              <p>{data?.category.name}</p>
              <p>{data?.description}</p>
              <p className='text-lg text-indigo-500'>${data?.price}</p>

          </div>
          
    </div>
  )
}

export default ProductDetails