import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const searchService = {
    getByQuery: (query: string, page: string) => axiosService.get(urls.search.base, {params: {query, page}})
}

export {searchService}