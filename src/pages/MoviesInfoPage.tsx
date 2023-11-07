import React, {FC, PropsWithChildren} from 'react';
import {MoviesInfo} from "../components/MoviesComponent/MoviesInfo";
import {useParams} from "react-router-dom";

interface IProps extends PropsWithChildren {
    id: string
}

const MoviesInfoPage: FC<IProps> = () => {
    let {id} = useParams();
    console.log(id);

    return (
        <div>
            <MoviesInfo id={id}/>
        </div>
    );
};

export {MoviesInfoPage};