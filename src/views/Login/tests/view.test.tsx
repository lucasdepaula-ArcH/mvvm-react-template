import LoginView from '../view';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

test('LoginView renders correctly', () => {
    const { getByText } = render(<LoginView />);

    expect(getByText(/Pagina de login/i)).toBeVisible();

    expect(getByText(/email/i)).toBeVisible();

    expect(getByText(/Entrar/i)).toBeVisible();
});