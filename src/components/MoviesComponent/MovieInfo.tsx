import React, {FC, PropsWithChildren} from 'react';
import {IOneMovie} from "../../interfaces/movie";
import {PosterPreview} from "../PosterPreview/PosterPreview";

interface IProps extends PropsWithChildren {
    moviesInfo: IOneMovie
}

const MovieInfo: FC<IProps> = ({moviesInfo}) => {
    let {poster_path, budget, original_title, overview, genres, runtime} = moviesInfo;
    return (
        <div>
            <PosterPreview poster_path={poster_path} original_title={original_title}/>
            <h1>{original_title}</h1>
            <p>budget: {budget}</p>
        </div>
    );
};

export {MovieInfo};