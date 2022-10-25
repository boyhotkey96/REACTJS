import { useContext, useRef } from "react";
import TodolistContext from "./store/TodolistContext";
import { setJob, addJob, deleteJob, editJob } from "./store/action";

let count = 0
function TodolistContextReducer() {
    const [state, dispatch] = useContext(TodolistContext);

    const inputRef = useRef();
    const addRef = useRef()
    const editRef = useRef()

    const { job, jobs } = state;

    // Hanle when click button Add
    const handleAdd = () => {
        if (inputRef.current.value.trim() === '') {
            alert('Vui lòng nhập job!')
            inputRef.current.focus();
            return
        }
        dispatch(addJob(job));
        dispatch(setJob(""));
        inputRef.current.focus();
    };

    // Handle when click button Delete
    const handleDelete = (index) => {
        // Check inputJob when value is available
        if (inputRef.current.value.trim().length > 0) {
            alert('Bạn đang cập nhật lại job nên hiện không thể xóa!')
            inputRef.current.focus()
        } else {
            dispatch(deleteJob(index));
        }

        // hanle when edit & delete
        // if (count === index) {
        //     showButtonAdd()
        //     inputRef.current.focus()
        // } else {
        //     console.log(count)
        //     inputRef.current.value = jobs[count]
        //     inputRef.current.focus()
        // }
    };

    // Handle when click button Edit
    const handleEdit = (index) => {
        hideButtonAdd()
        inputRef.current.value = jobs[index]
        inputRef.current.focus()
        count = index
    }

    // Handle when click button Update
    const handleUpdate = () => {
        // Check inputJob when value is empty
        if (inputRef.current.value.trim() === '') {
            alert('Job bạn edit không được để trống!')
            inputRef.current.value = jobs[count]
            inputRef.current.focus()
            return
        }
        showButtonAdd()
        dispatch(editJob({ count, job }))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    // Hide button add & show button Edit
    const hideButtonAdd = () => {
        addRef.current.style.display = "none"
        editRef.current.style.display = "inline-block"
    }

    // Show button Add & hide button Edit
    const showButtonAdd = () => {
        addRef.current.style.display = "inline-block"
        editRef.current.style.display = "none"
    }

    return (
        <div style={{ padding: "20px 40px", fontSize: "20px" }}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter text..."
                value={job}
                onChange={(e) => dispatch(setJob(e.target.value))}
            />
            <button ref={addRef} onClick={handleAdd}>Add</button>
            <button ref={editRef} style={{ display: "none" }} onClick={handleUpdate}>Update</button>
            <ul>
                {jobs.map((item, index) => (
                    <li key={index}>
                        {item}{" "}
                        <button
                            style={{ color: "blue", cursor: "pointer" }}
                            onClick={handleEdit.bind(null, index)}
                        >
                            Edit
                        </button>
                        <button
                            style={{ color: "blue", cursor: "pointer" }}
                            onClick={handleDelete.bind(null, index)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodolistContextReducer;
