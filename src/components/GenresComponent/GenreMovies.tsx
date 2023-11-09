import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IObjMovie} from "../../interfaces/movie";
import {SetURLSearchParams, useSearchParams} from "react-router-dom";
import css from "../MoviesComponent/Movies.module.css";
import {Movie} from "../MoviesComponent/Movie";
import {moviesService} from "../../services/moviesService";

interface IProps extends PropsWithChildren {
    objGenre: IObjMovie,
    page: string,
}

const GenreMovies: FC<IProps> = ({objGenre, page}) => {
    let [query, setQuery] = useSearchParams({page: '1'});
     //let page = query.get('page');


    const prev =()=> {
        setQuery(prev1 => {
            prev1.set('page', `${+query.get('page') - 1}`);
            return prev1;
        })
    }
    const next =()=> {
        setQuery(prev1 => {
            prev1.set('page', `${+query.get('page') + 1}`);
            return prev1;
        })
    }
    return (
        <div className={css.Movies}>
            {objGenre.results && objGenre.results.map((value, index) => <Movie page={page} key={index} movie={value}/>)}
            <div>
                <button onClick={prev} disabled={page === '1'}>prev</button>
                <button onClick={next}>next</button>
            </div>
        </div>
    );
};

export {GenreMovies};