import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd4b1a061d47f425aaaab2fc46213646e'
    }
})