import { SentimentIntensityAnalyzer } from "vader-sentiment";
import { NewsData } from "./MainNewsComponent";

interface MainNewsCardComponentProps {
    news: NewsData;
}

const getSentimentColor = (text: string): number => {
    const sentiment = SentimentIntensityAnalyzer.polarity_scores(text);
    const compoundScore = sentiment.compound;
    if (isNaN(compoundScore)) {
        console.error(`Invalid sentiment score for: ${text}`);
        return 0;
    }
    return compoundScore;
};

const trimText = (text: string, maxLines: number): string => {
    const lines = text.split('\n');
    return lines.slice(0, maxLines).join(' ') + (lines.length > maxLines ? '...' : '');
};

const MainNewsCardComponent: React.FC<MainNewsCardComponentProps> = ({ news }) => {
    const sentimentScore = getSentimentColor(news.headline);
    let textColor = "";
    if (sentimentScore > 0.05) {
        textColor = "text-green-500";
    } else if (sentimentScore < -0.05) {
        textColor = "text-red-500";
    } else {
        textColor = "text-yellow-500";
    }
    
    return (
        <div key={news.id} className="flex flex-col gap-2 border-[#DFE1E7] border-2 rounded-xl p-2 h-full">
            <img src={news.image} alt="news" className="h-40 w-full object-cover rounded-lg" />
            <div className="flex flex-col gap-2">
                <label className={`text-[14px] ${textColor}`}>{trimText(news.headline, 2)}</label>
                <label className="text-[#666D80] text-[12px]">{trimText(news.summary, 3)}</label>
            </div>
            <a href={news.url} target="_blank" rel="noreferrer" className="text-[#666D80] text-[12px] hover:underline mt-auto ml-auto">Read More</a>
        </div>
    );
};

export default MainNewsCardComponent;
