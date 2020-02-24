/* eslint-disable */
import React from 'react';
import { render, cleanup, wait, getByText } from '@testing-library/react';
import Todos from './Todos.jsx';
import axios from 'axios';
import '@testing-library/jest-dom';
import { USERS_URL } from '../../utils/constants.js'

jest.mock('axios');

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});


describe('Todos', () => {
  it('should render correctly', async () => {
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

    axios.get.mockResolvedValueOnce({ data: users});

    const { getByRole, queryByTestId, getByTestId } = render(<Todos />);

    expect(queryByTestId('loader')).toBeInTheDocument();

    expect(getByRole('heading').textContent).toBe('Todos App');

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(USERS_URL);

    await wait();
    expect(queryByTestId('loader')).toBeNull();
  });

  it('should render error state if an error occured', async () => {
    axios.get.mockRejectedValueOnce({ status: 500 });

    const { findByText } = render(<Todos />);

    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(await findByText('Something went wrong...')).toBeInTheDocument();
  });
});
