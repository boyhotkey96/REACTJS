import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Photos() {
  const photos = useSelector(state => state.photos)

  return (
    <>
      <Link to="/photos/add">Add Photo</Link>
      <ul>
        {photos.map((item, index) => (
          <li key={index}>{item.title} - {item.category} - {item.photo}</li>
        ))}
      </ul>
    </>
  )
}

export default Photos