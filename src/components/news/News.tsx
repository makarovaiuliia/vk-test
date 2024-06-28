import { useDispatch, useSelector } from "@/lib/store";
import styles from "./news.module.css";
import { getNewsPosts, incrementPage } from "@/lib/newsSlice";

function News(): JSX.Element {
    const dispatch = useDispatch();
    const newsPosts = useSelector(getNewsPosts);
    console.log(newsPosts)

    const handleLoadMore = () => {
        dispatch(incrementPage());
    };

    return (
        <>
            <ul>
                {newsPosts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <button onClick={handleLoadMore}>Load more</button>
        </>
    );
}

export default News;
