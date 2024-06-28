import { Outlet } from "react-router-dom";

import Footer from "../footer/footer";
import Header from "../header/header";

import styles from "page.madule.css";

function Page(): JSX.Element {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Page;
