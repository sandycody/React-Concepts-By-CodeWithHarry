// We have configured a store and we can store states here 

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})


/* Link to read more about redux */

// https://www.freecodecamp.org/news/redux-and-redux-toolkit-for-beginners/#:~:text=the%20company