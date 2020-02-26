import React, { useEffect, useState } from 'react';
/* eslint-disable */
import { useFetch } from './useFetch.js';
import { USERS_URL, TODOS_URL } from '../../utils/constants.js'

const Todos = () => {
  const [users, isLoadingUsers, isErrorUsers] = useFetch(USERS_URL);
  const [todos, isLoadingTodos, isErrorTodos] = useFetch(TODOS_URL);
  const [completeUsers, setCompleteUsers] = useState([]);
  useEffect(() => {
    const getCompleteUsers = (userList, todoList) => {
      return userList.map(({id, username, email, website}) => {
        return {id, username, email, website, todos: todoList.filter(item => item.userId === id)};
      });
    }

    const convertData = (users, todos) => {
      if (Object.keys(users).length > 0 && Object.keys(todos).length) {
        const userList = users.data;
        const todoList = todos.data;

        setCompleteUsers(getCompleteUsers(userList, todoList));
      }
    }

    convertData(users, todos);
  }, [users, todos]);
  const renderError = () => {
    return <div>Something went wrong...</div>;
  }

  const renderUsers = (users) => {
    return users ? users.map(({id, username, email, website}) => {
      return <div key={id}>{username}</div>;
    }) : '';
  }

  const isFetchingError = () => isErrorUsers || isErrorTodos;
  const isLoading = () => isLoadingUsers || isLoadingTodos;

  return <section>
    <header><h1>Todos App</h1></header>
    {isLoading()
      ? <div data-testid='loader'>Loading...</div>
      : isFetchingError() ? renderError() : renderUsers(completeUsers)
    }
  </section>;
}

export default Todos;
