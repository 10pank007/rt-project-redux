import React, {FC, PropsWithChildren} from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {MoviesPage} from "../pages/MoviesPage";

interface IProps extends PropsWithChildren {

}

const MoviesLayout: FC<IProps> = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
            <MoviesPage/>
        </div>
    );
};

export {MoviesLayout};
