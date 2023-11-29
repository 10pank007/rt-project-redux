import React, {FC, PropsWithChildren, useEffect} from 'react';
import {MovieInfo} from "./MovieInfo";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/movieSlice";

interface IProps extends PropsWithChildren {
    id: string;
}

const MoviesInfo: FC<IProps> = ({id}) => {


    const {moviesInfo} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(movieActions.getById({id}));
    }, [id, dispatch]);

    return (
        <div>
            {moviesInfo && <MovieInfo moviesInfo={moviesInfo}/>}
        </div>
    );
};

export {MoviesInfo};