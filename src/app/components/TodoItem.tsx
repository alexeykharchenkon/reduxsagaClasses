import React from 'react';
import { Todo } from '@common/types/types';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

interface TodoItemProps {
    todo: Todo;
    toggleTodo: any;
    deleteTodo: any;
    index: number;
    classes: any
}

export class TodoItem extends React.Component<TodoItemProps> {
  render() {
    const {todo, index, toggleTodo, deleteTodo, classes} = this.props;
    return (
      <Card className={classes.todoItem}>
          <div style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
            {index + 1}) {todo.title}
          </div>
          <div>
            <Checkbox
              checked={ todo.completed }
              onChange={() => toggleTodo(todo.id)}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <IconButton 
              aria-label="delete"
              onClick={() => deleteTodo(todo.id)}
            >
              <DeleteIcon fontSize="medium" />
            </IconButton>
          </div>
      </Card>
    );
  }
}

