import { useState } from 'react'

function Content() {
  return (
    <h1> H1 element</h1>
  )
}

function Mount() {
  const [show, setShow] = useState(false)

  return (
    <div style={{ padding: "40px" }}>
      <button onClick={setShow.bind(null, !show)}>Toggle</button>
      {show && <Content />}
    </div>
  )
}

export default Mount;