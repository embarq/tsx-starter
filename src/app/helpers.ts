import { Todo, VisibilityFilter, VisibilityFilters as VF, State } from './actions';

const getVisibleTodos = (todos: Array<Todo>, filter: VisibilityFilter) => {
  switch (filter) {
    case VF.SHOW_COMPLETED: return todos.filter(t => t.completed);
    case VF.SHOW_ACTIVE: return todos.filter(t => !t.completed);
    case VF.SHOW_ALL:
    default: return todos;
  }
}

export const mapStateToProps = (state: State) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});
