import APIMethods from "../APIMethods";
import ServiceEndpoints from "../endpoints/ServiceEndpoint";

const ServiceAPIManager = {
    getNews: (newsType: string) => {
        const url = ServiceEndpoints.getNews(newsType);
        return APIMethods.get(url);
    },
    exchangeRate: (data: { from: string, to: string}) => {
        const url = ServiceEndpoints.exchangeRate();
        return APIMethods.post(url, data);  
    },
}

export default ServiceAPIManager;