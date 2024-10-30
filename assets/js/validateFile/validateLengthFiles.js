// возвращаем длину всех элементов загруженных, и массив элементов загрузки
export const validateLengthFiles = (files) => {
  // lengthLoadImg Длина созданых файлов, если они есть
  const lengthLoadImg = imageContainer.children.length;
  if (!lengthLoadImg) {
    return [files.length, files.length <= 5 ? files : files.slice(0, 5)];
  }

  return [
    lengthLoadImg,
    lengthLoadImg <= 5 ? files : files.slice(0, 5 - lengthLoadImg),
  ];
};
