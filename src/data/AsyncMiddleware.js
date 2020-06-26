import { act } from "react-dom/test-utils";

const isPromise = (payload) =>
  (typeof payload === "object" || typeof payload === "function") &&
  typeof payload.then === "function";

export const asyncActions = () => (next) => (action) => {
  if (isPromise(action.payload)) {
    action.payload.then((result) => next({ ...action, payload: result }));
  } else {
    next(action);
  }
};
