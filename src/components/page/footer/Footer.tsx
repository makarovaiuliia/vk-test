import styles from "./footer.module.css";

/**
 * Footer component that displays the creator's name and a link to their GitHub profile.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
function Footer(): JSX.Element {
    return (
        <footer className={styles.footer}>
            <p>Made by Iuliia Makarova</p>
            <a href="https://github.com/makarovaiuliia">Github</a>
        </footer>
    );
}

export default Footer;
