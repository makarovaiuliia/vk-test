import { useDispatch, useSelector } from "@/lib/store";
import styles from "./news.module.css";
import {
    getNews,
    getNewsPosts,
    getSection,
    getStatus,
    incrementPage,
    removeNews,
    setSection,
} from "@/lib/newsSlice";
import Post from "../post/Post";
import Button from "../button/Button";
import { Section } from "@/types/types";
import { useEffect, useRef, useState } from "react";
import { getNewsByIds, getNewsIds, getPage } from "@/lib/newsSlice";
import Loader from "../loader/Loader";

/**
 * News component to display the latest news articles and handle fetching, pagination, and section selection.
 *
 * @returns {JSX.Element} The rendered News component.
 */
function News(): JSX.Element {
    const dispatch = useDispatch();
    const newsPosts = useSelector(getNewsPosts);
    const newsIds = useSelector(getNewsIds);
    const page = useSelector(getPage);
    const status = useSelector(getStatus);
    const section = useSelector(getSection);

    const [activeButton, setActiveButton] = useState<Section>("topstories");
    const intervalId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const fetchNewsDetails = async () => {
            if (newsIds.length) {
                const startIndex = (page - 1) * 15;
                const endIndex = page * 15;
                const idsToFetch = newsIds.slice(startIndex, endIndex);
                if (idsToFetch.length) {
                    await dispatch(getNewsByIds(idsToFetch));
                }
            }
        };

        fetchNewsDetails();
    }, [page, newsIds, dispatch]);

    useEffect(() => {
        intervalId.current = setInterval(() => {
            dispatch(removeNews());
            dispatch(getNews(activeButton));
        }, 30000);

        return () => {
            if (intervalId.current) {
                clearInterval(intervalId.current);
            }
        };
    }, []);

    const fetchLatestNews = () => {
        dispatch(removeNews());
        dispatch(getNews(section));

        if (intervalId.current) {
            clearInterval(intervalId.current);
        }

        intervalId.current = setInterval(() => {
            dispatch(getNews(activeButton));
        }, 30000);
    };

    const handleLoadMore = () => {
        dispatch(incrementPage());
    };

    const handleButtonClick = (section: Section) => {
        setActiveButton(section);
        dispatch(setSection(section));
    };

    return (
        <section className={styles.newsSection}>
            <h2>Latest News</h2>
            <div className={styles.buttonContainer}>
                <Button onClick={fetchLatestNews} text="Fetch Latest News" />
                <Button
                    text="Top Stories"
                    onClick={() => handleButtonClick("topstories")}
                    className={
                        activeButton === "topstories" ? styles.activeButton : ""
                    }
                />
                <Button
                    text="News Stories"
                    onClick={() => handleButtonClick("newstories")}
                    className={
                        activeButton === "newstories" ? styles.activeButton : ""
                    }
                />
                <Button
                    text="Best Stories"
                    onClick={() => handleButtonClick("beststories")}
                    className={
                        activeButton === "beststories"
                            ? styles.activeButton
                            : ""
                    }
                />
            </div>

            <ul className={styles.postsList}>
                {newsPosts.map((post) => (
                    <Post postData={post} key={post.id} />
                ))}
            </ul>

            {status === "loading" ? (
                <Loader />
            ) : (
                <Button onClick={handleLoadMore} text="Load more" />
            )}
        </section>
    );
}

export default News;
