/* eslint-disable */
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Todos = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const users = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(users);
    }

    fetchData();
  }, [])

  return <section>
    <header><h1>Todos App</h1></header>
  </section>;
}

export default Todos;
