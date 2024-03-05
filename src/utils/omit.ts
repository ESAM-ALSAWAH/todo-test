export function omit<T, K extends keyof T>(
  obj: T,
  keysToOmit: K[]
): Omit<T, K> {
  const newObj = { ...obj };

  keysToOmit.forEach(key => {
    delete newObj[key];
  });

  return newObj;
}
