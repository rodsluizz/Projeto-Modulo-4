import axios from "axios";

const api = axios.create({
    baseURL: "https://projeto-viaja-api.herokuapp.com"
})

export default api;