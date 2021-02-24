import React from 'react';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  zIndex: 1000
};

export const AddMovieModal = ({ open, children, onClose }) => {
  if (!open) return null;
    return (
      <div style={MODAL_STYLES}>
        <button onClick={onClose}> Close Modal </button>
        {children}
      </div>
    ); 
};