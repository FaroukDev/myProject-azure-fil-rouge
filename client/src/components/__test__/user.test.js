import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { act } from "react-dom/test-utils";
import User from '../user/User.js'


test('should render User component', async() => {
    render(<User/>, {wrapper: MemoryRouter});
    const UserElement = screen.getByTestId('User-1');
    expect(UserElement).toBeInTheDocument();

    await act( async () => {
        expect(UserElement).toBeInTheDocument();
       });

   
})