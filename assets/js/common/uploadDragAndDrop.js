import { createListLoadItem } from '../createElement/createListLoadItem';
import { mainValidate } from '../validateFile/mainValidateFile';

import { showToast } from './showToast';

export const uploadDragAndDrop = () => {
  const root = document.getElementById('root');
  const listLoadFile = root.querySelector('.list-load');
  if (!root) return;

  const handleFileDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    root.classList.remove('_active');
  };
  const handleFileDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    root.classList.remove('_active');
    const draggedFile = e.dataTransfer;
    const files = draggedFile.files;

    const newFiles = mainValidate(Array.from(files), listLoadFile);
    createListLoadItem(newFiles, listLoadFile);
    showToast();
  };

  //когда файл находится в окно браузера, добавляем класс
  root.addEventListener('dragover', handleFileDragOver, false);
  //когда файл не находится в окно браузера, удаляем класс
  root.addEventListener('dragleave', handleFileDragLeave, false);
  // отпускаем файл над зоной загрузки
  root.addEventListener('drop', handleFileDrop, false);
};
export const handleFileDragOver = (e) => {
  e.preventDefault();
  e.stopPropagation();

  root.classList.add('_active');
};
