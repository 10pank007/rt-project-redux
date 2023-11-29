import React, {FC, PropsWithChildren} from 'react';
import {imgURL} from "../../constants/urls";
import css from "./image-not-found.jpg";

interface IProps extends PropsWithChildren {
    poster_path: string,
    original_title: string
}

const PosterPreview: FC<IProps> = ({original_title, poster_path}) => {
    return (
        <img src={poster_path? imgURL + poster_path : css} alt={original_title}/>
    );
};

export {PosterPreview};