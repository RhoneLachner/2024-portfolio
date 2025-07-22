import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ModalProvider, useModalContext } from '../../app/context/ModalContext';

// Test component that uses the modal context
const TestComponent = () => {
  const { openModal, setOpenModal } = useModalContext();
  return (
    <div>
      <div data-testid="modal-state">{openModal || 'no modal'}</div>
      <button onClick={() => setOpenModal('test-modal')}>Open Modal</button>
      <button onClick={() => setOpenModal(null)}>Close Modal</button>
    </div>
  );
};

describe('ModalContext', () => {
  it('provides initial state with no modal open', () => {
    render(
      <ModalProvider>
        <TestComponent />
      </ModalProvider>
    );

    expect(screen.getByTestId('modal-state')).toHaveTextContent('no modal');
  });

  it('opens a modal when setOpenModal is called', () => {
    render(
      <ModalProvider>
        <TestComponent />
      </ModalProvider>
    );

    fireEvent.click(screen.getByText('Open Modal'));
    expect(screen.getByTestId('modal-state')).toHaveTextContent('test-modal');
  });

  it('closes the modal when setOpenModal(null) is called', () => {
    render(
      <ModalProvider>
        <TestComponent />
      </ModalProvider>
    );

    // Open modal
    fireEvent.click(screen.getByText('Open Modal'));
    expect(screen.getByTestId('modal-state')).toHaveTextContent('test-modal');

    // Close modal
    fireEvent.click(screen.getByText('Close Modal'));
    expect(screen.getByTestId('modal-state')).toHaveTextContent('no modal');
  });

  it('switches between different modals', () => {
    const TestModalSwitch = () => {
      const { openModal, setOpenModal } = useModalContext();
      return (
        <div>
          <div data-testid="modal-state">{openModal || 'no modal'}</div>
          <button onClick={() => setOpenModal('modal1')}>Open Modal 1</button>
          <button onClick={() => setOpenModal('modal2')}>Open Modal 2</button>
        </div>
      );
    };

    render(
      <ModalProvider>
        <TestModalSwitch />
      </ModalProvider>
    );

    // Open first modal
    fireEvent.click(screen.getByText('Open Modal 1'));
    expect(screen.getByTestId('modal-state')).toHaveTextContent('modal1');

    // Switch to second modal
    fireEvent.click(screen.getByText('Open Modal 2'));
    expect(screen.getByTestId('modal-state')).toHaveTextContent('modal2');
  });

  it('maintains modal state across multiple consumers', () => {
    const SecondConsumer = () => {
      const { openModal } = useModalContext();
      return <div data-testid="second-consumer">{openModal || 'no modal'}</div>;
    };

    render(
      <ModalProvider>
        <TestComponent />
        <SecondConsumer />
      </ModalProvider>
    );

    // Open modal
    fireEvent.click(screen.getByText('Open Modal'));

    // Check both consumers show the same state
    expect(screen.getByTestId('modal-state')).toHaveTextContent('test-modal');
    expect(screen.getByTestId('second-consumer')).toHaveTextContent(
      'test-modal'
    );
  });
});
