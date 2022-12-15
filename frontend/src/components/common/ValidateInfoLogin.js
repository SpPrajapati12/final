import { useDispatch } from "react-redux"
import { setLogin } from "../../redux/slices/navBarSlice"

export default function ValidateInfoLogin(values) {
    let errors = {}


    // if(!values.email) {
    //     errors.email = "Email required"
    // } else if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(values.email))  {
    //     errors.email = "Email address is invalid"
    // }
    if(!values.email) {
        errors.email = "Email is required"
    }

    if(!values.password) {
        errors.password = "password is required"
    }else if(values.password.length < 6) {
        errors.password = "Password needs to be 6 charactors or more"
    }
    return errors
}