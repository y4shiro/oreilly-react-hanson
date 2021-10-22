import React from 'react';
import ReactDOM from 'react-dom';
import Star from './Star';
import '@testing-library/jest-dom';

test('renders a star', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Star />, div);
  expect(div.querySelector('svg')).toHaveAttribute('id', 'star');
});
