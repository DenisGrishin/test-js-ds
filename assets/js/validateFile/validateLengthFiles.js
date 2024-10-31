export const validateLengthFiles = (obj) => {
  const { containerImg, files, arrError } = obj;

  // lengthLoadImg Длина созданых файлов, если они есть
  const lengthLoadImg = containerImg.children.length;

  const errorItem =
    lengthLoadImg + files.length < 6
      ? 'Превышено допустимое количество файлов: 5'
      : '';

  if (!lengthLoadImg) {
    return {
      ...obj,
      files: files.length <= 5 ? files : files.slice(0, 5),
      arrError: [...arrError, errorItem],
    };
  }

  return {
    ...obj,
    files: lengthLoadImg <= 5 ? files : files.slice(0, 5 - lengthLoadImg),
    arrError: [...arrError, errorItem],
  };
};
