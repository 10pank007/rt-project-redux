import {IObjMovie, IOneMovie} from "../interfaces/movie";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IRes} from "../types/IResType";

const moviesService = {
    getAll: (page: string ): IRes<IObjMovie> => axiosService.get(urls.movie.base, {params: {page}}),
    getMovieById: (id: string): IRes<IOneMovie> => axiosService.get(urls.movie.infoMovie.byId(id))
}

export {moviesService}