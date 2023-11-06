import {imgURL} from "../constants/urls";
import {axiosPhotoService, axiosService} from "./axiosService";
import {IRes} from "../types/IResType";

const photoService = {
    getPhotoById: (poster_path: string): IRes<any> => axiosPhotoService.get(poster_path)
}

export {photoService}