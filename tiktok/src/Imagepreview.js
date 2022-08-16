import { useState, useEffect } from 'react'

function Imagepreview() {
  const [avatar, setAvatar] = useState()

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.imageUrl)
    }
  }, [avatar])

  const handleChange = (e) => {
    const file = e.target.files[0]
    file.imageUrl = URL.createObjectURL(file)
    console.log(file)
    setAvatar(file)
  }

  return (
    <div>
      <input
        type="file"
        onChange={handleChange}
      />
      {avatar && <img src={avatar.imageUrl} alt="" width="70%" />}
    </div>
  )
}

export default Imagepreview