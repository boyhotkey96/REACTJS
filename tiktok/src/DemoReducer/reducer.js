import { JOB, ADD_JOB, DELETE_JOB } from './constant'
import { nameLocal } from './constant'

export const initState = {
	job: "",
	jobs: [],
};

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
		case DELETE_JOB:
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

export default reducer