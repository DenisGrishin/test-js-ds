import createPreviewFile from './createElement/createPreviewFile';
import { mainValidate } from './validateFile/mainValidateFile';

const uploadFile = () => {
  const fileInput = document.getElementById('file-input');
  const listImg = document.querySelector('.list-img');
  const countImage = document.querySelector('.upload-file__count-iamge');

  //  const createFigure = (reader) => {};

  document.addEventListener('change', () => {
    const files = mainValidate(Array.from(fileInput.files), listImg);

    if (!files) return;

    // до делать
    // countImage.textContent = `Вы загрузили ${files.length} фото`;
    createPreviewFile(files, listImg);
  });
};

export default uploadFile;
