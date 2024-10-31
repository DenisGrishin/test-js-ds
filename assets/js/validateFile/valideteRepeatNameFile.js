import { showError } from '../common/showError';

export const valideteRepeatNameFile = (files, imageContainer) => {
  // собираем массив имен файлов уже загруженных в инпут
  let nameLoadFiles = Array.from(
    imageContainer.querySelectorAll('figcaption')
  ).map((name) => name.textContent);

  const newFiles = files
    .map((file) => {
      if (nameLoadFiles.includes(file.name)) {
        showError(`Изображение с таким ${file.name} именем уже существует.`);
        return;
      }
      return file;
    })
    .filter((it) => it !== undefined);

  return newFiles;
};
