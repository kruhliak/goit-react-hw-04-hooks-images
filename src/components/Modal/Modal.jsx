import { useEffect } from 'react';
import { Overlay, ModalWrapper } from './Modal.styles';

export default function Modal({ onClose, onOpen }) {
  useEffect(() => {
    window.addEventListener('keydown', onImagesClick);
    return () => {
      window.removeEventListener('keydown', onImagesClick);
    };
  });

  const onImagesClick = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalWrapper>
        <img src={onOpen.largeImageURL} alt={onOpen.tags} />
      </ModalWrapper>
    </Overlay>
  );
}


