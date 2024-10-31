import { showError } from './../common/showError';

export const validateLengthFiles = (files, imageContainer) => {
  // lengthLoadImg Длина созданых файлов, если они есть
  const lengthLoadImg = imageContainer.children.length;
  const maxLength = 5;

  if (lengthLoadImg >= maxLength) {
    showError('Превышено допустимое количество изображений: максимум 5.');
    return false;
  }

  if (lengthLoadImg + files.length >= maxLength + 1) {
    showError('Можно загрузить не более 5 изображений за раз.');
  }

  if (!lengthLoadImg) {
    return files.length <= 5 ? files : files.slice(0, maxLength);
  }
  return files.slice(0, maxLength - lengthLoadImg);
};
