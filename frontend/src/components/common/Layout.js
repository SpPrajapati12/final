import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebars from './Sidebar'
import { ProSidebarProvider } from 'react-pro-sidebar';
import MainLayout from './MainLayout';

const Layout = () => {
  return (
    <div className='main_container'>
      <Sidebars />
      <MainLayout />
    </div>
  )
}

export default Layout