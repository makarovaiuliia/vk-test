import { Section, TStory } from "@/types/types";
import { getNewsApi, getNewsByIdApi } from "@/utils/test-api";
import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
// import type { RootState } from "./store";

/* eslint-disable no-param-reassign */

export const getNews = createAsyncThunk(
    "newsAll/get",
    async (sort: Section) => {
        const response = await getNewsApi(sort);
        return response;
    }
);

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

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setSection(state, action: PayloadAction<Section>) {
            state.section = action.payload;
            state.page = 1;
            state.newsList = [];
            state.newsPosts = [];
        },
        incrementPage(state) {
            state.page += 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNews.fulfilled, (state, action) => {
                state.newsList = action.payload;
            })
            .addCase(getNews.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getNewsByIds.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.newsPosts = [...state.newsPosts, ...action.payload];
            });
    },
});

export const getNewsPosts = (state: RootState) => state.news.newsPosts;
export const getNewsIds = (state: RootState) => state.news.newsList;
export const getPage = (state: RootState) => state.news.page;
export const getSection = (state: RootState) => state.news.section;

export const { incrementPage, setSection } = newsSlice.actions;

export default newsSlice.reducer;

/* eslint-enable no-param-reassign */
