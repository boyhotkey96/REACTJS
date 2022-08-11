import { useState } from 'react';

function Todolist() {
  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(() => {
    const getJobsStorage = JSON.parse(localStorage.getItem('jobs'))
    console.log(getJobsStorage)
    return getJobsStorage ?? []
  })

  const handleSubmit = () => {
    if (!job) return alert('Enter text')
    setJobs(prev => {
      const newJobs = [...prev, job]
      // console.log(newJobs)
      // save on localstorage
      localStorage.setItem('jobs', JSON.stringify(newJobs))

      return newJobs
    })
    setJob('')
  }

  return (
    <div style={{ padding: "50px" }}>
      <input type="text" value={job} onChange={e => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {
          jobs.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Todolist;