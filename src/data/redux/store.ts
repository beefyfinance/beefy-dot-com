import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducerRegistry } from './registry';
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
import { AppState } from './types';

const staticReducers = {};

export const store = configureStore({
  reducer: combineReducers<AppState>({ ...staticReducers, ...reducerRegistry.getReducers() }),
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

reducerRegistry.onChange(reducers => {
  store.replaceReducer(combineReducers<AppState>({ ...staticReducers, ...reducers }));
});
