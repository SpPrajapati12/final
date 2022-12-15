import React, { useCallback, useEffect, useRef, useState } from "react";

const Timer = () => {
  const initialTimer = localStorage.getItem("time") ?? 0;



  const [timer, setTimer] = useState(initialTimer);
  const [start, setStart] = useState(false);
  const [brk, setBrk] = useState(false);
  const [mrk, setMrk] = useState(true);
  const stimer = useRef()
  const timeoutId = useRef(null);

  const countTimer = useCallback(() => {
    setTimer(+timer + 1);
    localStorage.setItem("time", timer);
  }, [timer]);


  useEffect(() => {
    if (initialTimer === "0") {
      setStart(false)
    } else {
      setStart(true)
    }
  }, [])


  useEffect(() => {
    if (start) {
      timeoutId.current = setInterval(countTimer, 1000);
    } else {
      clearInterval(timeoutId.current)
    }
    // cleanup function
    return () => clearInterval(timeoutId.current);
  }, [start, timer]);



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
    localStorage.setItem("timer", 0);
  };

  const dispSecondsAsMins = (seconds) => {
    // 25:00
    // console.log("seconds " + seconds);

    const mins = Math.floor(seconds / 60).toString() % 24;

    const hours = Math.floor(seconds / 3660).toString() % 60;
    const seconds_ = seconds % 60


    stimer.current = (hours > 0 ? hours : "0" + hours) + ":" + (mins > 9 ? mins : "0" + mins) + ":" + (seconds_ > 9 ? seconds_ : "0" + seconds_);


    return ((hours > 0 ? hours : "0" + hours) + ":" + (mins > 9 ? mins : "0" + mins) + ":" + (seconds_ > 9 ? seconds_ : "0" + seconds_));
  };

  return (
    <>
      <h1 align="center" style={{ color: "white", marginBottom: "30px" }}>Timer :{dispSecondsAsMins(timer)}</h1>
      <div className="mkr_button">
        {initialTimer === "0" && !start && <button className="mkrin btn" onClick={toggleStart}>Mark In</button>}
        {<button className="mkrout btn" onClick={breakIN}>Break In</button>}
        {<button className="mkrin btn" onClick={breakOFF}>Break Out</button>}
        {<button className="mkrout btn" onClick={toggleStop}>Mark Out</button>}
      </div>

    </>
  )

};

export default Timer;
