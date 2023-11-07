import React, {FC, PropsWithChildren} from 'react';
import {Header} from "../components/Header/Header";
import {Outlet, useParams} from "react-router-dom";
import {MoviesInfoPage} from "../pages/MoviesInfoPage";

interface IProps extends PropsWithChildren {
}

const MoviesDetailsLayout: FC<IProps> = () => {
    let {id} = useParams();
    console.log(id);
    return (
        <div>
            <Header/>
            <Outlet/>
            <MoviesInfoPage id={id}/>
        </div>
    );
};

export {MoviesDetailsLayout};