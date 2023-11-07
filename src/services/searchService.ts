import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const searchService = {
    getByQuery: (query: string) => axiosService.get(urls.search.base, {params: {query}})
}

export {searchService}