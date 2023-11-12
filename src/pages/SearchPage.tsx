import React, {FC, PropsWithChildren} from 'react';
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