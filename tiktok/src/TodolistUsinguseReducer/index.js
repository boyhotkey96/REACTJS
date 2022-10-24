import { useReducer, useRef } from "react";

// Reducer
// 1. Init state
const initState = {
    job: "",
    jobs: [],
};

// 2. Action
const SET_JOB = "job";
const ADD_JOB = "jobs";
const DELETE_JOB = "delete";

const setJob = (payload) => {
    return { type: SET_JOB, payload };
};

const addJob = (payload) => {
    return { type: ADD_JOB, payload };
};

const deleteJob = (payload) => {
    return { type: DELETE_JOB, payload };
};

// 3. Reducer
const reducer = (state, action) => {
    // console.log("state: ", state);
    // console.log("action: ", action);

    let newState;
    switch (action.type) {
        case SET_JOB:
            newState = { ...state, job: action.payload };
            break;
        case ADD_JOB:
            newState = { ...state, jobs: [...state.jobs, action.payload] };
            break;
        case DELETE_JOB:
            // const newJobs = [...state.jobs];
            // newJobs.splice(action.payload, 1);
            newState = { ...state, ...state.jobs.splice(action.payload, 1) };
            break;
        default:
            throw new Error("Error Invalid");
    }

    console.log("newState: ", newState);
    return newState;
};

// 4. Dispatch

function TodolistusingReducer() {
    const [state, dispatch] = useReducer(reducer, initState);
    const { job, jobs } = state;

    const inputRef = useRef();

    const handleAdd = () => {
        if (inputRef.current.value.trim() === '') return alert('Enter text!');
        dispatch(addJob(job));
        dispatch(setJob(""));
        inputRef.current.focus();
    };

    const handleDelete = (index) => {
        dispatch(deleteJob(index));
    };

    return (
        <div style={{ padding: "40px 30px" }}>
            <input
                ref={inputRef}
                style={{ padding: "6px 12px" }}
                value={job}
                onChange={(e) => dispatch(setJob(e.target.value))}
            />
            <button
                style={{ padding: "6px 12px", cursor: "pointer" }}
                onClick={handleAdd}
            >
                Add
            </button>
            <ul>
                {jobs.map((item, index) => (
                    <li key={index}>
                        {item} <span onClick={handleDelete.bind(null, index)}> x</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodolistusingReducer;
