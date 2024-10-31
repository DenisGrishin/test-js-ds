import { showError } from './../common/showError';

export const validateLengthFiles = (obj) => {
  const { containerImg, files, arrError } = obj;

  // lengthLoadImg Длина созданых файлов, если они есть
  const lengthLoadImg = containerImg.children.length;
  debugger;
  if (lengthLoadImg >= 5) {
    showError('Допустимое количество файлов превышено: максимум 5.');
    return;
  }

  if (lengthLoadImg + files.length >= 6) {
    showError('Можно загрузить не более 5 фото за раз.');
  }

  if (!lengthLoadImg) {
    return {
      ...obj,
      files: files.length <= 5 ? files : files.slice(0, 5),
    };
  }

  return {
    ...obj,
    files: lengthLoadImg <= 5 ? files : files.slice(0, 5 - lengthLoadImg),
  };
};
