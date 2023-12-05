import { configureStore } from '@reduxjs/toolkit';
import pomodoroReducer from './pomodoroSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, pomodoroReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store)

// Create the root reducer separately so we can extract the RootState type
// const rootReducer = combineReducers({
//   pomodoro: pomodoroReducer
//})

export const setupStore = preloadedState => {
  return configureStore({
    reducer: pomodoroReducer,
    preloadedState,
  })
}
