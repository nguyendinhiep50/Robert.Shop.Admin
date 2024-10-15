import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
    items: string[];
}

const initialState: UserState = {
    items: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        add: (state, action) => {
            state.items.push(action.payload);
        },

        // remove: (state, action) => {
        //     state.items = state.items.filter(user => user.id !== action.payload.id);
        // },

        // update: (state, action) => {
        //     const { id, updatedData } = action.payload;
        //     const index = state.items.findIndex(user => user.id === id);
        //     if (index !== -1) {
        //         state.items[index] = { ...state.items[index], ...updatedData };
        //     }
        // },
    },
});

export const { add } = userSlice.actions;

export default userSlice.reducer;
