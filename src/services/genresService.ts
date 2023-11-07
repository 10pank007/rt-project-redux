import {IRes} from "../types/IResType";
import {IObjGenres, } from "../interfaces/genres";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const genresService = {
    getAllGenres: (): IRes<IObjGenres> => axiosService.get(urls.genre.base)
}

export {genresService}