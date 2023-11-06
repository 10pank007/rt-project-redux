import {IMovie, IObjMovie} from "../interfaces/movie";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IRes} from "../types/IResType";

const moviesService = {
    getAll: (page: string ): IRes<IObjMovie> => axiosService.get(urls.movie.base, {params: {page}})
}

export {moviesService}