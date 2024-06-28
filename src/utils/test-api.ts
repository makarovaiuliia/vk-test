import { TStory } from "@/types/types";

const URL = import.meta.env.VITE_URL;

const checkResponse = async <T>(res: Response): Promise<T> => {
    if (res.ok) {
        return res.json();
    } else {
        const errorData = await res.json();
        return Promise.reject(errorData);
    }
};

export const getNewsApi = async (sort: string): Promise<number[]> => {
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
