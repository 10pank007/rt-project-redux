import React, {FC, PropsWithChildren, useEffect} from 'react';
import {Genre} from "./Genre";
import css from './Genres.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices/genreSlice";

interface IProps extends PropsWithChildren {
}

const Genres: FC<IProps> = () => {
    const {genres: {genres}} = useAppSelector(state => state.genre)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch]);
    console.log(genres)
    return (
        <div className={css.Genres}>
            {genres && genres.map(value => <Genre genre={value}/>)}
        </div>
    );
};

export {Genres};