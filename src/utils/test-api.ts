import { Section, TComments, TStory } from "@/types/types";

const URL = import.meta.env.VITE_URL;

/**
 * Checks the response from a fetch request and returns the parsed JSON data if successful.
 * Rejects the promise with error data if the response is not OK.
 *
 * @param {Response} res - The response object from a fetch request.
 * @returns {Promise<T>} - The parsed JSON data.
 * @template T
 */
const checkResponse = async <T>(res: Response): Promise<T> => {
    if (res.ok) {
        return res.json();
    } else {
        const errorData = await res.json();
        return Promise.reject(errorData);
    }
};

/**
 * Fetches a list of news IDs from the API based on the specified section.
 *
 * @param {Section} sort - The section to fetch news from (e.g., "topstories", "newstories").
 * @returns {Promise<number[]>} - A promise that resolves to an array of news IDs.
 */
export const getNewsApi = async (sort: Section): Promise<number[]> => {
    try {
        const response = await fetch(`${URL}/${sort}.json?print=pretty`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return await checkResponse<number[]>(response);
    } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
};

/**
 * Fetches news data by ID from the API.
 *
 * @param {number} id - The ID of the news item to fetch.
 * @returns {Promise<TStory>} - A promise that resolves to the news data.
 */
export const getNewsByIdApi = async (id: number): Promise<TStory> => {
    try {
        const response = await fetch(`${URL}/item/${id}.json?print=pretty`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return await checkResponse<TStory>(response);
    } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
};

/**
 * Fetches a comment and its nested comments recursively from the API.
 *
 * @param {number} id - The ID of the comment to fetch.
 * @returns {Promise<TComments>} - A promise that resolves to the comment data with nested comments.
 */
const fetchCommentWithKids = async (id: number): Promise<TComments> => {
    const comment = await getNewsByIdApi(id);

    if (comment.kids && comment.kids.length > 0) {
        const kidsComments = await Promise.all(
            comment.kids.map(fetchCommentWithKids)
        );
        return { ...comment, comments: kidsComments };
    }

    return { ...comment, comments: [] };
};

/**
 * Fetches comments and their nested comments by a list of IDs from the API.
 *
 * @param {number[]} ids - An array of comment IDs to fetch.
 * @returns {Promise<TComments[]>} - A promise that resolves to an array of comments with nested comments.
 */
export const fetchComments = async (ids: number[]): Promise<TComments[]> => {
    const comments = await Promise.all(ids.map(fetchCommentWithKids));
    return comments;
};
