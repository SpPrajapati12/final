import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ValidateInfo from '../common/ValidateInfo'
import { toast } from 'react-toastify';
import "./register.css"

const Register = () => {
  const navigate = useNavigate()

  const initialState = {
    fullname: "",
    email: "",
    mobileNo: "",
    password: "",
  }
  const [state, setState] = useState(initialState)
  const [errors, setErrors] = useState({})


  const { fullname, email, mobileNo, password } = state


  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setErrors(ValidateInfo(state))
    if (!fullname && !email && !mobileNo && !password) {
      toast("All fields are required")
    } else {
      try {
        await axios.post("http://localhost:1337/api/register", { ...state })
        navigate('/login')
        setState(initialState)
        toast("Register Successfully")
      } catch (err) {
      console.log(err);
    }
  }
}




return (
  <div className="containers">
    <div className="card bg-light">
      <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
        <h4 className="card-title mt-3 text-center">Create Account</h4>
        <form onSubmit={handleSubmit}>
          {/* <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-user" /> </span>
              </div>
              <input className="form-control" name='fullname' value={fullname} placeholder="Full name" type="text" autoComplete='off' onChange={onChangeHandler} />
            </div>
            {errors.fullname && <p className='form_error'>{errors.fullname}</p>} */}
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-user" /> </span>
            </div>
            <input className="form-control" name='fullname' value={fullname} placeholder="fullname" type="text" autoComplete='off' onChange={onChangeHandler} />
          </div>
          {errors.fullname && <p className='form_error'>{errors.fullname}</p>}
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
            </div>
            <input className="form-control" name='email' value={email} placeholder="Email address" type="email" autoComplete='off' onChange={onChangeHandler} />
          </div>
          {errors.email && <p className='form_error'>{errors.email}</p>}
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-phone" /> </span>
            </div>
            <input className="form-control" name='mobileNo' value={mobileNo} placeholder="Phone number" type="text" autoComplete='off' onChange={onChangeHandler} />
          </div>
          {errors.mobileNo && <p className='form_error'>{errors.mobileNo}</p>}
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-lock" /> </span>
            </div>
            <input className="form-control" name='password' value={password} placeholder="password" type="password" autoComplete='off' onChange={onChangeHandler} />
          </div>
          {errors.password && <p className='form_error'>{errors.password}</p>}
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block common_btn"> Create Account</button>
          </div>
          <p className="text-center authLink" onClick={() => navigate("/login")}>Have an account? <a>Log In</a> </p>
        </form>
      </article>
    </div>
  </div>
)
}

export default Register