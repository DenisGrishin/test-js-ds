import { validateLengthFiles } from './validateLengthFiles';
import { validateSizeFiles } from './validateSizeFiles';
import { validateTypeFiles } from './validateTypeFiles';

export const mainValidate = (files, loadImg) => {
  const newFilesLenght = validateLengthFiles(files, loadImg);

  if (newFilesLenght.length === 0) return;

  const newFilesSize = validateSizeFiles(newFilesLenght);

  if (newFilesLenght.length === 0) return;

  return validateTypeFiles(newFilesSize);
};
