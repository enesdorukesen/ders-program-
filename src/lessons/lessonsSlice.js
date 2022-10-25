import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '123', day: 'pazartesi', teacher: 'ede', isActive: false },
  { id: '124', day: 'pazartesi', teacher: 'ede', isActive: false },
  { id: '125', day: 'pazartesi', teacher: 'ede', isActive: false },
  { id: '1246', day: 'pazartesi', teacher: 'ede', isActive: false },
  { id: '1247', day: 'pazartesi', teacher: 'ede', isActive: false },
  { id: '12348', day: 'salı', teacher: 'csse', isActive: false },
  { id: '12347', day: 'salı', teacher: 'csse', isActive: false },
  { id: '12354', day: 'salı', teacher: 'csse', isActive: false },
  { id: '123413', day: 'salı', teacher: 'csse', isActive: false },
  { id: '1234123', day: 'salı', teacher: 'csse', isActive: false },
  { id: '123168447724', day: 'çarşamba', teacher: 'csse', isActive: false },
  { id: '12316785575844', day: 'çarşamba', teacher: 'csse', isActive: false },
  { id: '1231671171844', day: 'çarşamba', teacher: 'csse', isActive: false },
  { id: '123167474844', day: 'çarşamba', teacher: 'csse', isActive: false },
  { id: '123111117476844', day: 'çarşamba', teacher: 'csse', isActive: false },
  { id: '123156844', day: 'çarşamba', teacher: 'csse', isActive: false },
  { id: '12316dwdw844', day: 'perşembe', teacher: 'csse', isActive: false },
  { id: '12316e2e2844', day: 'perşembe', teacher: 'csse', isActive: false },
  { id: '1231wewe6844', day: 'perşembe', teacher: 'csse', isActive: false },
  { id: '1231cwcwe6844', day: 'perşembe', teacher: 'csse', isActive: false },
  { id: '1231682e2e44', day: 'perşembe', teacher: 'csse', isActive: false },
  { id: '1231wewww6844', day: 'perşembe', teacher: 'csse', isActive: false },
  { id: '124315451', day: 'cuma', teacher: 'efe', isActive: false },
  { id: '113546243', day: 'cuma', teacher: 'efe', isActive: false },
  { id: '121243', day: 'cuma', teacher: 'efe', isActive: false },
  { id: '126143', day: 'cuma', teacher: 'efe', isActive: false },
  { id: '1221403', day: 'cuma', teacher: 'efe', isActive: false },
  { id: '124133', day: 'cuma', teacher: 'efe', isActive: false },
];

const lessonSlice = createSlice({
  name: 'lessonsSlice',
  initialState,
  reducers: {
    addLesson: {
      prepare(day, teacher, color) {
        return {
          payload: {
            id: nanoid(),
            isActive: false,
            day,
            teacher,
            color,
          },
        };
      },
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    deleteLesson: (state, action) => {
      return state.filter((item) => item.isActive !== true);
    },
    selectLesson: (state, action) => {
      let index = state.findIndex((item) => item.id === action.payload);
      state[index].isActive = !state[index].isActive;
    },
  },
});

export const selectAllLessons = (state) => state.lesson;
export const { addLesson, deleteLesson, updateLesson, selectLesson } =
  lessonSlice.actions;
export default lessonSlice.reducer;
