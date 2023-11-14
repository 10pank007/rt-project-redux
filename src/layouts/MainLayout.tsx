import React, {FC, PropsWithChildren, useState} from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {MyContext} from "../contexts/MyContext";

interface IProps extends PropsWithChildren {

}

const MainLayout: FC<IProps> = () => {
    const [text, setText] = useState("");

    return (
        <MyContext.Provider value={{text, setText}}>
            <div style={{backgroundColor: text}}>
                <Header/>
                <Outlet/>
            </div>
        </MyContext.Provider>

    );
};

export {MainLayout};
