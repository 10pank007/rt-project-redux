import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {genresService} from "../../services/genresService";
import {IGenres} from "../../interfaces/genres";
import {Genre} from "./Genre";

interface IProps extends PropsWithChildren {
}

const Genres: FC<IProps> = () => {
    const [genres, setGenres] = useState<IGenres[]>();
    useEffect(() => {
        genresService.getAllGenres().then(({data: {genres}}) => setGenres(genres));
    }, []);
    console.log(genres)
    return (
        <div>
            {genres && genres.map(value => <Genre genre={value}/>)}
        </div>
    );
};

export {Genres};