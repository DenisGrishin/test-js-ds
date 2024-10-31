import { validateLengthFiles } from './validateLengthFiles';
import { validateSizeFiles } from './validateSizeFiles';
import { validateTypeFiles } from './validateTypeFiles';

export const mainValidate = (obj, imageContainer) => {
  const newFilesLenght = validateLengthFiles(obj, imageContainer);

  if (!newFilesLenght) return;

  const newFilesSize = validateSizeFiles(newFilesLenght);

  if (!newFilesSize) return;

  return validateTypeFiles(newFilesSize);
};
