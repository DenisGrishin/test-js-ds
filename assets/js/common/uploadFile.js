import { createListItem } from '../createElement/createListItem';
import { mainValidate } from '../validateFile/mainValidateFile';
import { showError } from './showError';

const uploadFile = () => {
  const fileInput = document.getElementById('file-input');
  const listImg = document.querySelector('.list-img');

  document.addEventListener('change', () => {
    const files = mainValidate(Array.from(fileInput.files), listImg);

    if (files.length === 0) return;

    createListItem(files, listImg);

    showError();
  });
};

export default uploadFile;
