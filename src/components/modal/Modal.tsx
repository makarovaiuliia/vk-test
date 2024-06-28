// Modal.js
import React from "react";
import styles from "./modal.module.css";

interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

/**
 * Modal component that displays its children in a modal overlay.
 *
 * @param {ModalProps} props - The props for the Modal component.
 * @returns {JSX.Element | null} The rendered Modal component, or null if not showing.
 */
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
