import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage";
import {GenresPage} from "./pages/GenresPage";
import {SearchPage} from "./pages/SearchPage";
import {MoviesInfoPage} from "./pages/MoviesInfoPage";
import {GenreLists} from "./components/GenresComponent/GenreLists";

const router = createBrowserRouter([
    {path: '',  element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'inform/:id' , element: <MoviesInfoPage id={''}/>},
            {path: 'genres', element: <GenresPage/>, children: [
                    {path:':id', element: <GenreLists/>}
                ]},
            {path: 'search', element: <SearchPage/>}
        ]},

]);

export {router}