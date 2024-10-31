import { showError } from '../common/showError';

export const validateTypeFiles = (files) => {
  const allowedTypes = ['jpg', 'jpeg', 'png'];

  const newFiles = files
    .map((file) => {
      let indexSymbol = file.type.lastIndexOf('/');
      let nameType = file.type.slice(indexSymbol + 1);

      if (allowedTypes.includes(nameType)) {
        return file;
      }
      showError('Неверный формат файла. Разрешены только JPG,JPEG, PNG.');
    })
    .filter((it) => it !== undefined);

  return newFiles;
};
