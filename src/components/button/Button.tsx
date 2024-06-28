import styles from "./button.module.css";

interface ButtonProps {
    onClick?: () => void;
    text: string;
    className?: string;
    disabled?: boolean;
}
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
