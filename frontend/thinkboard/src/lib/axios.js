import axios from "axios"

const BASE_URL = imprt.meta.env.MODE === "development" ? "http://localhost:5004/api" :"/api"
const api = axios.create({
    baseURL: BASE_URL,
})
export default api;