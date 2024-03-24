import {describe, test, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import App from './App.tsx'

describe('Init', () => {
  test('Load page', () => {
    render(<App/>);
    expect(screen.findByText(/Vite + React/i)).toBeDefined();
  })
});