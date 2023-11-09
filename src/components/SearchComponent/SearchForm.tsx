import React, {FC, PropsWithChildren, useState} from 'react';
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
    const [search, setSearch] = useState<IObjMovie>();
    let [query, setQuery] = useSearchParams({page: '1'});
    let page = query.get('page');

    const save = async (data: ISearch) => {
        console.log(data);
        let vair = await searchService.getByQuery(page, data.search);
        setSearch(vair.data);
        reset();
    };
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={'text'} placeholder={'movie'} {...register('search')}/>
            <button>search</button>
            <hr/>
            {search && <SearchMovies search={search} page={page} />}
        </form>
    );
};

export {SearchForm};