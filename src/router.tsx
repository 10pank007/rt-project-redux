import {createBrowserRouter, Navigate} from "react-router-dom";
import {MoviesLayout} from "./layouts/MoviesLayout";
import {MoviesPage} from "./pages/MoviesPage";
import {GenresPage} from "./pages/GenresPage";
import {SearchPage} from "./pages/SearchPage";
import {GenresLayout} from "./layouts/GenresLayout";
import {SearchLayout} from "./layouts/SearchLayout";
import {MoviesInfo} from "./components/MoviesComponent/MoviesInfo";
import {MoviesDetailsLayout} from "./layouts/MoviesDetailsLayout";
import {MoviesInfoPage} from "./pages/MoviesInfoPage";

const router = createBrowserRouter([
    {index: true, element: <Navigate to={"movies"}/>},
    {path: '',  element: <MoviesLayout/>, children: [
            {path: '/movies', element: <MoviesPage/>}
        ]},
    {path: ':id', element: <MoviesDetailsLayout/>, children: [
            {element: <MoviesInfoPage  id={''}/>, }
        ]},
    {element: <GenresLayout/>, children: [
            {path: "/genres", element: <GenresPage/>}
        ]},
    {element: <SearchLayout/>, children: [
            {path: '/search', element: <SearchPage/>}
        ]}
]);

export {router}