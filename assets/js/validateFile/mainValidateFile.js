import { validateLengthFiles } from './validateLengthFiles';

export const mainValidate = (obj) => {
  const newObj = validateLengthFiles(obj);

  return newObj;
};
