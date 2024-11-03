import { createListItem } from '../createElement/createListItem';
import { mainValidate } from '../validateFile/mainValidateFile';
import { reomoveListItem } from './functions';
import { showToast } from './showToast';

const uploadFile = () => {
  const fileInput = document.getElementById('file-input');
  const listLoadFile = document.querySelector('.list-load');

  document.addEventListener('change', () => {
    const files = mainValidate(Array.from(fileInput.files), listLoadFile);

    createListItem(files, listLoadFile);
    showToast();
  });

  reomoveListItem(listLoadFile);
};

export default uploadFile;
