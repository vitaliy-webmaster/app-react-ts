import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../component';

describe('render Header component', () => {
  it('match THE MOVIE DB text', () => {
    render(<Header />);
  
    const linkElement = screen.getByText('THE MOVIE DB');
    expect(linkElement).toBeInTheDocument();
  });

  it('match Username text', () => {
    render(<Header />);
  
    const linkElement = screen.getByText('Username');
    expect(linkElement).toBeInTheDocument();
  });
})

