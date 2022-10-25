import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    createSchedule: (state, action) => {
      state.push(action.payload);
    },
  },
}); 

export const selectAllSchedule = (state) => state.schedule;
export const { createSchedule } = scheduleSlice.actions;

export default scheduleSlice.reducer;
