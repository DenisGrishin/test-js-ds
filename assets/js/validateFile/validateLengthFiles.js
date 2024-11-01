import { showError } from './../common/showError';
import { valideteRepeatNameFile } from './valideteRepeatNameFile';

export const validateLengthFiles = (files, loadImg) => {
  // lengthLoadImg Длина созданых файлов, если они есть
  const lengthLoadImg = loadImg.children.length;
  const maxLength = 5;

  if (lengthLoadImg + files.length >= maxLength + 1) {
    showError('Превышено допустимое количество изображений: максимум 5.');
  }

  if (!lengthLoadImg) {
    return files.length <= 5 ? files : files.slice(0, maxLength);
  }

  let noRepeatNameFiles = valideteRepeatNameFile(files, loadImg);

  return noRepeatNameFiles.slice(0, maxLength - lengthLoadImg);
};
