import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import FacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserData } from '../../redux/slices/googleSlice'
import { setAuth } from '../../redux/slices/navBarSlice'
import ValidateInfoLogin from '../common/ValidateInfoLogin';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const initialState = {
        email: "",
        password: ""
    }

    const [state, setState] = useState(initialState)
    const [errors, setErrors] = useState({})

    const onChangeHandler = (e) => {
        const { value, name } = e.target;
        setState({ ...state, [name]: value })
    }

    const login = useGoogleLogin({
        onSuccess: async response => {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        Authorization: `Bearer ${response.access_token}`
                    }
                })
                const data = res.data
                dispatch(getUserData(res.data))
                dispatch(setAuth(true))
                localStorage.clear()
                // localStorage.setItem("gUserData",data)
                localStorage.setItem(
                    "auth_data",
                    JSON.stringify(data)
                );
                localStorage.setItem("gToken", response.access_token)
                if (res.data.email_verified) {
                    navigate("/")
                }
            } catch (err) {
                console.log(err);
            }
        },
    });
    const responseFacebook = (res) => {
        console.log("response", res)
        localStorage.setItem("fresponse", JSON.stringify(res))
        navigate("/")
    }

    const ComponentClick = (data) => {
        console.log(data)
        localStorage.clear()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors(ValidateInfoLogin(state))
        // localStorage.clear()
        console.log("click")

        try {
            if(state.email === ""  && state.password === "")  {
                console.log("toast");
                toast.error("All field are Required")
            }
            const res = await axios.post('http://localhost:1337/api/login', { ...state })
            if (state.email && state.password && res.data) {
                dispatch(setAuth(true))
                navigate("/")
                // localStorage.setItem("data", JSON.stringify(res.data.data))
                localStorage.setItem("username", res.data.data.fullname)
                localStorage.setItem("token", res.data.user)
                toast(res.data.message)
            }
            if (res.data.status === "error") {
                alert("Password is wrong")
            }
        } catch (err) {
            toast.error(err.response.data.message)

        }


    }

    return (
        <div className="containers">
            <div className="card bg-light">
                <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
                    <h4 className="card-title mt-3 text-center">Login Account</h4>
                    <p style={{ color: "white" }}>
                        <span className="btn btn-block common_btn " onClick={login}> <i className="fab fa-google" /> &nbsp; Login via Google</span>
                        <FacebookLogin
                            appId="675108894320261"
                            autoLoad={false}
                            fields="name,email,picture"
                            onClick={ComponentClick}
                            callback={responseFacebook}
                            cssClass="btn btn-block btn-facebook common_btn"
                            icon="fa-facebook"
                        // expiresIn= "30 days"
                        />
                    </p>
                    <p className="divider-text">
                        <span className="bg-light">OR</span>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                            </div>
                            <input className="form-control" value={state.email} placeholder="email" type="text" name='email' autoComplete="false" onChange={onChangeHandler} />
                        </div>
                        <p className='text-danger form_error'>{errors.email}</p>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                            </div>
                            <input className="form-control" value={state.password} placeholder="password" type="password" name='password' onChange={onChangeHandler} />
                        </div>
                        <p className='text-danger form_error'>{errors.password}</p>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block common_btn"> Login Account</button>
                        </div>
                        <p className="text-center authLink" onClick={() => navigate("/signup")}>Have a not account? <a>Sign Up</a> </p>
                    </form>
                </article>
            </div>
        </div>
    )
}

export default Login