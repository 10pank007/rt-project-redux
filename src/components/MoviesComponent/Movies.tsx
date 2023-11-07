import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IObjMovie} from "../../interfaces/movie";
import {useSearchParams} from "react-router-dom";
import {moviesService} from "../../services/moviesService";
import {Movie} from "./Movie";
import css from './Movies.module.css'

interface IProps extends PropsWithChildren {

}

const Movies: FC<IProps> = () => {
    const [objMovie, setObjMovie] = useState<IObjMovie>({page: 0, results:null, total_pages:0, total_results: 0})
    let [query, setQuery] = useSearchParams({page: '1'});
    let page = query.get('page');

    useEffect(()=> {
        moviesService.getAll(query.get('page')).then(({data}) => {setObjMovie(data)});
    }, [page]);

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