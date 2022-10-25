import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', name: 'Duffgor', hours: 5, color: '#c7d19d' },
  { id: '2', name: 'Söbü', hours: 53, color: '#1e757b' },
  { id: '25', name: 'Thiliexie', hours: 83, color: '#59671d' },
  { id: '22', name: 'CrazyBean', hours: 18, color: '#1d673d' },
  { id: '288', name: 'Cevahir', hours: 35, color: '#e84ff2' },
  { id: '21', name: 'Ajita', hours: 999, color: '#ffffff' },
  { id: '285', name: 'Jintha', hours: 999, color: '#021a20' },
];

const teachersSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    addTeacher: {
      prepare(name, hours) {
        return {
          payload: {
            id: nanoid(),
            name,
            hours,
          },
        };
      },
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    deleteTeacher: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectAllTeachers = (state) => state.teacher;
export const { addTeacher, deleteTeacher } = teachersSlice.actions;

export default teachersSlice.reducer;
