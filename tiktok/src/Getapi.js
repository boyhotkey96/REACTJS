import { useEffect, useState } from 'react'

function Content() {
  const [post, setPost] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPost(data)
      })
  }, [])

  return (
    <ul>
      {post.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}


function Getapi() {
  const [show, setShow] = useState(false)

  return (
    <div style={{ padding: "40px" }}>
      <button onClick={setShow.bind(null, !show)}>Get api</button>
      {show && <Content />}
    </div>
  )
}

export default Getapi;