let isThrottled = false;
let savedArgs = null;
let savedThis = null;

export const throttle = (func, ms) => {

  function wrapper() {

    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;

      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  };

  return wrapper;
};
