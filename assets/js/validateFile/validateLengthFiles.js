import { addTextToast } from '../common/showToast';
import { valideteRepeatNameFile } from './valideteRepeatNameFile';

export const validateLengthFiles = (files, loadFile) => {
  // lengthLoadImg Длина созданых файлов, если они есть
  const lengthLoadImg = loadFile.children.length;
  const maxLength = 5;

  if (lengthLoadImg + files.length >= maxLength + 1) {
    addTextToast('Превышено допустимое количество изображений: максимум 5.');
  }

  if (!lengthLoadImg) {
    return files.length <= 5 ? files : files.slice(0, maxLength);
  }

  let noRepeatNameFiles = valideteRepeatNameFile(files, loadFile);

  return noRepeatNameFiles.slice(0, maxLength - lengthLoadImg);
};
