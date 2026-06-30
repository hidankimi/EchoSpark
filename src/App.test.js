// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EchoSpark title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EchoSpark/i);
    expect(titleElement).toBeInTheDocument();
});
