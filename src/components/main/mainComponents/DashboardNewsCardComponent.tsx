import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { fetchNews } from "../../../redux/userSlice";
import { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { SentimentIntensityAnalyzer } from "vader-sentiment";

interface NewsData {
    category: string;
    datetime: string;
    headline: string;
    id: number;
    image: string;
    related: string;
    source: string;
    summary: string;
    url: string;
}

const DashboardNewsCardComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [news, setNews] = useState<NewsData[] | null>(null);
    const [newsType, setNewsType] = useState("general");
    const analyzeSentiment = (text: string): number => {
        const sentiment = SentimentIntensityAnalyzer.polarity_scores(text);
        const compoundScore = sentiment.compound;
        console.log(`Sentiment for "${text}": ${compoundScore}`);
        if (isNaN(compoundScore)) {
            console.error(`Invalid sentiment score for: ${text}`);
            return 0;
        }
        return compoundScore;
    };

    useEffect(() => {
        dispatch(fetchNews(newsType)).then((news) => {
            console.log("Fetched news:", news);
            setNews(news);
        });
    }, [newsType, dispatch]);

    console.log("News state:", news);

    if (!news || news.length === 0) {
        return (
            <div className="flex items-center justify-center text-[#666D80] border-[#DFE1E7] border-2 rounded-xl">
                No News Found.
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2 border-[#DFE1E7] border-2 rounded-xl p-2 h-fit">
            <div className="flex flex-row justify-between text-[14px] text-[#666D80]">
                <label className="text-black">News</label>
                <select
                    className="border-[#DFE1E7] border-2 hover:cursor-pointer p-1 rounded-lg focus:outline-none"
                    onChange={(e) => setNewsType(e.target.value)}
                >
                    <option value="general">General</option>
                    <option value="forex">Forex</option>
                    <option value="crypto">Crypto</option>
                    <option value="merger">Merger</option>
                </select>
            </div>
            {news && news.length !== 0
                ? news.slice(0, 3).map((data, index) => {
                      const sentimentScore = analyzeSentiment(data.headline);
                      let textColor = "";
                      if (sentimentScore > 0.05) {
                          textColor = "text-green-500";
                      } else if (sentimentScore < -0.05) {
                          textColor = "text-red-500";
                      } else {
                          textColor = "text-yellow-500";
                      }

                      return (
                          <div
                              key={index}
                              onClick={() => window.open(data.url, "_blank")}
                              className={`flex gap-1 md:gap-2 lg:gap-3 justify-between items-center text-[13px] border-[#DFE1E7] border-2 p-2 rounded-xl hover:cursor-pointer hover:bg-gray-50 ${textColor}`}
                          >
                              <div className="text-justify">{data.headline}</div>
                              <div>
                                  <RiArrowRightSLine className="text-[16px] text-black" />
                              </div>
                          </div>
                      );
                  })
                : "No News Found"}
        </div>
    );
};

export default DashboardNewsCardComponent;
