import APIMethods from "../APIMethods";
import ServiceEndpoints from "../endpoints/ServiceEndpoint";

const ServiceAPIManager = {
    getNews: (newsType: string) => {
        const url = ServiceEndpoints.getNews(newsType);
        return APIMethods.get(url);
    },
    exchangeRate: (currency: string) => {
        const url = ServiceEndpoints.exchangeRate(currency);
        return APIMethods.get(url);  
    },
}

export default ServiceAPIManager;