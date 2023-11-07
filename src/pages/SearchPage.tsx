import React, {FC, PropsWithChildren, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {searchService} from "../services/searchService";
import {IObjMovie} from "../interfaces/movie";

interface IProps extends PropsWithChildren {
}

const SearchPage: FC<IProps> = () => {
    let {reset, register, handleSubmit} = useForm();
    const [queryPar, setQueryPar] = useState()
    const save = async (data: string) => {
        console.log(data);
        // let vair = await searchService.getByQuery(data);
        // console.log(vair)
        // reset();
    };

    return (

        <form onSubmit={handleSubmit(save)}>
            <input type={'text'}placeholder={'search'} {...register('sear')}/>
            <button>search</button>
        </form>
    );
};

export {SearchPage};