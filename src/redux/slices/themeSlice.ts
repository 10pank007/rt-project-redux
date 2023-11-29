import {createSlice} from "@reduxjs/toolkit";

interface IState {
    trigger: boolean
}
const initialState: IState = {
    trigger: true
};
const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers: {
        changeTheme: state => {
            state.trigger = !state.trigger
        }
    }
})

const {reducer: themeReducer, actions} = themeSlice;
const themeActions = {
    ...actions
}

export {themeReducer, themeActions};