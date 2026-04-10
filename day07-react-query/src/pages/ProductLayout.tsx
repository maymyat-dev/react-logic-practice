import { Outlet } from 'react-router'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ProductLayout() {
  return (
    <div className='max-w-7xl mx-auto px-4'>
      <Outlet />

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default ProductLayout