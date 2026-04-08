import { Outlet } from 'react-router'

function ProductLayout() {
  return (
    <div className='max-w-7xl mx-auto px-4'>
      <Outlet />
    </div>
  )
}

export default ProductLayout