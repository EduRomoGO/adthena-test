import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="topnav">
    <NavLink
      activeClassName="active"
      exact
      to="/"
    >
      Task One
    </NavLink>
    <NavLink
      activeClassName="active"
      to="/task-two"
    >
      Task Two
    </NavLink>
    <NavLink
      activeClassName="active"
      to="/todos"
    >
      Todos
    </NavLink>
  </nav>
);

export default Nav;
