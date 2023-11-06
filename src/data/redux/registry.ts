import { Reducer, ReducersMapObject } from 'redux';

type OnChangeHandler = (reducers: ReducersMapObject<unknown, any>) => void;

class ReducerRegistry {
  protected emitOnChange: OnChangeHandler | null = null;
  protected reducers: ReducersMapObject<unknown, any> = {};

  getReducers() {
    return { ...this.reducers };
  }

  register(name: string, reducer: Reducer) {
    this.reducers = { ...this.reducers, [name]: reducer };

    if (this.emitOnChange) {
      this.emitOnChange(this.getReducers());
    }
  }

  onChange(listener: OnChangeHandler) {
    this.emitOnChange = listener;
  }
}

export const reducerRegistry = new ReducerRegistry();
