/* eslint-disable */
import React from 'react';
import { render, cleanup, wait } from '@testing-library/react';
import Todos from './Todos.jsx';
import axios from 'axios';
import '@testing-library/jest-dom';

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
    // const loading = queryByTestId('loader');

    expect(queryByTestId('loader')).toBeInTheDocument();

    expect(getByRole('heading').textContent).toBe('Todos App');


    expect(axios.get).toHaveBeenCalledTimes(1);

    // await waitForElement(() => getByTestId('loader'));
    // expect(getByTestId('loader')).toBeInTheDocument();

    await wait();
    expect(queryByTestId('loader')).toBeNull();
  });
});
