import { TComments } from "@/types/types";
import styles from "./comment.module.css";
import { useState } from "react";
import Button from "../button/Button";

interface CommentProps {
    comment: TComments;
}

const Comment = ({ comment }: CommentProps): JSX.Element => {
    const [showReplies, setShowReplies] = useState(false);

    return (
        <div className={styles.comment}>
            <div className={styles.commentContent}>
                <p>{comment.by}</p>
                <p>{comment.text}</p>
                {comment.comments.length > 0 && (
                    <Button
                        text={showReplies ? "Hide Replies" : "Show Replies"}
                        onClick={() => setShowReplies(!showReplies)}
                    />
                )}
            </div>
            {showReplies && comment.kids && (
                <div className={styles.replies}>
                    {comment.comments.map((reply) => (
                        <Comment key={reply.id} comment={reply} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Comment;
