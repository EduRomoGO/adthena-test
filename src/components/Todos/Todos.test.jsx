/* eslint-disable */
import React from 'react';
import { render, cleanup, wait, getByText } from '@testing-library/react';
import Todos from './Todos.jsx';
import axios from 'axios';
import '@testing-library/jest-dom';
import { USERS_URL, TODOS_URL } from '../../utils/constants.js'

jest.mock('axios');

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

const users = [{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
},
{
  "id": 2,
  "name": "Alice",
  "username": "liz",
  "email": "liz@april.biz",
  "phone": "1-770-756-8031 x56442",
  "website": "liz.com",
}];
const todos = [{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}];

describe('Todos', () => {
  it('should render correctly', async () => {
    axios.get
      .mockResolvedValueOnce({ data: users })
      .mockResolvedValueOnce({ data: todos });

    const { getByRole, queryByTestId, getByTestId } = render(<Todos />);

    expect(queryByTestId('loader')).toBeInTheDocument();

    expect(getByRole('heading').textContent).toBe('Todos App');

    expect(axios.get).toHaveBeenCalledTimes(2);
    expect(axios.get.mock.calls[0][0]).toBe(USERS_URL);
    expect(axios.get.mock.calls[1][0]).toBe(TODOS_URL);

    expect(getByRole('search')).toBeInTheDocument();

    await wait();
    expect(queryByTestId('loader')).toBeNull();
  });

  it('should render error state if an error occured - users', async () => {
    axios.get.mockRejectedValueOnce({ status: 500 });

    const { findByText } = render(<Todos />);

    expect(axios.get).toHaveBeenCalledTimes(2);

    expect(await findByText('Something went wrong...')).toBeInTheDocument();
  });

  it('should render error state if an error occured - todos', async () => {
    axios.get
      .mockResolvedValueOnce({ data: users })
      .mockRejectedValueOnce({ status: 500 });

    const { findByText } = render(<Todos />);

    expect(axios.get).toHaveBeenCalledTimes(2);

    expect(await findByText('Something went wrong...')).toBeInTheDocument();
  });
});
