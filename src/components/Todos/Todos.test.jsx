import React from 'react';
import { render } from '@testing-library/react';
import Todos from './Todos.jsx';


describe('Todos', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Todos />);

    expect(getByRole('heading').textContent).toBe('Todos App');
  });
});
