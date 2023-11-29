import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IObjMovie} from "../../interfaces/movie";
import {AxiosError} from "axios";
import {searchService} from "../../services/searchService";

interface IState {
    search: string,
    movie: IObjMovie
}
const initialState: IState = {
    search: null,
    movie: {page: 0, results:null, total_pages:0, total_results: 0}
};

const getSearch = createAsyncThunk<IObjMovie, {query: string, page: string}>(
    "searchSlice/getSearch",
    async ({query, page}, {rejectWithValue}) => {
        try {
            const {data} = await searchService.getByQuery(query, page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)
const searchSlice = createSlice({
    name: "searchSlice",
    initialState,
    reducers: {
        putSearch: (state, action) => {
            state.search = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getSearch.fulfilled, (state, action) => {
                state.movie = action.payload;
            })
});

const {reducer: searchReducer, actions} = searchSlice;
const searchActions = {
    ...actions,
    getSearch
}

export {searchReducer, searchActions}