import { showError } from '../common/showError';

export const valideteRepeatNameFile = (files, loadFile) => {
  // собираем массив имен файлов уже загруженных в инпут
  let nameLoadFiles = Array.from(loadFile.querySelectorAll('li')).map(
    (item) => item.querySelector('span[data-name]').dataset.name
  );

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
