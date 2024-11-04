import '../style/style.scss';
import createDom from './createElement/createDom';
import uploadFile from './common/uploadFile';
import { handleSubmit } from './common/handleSubmit';
import { handeleListDragAdnDrop } from './common/handeleListDragAdnDrop';
import { uploadDragAndDrop } from './common/uploadDragAndDrop';

// создаем DOM
createDom();

if (document.querySelector('.upload-file')) {
  const fileInput = document.getElementById('file-input');
  const listLoadFile = document.querySelector('.list-load');
  // загрузка файла, через события onChange
  uploadFile(fileInput, listLoadFile);

  // загрузка файла, через события Drag and Drop
  uploadDragAndDrop(listLoadFile);
  // отпракка формы
  handleSubmit(fileInput, listLoadFile);
  // сортировка списка файлов с помощью Drag and Drop
  handeleListDragAdnDrop(listLoadFile);
}
