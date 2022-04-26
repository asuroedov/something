export function debounce(callback: Function, timeoutMs: number) {
  let lastCall: number;
  let lastCallTimer: NodeJS.Timeout;

  return function perform(...args: []) {
    let previousCall = lastCall;

    lastCall = Date.now();

    if (previousCall && lastCall - previousCall <= timeoutMs) {
      clearTimeout(lastCallTimer);
    }
    lastCallTimer = setTimeout(() => callback(...args), timeoutMs);
  };
}
