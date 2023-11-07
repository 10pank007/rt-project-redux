import React, {FC, PropsWithChildren} from 'react';
import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import {GenresPage} from "../pages/GenresPage";

interface IProps extends PropsWithChildren {
}

const GenresLayout: FC<IProps> = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <GenresPage/>
        </div>
    );
};

export {GenresLayout};