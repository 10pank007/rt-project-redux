import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IMovie} from "../../interfaces/movie";
import css from './Movie.module.css'
import {Link} from "react-router-dom";
import {PosterPreview} from "../PosterPreview/PosterPreview";

interface IProps extends PropsWithChildren {
    movie: IMovie,
    page: string,
}

const Movie: FC<IProps> = ({movie}) => {
    let {original_title, poster_path, vote_average, id} = movie;

    return (
        <div className={css.Movie}>
            <PosterPreview poster_path={poster_path} original_title={original_title}/>
            <Link to={`/${id}`} state={id} >{original_title}</Link>
            <div >{vote_average}</div>

        </div>
    );
}

export {Movie};