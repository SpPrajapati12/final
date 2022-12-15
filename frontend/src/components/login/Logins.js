import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from "react-google-login";



// const clientId = "475970552739-6t5fbj7duh91o7kkcjj35bj a50jkn1cn.apps.googleusercontent.com"
const clientId = "475970552739-22ahalkku08902252ms6kcl60vj8e5fo.apps.googleusercontent.com"


const Logins = () => {
    const [showLoginButton,setShowLoginButton] = useState(true)
    const [showLogoutButton,setShowLogoutButton] = useState(false)

    const onSuccess = (res) => {
        console.log("Login SUCCESS", res)
        setShowLoginButton(false)
        setShowLogoutButton(true)

    }
    const onFailure = (res) => {
        console.log("failed", res)
    }

    const logout = (res) => {
        console.log("logout successfully")
        console.log(res)
        setShowLoginButton(true)
        setShowLogoutButton(false)
    }
    return (
        <>
            {/* <div id="signInButton"> */}
               {showLoginButton &&  <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                />}
            {/* </div> */}

            {/* <div id='signOutButton' > */}
                {showLogoutButton && <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                >
                </GoogleLogout>}
            {/* </div> */}
        </>
    )
}

export default Logins
