import { useState } from 'react'

const course = [
  {
    id: 1,
    name: 'Android'
  },
  {
    id: 2,
    name: 'React-Native'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]

function Radio() {

  const [checked, setChecked] = useState(1)
  console.log(checked)

  const handleSubmit = () => {
    console.log({ id: checked })
  }

  return (
    <div style={{ padding: "20px" }}>
      {course.map(course => (
        <div key={course.id}>
          <input type="radio" id={course.name} checked={checked === course.id} onChange={() => setChecked(course.id)} />
          <label htmlFor={course.name}>{course.name}</label>
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

export default Radio;
