import {describe, test, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import Invitations from  './Invitations.tsx'

describe('Init', () => {
  test('Invitations page', () => {
    render( <Invitations/>);
    expect(screen.getByText(/Todas/i)).toBeDefined()
  })
});


