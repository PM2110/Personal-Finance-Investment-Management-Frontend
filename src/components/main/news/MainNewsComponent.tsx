import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { useEffect, useState } from "react";
import { SentimentIntensityAnalyzer } from "vader-sentiment";
import { fetchNews } from "../../../redux/userSlice";
import MainNewsCardComponent from "./MainNewsCardComponent";

export interface NewsData {
    category: string,
    datetime: string,
    headline: string,
    id: number,
    image: string,
    related: string,
    source: string,
    summary: string,
    url: string,
}

const MainNewsComponent = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [news, setNews] = useState<NewsData[] | null>(null);
    const [newsType, setNewsType] = useState("general");
    const analyzeSentiment = (text: string): number => {
        const sentiment = SentimentIntensityAnalyzer.polarity_scores(text);
        const compoundScore = sentiment.compound;
        if (isNaN(compoundScore)) {
            console.error(`Invalid sentiment score for: ${text}`);
            return 0;
        }
        return compoundScore;
    };

    useEffect(() => {
        dispatch(fetchNews(newsType)).then((news) => {
            setNews(news);
        });
    }, [newsType, dispatch]);

    if (!news || news.length === 0) {
        return (
            <div className="flex items-center justify-center text-[#666D80] border-[#DFE1E7] border-2 rounded-xl">
                No News Found.
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-3 w-full">
            <div className="flex w-full justify-end">
                <select
                    className="border-[#DFE1E7] border-2 text-[14px] hover:cursor-pointer p-1 rounded-lg focus:outline-none"
                    onChange={(e) => setNewsType(e.target.value)}
                >
                    <option value="general">General</option>
                    <option value="forex">Forex</option>
                    <option value="crypto">Crypto</option>
                    <option value="merger">Merger</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full overflow-y-auto">
                {news.map((newsItem) => (
                    <MainNewsCardComponent news={newsItem} />
                ))}
            </div>
        </div>
    )
}

export default MainNewsComponent;