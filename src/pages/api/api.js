import axios from "axios";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
// const API_KEY = process.env.API_KEY;
const axiosInstance = axios.create({
    baseURL: API_ENDPOINT,
    headers: {
        //   Authorization: `Bearer ${API_KEY}`,
        "Content-Type": 'application/json'
    },
});

export const getFeedback = async () => {
    try {
        const response = await axiosInstance.get('/api/userFeedback');
        console.log(response.data)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const submitFeedback = async (feedbackData) => {
    try {
        const response = await axiosInstance.post('/api/userFeedback', feedbackData);
        console.log(response)
        return response.data;
    } catch (error) {
        throw error;
    }
};

