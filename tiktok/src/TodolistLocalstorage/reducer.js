import { ADD_JOB, SET_JOB, DELETE_JOB } from "./constant";

export const initState = {
    job: "",
    jobs: [],
};

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

export default reducer;
