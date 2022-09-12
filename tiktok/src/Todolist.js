import { useState } from "react";

function Todolist() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const getJobsStorage = JSON.parse(localStorage.getItem("jobs"));
    console.log(getJobsStorage);
    return getJobsStorage ?? [];
  });

  const handleSubmit = () => {
    if (!job) return alert("Enter text");
    setJobs((prev) => {
      const newJobs = [...prev, job];
      // console.log(newJobs)
      // save on localstorage
      localStorage.setItem("jobs", JSON.stringify(newJobs));

      return newJobs;
    });
    setJob("");
  };

  const handleDelete = (index) => {
    setJobs((prev) => {
      const newJobs = [...prev];
      newJobs.splice(index, 1);
      localStorage.setItem("jobs", JSON.stringify(newJobs));

      return newJobs;
    });
    setJob("");
  };

  return (
    <div style={{ padding: "50px" }}>
      <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((item, index) => (
          <div
            style={{
              width: "200px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <li style={{ marginTop: "10px" }} key={index}>
              {item}
            </li>
            <button
              style={{
                marginTop: "10px",
                marginLeft: "auto",
                cursor: "pointer",
              }}
              name={index}
              onClick={(e) => handleDelete(e.target.name)}
            >
              xóa
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
