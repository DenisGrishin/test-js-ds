import { validateLengthFiles } from './validateLengthFiles';
import { validateSizeFiles } from './validateSizeFiles';

export const mainValidate = (obj, imageContainer) => {
  const newFilesLenght = validateLengthFiles(obj, imageContainer);

  if (newFilesLenght) {
    const newFilesSize = validateSizeFiles(newFilesLenght);
    return newFilesSize;
  }
};
