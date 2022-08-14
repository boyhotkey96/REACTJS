import React, { useEffect, useState } from 'react'

function Content() {
  const tabs = ['posts', 'comments', 'albums', 'get width']
  const [post, setPost] = useState([])
  const [type, setType] = useState(tabs[0])
  const [showGoToTop, setShowGoToTop] = useState(false)
  const [width, setWidth] = useState(() => {
    const arrWidth = []
    const objWidth = {
      width: window.innerWidth
    }
    arrWidth.push(objWidth)
    return arrWidth
  })

  // Effect when click tab
  useEffect(() => {
    // Show innerWidth from window
    if (type === tabs[3]) {
      setPost(width)
      window.addEventListener('resize', () => {
        const arrWidth = []
        const objWidth = {
          width: window.innerWidth
        }
        arrWidth.push(objWidth)
        setWidth(arrWidth)
      })
    } else {
      // Get api: posts, comments, albums
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setPost(data)
        })
    }
  }, [type])

  // Effect when resize
  useEffect(() => {
    setPost(width)
  }, width)

  // Effect show button scroll to top
  useEffect(() => {
    const handleScrollTop = () => {
      // if (window.scrollY >= 200) {
      //   setShowGoToTop(true)
      // } else {
      //   setShowGoToTop(false)
      // }
      setShowGoToTop(window.scrollY >= 200)
    }
    window.addEventListener('scroll', handleScrollTop)
    // Cleanup function
    return () => {
      console.log('Unmouted')
    }
  }, [])

  // Event click button go to top
  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ marginTop: "20px" }}>
      {tabs.map(tab => (
        <button
          style={tab === type ?
            { color: "#fff", backgroundColor: "#333" } : {}}
          key={tab}
          onClick={setType.bind(null, tab)}>
          {tab}
        </button>
      ))}
      <ul>
        {post.map((item, index) => (
          <li key={index}>{item.title || item.id || item.width}</li>
        ))}
      </ul>
      <div style={{ position: "fixed", right: "50px", bottom: "40px" }}>
        {
          showGoToTop && <button onClick={handleGoToTop}>Go to top </button>
        }
      </div>
    </div>
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