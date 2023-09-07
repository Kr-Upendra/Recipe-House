export const capitilize = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const makeUnderstandAble = (value) => {
  return value
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
