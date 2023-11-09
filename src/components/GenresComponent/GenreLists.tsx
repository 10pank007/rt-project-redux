import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import {genresService} from "../../services/genresService";
import {IObjMovie} from "../../interfaces/movie";
import {GenreMovies} from "./GenreMovies";

interface IProps extends PropsWithChildren {

}

const GenreLists: FC<IProps> = () => {
    let {id} = useParams();
    const [objGenre, setObjGenre] = useState<IObjMovie>();
    let [query, setQuery] = useSearchParams({page: '1'});
    let page = query.get('page');
    useEffect(() => {
        genresService.getGenreByName(page, id).then(value => setObjGenre(value.data));
    }, [id, page]);
    console.log(objGenre);

    return (
        <div>
            {objGenre && <GenreMovies objGenre={objGenre} page={page}/>}
</div>
)
    ;
};

export {GenreLists};