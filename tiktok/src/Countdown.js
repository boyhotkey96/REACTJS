import { createElement, useEffect, useState } from 'react';

function Content() {
  const [count, setCount] = useState(360)

  useEffect(() => {
    setInterval(() => {
      setCount(prev => prev - 1)
    }, 1000);
  }, [])

  return (
    <p>
      {count}
    </p>
  )
}

function Countdown() {
  // const [show, setShow] = useState(false)
  const initialCount = 180
  const [count, setCount] = useState(initialCount)

  const handleCountdown = () => {
    setInterval(() => {
      setCount(prev => prev - 1)
    }, 1000);
  }
  let elm
  useEffect(() => {
     elm = document.querySelector('.decrease')
    // console.log(elm)
  })

  const handReset = () => {
    elm.removeEventListener('click', handleCountdown);
    setCount(initialCount)
  }

  return (
    <div style={{ padding: "30px", fontSize: "28px" }}>
      {/* <button onClick={setShow.bind(null, !show)}>Countdown</button>
      {show && <Content />} */}

      <button onClick={handReset}>Reset</button>
      <button className='decrease'
        style={{ cursor: "pointer" }}
        onClick={handleCountdown}>
        -
      </button>
      <button
        style={{ cursor: "pointer" }}
        onClick={setCount.bind(null, prev => prev + 1)}>
        +
      </button>
      <p>Count: {count}</p>
    </div>
  )
}

export default Countdown