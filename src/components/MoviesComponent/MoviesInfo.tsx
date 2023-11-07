import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IOneMovie} from "../../interfaces/movie";
import {moviesService} from "../../services/moviesService";
import {MovieInfo} from "./MovieInfo";

interface IProps extends PropsWithChildren {
    id: string;
}

const MoviesInfo: FC<IProps> = ({id}) => {
    const [moviesInfo, setMoviesInfo] = useState<IOneMovie>();
    useEffect(() => {
        moviesService.getMovieById(id).then(value => setMoviesInfo(value.data))
    }, []);
    console.log(moviesInfo)

    return (
        <div>
            {moviesInfo && <MovieInfo moviesInfo={moviesInfo}/>}
        </div>
    );
};

export {MoviesInfo};