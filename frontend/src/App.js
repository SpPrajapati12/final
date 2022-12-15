import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/main/home/Home";
import Layout from "./components/common/Layout";
import NavBar from "./components/navbar/NavBar"
import Register from "./components/register/Register";
import Mailbox from "./components/main/mailbox/Mailbox";
import Dashboard from "./components/dashboard/Dashboard";
import Logins from "./components/login/Logins";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import Gpay from "./components/payment/Gpay";
import "./App.css"
import Admin from "./components/main/admin/Admin";
import Time1 from "./components/main/timer/Time1";
import Timer from "./components/main/timer/Timer";
import Timer2 from "./components/main/timer/Timer2";
import Timer3 from "./components/main/timer/Timer3";

const clientId = "475970552739-22ahalkku08902252ms6kcl60vj8e5fo.apps.googleusercontent.com"
function App(props) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("auth_data"))
  const user1 = JSON.parse(localStorage.getItem("fresponse"))

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }
    gapi.load('client:auth2', start)

    if(user||user1){
      // navigate("/")
    } else {
      navigate("/login")
    }
  }, [])
  
  // var accessToken = gapi.auth.getToken().access_token
  // console.log(accessToken)
  return (
    <div className="con">
        <NavBar />
        <Routes>
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logins" element={<Logins />} />
          <Route element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/timer" element={<Time1 />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/contact" element={<Timer2 />} />
            <Route exact path="/mail" element={<Mailbox />} />
            <Route exact path="/payment" element={<Gpay />} />
            <Route exact path="/timer3" element={<Timer3 />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;



// import React, { useState, useRef, useEffect } from 'react'
// const App = () => {
//   const Ref = useRef(null);
//   const [timer, setTimer] = useState('00:00:00');
//   const getTimeRemaining = (e) => {
//     const total = Date.parse(e) - Date.parse(new Date());
//     const seconds = Math.floor((total / 1000) % 60);
//     const minutes = Math.floor((total / 1000 / 60) % 60);
//     const hours = Math.floor((total / 1000 * 60 * 60) % 24);
//     return {
//       total, hours, minutes, seconds
//     };
//   }
//   const startTimer = (e) => {
//     let { total, hours, minutes, seconds }
//       = getTimeRemaining(e);
//     if (total >= 0) {
//       setTimer(
//         (hours > 9 ? hours : '0' + hours) + ':' +
//         (minutes > 9 ? minutes : '0' + minutes) + ':'
//         + (seconds > 9 ? seconds : '0' + seconds)
//       )
//     }
//   }
//   const clearTimer = (e) => {
//     if (Ref.current) clearInterval(Ref.current);
//     const id = setInterval(() => {
//       startTimer(e);
//     }, 1000)
//     Ref.current = id;
//   }
//   const getDeadTime = () => {
//     let deadline = new Date();
//     deadline.setSeconds(deadline.getSeconds() + 10);
//     return deadline;
//   }
//   useEffect(() => {
//     clearTimer(getDeadTime());
//   }, []);
//   const onClickReset = () => {
//     clearTimer(getDeadTime());
//   }
//   return (
//     <div className="Codedamn App">
//       <h2>{timer}</h2>
//       <button onClick={onClickReset}>Reset</button>
//     </div>
//   )
// }
// export default App