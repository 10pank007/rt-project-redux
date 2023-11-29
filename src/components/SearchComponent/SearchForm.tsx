import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {ISearch} from "../../interfaces/search";
import {SearchMovies} from "./SearchMovies";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {searchActions} from "../../redux/slices/searchSlice";

interface IProps extends PropsWithChildren {
}

const SearchForm: FC<IProps> = () => {
    let {reset, register, handleSubmit} = useForm();
    let [query] = useSearchParams({page: '1'});
    let page = query.get('page');

    const {search, movie} = useAppSelector(state => state.search);
    const dispatch = useAppDispatch();

    const save =  (data: ISearch) => {
        dispatch(searchActions.putSearch(data.search));
    };

    useEffect(() => {
        dispatch(searchActions.getSearch({query: search, page: page}));
    }, [search, page, dispatch]);

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