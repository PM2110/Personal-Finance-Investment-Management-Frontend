const ServiceEndpoints = {
    getNews: (newsType: string) => `/service/news/${newsType}`,
    exchangeRate: () => `/service/exchange`,
}

export default ServiceEndpoints;