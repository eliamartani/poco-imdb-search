const debounce = (fn, delay = 500) => {
  let timeoutId = null;

  return function(...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
export default debounce;
