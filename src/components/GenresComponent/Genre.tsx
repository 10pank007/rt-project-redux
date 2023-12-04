import React, {FC, PropsWithChildren} from 'react';
import { IGenres} from "../../interfaces/genres";
import {Link} from "react-router-dom";
import css from "./Genre.module.css"

interface IProps extends PropsWithChildren {
    genre: IGenres;
}

const Genre: FC<IProps> = ({genre}) => {
    let {name, id} = genre;
    return (
        <div className={css.Genre}>
            <Link to={`${id}/${name}`}>{name}</Link>
        </div>
    );
};

export {Genre};