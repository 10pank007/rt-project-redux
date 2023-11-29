import React, {FC, PropsWithChildren, useState} from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {useAppSelector} from "../hooks/reduxHooks";
import css from "./MainLayout.module.css"

interface IProps extends PropsWithChildren {

}

const MainLayout: FC<IProps> = () => {
    const {trigger} = useAppSelector(state => state.theme);

    return (
            <div className={trigger ? css.light : css.dark}>
                <Header/>
                <Outlet/>
            </div>


    );
};

export {MainLayout};
