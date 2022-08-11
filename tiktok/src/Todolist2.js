import { useState } from 'react'

function Todolist2() {
  const [value, setValue] = useState('')
  const [jobs, setJobs] = useState(() => {
    const getsMyJob = JSON.parse(localStorage.getItem('myjob'))
    console.log(getsMyJob)
    return getsMyJob || []
  })

  const handleSubmit = () => {
    if (!value) return alert('Enter text!')
    setJobs(prev => {
      const cloneJobs = [...prev, value]
      console.log(cloneJobs)
      localStorage.setItem('myjob', JSON.stringify(cloneJobs))
      return cloneJobs
    })
    setValue('')
  }
  
  return (
    <div style={{ padding: "60px" }}>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todolist2;