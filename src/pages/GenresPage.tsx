import React, {FC, PropsWithChildren} from 'react';
import {Genres} from "../components/GenresComponent/Genres";
import {Outlet} from "react-router-dom";


interface IProps extends PropsWithChildren {
}

const GenresPage: FC<IProps> = () => {

    return (
        <div>
            <Genres/>
            <Outlet/>
        </div>
    );
};

export {GenresPage};