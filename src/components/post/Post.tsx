import { TStory } from "@/types/types";

import placeholder from "/placeholder.svg";
import styles from "./post.module.css";

interface PostProps {
    postData: TStory;
}

function Post({ postData }: PostProps): JSX.Element {
    return (
        <div className={styles.post}>
            <div>
                <img
                    src={placeholder}
                    alt="placeholder"
                    className={styles.postImage}
                />
                <a className={styles.postLink} href={postData.url}>
                    Link to the news
                </a>
                <h1 className={styles.postTitle}>{postData.title}</h1>
            </div>

            <div className={styles.postInfo}>
                <p>{postData.by}</p>
                <p>{postData.score}</p>
            </div>
        </div>
    );
}

export default Post;
