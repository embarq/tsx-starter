export interface Action<T> {
  type: string;
  payload: T;
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface State {
  todos: Array<Todo>;
  visibilityFilter: VisibilityFilter;
}

export type VisibilityFilter
  = '[VF] Show All'
  | '[VF] Show Completed'
  | '[VF] Show Active';

export const VisibilityFilters = {
  SHOW_ALL: '[VF] Show All',
  SHOW_COMPLETED: '[VF] Show Completed',
  SHOW_ACTIVE: '[VF] Show Active'
}

export const ADD_TODO = '[todo] Add';
export interface ADD_TODO extends Todo { }

export const TOGGLE_TODO = '[todo] Toggle';
export interface TOGGLE_TODO {
  index: number;
}

export const SET_VISIBILITY_FILTER = '[todo] Set Visibility Filter';
export interface SET_VISIBILITY_FILTER {
  filter: VisibilityFilter
}

export const getRadomString = () => new Array(16).fill(null).reduce(accum => accum + String.fromCharCode(Math.floor(Math.random() * 90) - 10), '');

export const addTodo = (text: string, id: string): Action<ADD_TODO> => ({
  type: ADD_TODO,
  payload: { completed: false, id, text }
});

export const toggleTodo = (index: number) => ({
  type: TOGGLE_TODO,
  payload: { index }
});

export const setVisibilityFilter = (filter: VisibilityFilter): Action<SET_VISIBILITY_FILTER> => ({
  type: SET_VISIBILITY_FILTER,
  payload: { filter }
});
