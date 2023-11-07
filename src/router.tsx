import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage";
import {GenresPage} from "./pages/GenresPage";
import {SearchPage} from "./pages/SearchPage";
import {MoviesInfoPage} from "./pages/MoviesInfoPage";

const router = createBrowserRouter([
    {path: '',  element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'inform/:id' , element: <MoviesInfoPage id={''}/>},
            {path: 'genres', element: <GenresPage/>},
            {path: 'search', element: <SearchPage/>}
        ]},
    // {path: ':id', element: <MoviesDetailsLayout/>, children: [
    //         {element: <MoviesInfoPage  id={''}/>, }
    //     ]},
    // {element: <GenresLayout/>, children: [
    //
    //     ]},
    // {element: <SearchLayout/>, children: [
    //
    //     ]}
]);

export {router}