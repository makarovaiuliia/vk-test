import { useDispatch, useSelector } from "@/lib/store";
import styles from "./news.module.css";
import { getNewsPosts, incrementPage, setSection } from "@/lib/newsSlice";
import Post from "../post/Post";
import Button from "../button/Button";
import { Section } from "@/types/types";
import { useEffect, useState } from "react";
import { getNewsByIds, getNewsIds, getPage } from "@/lib/newsSlice";

function News(): JSX.Element {
    const dispatch = useDispatch();
    const newsPosts = useSelector(getNewsPosts);
    const newsIds = useSelector(getNewsIds);
    const page = useSelector(getPage);
    const [activeButton, setActiveButton] = useState<Section>("topstories");

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
                    <Post postData={post} />
                ))}
            </ul>
            <Button onClick={handleLoadMore} text="Load more" />
        </section>
    );
}

export default News;
