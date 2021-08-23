import React from 'react';
import { Todo } from '@common/types/types';
import { TodoItem } from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    toggleTodo: any;
    deleteTodo: any;
    classes: any;
}

export class TodoList extends React.Component<TodoListProps> {
  render() {
    const {todos, toggleTodo, deleteTodo, classes} = this.props;
    return (
      <ul className="list">
          {todos?.map((todo, index) => (
              <li key={todo.id}>
                  <TodoItem 
                    index={index}
                    todo={todo} 
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    classes={classes}
                  />
              </li>
          ))}
      </ul>
    );
  }
}