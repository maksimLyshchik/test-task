export const throttle = (func, ms, immediate = true) => {

  let timeout = null;
  let initialCall = false;
  let savedArgs;
  let savedThis;

  function wrapper() {
    const callNow = immediate && initialCall;

    if (initialCall) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    const next = () => {
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }

      func.apply(this, arguments);
      timeout = false;
    };

    if (callNow) {
      next();
      initialCall = true;
    }

    if (!timeout) {
      timeout = setTimeout(next, ms);
    }
  }

  return wrapper;
};
