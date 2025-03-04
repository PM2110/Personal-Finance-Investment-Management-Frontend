const ServiceEndpoints = {
    getNews: (newsType: string) => `/service/news/${newsType}`,
    exchangeRate: (currency: string) => `/service/exchange/${currency}`,
}

export default ServiceEndpoints;