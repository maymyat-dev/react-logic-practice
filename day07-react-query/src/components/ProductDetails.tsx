import useProductDetails from '../hooks/useProductDetails';
import { useParams, Link } from 'react-router';

function ProductDetails() {
  const { id } = useParams();
  const productId = Number(id);
  const { data, isLoading, error } = useProductDetails(productId);

  if (isLoading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (error) return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl font-bold text-gray-900">Something went wrong</h2>
      <p className="text-gray-500 mt-2">{error.message}</p>
      <Link to="/products" className="mt-6 inline-block text-indigo-600 hover:underline">← Back to shop</Link>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <nav className="flex mb-8 text-sm font-medium text-gray-500">
          <Link to="/products" className="hover:text-indigo-600 transition">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 truncate">{data?.title}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
          
          <div className="flex flex-col">
            <div className="aspect-square w-full rounded-3xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
              <img 
                src={data?.images[0]} 
                alt={data?.title} 
                className="w-full h-full object-center object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4">
               {data?.images.slice(1, 5).map((img, idx) => (
                 <div key={idx} className="aspect-square rounded-xl bg-gray-100 overflow-hidden cursor-pointer opacity-60 hover:opacity-100 transition">
                   <img src={img} alt="" className="object-cover h-full w-full" />
                 </div>
               ))}
            </div>
          </div>

          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <div className="flex flex-col">
              <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">
                {data?.category.name}
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mt-2">
                {data?.title}
              </h1>
              
              <div className="mt-4 flex items-center justify-between border-b border-gray-100 pb-6">
                <p className="text-3xl font-bold text-gray-900">${data?.price}</p>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg">★★★★☆</span>
                  <span className="ml-2 text-sm text-gray-500">(42 reviews)</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {data?.description}
                </p>
              </div>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex border border-gray-300 rounded-lg">
                    <button className="px-4 py-2 hover:bg-gray-50">-</button>
                    <span className="px-4 py-2 font-medium border-x">1</span>
                    <button className="px-4 py-2 hover:bg-gray-50">+</button>
                  </div>
                  <button className="flex-1 bg-indigo-600 text-white py-3 px-8 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95">
                    Add to Cart
                  </button>
                </div>
                
                <button className="w-full border border-gray-200 py-3 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition">
                  Add to Wishlist
                </button>
              </div>
              <div className="mt-10 pt-10 border-t border-gray-100 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="bg-green-100 p-2 rounded-full text-green-600">✓</span>
                  Free shipping
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="bg-green-100 p-2 rounded-full text-green-600">✓</span>
                  30-day returns
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;