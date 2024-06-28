import { TComments, TStory } from "@/types/types";

import placeholder from "/placeholder.svg";
import styles from "./post.module.css";
import Button from "../button/Button";
import { useEffect, useState } from "react";
import CommentSection from "../commentSection/CommentSection";
import { fetchComments } from "@/utils/test-api";
import Modal from "../modal/Modal";
import Loader from "../loader/Loader";
import HeartIcon from "../icons/Heart";
import { addToFavorites, isFavorite, removeFromFavorites } from "@/utils/utils";

interface PostProps {
    postData: TStory;
}

/**
 * Post component to display a news post with options to show comments and mark as favorite.
 *
 * @param {PostProps} props - The props for the Post component.
 * @returns {JSX.Element} The rendered Post component.
 */
function Post({ postData }: PostProps): JSX.Element {
    const [open, setIsOpen] = useState<boolean>(false);
    const [comments, setComments] = useState<TComments[]>([]);
    const [favorite, setFavorite] = useState<boolean>(false);

    useEffect(() => {
        setFavorite(isFavorite(postData.id));
    }, [postData.id]);

    const handleOpenComments = async () => {
        if (!open) {
            setIsOpen(true);
            if (comments.length === 0) {
                const commentsLoaded = await fetchComments(postData.kids);

                setComments(commentsLoaded);
            }
        } else {
            setIsOpen(false);
        }
    };

    const toggleFavorite = () => {
        if (favorite) {
            removeFromFavorites(postData.id);
        } else {
            addToFavorites(postData.id);
        }
        setFavorite(!favorite);
    };

    return (
        <div className={styles.postContainer}>
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
                    <HeartIcon filled={favorite} onClick={toggleFavorite} />
                </div>
            </div>
            <Button
                text={
                    postData.kids
                        ? open
                            ? "Hide Comments"
                            : "Show Comments"
                        : "No Comments Yet"
                }
                disabled={!postData.kids}
                onClick={handleOpenComments}
            />

            <Modal show={open} onClose={() => setIsOpen(false)}>
                {comments.length === 0 ? (
                    <Loader />
                ) : (
                    <CommentSection comments={comments} />
                )}
            </Modal>
        </div>
    );
}

export default Post;
