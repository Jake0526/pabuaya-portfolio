import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom'; // Import necessary components
import HomeComponent from '../../src/component/home/HomeComponent'; // Import your component

describe('Routing', () => {
  it('should render HomeContent at the root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /Welcome to My Website/i })).toBeInTheDocument()
  });
})