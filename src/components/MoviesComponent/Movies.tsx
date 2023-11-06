import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IObjMovie} from "../../interfaces/movie";
import {useSearchParams} from "react-router-dom";
import {moviesService} from "../../services/moviesService";
import {Movie} from "./Movie";

interface IProps extends PropsWithChildren {

}

const Movies: FC<IProps> = () => {
    const [objMovie, setObjMovie] = useState<IObjMovie>({page: 0, results:null, total_pages:0, total_results: 0})
    //let [movie, setMovie] = useState<IMovie[]>();
    let [query, setQuery] = useSearchParams({page: '1'})
    useEffect(()=> {
        moviesService.getAll(query.get('page')).then(({data}) => { setObjMovie(data)});
    }, [query.get('page')]);
    console.log(objMovie);

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
        <div>
            <button onClick={prev} disabled={(query.get('page') ==='1')}>prev</button>
            <button onClick={next} >next</button>
            {objMovie.results && objMovie.results.map((value, index) => <Movie key={index} movie={value}/>)}
        </div>
    );
};

export {Movies};