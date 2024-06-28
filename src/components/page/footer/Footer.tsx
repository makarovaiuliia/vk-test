import styles from "./footer.module.css";

function Footer(): JSX.Element {
    return (
        <footer className={styles.footer}>
            <p>Made by Iuliia Makarova</p>
            <a href="https://github.com/makarovaiuliia">Github</a>
        </footer>
    );
}

export default Footer;
