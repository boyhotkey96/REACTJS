import { TODO_INPUT, TODOS } from "./constant";

export const todoInput = (payload) => ({ type: TODO_INPUT, payload })

export const setTodos = (payload) => ({ type: TODOS, payload })