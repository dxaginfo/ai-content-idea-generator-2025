import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import ideaReducer from './slices/ideaSlice';
import calendarReducer from './slices/calendarSlice';

// Placeholder slice (to be implemented)
const authReducer = (state = {}, action: any) => state;
const ideaReducer = (state = {}, action: any) => state;
const calendarReducer = (state = {}, action: any) => state;

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ideas: ideaReducer,
    calendar: calendarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
