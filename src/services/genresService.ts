import {IRes} from "../types/IResType";
import {IObjGenres, } from "../interfaces/genres";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IObjMovie} from "../interfaces/movie";

const genresService = {
    getAllGenres: (): IRes<IObjGenres> => axiosService.get(urls.genre.base),
    getGenreByName: (page: string, with_genres: string): IRes<IObjMovie> => axiosService.get(urls.movie.base , {params: {page, with_genres}})
}

export {genresService}