import React, { useEffect, useState } from 'react'

import moment from "moment"

const Timer2 = () => {
  const [count, setCount] = useState();
  const [seconds, setSeconds] = useState();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  const [start, setStart] = useState()

  let interval

  const startTimer = () => {
    interval = setInterval((start) => {
      const finalDate = new Date("DEC 15,2022").getTime()
      const now = new Date().getTime()
      const distance =  finalDate - now 
      const seconds = Math.floor(((distance) % (60 * 1000)) / 1000)
      const minutes = Math.floor(((distance) % (60 * 60* 1000)) / (1000*60))
      const hours_ = Math.floor(((distance) % (60 * 60* 1000 *24)) / (1000*60 *24))
      setSeconds(seconds)
      setMinutes(minutes)
      setHours(hours_)
    })
  }



  useEffect(() => {
    startTimer()
  }, [start])

  return (
    <div className="App">
      <>
        <p style={{ color: "white" }}>{`${hours > 9 ? hours: "0" + hours } :  ${minutes>0 ? minutes : "0" + minutes} : ${seconds>9 ? seconds : "0" + seconds}`}</p>
        <div className="buttons">
          <button >Reset</button>
          <button onClick={() => {
            const finalDate = new Date("DEC 14,2022").getTime()
            setStart(finalDate)
          }} >
            Start
          </button>
        </div>
      </>
    </div>
  )
}

export default Timer2
