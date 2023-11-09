import React, {FC, PropsWithChildren} from 'react';
import { IGenres} from "../../interfaces/genres";
import {Link} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genre: IGenres;
}

const Genre: FC<IProps> = ({genre}) => {
    let {name, id} = genre;
    return (
        <div>
            <Link to={`${id}`}>{name}</Link>
        </div>
    );
};

export {Genre};