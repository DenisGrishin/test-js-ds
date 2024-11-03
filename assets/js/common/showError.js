const arrError = [];

export const showError = () => {
  arrError.forEach((element) => {
    alert(element);
  });
};

export const addError = (errorItem) => {
  arrError.push(errorItem);
};
