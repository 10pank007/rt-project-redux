import React, {FC, PropsWithChildren} from 'react';
import {Movies} from "../components/MoviesComponent/Movies";

interface IProps extends PropsWithChildren {
}

const MoviesPage: FC<IProps> = () => {

    return (
        <div>
            <Movies/>
        </div>
    );
};

export {MoviesPage};