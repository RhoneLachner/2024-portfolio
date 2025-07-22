import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ContactForm from '../../app/components/ContactForm/ContactForm';

// Mock fetch for API calls
global.fetch = jest.fn();

describe('ContactForm', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockReset();
  });

  it('renders email input and message textarea', () => {
    render(<ContactForm />);

    expect(
      screen.getByPlaceholderText('your email address')
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('send me a message')
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  it('shows validation message when submitting empty form', async () => {
    render(<ContactForm />);

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /send/i }));
    });

    expect(
      await screen.findByText(
        'Please fill in both the email and message fields.'
      )
    ).toBeInTheDocument();
  });

  it('clears validation message when filling both fields', async () => {
    render(<ContactForm />);

    // Submit empty form to show validation message
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /send/i }));
    });
    expect(
      await screen.findByText(
        'Please fill in both the email and message fields.'
      )
    ).toBeInTheDocument();

    // Fill in both fields
    await act(async () => {
      await userEvent.type(
        screen.getByPlaceholderText('your email address'),
        'test@example.com'
      );
      await userEvent.type(
        screen.getByPlaceholderText('send me a message'),
        'Test message'
      );
    });

    // Validation message should disappear
    await waitFor(() => {
      expect(
        screen.queryByText('Please fill in both the email and message fields.')
      ).not.toBeInTheDocument();
    });
  });

  it('handles successful form submission', async () => {
    // Mock successful API response
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Message sent successfully!' }),
    });

    render(<ContactForm />);

    // Fill form
    await act(async () => {
      await userEvent.type(
        screen.getByPlaceholderText('your email address'),
        'test@example.com'
      );
      await userEvent.type(
        screen.getByPlaceholderText('send me a message'),
        'Test message'
      );
      fireEvent.click(screen.getByRole('button', { name: /send/i }));
    });

    // Check success message
    expect(
      await screen.findByText('Message sent successfully!')
    ).toBeInTheDocument();

    // Verify API call
    expect(global.fetch).toHaveBeenCalledWith('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',
        message: 'Test message',
      }),
    });
  });

  it('handles API error during submission', async () => {
    // Mock API error response
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Failed to send email' }),
    });

    render(<ContactForm />);

    // Fill form
    await act(async () => {
      await userEvent.type(
        screen.getByPlaceholderText('your email address'),
        'test@example.com'
      );
      await userEvent.type(
        screen.getByPlaceholderText('send me a message'),
        'Test message'
      );
      fireEvent.click(screen.getByRole('button', { name: /send/i }));
    });

    // Check error message
    expect(
      await screen.findByText('Error: Failed to send email')
    ).toBeInTheDocument();
  });

  it('handles network error during submission', async () => {
    // Mock network error
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error('Network error')
    );

    render(<ContactForm />);

    // Fill form
    await act(async () => {
      await userEvent.type(
        screen.getByPlaceholderText('your email address'),
        'test@example.com'
      );
      await userEvent.type(
        screen.getByPlaceholderText('send me a message'),
        'Test message'
      );
      fireEvent.click(screen.getByRole('button', { name: /send/i }));
    });

    // Check error message
    expect(
      await screen.findByText('Error sending message. Please try again.')
    ).toBeInTheDocument();
  });
});
