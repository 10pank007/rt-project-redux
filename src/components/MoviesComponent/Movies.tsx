import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {Movie} from "./Movie";
import css from './Movies.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/movieSlice";

interface IProps extends PropsWithChildren {
}

const Movies: FC<IProps> = () => {
    let [query, setQuery] = useSearchParams({page: '1'});
    let page = query.get('page');

    const {objMovie} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();


    useEffect(()=> {
        dispatch(movieActions.getAll({page}));
    }, [page, dispatch]);

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
            {objMovie.results && objMovie.results.map((value, index) => <Movie page={page} key={index} movie={value}/>)}
            <div>
                <button onClick={prev} disabled={page === '1'}>prev</button>
                <button onClick={next}>next</button>
            </div>
        </div>
    );
};

export {Movies};