import styles from "./header.module.css";

function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <h1>News Portal</h1>
        </header>
    );
}

export default Header;
