import axios from "axios";

const BaseURL = "http://192.168.24.22:5000/api"

const APIMethods = {
    get: async (url : string) => {
        const token = localStorage.getItem('token');
        const header = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        return await axios.get(BaseURL + url, header)
    },
    post: async (url : string, data : unknown) => {
        const token = localStorage.getItem('token');
        const header = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        return await axios.post(BaseURL + url, data, header)
    },
    put: async (url : string, data : unknown) => {
        const token = localStorage.getItem('token');
        const header = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        return await axios.put(BaseURL + url, data, header)
    },
    delete: async (url : string) => {
        const token = localStorage.getItem('token');
        const header = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        return await axios.delete(BaseURL + url, header)
    },
}

export default APIMethods;