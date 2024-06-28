import { TComments } from "@/types/types";
import styles from "./commentSection.module.css";
import Comment from "../comment/Comment";

interface CommentSectionProps {
    comments: TComments[];
}

function CommentSection({ comments }: CommentSectionProps): JSX.Element {
    return (
        <div className={styles.commentSection}>
            {comments.map((comment) => (
                <Comment comment={comment} key={comment.id} />
            ))}
        </div>
    );
}

export default CommentSection;
