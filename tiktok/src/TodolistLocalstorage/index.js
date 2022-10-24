import { useReducer, useRef, useEffect, useState } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, deleteJob } from './action'

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
