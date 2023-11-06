import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage";
import {GenresPage} from "./pages/GenresPage";
import {SearchPage} from "./pages/SearchPage";

const router = createBrowserRouter([
    //{index: true, element: <Navigate to={"movies"}/>},
    {path: '', element: <MainLayout/>, children: [
            {path: '/movies', element: <MoviesPage/>},
            {path: '/genres', element: <GenresPage/>},
            {path: '/search', element: <SearchPage/>}
        ]},

]);

export {router}