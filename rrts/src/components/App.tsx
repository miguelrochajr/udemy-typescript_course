import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../redux/actions';
import { StoreState } from '../redux/reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

const App = (props: AppProps): JSX.Element => {
  const [counter, setCounter] = useState(0);

  const onIncrement = (): void => {
    setCounter(counter + 1);
  };

  const onDecrement = (): void => {
    setCounter(counter - 1);
  };

  const render = () => {
    return (
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <h3>{counter}</h3>
      </div>
    );
  };

  return render();
};

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { fetchTodos })(App);
