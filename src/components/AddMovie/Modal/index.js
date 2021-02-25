import React from 'react';
import { I18N_KEYS, TRANSLATIONS, I18N_LANGUAGES } from "../../../core/I18Y";

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
        <button onClick={onClose}>{TRANSLATIONS[I18N_LANGUAGES.EN][I18N_KEYS.CLOSE_MODAL]}</button>
        {children}
      </div>
    ); 
};