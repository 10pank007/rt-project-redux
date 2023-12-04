import React, {FC, PropsWithChildren} from 'react';
import {IOneMovie} from "../../interfaces/movie";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import StarRatings from "react-star-ratings";

import css from './MovieInfo.module.css'

interface IProps extends PropsWithChildren {
    moviesInfo: IOneMovie
}

const MovieInfo: FC<IProps> = ({moviesInfo}) => {
    let {poster_path, budget, original_title, overview, genres, runtime, vote_average} = moviesInfo;
    return (
        <div className={css.MovieInfo}>
            <PosterPreview poster_path={poster_path} original_title={original_title}/>
            <h1>{original_title}</h1>
            <p>budget: {budget}</p>
            <p>{overview}</p>
            <p>time: {runtime}</p>
            <StarRatings
                rating={vote_average}
                starRatedColor="yellow"
                numberOfStars={10}
                name='rating'
                starDimension="20px"
                starSpacing="5px"
            />
            {genres.map(value => <p>{value.name}</p>)}
        </div>
    );
};

export {MovieInfo};