import React, {FC, PropsWithChildren} from 'react';
import {imgURL} from "../../constants/urls";

interface IProps extends PropsWithChildren {
    poster_path: string,
    original_title: string
}

const PosterPreview: FC<IProps> = ({original_title, poster_path}) => {
    return (
        <img src={imgURL + poster_path} alt={original_title}/>
    );
};

export {PosterPreview};