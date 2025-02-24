import APIMethods from "../APIMethods";
import NewsEndpoints from "../endpoints/NewsEndpoint"

const NewsAPIManager = {
    getNews: (newsType: string) => {
        const url = NewsEndpoints.getNews(newsType);
        return APIMethods.get(url);
    }
}

export default NewsAPIManager;