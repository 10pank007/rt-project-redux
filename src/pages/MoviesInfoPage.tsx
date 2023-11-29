import React, {FC, PropsWithChildren} from 'react';
import {MoviesInfo} from "../components/MoviesComponent/MoviesInfo";

interface IProps extends PropsWithChildren {
}

const MoviesInfoPage: FC<IProps> = () => {
    return (
        <div>
            <MoviesInfo/>
        </div>
    );
};

export {MoviesInfoPage};