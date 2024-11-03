import { createToast } from '../createElement/createToast';

const arrText = [];

export const showToast = () => {
  createToast(arrText);
};

export const addTextToast = (textItem) => {
  arrText.push(textItem);
};

export const delTextArrToast = () => {
  arrText.length = 0;
};
