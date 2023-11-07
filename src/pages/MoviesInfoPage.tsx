import React, {FC, PropsWithChildren} from 'react';
import {MoviesInfo} from "../components/MoviesComponent/MoviesInfo";

interface IProps extends PropsWithChildren {
    id: string
}

const MoviesInfoPage: FC<IProps> = ({id}) => {

    return (
        <div>
            <MoviesInfo id={id}/>
        </div>
    );
};

export {MoviesInfoPage};