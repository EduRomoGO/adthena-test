/* eslint-disable */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Todos from './Todos.jsx';
import axios from 'axios';

jest.mock('axios');

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});


describe('Todos', () => {
  it('should render correctly', () => {
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

    axios.get.mockResolvedValueOnce(users);

    const { getByRole } = render(<Todos />);

    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(getByRole('heading').textContent).toBe('Todos App');
  });
});
