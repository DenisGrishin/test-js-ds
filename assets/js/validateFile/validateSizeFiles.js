import { showError } from '../common/showError';

export const validateSizeFiles = (files) => {
  const maxSizeBytes = 10 * 1024 * 1024;

  let newFiles = files
    .map((file) => {
      if (file.size < maxSizeBytes) {
        return file;
      }
      showError(
        `Файл не загружен: превышен размер изображения <b>${file.name}</b>.`
      );
      return;
    })
    .filter((it) => it !== undefined);

  return newFiles;
};
