import React, {FC, PropsWithChildren, useContext} from 'react';

import css from './Header.module.css';
import img from './unnamed.png';
import {NavLink} from "react-router-dom";
import {MyContext} from "../../contexts/MyContext";

interface IProps extends PropsWithChildren {
}

const Header: FC<IProps> = () => {
    const { text, setText } = useContext(MyContext);
    let bool = true;


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
                <button onClick={() => {
                setText('white')}}>
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