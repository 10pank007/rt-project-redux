import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IObjMovie, IOneMovie} from "../../interfaces/movie";
import {AxiosError} from "axios";
import {moviesService} from "../../services/moviesService";

interface IState {
    objMovie: IObjMovie,
    moviesInfo: IOneMovie,

}

const initialState: IState = {
    objMovie: {page: 0, results:null, total_pages:0, total_results: 0},
    // moviesInfo: {adult: false, backdrop_path: null, belongs_to_collection: null,
    // budget: 0, genres: [], homepage: null, id: 0, imdb_id: null, original_language: null,
    // original_title: null, overview: null, popularity: 0, poster_path: null,
    // production_companies: [], production_countries: [], release_date: null,
    // revenue: 0, runtime: 0, spoken_languages: [], status: null, tagline: null, title: null,
    // video: false, vote_average: 0, vote_count: 0}
    moviesInfo: null
}

const getAll = createAsyncThunk<IObjMovie, {page: string}>(
    "movieSlice/getAll",
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getById = createAsyncThunk<IOneMovie, {id: string}>(
    "movieSlice/getById",
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMovieById(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.objMovie = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.moviesInfo = action.payload;
            })

});

const {reducer: movieReducer, actions} = movieSlice;
const movieActions = {
    ...actions,
    getAll,
    getById
};

export {movieReducer, movieActions};