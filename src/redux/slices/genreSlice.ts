import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IObjGenres} from "../../interfaces/genres";
import {AxiosError} from "axios";
import {genresService} from "../../services/genresService";
import {IObjMovie} from "../../interfaces/movie";

interface IState {
    genres: IObjGenres,
    objGenre: IObjMovie,
}

const initialState: IState = {
    genres: {genres: []},
    objGenre: {page: 0, results:null, total_pages:0, total_results: 0}
}

const getAll = createAsyncThunk<IObjGenres, void>(
    "genreSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAllGenres();
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getByName = createAsyncThunk<IObjMovie, {page: string, with_genres: string}>(
    "genreSlice/getByName",
    async ({page, with_genres}, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getGenreByName(page, with_genres);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const genreSlice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload;
            })
            .addCase(getByName.fulfilled, (state, action) => {
                state.objGenre = action.payload
            })

});

const {reducer: genreReducer, actions} = genreSlice;
const genreActions = {
    ...actions,
    getAll,
    getByName
};

export {genreReducer, genreActions}