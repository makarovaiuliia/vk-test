export type TStory = {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: NewsType;
    url: "http://www.getdropbox.com/u/2/screencast.html";
    text: string;
};

export type TComments = TStory & {
    comments: TStory[];
};

type NewsType = "story" | "comment" | "job" | "poll" | "pollopt";

export type Section = "topstories" | "newstories" | "beststories";
