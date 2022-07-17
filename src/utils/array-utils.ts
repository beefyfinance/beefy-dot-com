export function offsetIndex(length: number, offset: number, index: number) {
  const dir = offset < 0 ? -1 : 1;
  let newIndex = index + (offset % length) * dir;
  if (newIndex > length - 1) {
    newIndex -= length;
  }
  if (newIndex < 0) {
    newIndex += length;
  }

  return newIndex;
}

export function arrayRepeat<T>(arr: T[], times: number) {
  return new Array(times).fill(arr).flat();
}
