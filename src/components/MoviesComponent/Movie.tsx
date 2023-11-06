import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IMovie} from "../../interfaces/movie";
import {photoService} from "../../services/photoService";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    let {original_title, poster_path, vote_average} = movie;
    const [photo, setPhoto] = useState(null);
    useEffect(()=> {
        photoService.getPhotoById(poster_path).then(value => setPhoto(value.data));
    }, []);
    console.log(photo)
    return (
        <div>
            <img src={photo} alt={original_title}/>
            <div>{original_title}</div>
            <div>{vote_average}</div>
        </div>
    );
}

export {Movie};