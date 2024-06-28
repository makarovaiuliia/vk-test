import { Section, TStory } from "@/types/types";
import { getNewsApi, getNewsByIdApi } from "@/utils/test-api";
import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
// import type { RootState } from "./store";

/* eslint-disable no-param-reassign */

/**
 * Fetches news IDs based on the given section.
 *
 * @param {Section} sort - The section to fetch news from (e.g., "topstories", "newstories").
 * @returns {Promise<number[]>} - A promise that resolves to an array of news IDs.
 */
export const getNews = createAsyncThunk(
    "newsAll/get",
    async (sort: Section) => {
        const response = await getNewsApi(sort);
        return response;
    }
);

/**
 * Fetches news and comments and etc details by IDs.
 *
 * @param {number[]} ids - An array of news IDs to fetch details for.
 * @returns {Promise<TStory[]>} - A promise that resolves to an array of news details.
 */
export const getNewsByIds = createAsyncThunk(
    "news/get",
    async (ids: number[], { rejectWithValue }) => {
        try {
            const news = await Promise.all(ids.map((id) => getNewsByIdApi(id)));
            return news;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

interface InitialState {
    newsList: number[];
    newsPosts: TStory[];
    page: number;
    status: string;
    section: Section;
}

const initialState: InitialState = {
    newsList: [],
    newsPosts: [],
    page: 1,
    status: "",
    section: "topstories",
};

/**
 * Slice for managing news state.
 */
const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        /**
         * Sets the news section and resets the state.
         *
         * @param {InitialState} state - The current state.
         * @param {PayloadAction<Section>} action - The action payload containing the new section.
         */
        setSection(state, action: PayloadAction<Section>) {
            state.status = "loading";
            state.section = action.payload;
            state.page = 1;
            state.newsList = [];
            state.newsPosts = [];
        },
        /**
         * Increments the current page number.
         *
         * @param {InitialState} state - The current state.
         */
        incrementPage(state) {
            state.page += 1;
        },
        /**
         * Removes all news and resets the state.
         *
         * @param {InitialState} state - The current state.
         */
        removeNews(state) {
            state.page = 1;
            state.newsList = [];
            state.newsPosts = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNews.fulfilled, (state, action) => {
                state.newsList = action.payload;
            })
            .addCase(getNewsByIds.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getNewsByIds.fulfilled, (state, action) => {
                state.status = "ok";
                state.newsPosts = [...state.newsPosts, ...action.payload];
            });
    },
});

/**
 * Selectors to get various parts of the news state.
 */
export const getNewsPosts = (state: RootState) => state.news.newsPosts;
export const getNewsIds = (state: RootState) => state.news.newsList;
export const getPage = (state: RootState) => state.news.page;
export const getSection = (state: RootState) => state.news.section;
export const getStatus = (state: RootState) => state.news.status;

export const { incrementPage, setSection, removeNews } = newsSlice.actions;

export default newsSlice.reducer;

/* eslint-enable no-param-reassign */
