/* eslint-disable */
import React from 'react';
import { useFetch } from './useFetch.js';
import { USERS_URL } from '../../utils/constants.js'

const Todos = () => {
  const [users, isLoading, isError] = useFetch(USERS_URL);
  const renderError = () => {
    return <div>Something went wrong...</div>;
  }

  return <section>
    <header><h1>Todos App</h1></header>
    {isLoading
      ? <div data-testid='loader'>Loading...</div>
      : isError ? renderError() : ''
    }
  </section>;
}

export default Todos;
