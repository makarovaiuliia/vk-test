import { TComments } from "@/types/types";
import styles from "./commentSection.module.css";
import Comment from "../comment/Comment";

interface CommentSectionProps {
    comments: TComments[];
}

/**
 * CommentSection component that displays a list of comments.
 *
 * @param {CommentSectionProps} props - The props for the CommentSection component.
 * @param {TComments[]} props.comments - An array of comments to display.
 * @returns {JSX.Element} The rendered CommentSection component.
 */
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
