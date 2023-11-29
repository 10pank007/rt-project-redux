import React, {FC, PropsWithChildren} from 'react';

import css from './Header.module.css';
import img from './unnamed.png';
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {themeActions} from "../../redux/slices/themeSlice";

interface IProps extends PropsWithChildren {
}

const Header: FC<IProps> = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={css.Header}>
            <div className={css.box1}>
                <p>The MovieDB</p>
            </div>
            <div className={css.box2}>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
                <NavLink to={'/search'}>Search</NavLink>
            </div>
            <div className={css.avatar}>
                <button onClick={() => dispatch(themeActions.changeTheme())}>
                    Click me
                </button>
                <div>Movie</div>
                <img src={img}  alt={'img'}/>
                <div>buff</div>
            </div>

        </div>
    );
};

export {Header};