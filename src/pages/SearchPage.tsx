import React, {FC, PropsWithChildren, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {searchService} from "../services/searchService";
import {IObjMovie} from "../interfaces/movie";
import {SearchForm} from "../components/SearchComponent/SearchForm";

interface IProps extends PropsWithChildren {
}

const SearchPage: FC<IProps> = () => {


    return (
       <div>
           <SearchForm/>
       </div>
    );
};

export {SearchPage};