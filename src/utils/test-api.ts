const URL = import.meta.env.VITE_URL;

const checkResponse = async <T>(res: Response): Promise<T> => {
    if (res.ok) {
        return res.json();
    } else {
        const errorData = await res.json();
        return Promise.reject(errorData);
    }
};

export const getNews = async (sort: string): Promise<{}> => {
    try {
        const response = await fetch(`${URL}/${sort}.json?print=pretty`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return await checkResponse<{}>(response);
    } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
};

export const getNewsById = async (id: string): Promise<{}> => {
    try {
        const response = await fetch(`${URL}/item/${id}.json?print=pretty`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return await checkResponse<{}>(response);
    } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
};
