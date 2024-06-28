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

                <a className={styles.postTitle} href={postData.url}>
                    {postData.title}
                </a>
            </div>

            <p className={styles.postAuthor}>{postData.by}</p>
        </div>
    );
}

export default Post;
