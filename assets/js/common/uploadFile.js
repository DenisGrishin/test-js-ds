import { createListLoadItem } from '../createElement/createListLoadItem';
import { mainValidate } from '../validateFile/mainValidateFile';
import { reomoveListLoadItem } from './functions';
import { showToast } from './showToast';

const uploadFile = () => {
  const fileInput = document.getElementById('file-input');
  const listLoadFile = document.querySelector('.list-load');

  document.addEventListener('change', () => {
    const files = mainValidate(Array.from(fileInput.files), listLoadFile);

    createListLoadItem(files, listLoadFile);
    showToast();
  });

  reomoveListLoadItem(listLoadFile);
};

export default uploadFile;
