import axios from "axios";
import { useCallback,useReducer,useEffect} from "react";


const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT

function reducerFunc(state, action) {
    if (action.type === 'success') {
        return {
            ...state,
            data: action.data,
            isLoading: false,
        }
       
    }
    else if(action.type==="loading"){
        return {
            ...state,
            isLoading: true
        }
    }
}

export const useFetch = (method, path) => {

    const [state, dispatch ] = useReducer(reducerFunc, {
        data: null,
        isLoading : false
    })
    const fetchAPI = useCallback(async (databody) => {
        try {
            dispatch({ type: 'loading' })
            const response = await axios(
                {
                    method: method,
                    url: `${API_ENDPOINT}${path}`,
                    data: databody
                }
            )

            // console.log('inside fetchAPI call',response)
            dispatch({ type: 'success', data: response })
        }
        catch (err) {
            return err
        }

    }, [method, path])

    return { data: state?.data?.data,isLoading: state.isLoading, fetchAPI }
}




// const API_KEY = process.env.API_KEY;
/* const axiosInstance = axios.create({
    baseURL: API_ENDPOINT,
    headers: {
        //   Authorization: `Bearer ${API_KEY}`,
        "Content-Type": 'application/json'
    },
});

export const getFeedback = async () => {
    try {
        const response = await axiosInstance.get('/api/userFeedback');
        // console.log(response.data)
        return response.data;
    } catch (error) {
        throw error;
    }
};

const submitFeedback = async (feedbackData) => {
    try {
        const response = await axiosInstance.post('/api/userFeedback', feedbackData);
        // console.log(response)
        return response.data;
    } catch (error) {
        throw error;
    }
    
}; */

