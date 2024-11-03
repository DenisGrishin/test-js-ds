import { createListItem } from '../createElement/createListItem';
import { mainValidate } from '../validateFile/mainValidateFile';
import { showToast } from './showToast';

const uploadFile = () => {
  const fileInput = document.getElementById('file-input');
  const listImg = document.querySelector('.list-img');

  document.addEventListener('change', () => {
    const files = mainValidate(Array.from(fileInput.files), listImg);

    createListItem(files, listImg);
    showToast();
  });
};

export default uploadFile;
