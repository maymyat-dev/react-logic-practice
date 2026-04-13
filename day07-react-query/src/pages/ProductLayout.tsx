import { Outlet } from 'react-router'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ProductLayout() {
  return (
    <div className='w-full'>
      <Outlet />

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default ProductLayout