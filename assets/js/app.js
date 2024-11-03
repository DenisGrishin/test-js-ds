import '../style/style.scss';
import createDom from './createElement/createDom';
import uploadFile from './common/uploadFile';
import { handleSubmit } from './common/handleSubmit';

// создаем DOM
createDom();

// загрузка файла
if (document.querySelector('.upload-file')) {
  uploadFile();
  handleSubmit();
}
