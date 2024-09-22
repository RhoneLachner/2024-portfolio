/**
 * This context file provides state management for modals.
 * It defines an `openModal` state to track the currently active modal,
 * and a `setOpenModal` function to update which modal is open.
 * If no modal is open, the state is set to null.
 * The `ModalProvider` wraps components with this context to manage modal state.
 */

import React, { createContext, useState, useContext } from 'react';

interface ModalContextType {
  openModal: string | null;
  setOpenModal: (modalName: string | null) => void; 
}

const ModalContext = createContext<ModalContextType>({
  openModal: null,
  setOpenModal: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
