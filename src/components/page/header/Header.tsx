import styles from "./header.module.css";

/**
 * Header component that displays the title of the news portal.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <h1>News Portal</h1>
        </header>
    );
}

export default Header;
