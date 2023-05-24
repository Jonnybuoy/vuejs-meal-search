import axios from 'axios'

const axiosClient = axios.create({
    baseURL: import.meta.env.MEAL_API_BASE_URL,
});

export default axiosClient;