import { validateLengthFiles } from './validateLengthFiles';

export const mainValidate = (obj) => {
  const newFiles = validateLengthFiles(obj);

  return newFiles;
};
