import { NewsData } from "./MainNewsComponent"

interface MainNewsCardComponentProps {
    news: NewsData;
}

const MainNewsCardComponent: React.FC<MainNewsCardComponentProps> = ({ news }) => {
    return (
        <div key={news.id} className="flex flex-col gap-2 border-[#DFE1E7] border-2 rounded-xl p-2 h-full">
            <img src={news.image} alt="news" className="h-40 w-full object-cover rounded-lg" />
            <div className="flex flex-col gap-2">
                <label className="text-[#666D80] text-[14px]">{news.headline}</label>
                <label className="text-[#666D80] text-[12px]">{news.summary}</label>
            </div>
            <a href={news.url} target="_blank" rel="noreferrer" className="text-[#666D80] text-[12px] hover:underline mt-auto ml-auto">Read More</a>
        </div>
    );
}

export default MainNewsCardComponent;