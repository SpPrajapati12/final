import React, { useEffect, useRef, useState } from 'react'
import "../common/css/common.css"
import moment from "moment"

const Dashboard = () => {
  const [timer, setTimer] = useState(0); // 25 minutes
  const [start, setStart] = useState(false);
  const [brk, setBrk] = useState(false);
  const [mrk, setMrk] = useState(true);
  const stimer = useRef()
  // const firstStart = useRef(true);
  const tick = useRef();



  useEffect(() => {
    // if (firstStart.current) {
    //   console.log("first render, don't run useEffect for timer");
    //   firstStart.current = !firstStart.current;
    //   return;
    // }
    if (start) {
      tick.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else {
      clearInterval(tick.current);
    }
    return () => clearInterval(tick.current);
  }, [start]);


  const toggleStart = () => {
    setStart(true);
    setBrk(true)
    setMrk(!mrk)
  };

  const breakIN = () => {
    setStart(false);
  };
  const breakOFF = () => {
    setStart(true);
  };

  const toggleStop = () => {
    setStart(false);
    setTimer(0)
  };

  const dispSecondsAsMins = (seconds) => {
    // 25:00
    // console.log("seconds " + seconds);

    const mins = Math.floor(seconds / 60).toString() % 24;

    const hours = Math.floor(seconds / 3660).toString() % 60;
    const seconds_ = seconds % 60
    console.log(mins,hours);


    stimer.current = (hours > 0 ? hours : "0" + hours) + ":" + (mins > 9 ? mins : "0" + mins) + ":" + (seconds_ > 9 ? seconds_ : "0" + seconds_);


    return ((hours > 0 ? hours : "0" + hours) + ":" + (mins > 9 ? mins : "0" + mins) + ":" + (seconds_ > 9 ? seconds_ : "0" + seconds_));
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
        </ol>
      </nav>
      <div className="component">
        <div className="mkr">

          <h1>{dispSecondsAsMins(timer)}</h1>
          <div className="mkr_button">
            {mrk && <button className="mkrin btn" onClick={toggleStart}>Mark In</button>}
            {brk && <button className="mkrout btn" onClick={breakIN}>Break In</button>}
            {brk && <button className="mkrin btn" onClick={breakOFF}>Break Out</button>}
            {brk && <button className="mkrout btn" onClick={toggleStop}>Mark Out</button>}
          </div>

        </div>

      </div>
    </>
  )
}

export default Dashboard