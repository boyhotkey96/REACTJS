import { JOB, ADD_JOB, DELETE_JOB, EDIT_JOB } from './constant'

export const initState = {
    job: '',
    jobs: []
}

const Reducer = (state, action) => {
    switch (action.type) {
        case JOB:
            return { ...state, job: action.payload }
        case ADD_JOB:
            return { ...state, jobs: [...state.jobs, action.payload] }
        case DELETE_JOB:
            return { ...state, ...state.jobs.splice(action.payload, 1) }
        case EDIT_JOB:
            return { ...state, ...state.jobs.splice(action.count, 1, action.job) }
        default:
            throw new Error('Invalid action!')
    }
}

export default Reducer