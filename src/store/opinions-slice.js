import { createSlice } from "@reduxjs/toolkit";

const opSlice = createSlice({
    name: 'op',
    initialState: { 
        opinions: [],
        opFormVisibile: false,
        totalOpQuantity: 0,
     },
    reducers: {
        toggle(state) {
            state.opFormVisibile = !state.opFormVisibile;
        },
        addOpinion(state, action) {
            const newOp = action.payload;
            const existingOp = state.opinions.find((op) => op.name === newOp.name && op.title === newOp.title);
            state.totalOpQuantity++;
            if (!existingOp) {
                state.opinions.push({
                    id: Math.random(),
                    title: newOp.title,
                    text: newOp.text,
                    name: newOp.name,
                });
            }
        },
    }
})

export const opActions = opSlice.actions;

export default opSlice;