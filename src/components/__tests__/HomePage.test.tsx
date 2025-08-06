import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import HomePage from '../HomePage';

const HomePageRenderer = () => (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
);

describe('Home Page', () => {
  it('renders the product list', () => {
    render(<HomePageRenderer />);

    expect(screen.getByText('Product List')).toBeInTheDocument();
    expect(screen.getByText('b0006se5bq')).toBeInTheDocument();

    const duplicateProducts = screen.getAllByText('b00021xhzw');
    expect(duplicateProducts).toHaveLength(2);
  });

  it('shortens long product descriptions', () => {
    render(<HomePageRenderer />);

    const descriptions = screen.getAllByText(/\.\.\./);
    expect(descriptions.length).toBeGreaterThan(0);
  });
});
