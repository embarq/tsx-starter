import * as React from 'react';
import { connect } from 'react-redux';
import { EventHandler, ReactChildren } from 'react';
import { Todo } from '../actions';

interface TodoListItemProps {
  todo: Todo;
  onClick: () => any;
}

export const TodoListItem = ({ todo: { text, completed }, onClick }: TodoListItemProps) => (
  <li
    onClick={ onClick }
    style={{ textDecoration: completed ? 'line-through' : 'none'}}>
    { text }
  </li>
);

interface TodoListProps {
  todos: Array<Todo>;
  onTodoClick: (id: string) => any;
}

export const TodoList = ({ todos, onTodoClick }: TodoListProps) => (
  <ul>
    {
      todos.map(todo =>
        <TodoListItem
          key={ todo.id }
          todo={ todo }
          onClick={ () => onTodoClick(todo.id) } /> )
    }
  </ul>
);

interface LinkProps {
  active: boolean;
  children: ReactChildren;
  onClick: Function;
}

export const Link = ({ active, children, onClick }: LinkProps) => {
  if (active) {
    return <span>{ children }</span>
  }

  const handleClick: EventHandler<any> = e => {
    e.preventDefault();
    return onClick();
  }

  return (
    <a href="javascript:void(0);" onClick={handleClick}>
      { children }
    </a>
  );
}

export const Footer = () => (
  <p>
    <span>Show:</span>
    <span>{ '' }</span>
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </p>
)
