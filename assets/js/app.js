import '../style/style.scss';
import createDom from './createElement/createDom';
import uploadFile from './common/uploadFile';
import { handleSubmit } from './common/handleSubmit';

import { handeleListDragAdnDrop } from './common/handeleListDragAdnDrop';
import { uploadDragAndDrop } from './common/uploadDragAndDrop';

// создаем DOM
createDom();

if (document.querySelector('.upload-file')) {
  // загрузка файла, через события onChange
  uploadFile();
  // загрузка файла, через события Drag and Drop
  uploadDragAndDrop();
  // отпракка формы
  handleSubmit();
  // сортировка списка файлов с помощью Drag and Drop
  handeleListDragAdnDrop();
}
