import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {GenreMovies} from "./GenreMovies";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices/genreSlice";

interface IProps extends PropsWithChildren {

}

const GenreLists: FC<IProps> = () => {
    let {id} = useParams();
    let [query] = useSearchParams({page: '1'});
    let page = query.get('page');

    const {objGenre} =useAppSelector(state => state.genre);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(genreActions.getByName({page, with_genres: id}));
    }, [id, page, dispatch]);

    return (
        <div>
            {objGenre && <GenreMovies objGenre={objGenre} page={page}/>}
</div>
)
    ;
};

export {GenreLists};