import React, { useEffect, useCallback, useState } from 'react';
/* eslint-disable */
import { useFetch } from './useFetch.js';
import { USERS_URL, TODOS_URL } from '../../utils/constants.js'

const Todos = () => {
  const [users, isLoadingUsers, isErrorUsers] = useFetch(USERS_URL);
  const [todos, isLoadingTodos, isErrorTodos] = useFetch(TODOS_URL);
  const [search, setSearch] = useState('');
  const [completeUsers, setCompleteUsers] = useState([]);
  const [userSelected, setUserSelected] = useState();
  useEffect(() => {
    const getCompleteUsers = (userList, todoList) => {
      return userList.map(({ id, username, email, website }) => {
        return { id, username, email, website, todos: todoList.filter(item => item.userId === id) };
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

  const renderUserSelected = useCallback(
    () => {
      if (search !== '') {
        if (userSelected && Object.keys(userSelected).length > 0) {
          const { id, username } = userSelected;

          return <div>
            <div>User:</div>
            <div key={id}>{username}</div>
          </div>
        } else {
          return <div>No user by {search} username was found</div>
        }
      }
    },
    [userSelected],
  );

  const handleChange = e => {
    setSearch(e.target.value);
  }


  const handleClick = e => {
    e.preventDefault();
    setUserSelected(completeUsers.find(item => item.username === search) || {});
  }

  const renderSearch = () => {
    return <form id="search" role="search">
      <label htmlFor="search-input">Search by username</label>
      <input onChange={handleChange} type="search" id="search-input" name="search" spellCheck="false" value={search} />
      <button onClick={handleClick} type="submit" >Submit</button>
    </form>
  }


  const isFetchingError = () => isErrorUsers || isErrorTodos;
  const isLoading = () => isLoadingUsers || isLoadingTodos;

  return <section>
    <header><h1>Todos App</h1></header>
    {renderSearch()}
    {isLoading()
      ? <div data-testid='loader'>Loading...</div>
      : isFetchingError() ? renderError() : renderUserSelected(userSelected)
    }
  </section>;
}

export default Todos;
