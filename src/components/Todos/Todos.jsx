/* eslint-disable */
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Todos = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const users = await axios.get('https://jsonplaceholder.typicode.com/users');
      setIsLoading(false);
      setUsers(users);
    }

    fetchData();
  }, [])

  return <section>
    <header><h1>Todos App</h1></header>
    { isLoading ? <div data-testid='loader'>Loading...</div> : ''}
  </section>;
}

export default Todos;
