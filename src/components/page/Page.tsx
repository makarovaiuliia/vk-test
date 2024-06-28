import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";

import styles from "./page.module.css";

/**
 * Page component that serves as a layout component with a header, footer, and main content area for children.
 *
 * @returns {JSX.Element} The rendered Page component.
 */
function Page(): JSX.Element {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Page;
