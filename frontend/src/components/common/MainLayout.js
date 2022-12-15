import React from 'react'
import { Outlet } from 'react-router-dom'

import "./css/mainlayout.css"


const MainLayout = () => {
  return (
    <>
      <div className='main_container_child'>
        <Outlet />
      </div>
    </>

  )
}

export default MainLayout