import { configureStore } from '@reduxjs/toolkit';

import lessonReducer from '../lessons/lessonsSlice';
import teacherReducer from '../teachers/teachersSlice';
import scheduleReducer from '../updatePanel/scheduleSlice';

export const store = configureStore({
  reducer: {
    lesson: lessonReducer,
    teacher: teacherReducer,
    schedule: scheduleReducer,
  },
});
