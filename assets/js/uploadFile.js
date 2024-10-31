import createPreviewFile from './createElement/createPreviewFile';
import { mainValidate } from './validateFile/mainValidateFile';

const uploadFile = () => {
  const fileInput = document.getElementById('file-input');
  const imageContainer = document.querySelector('.upload-file__images');
  const countImage = document.querySelector('.upload-file__count-iamge');

  //  const createFigure = (reader) => {};

  //  const validateTypeFiles = (files) => {};
  //  const validateSizeFiles = (files) => {};
  //  const showError = (files) => {};

  document.addEventListener('change', () => {
    const files = mainValidate(Array.from(fileInput.files), imageContainer);

    if (!files) return;

    // if (lengthFiles > 5) {
    //   alert('Превышено допустимое количество файлов: 5');
    // }

    // до делать
    countImage.textContent = `Вы загрузили ${files.length} фото`;
    createPreviewFile(files, imageContainer);
  });
};

export default uploadFile;
