import { validateLengthFiles } from './validateLengthFiles';
import { validateSizeFiles } from './validateSizeFiles';
import { validateTypeFiles } from './validateTypeFiles';

export const mainValidate = (files, imageContainer) => {
  const newFilesLenght = validateLengthFiles(files, imageContainer);

  if (!newFilesLenght) return;

  const newFilesSize = validateSizeFiles(newFilesLenght);

  if (!newFilesSize) return;

  return validateTypeFiles(newFilesSize);
};
