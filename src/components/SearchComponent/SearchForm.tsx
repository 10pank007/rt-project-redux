import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {ISearch} from "../../interfaces/search";
import {searchService} from "../../services/searchService";
import {IObjMovie} from "../../interfaces/movie";
import {SearchMovies} from "./SearchMovies";
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {
}

const SearchForm: FC<IProps> = () => {
    let {reset, register, handleSubmit} = useForm();
    const [search, setSearch] = useState<string>();
    let [query, setQuery] = useSearchParams({page: '1'});
    let page = query.get('page');
    const [movie, setMovie] = useState<IObjMovie>(null);
    console.log(page, 'page', movie, 'movie');


    const save =  (data: ISearch) => {
        setSearch(data.search);
        //reset();
    };

    useEffect(() => {
        searchService.getByQuery(search, page).then(({data}) => setMovie(data));
    }, [search, page]);

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={'text'} placeholder={'movie'} {...register('search')}/>
            <button>search</button>
            <hr/>
            {movie && <SearchMovies movie={movie} page={page} />}
        </form>
    );
};

export {SearchForm};