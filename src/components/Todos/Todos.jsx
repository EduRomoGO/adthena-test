/* eslint-disable */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Todos = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {

        setIsLoading(true);
        const users = await axios.get('https://jsonplaceholder.typicode.com/users');
        setIsLoading(false);
        setUsers(users);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    }

    fetchData();
  }, []);

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
