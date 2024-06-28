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
};

type NewsType = "story" | "comment" | "job" | "poll" | "pollopt";
