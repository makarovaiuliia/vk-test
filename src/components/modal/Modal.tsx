// Modal.js
import React from "react";
import styles from "./modal.module.css";

interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ show, onClose, children }: ModalProps) => {
    if (!show) return null;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
                <button onClick={onClose} className={styles.closeButton}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
