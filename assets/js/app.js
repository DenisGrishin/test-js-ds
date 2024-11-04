import '../style/style.scss';
import createDom from './createElement/createDom';
import uploadFile from './common/uploadFile';
import { handleSubmit } from './common/handleSubmit';
import { uploadDragAndDrop } from './common/uploadDragAndDrop';

// создаем DOM
createDom();

// загрузка файла
if (document.querySelector('.upload-file')) {
  uploadFile();
  uploadDragAndDrop();
  handleSubmit();
}
