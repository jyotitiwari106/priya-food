import React, { useState } from "react";
import Modal from "react-modal";
import CombinedProductDetails from "./CombinedProductDetails"; // Import the combined component

const App = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="open-modal-btn">
        Show Product Details
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      />
      <button onClick={closeModal} className="close-modal-btn">
        X
      </button>
    </div>
  );
};
