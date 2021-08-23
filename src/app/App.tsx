import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import { Todo } from '@common/types/types';
import { AddTodo } from '@components/AddTodo';
import { TodoList } from '@components/TodoList';
import { useStyles } from '@styles/material';
import Typography from '@material-ui/core/Typography';
import { TodosFilter } from '@components/TodosFilter';
import { mapStateToProps, mapDispatchToProps } from '@services/initAppProps';
import '@styles/main.css';
import { Loader } from './components/Loader';


interface AppProps {
    todos: Todo[];
    filter: any;
    todosActions: any;
    filterActions: any;
    isLoading: boolean;
}

const App = ({todos, todosActions, filterActions, filter, isLoading} : AppProps) => {
  const classes = useStyles();
  const { addTodo, toggleTodo, deleteTodo, loadTodos, deleteAllTodos } = todosActions;
  const { setFilter } = filterActions;

  useEffect(() => { 
    setTimeout(() => { loadTodos(todos.length, 7)  }, 2000);
  }, [loadTodos]);

  return (
    <div className="main">
      <Card className={classes.todoList}>
        <Typography variant="h4">Todo List</Typography>
        <TodosFilter 
          setFilter={setFilter} 
          filter={filter} 
          classes={classes}
          />
        {isLoading && <Loader />}
        <TodoList 
          todos={todos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo}
          classes={classes}
        />
      </Card>
      <Card className={classes.addTodo}>
          <AddTodo 
            addTodo={addTodo} 
            loadTodos={loadTodos}
            deleteAllTodos={deleteAllTodos}
            todosCount={todos.length}
          />
      </Card>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)