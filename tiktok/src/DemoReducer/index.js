import { useEffect, useReducer, useRef, useState } from "react";
import reducer, { initState } from './reducer'
import { setJob, addJob, deleteJob } from './action'
import { nameLocal } from './constant'
import logger from './logger'

function DemoReducer() {
    const [state, dispatch] = useReducer(logger(reducer), initState);
    const { job, jobs } = state;
    console.log("state: ", state);

    const [products, setProducts] = useState(() => {
        const getProducts = JSON.parse(localStorage.getItem(nameLocal));
        return getProducts || jobs;
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
