import { useEffect, useReducer, useRef, useState } from "react";

const initState = {
  job: "",
  jobs: [],
};

const JOB = "JOB";
const ADD_JOB = "ADD_JOB";
const DELET_JOB = "DELETE_JOB";
const nameLocal = "demo-jobs";

const setJob = (payload) => ({ type: JOB, payload });
const addJob = (payload) => ({ type: ADD_JOB, payload });
const deleteJob = (payload) => ({ type: DELET_JOB, payload });

const reducer = (state, action) => {
  switch (action.type) {
    case JOB:
      return { ...state, job: action.payload };
    case ADD_JOB:
      let temp;
      const getLocal = JSON.parse(localStorage.getItem(nameLocal));
      if (getLocal) {
        temp = { ...state, jobs: [...getLocal, action.payload] };
      } else {
        temp = { ...state, jobs: [...state.jobs, action.payload] };
      }
      localStorage.setItem(nameLocal, JSON.stringify(temp.jobs));

      return temp;
    case DELET_JOB:
      // return { ...state, ...state.jobs.splice(action.payload, 1) };

      // const copyJobs = [...state.jobs];
      // copyJobs.splice(action.payload, 1);
      // let temp1 = { ...state, jobs: copyJobs }
      // localStorage.setItem(nameLocal, JSON.stringify(copyJobs));
      // return temp1;

      let newJobs2;
      if (state.jobs.length === 0) {
        const getProducts = JSON.parse(localStorage.getItem(nameLocal));
        getProducts.splice(action.payload, 1);
        newJobs2 = { ...state, jobs: [...getProducts] };
      } else {
        newJobs2 = { ...state, ...state.jobs.splice(action.payload, 1) };
      }
      localStorage.setItem(nameLocal, JSON.stringify(newJobs2.jobs));
      return newJobs2;
    default:
      throw new Error("Error invalid");
  }
};

function DemoReducer() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  console.log("state: ", state);

  const [products, setProducts] = useState(() => {
    const getProducts = JSON.parse(localStorage.getItem(nameLocal));
    return getProducts || [];
  });

  useEffect(() => {
    if (jobs.length > 0) {
      setProducts(jobs);
    }
  }, [jobs]);

  const jobRef = useRef();

  const handleAddJob = () => {
    if (jobRef.current.value.trim() === "") {
      return alert("Không được để trống!");
    }
    dispatch(addJob(job));
    dispatch(setJob(""));
    jobRef.current.focus();
  };

  const handleDeleteJob = (index) => {
    dispatch(deleteJob(index));
  };

  return (
    <div style={{ padding: "20px 40px" }}>
      <input
        type="text"
        style={{ padding: "6px 12px", fontSize: "20px" }}
        placeholder="Enter text!"
        ref={jobRef}
        value={job}
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button
        style={{ padding: "6px 12px", fontSize: "20px", cursor: "pointer" }}
        onClick={handleAddJob}
      >
        Thêm
      </button>
      <ul style={{ fontSize: "24px" }}>
        {products.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => handleDeleteJob(index)}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DemoReducer;
