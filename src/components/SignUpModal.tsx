import { FC, ReactNode, useState } from "react";
import Modal from "react-modal";

// type ModalType = {
//   isOpen: boolean;
//   closeModal: () => void;
//   children: ReactNode;
// };

export const SignUpModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Hello Modal</h2>
        <p>Modal content goes here.</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};
