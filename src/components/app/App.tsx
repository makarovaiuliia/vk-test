import { Routes, Route } from "react-router-dom";
import Page from "../page/Page";
import News from "../news/News";
import { useDispatch, useSelector } from "@/lib/store";
import { useEffect, useState } from "react";
import {
    getNews,
    getNewsByIds,
    getNewsIds,
    getPage,
    getSection,
} from "@/lib/newsSlice";

function App() {
    const dispatch = useDispatch();
    const newsIds = useSelector(getNewsIds);
    const page = useSelector(getPage);
    const section = useSelector(getSection);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchInitialNews = async () => {
            setLoading(true);
            await dispatch(getNews(section));
            setLoading(false);
        };

        fetchInitialNews();
    }, [dispatch, section]);

    useEffect(() => {
        const fetchNewsDetails = async () => {
            if (!loading) {
                const startIndex = (page - 1) * 15;
                const endIndex = page * 15;
                const idsToFetch = newsIds.slice(startIndex, endIndex);
                if (idsToFetch.length) {
                    setLoading(true);
                    await dispatch(getNewsByIds(idsToFetch));
                    setLoading(false);
                }
            }
        };

        fetchNewsDetails();
    }, [page, newsIds, dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Page />}>
                <Route index element={<News />} />
            </Route>
        </Routes>
    );
}

export default App;
