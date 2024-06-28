import styles from "./button.module.css";

interface ButtonProps {
    onClick?: () => void;
    text: string;
    className?: string;
    disabled?: boolean;
}

/**
 * Button component that displays a styled button with optional click handler, class, and disabled state.
 *
 * @param {ButtonProps} props - The props for the Button component.
 * @param {() => void} [props.onClick] - Optional click handler function.
 * @param {string} props.text - The text to display on the button.
 * @param {string} [props.className] - Optional additional class name for the button.
 * @param {boolean} [props.disabled] - Optional disabled state for the button.
 * @returns {JSX.Element} The rendered Button component.
 */
function Button({
    onClick,
    text,
    className,
    disabled,
}: ButtonProps): JSX.Element {
    return (
        <button
            className={`${styles.button} ${className ? className : ""}`}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default Button;
