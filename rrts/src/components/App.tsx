import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../redux/actions';
import { StoreState } from '../redux/reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

const App = (props: AppProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (props.todos.length > 0) {
      setIsLoading(false);
    }
  }, [props.todos]);

  const onFetchButtonClicked = (): void => {
    props.fetchTodos();
    setIsLoading(true);
  };

  const onTodoClick = (id: number): void => {
    props.deleteTodo(id);
  };

  const renderList = (): JSX.Element[] => {
    return props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => onTodoClick(todo.id)}>
          {todo.title}
        </div>
      );
    });
  };

  const render = () => {
    console.log(props.todos);
    return (
      <div>
        <button onClick={onFetchButtonClicked}>Fetch Todos</button>
        {isLoading ? 'LOADING' : null}
        {renderList()}
      </div>
    );
  };

  return render();
};

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);
