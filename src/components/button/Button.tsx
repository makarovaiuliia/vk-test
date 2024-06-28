import styles from "./button.module.css";

interface ButtonProps {
    onClick?: () => void;
    text: string;
    className?: string;
}
function Button({ onClick, text, className }: ButtonProps): JSX.Element {
    return (
        <button
            className={`${styles.button} ${className ? className : ""}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;
