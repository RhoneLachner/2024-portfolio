import React, { createContext, useState, useContext } from 'react';

interface ModalContextType {
  openModal: string | null; // Allow it to be either a string or null
  setOpenModal: (modalName: string | null) => void; // Ensure the setter can accept both string and null
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
