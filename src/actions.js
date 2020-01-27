// Action types
export const DEFINE_NUMBER = "DEFINE_NUMBER";

// Action creators

export function defineNumber(addedNumber) {
  return {
    type: DEFINE_NUMBER,
    addedNumber
  };
}
