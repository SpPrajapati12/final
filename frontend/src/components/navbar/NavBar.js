import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setAuth } from '../../redux/slices/navBarSlice'
import { googleLogout } from '@react-oauth/google';
import { ToastContainer, toast } from 'react-toastify';
import "./navbar.css"

const NavBar = () => {

  const auth = useSelector((state) => state.toggle.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const user = JSON.parse(localStorage.getItem("auth_data"))
  const user1 = JSON.parse(localStorage.getItem("fresponse"))
  const data = JSON.parse(localStorage.getItem("data"))

  const loginD = localStorage.getItem("username")


  const [isMobile, setIsMobile] = useState(false)
  return (
    <>
      <div>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <nav className='navbar'>
        <img src="https://techyantra.com/wp-content/uploads/2022/07/logo.svg" alt="logo" className='logo' />
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
          {/* {auth && (
          <>
            <Link to="/" className='home '>
              <li>Home</li>
            </Link>
            <Link to="/about" className='about'>
              <li>About</li>
            </Link>
            <Link to="/contact" className='admin'>
              <li>Contacts</li>
            </Link></>
        )
        } */}
          {user &&
            <div className="profile_container">
              <img className='profileImage' src={user.picture} alt="profile Picture" />
              <span className='user_name' >{user.given_name}</span>
            </div>
          }
          {user1 ?
            (<div className="profile_container">
              <img className='profileImage' src={`${user1.status ? user1.picture.data.url : user1.picture.data.url}`} alt="profile Picture" />
              <span className='user_name' >{`${user1.status ? user1.name : user1.name}`}</span>
            </div>) : null
          }
          {loginD && <p className=' profile_container user'>{loginD}</p>}
          {auth || user || user1 ? <button type='text' className='btn auth common_btn' onClick={() => {
            dispatch(setAuth(false))
            localStorage.clear()
            navigate("/login")
            toast('user logout successfully')
          }
          } >logout</button> :
            <button type='text' className='btn auth common_btn' onClick={() => {
              navigate("/login")
              googleLogout();
              window.FB.logout()
            }}>login</button>}
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <i className='fas fa-times' /> : <i className='fas fa-bars' />}
        </button>

      </nav>
    </>
  )
}

export default NavBar