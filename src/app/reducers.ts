import { combineReducers } from 'redux';

import {
  Action,
  Todo,
  VisibilityFilter,
  VisibilityFilters,

  // Actions
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from './actions';

const { SHOW_ALL } = VisibilityFilters;

const todos = (state: Array<Todo> = [ ], action: Action<any>) => {
  switch(action.type) {

    case ADD_TODO: return [
      ...state,
      action.payload
    ];

    case TOGGLE_TODO: return state.map((todo, index) => {
      if (index === action.payload.index) {
        return Object.assign({ }, todo, { completed: !todo.completed });
      }
      return todo;
    });

    default: return state;
  }
}

const visibilityFilter = (state: VisibilityFilter = SHOW_ALL, action: Action<any>
) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;

    default: return state;
  }
}

export const todoApp = combineReducers({ todos, visibilityFilter })
