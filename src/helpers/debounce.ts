export const debounce = (fn: Function, ms: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return function (...args: any[]) {
    const fnCall = () => {
      fn(...args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(fnCall, ms);
  };
};
