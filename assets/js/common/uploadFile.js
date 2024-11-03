import { createListItem } from '../createElement/createListItem';
import { mainValidate } from '../validateFile/mainValidateFile';

const uploadFile = () => {
  const fileInput = document.getElementById('file-input');
  const listImg = document.querySelector('.list-img');

  //  const createFigure = (reader) => {};

  document.addEventListener('change', function () {
    const files = mainValidate(Array.from(fileInput.files), listImg);

    if (files.length === 0) return;

    createListItem(files, listImg);
  });
};

export default uploadFile;
