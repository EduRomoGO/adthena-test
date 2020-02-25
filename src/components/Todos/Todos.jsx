/* eslint-disable */
import React from 'react';
import { useFetch } from './useFetch.js';
import { USERS_URL, TODOS_URL } from '../../utils/constants.js'

const Todos = () => {
  const [users, isLoadingUsers, isErrorUsers] = useFetch(USERS_URL);
  const [todos, isLoadingTodos, isErrorTodos] = useFetch(TODOS_URL);
  const renderError = () => {
    return <div>Something went wrong...</div>;
  }

  const isFetchingError = () => isErrorUsers || isErrorTodos;
  const isLoading = () => isLoadingUsers || isLoadingTodos;

  return <section>
    <header><h1>Todos App</h1></header>
    {isLoading()
      ? <div data-testid='loader'>Loading...</div>
      : isFetchingError() ? renderError() : ''
    }
  </section>;
}

export default Todos;
