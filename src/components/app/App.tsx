import { Routes, Route } from "react-router-dom";
import Page from "../page/Page";
import News from "../news/News";
import { useDispatch, useSelector } from "@/lib/store";
import { useEffect, useState } from "react";
import { getNews, getNewsByIds, getNewsIds, getPage } from "@/lib/newsSlice";

function App() {
    const dispatch = useDispatch();
    const newsIds = useSelector(getNewsIds);
    const page = useSelector(getPage);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchInitialNews = async () => {
            setLoading(true);
            await dispatch(getNews("topstories"));
            setLoading(false);
        };

        fetchInitialNews();
    }, [dispatch]);

    useEffect(() => {
        const fetchNewsDetails = async () => {
            if (newsIds.length && !loading) {
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
    }, [page, dispatch, newsIds]);

    return (
        <Routes>
            <Route path="/" element={<Page />}>
                <Route index element={<News />} />
            </Route>
        </Routes>
    );
}

export default App;
