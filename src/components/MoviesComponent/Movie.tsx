import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../interfaces/movie";
import css from './Movie.module.css'
import {Link} from "react-router-dom";
import {PosterPreview} from "../PosterPreview/PosterPreview";

import StarRatings from "react-star-ratings";

interface IProps extends PropsWithChildren {
    movie: IMovie,
    page: string,
}

const Movie: FC<IProps> = ({movie}) => {
    const {original_title, poster_path, vote_average, id} = movie;

    return (
        <div className={css.Movie}>
            <PosterPreview poster_path={poster_path} original_title={original_title}/>
            <Link to={`/inform/${id}`} state={id} >{original_title}</Link>
            <StarRatings
                rating={vote_average}
                starRatedColor="yellow"
                numberOfStars={10}
                name='rating'
                starDimension="20px"
                starSpacing="5px"
            />

        </div>
    );
}

export {Movie};