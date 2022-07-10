import { SerializedError } from '@reduxjs/toolkit';

export type LoaderState = {
  hasLoadedOnce: boolean;
  status: 'idle' | 'pending' | 'rejected' | 'fulfilled';
  error: SerializedError | null;
};

export const InitialLoaderState: LoaderState = {
  hasLoadedOnce: false,
  status: 'idle',
  error: null,
};

export type WithLoader<T> = T & LoaderState;

export function hasLoadedOnce<T extends LoaderState>(state: T): boolean {
  return state.hasLoadedOnce;
}

export function shouldLoad<T extends LoaderState>(state: T): boolean {
  return !state.hasLoadedOnce && state.status === 'idle';
}
