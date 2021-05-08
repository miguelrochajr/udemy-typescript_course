// import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../redux/actions';
import { StoreState } from '../redux/reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

const App = (props: AppProps): JSX.Element => {
  const onFetchButtonClicked = (): void => {
    props.fetchTodos();
  };

  const renderList = (): JSX.Element[] => {
    return props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  };

  const render = () => {
    console.log(props.todos);
    return (
      <div>
        <button onClick={onFetchButtonClicked}>Fetch Todos</button>
        {renderList()}
      </div>
    );
  };

  return render();
};

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { fetchTodos })(App);
