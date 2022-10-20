import { useReducer, useRef, useEffect, useState } from "react";

// Init state
const initState = {
  job: "",
  jobs: [],
};

const SET_JOB = "JOB";
const ADD_JOB = "ADD_JOB";
const DELETE_JOB = "DELETE_JOB";

// Action
const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

// Reducer
const reducer = (state, action) => {
  let getKeyLocal = "products-plus";
  let newJobs;
  switch (action.type) {
    case SET_JOB:
      newJobs = { ...state, job: action.payload };
      break;
    case ADD_JOB:
      const getProducts = JSON.parse(localStorage.getItem(getKeyLocal));
      if (getProducts) {
        newJobs = { ...state, jobs: [...getProducts, action.payload] };
      } else {
        newJobs = { ...state, jobs: [...state.jobs, action.payload] };
      }
      // Localstorage setItem
      localStorage.setItem(getKeyLocal, JSON.stringify(newJobs.jobs));
      break;
    case DELETE_JOB:
      // Solution 1
      // const copyState = {...state}
      // copyState.jobs.splice(action.payload, 1)
      // console.log(copyState)
      // newJobs = {...copyState}

      // Solution 2
      // const copyJobs = [...state.jobs]
      // copyJobs.splice(action.payload, 1)
      // console.log(copyJobs)
      // newJobs = {...state, jobs: [...copyJobs]}

      // Solution 3
      if (state.jobs.length === 0) {
        const getProducts = JSON.parse(localStorage.getItem(getKeyLocal));
        getProducts.splice(action.payload, 1);
        newJobs = { ...state, jobs: [...getProducts] };
      } else {
        newJobs = { ...state, ...state.jobs.splice(action.payload, 1) };
      }

      localStorage.setItem(getKeyLocal, JSON.stringify(newJobs.jobs));
      break;
    default:
      throw new Error("Error Invalid!");
  }

  return newJobs;
};

function TodolistUsinguseReducerDemo() {
  const keyLocalStorage = "products-plus";
  const jobRef = useRef();
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  // init sate Product && get products from localstorage
  const [products, setProducts] = useState(() => {
    const getProducts = JSON.parse(localStorage.getItem(keyLocalStorage));
    return getProducts ?? [];
  });

  useEffect(() => {
    if (jobs.length > 0) {
      // console.log("jobs > 0: ", jobs);
      setProducts(jobs);
    }
  }, [jobs]);

  const handleAdd = () => {
    if (jobRef.current.value.trim().length === 0) {
      return alert("Enter text!");
    }
    dispatch(addJob(job));
    dispatch(setJob(""));
    jobRef.current.focus();
  };

  const handleDelete = (index) => {
    dispatch(deleteJob(index));
  };

  return (
    <div style={{ padding: "20px 40px" }}>
      <input
        type="text"
        style={{ padding: "6px 12px", fontSize: "20px" }}
        placeholder="Enter text"
        ref={jobRef}
        value={job}
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button
        style={{ padding: "6px 12px", fontSize: "20px", cursor: "pointer" }}
        onClick={handleAdd}
      >
        Add
      </button>
      <ul style={{ fontSize: "22px" }}>
        {products.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button
              style={{ color: "blue", fontWeight: "bold", cursor: "pointer" }}
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodolistUsinguseReducerDemo;
