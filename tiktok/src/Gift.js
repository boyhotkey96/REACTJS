import { useState } from 'react';

function Gift() {

  const [gift, setGift] = useState()

  const bonus = [
    'keyboard',
    'mouse',
    'laptop'
  ]

  const handleGift = () => {
    const index = Math.floor(Math.random() * bonus.length)
    setGift(bonus[index])
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{gift ? 'Phần thưởng: ' + gift : 'Phần thưởng ngẫu nhiên!'}</h1>
      <button style={{ cursor: "pointer", padding: "5px" }} onClick={handleGift}>Get Gift</button>
    </div>
  )
}

export default Gift;
