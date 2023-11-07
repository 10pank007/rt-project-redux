import React, {FC, PropsWithChildren} from 'react';
import {Genres} from "../components/GenresComponent/Genres";

interface IProps extends PropsWithChildren {
}

const GenresPage: FC<IProps> = () => {

    return (
        <div>
            <Genres/>
        </div>
    );
};

export {GenresPage};