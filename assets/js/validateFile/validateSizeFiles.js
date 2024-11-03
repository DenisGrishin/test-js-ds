import { addTextToast } from '../common/showToast';

export const validateSizeFiles = (files) => {
  const maxSizeBytes = 10 * 1024 * 1024;

  let newFiles = files
    .map((file) => {
      if (file.size < maxSizeBytes) {
        return file;
      }

      addTextToast(
        `Файл "${file.name}" не загружен: превышен размер изображения.`
      );
      return;
    })
    .filter((it) => it !== undefined);

  return newFiles;
};
