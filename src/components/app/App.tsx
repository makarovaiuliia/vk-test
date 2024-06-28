import { Routes, Route } from "react-router-dom";
import Page from "../page/Page";
import News from "../news/News";
import { useDispatch, useSelector } from "@/lib/store";
import { useEffect } from "react";
import { getNews, getSection } from "@/lib/newsSlice";

/**
 * App component that sets up the routing for the application and fetches initial news data.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
    const dispatch = useDispatch();
    const section = useSelector(getSection);

    useEffect(() => {
        const fetchInitialNews = async () => {
            await dispatch(getNews(section));
        };

        fetchInitialNews();
    }, [dispatch, section]);

    return (
        <Routes>
            <Route path="/" element={<Page />}>
                <Route index element={<News />} />
            </Route>
        </Routes>
    );
}

export default App;
