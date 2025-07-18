import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import userReducer from './userSlice';
import userPreferenceReducer from './userPreferenceSlice';
import budgetReducer from './budgetSlice';
import transactionReducer from './transactionSlice';
import familyReducer from './familySlice';
import familyMemberReducer from './familyMemberSlice';
import accountReducer from './accountSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({
    user: userReducer,
    userPreference: userPreferenceReducer,
    family: familyReducer,
    familyMember: familyMemberReducer,
    transaction: transactionReducer,
    budget: budgetReducer,
    account: accountReducer,
})

const persistConfig = {
  key: "auth",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
              ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
          },
      }),  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);