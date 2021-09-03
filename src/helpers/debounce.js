let timeout;

export const debounce = (func, ms) => {

  return function () {
    const fnCall = () => func.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};
