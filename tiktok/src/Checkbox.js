import { useState } from 'react'

const courseList = [
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

function Checkbox() {
  const [checked, setChecked] = useState([])
  console.log(checked)

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      return isChecked ? checked.filter(item => item !== id) : [...prev, id]
    })
  }

  const handleSubmit = () => {
    console.log({ ids: checked })
  }

  return (
    <div style={{ padding: "20px" }}>
      {courseList.map(course => (
        <div key={course.id}>
          <input type="checkbox" id={course.name} checked={checked.includes(course.id)} onChange={() => handleCheck(course.id)} />
          <label htmlFor={course.name}>{course.name}</label>
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

export default Checkbox;
