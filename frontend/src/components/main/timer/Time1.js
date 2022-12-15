
import { useEffect, useRef, useState } from "react";
import { useTimer } from "react-use-precision-timer";

const Time1 = () => {
  const initialTimer = JSON.parse(localStorage.getItem("timer")) ?? 0;
  const [time, setTime] = useState(initialTimer);


  //   const time = useRef(initialTimer);
  const timer = useTimer({
    delay: 1000,
    callback: () => {
      setTime(+time + 1)
      localStorage.setItem("timer", time);
    }
  });


  useEffect(() => {
    timer.start();
    return () => timer.stop();
  }, []);
  const gettimer = (seconds) => {
    const mins = Math.floor(seconds / 60).toString() % 24;
    const hours = Math.floor(seconds / 3660).toString() % 60;
    const seconds_ = seconds % 60;
    return (
      (hours > 0 ? hours : "0" + hours) +
      ":" +
      (mins > 9 ? mins : "0" + mins) +
      ":" +
      (seconds_ > 9 ? seconds_ : "0" + seconds_)
    );
  };
  
  return (
    <div className="App">
      <h1>{gettimer(time)}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}


export default Time1
