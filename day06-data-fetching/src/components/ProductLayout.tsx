import React from 'react'
import { Outlet } from 'react-router'

function ProductLayout() {
  return (
      <main>
          <Outlet/>
      </main>
  )
}

export default ProductLayout