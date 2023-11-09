import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const searchService = {
    getByQuery: (page: string, query: string) => axiosService.get(urls.search.base, {params: {page, query}})
}

export {searchService}