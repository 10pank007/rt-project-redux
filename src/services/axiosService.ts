import axios from "axios";

import {baseURL, imgURL, token} from "../constants/urls";

const axiosService = axios.create(
    {baseURL}
);

const axiosPhotoService = axios.create({
    baseURL: imgURL
});

axiosPhotoService.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${token}`
    return request
})
axiosService.interceptors.request.use(request => {
        request.headers.Authorization = `Bearer ${token}`
    return request;
})


export {axiosService, axiosPhotoService}