export class CircularList<T> {
  protected index: number = 0;

  constructor(protected array: T[]) {}

  public peek(): T {
    return this.array[this.index];
  }

  public next(): T {
    const value = this.array[this.index];

    if (++this.index >= this.array.length) {
      this.index = 0;
    }

    return value;
  }

  get length() {
    return this.array.length;
  }
}

export function circularFill<T>(source: T[], count: number): T[] {
  if (source.length === count) {
    return source;
  }

  if (count < source.length) {
    return source.slice(0, count);
  }

  const whole = Math.trunc(count / source.length);
  const part = count % source.length;

  return [...new Array(whole).fill(source).flat(), ...source.slice(0, part)];
}

export function offsetMap<T, R = any>(
  source: T[],
  offset: number = 0,
  callback: (value: T, index: number, sourceValue: T, sourceIndex: number) => R
): R[] {
  return source.map((sourceValue, index) => {
    let sourceIndex = index + (offset % source.length);
    if (sourceIndex > source.length - 1) {
      sourceIndex -= source.length;
    }
    const value = source[sourceIndex];

    return callback(value, index, sourceValue, sourceIndex);
  });
}
