import axios from "axios";

import {baseURL, token} from "../constants/urls";

const axiosService = axios.create(
    {baseURL}
);


axiosService.interceptors.request.use(request => {
        request.headers.Authorization = `Bearer ${token}`
    return request;
})


export {axiosService}