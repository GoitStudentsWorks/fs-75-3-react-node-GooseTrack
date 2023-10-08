import { configureStore } from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authSlice';
import { reviewReducer } from './reviews/reviewsSlice';
import { calendarReducer } from './calendar/calendarSlice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

// const reviewsPersistConfig = {
//     key: 'reviews',
//     storage,
//     whitelist: ['userReview'],
// };

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        reviews: reviewReducer,
        calendar: calendarReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    PAUSE,
                    REHYDRATE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
