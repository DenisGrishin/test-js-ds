import '../style/style.scss';
import createDom from './createElement/createDom';
import uploadFile from './common/uploadFile';

// создаем DOM
createDom();

// загрузка файла
if (document.querySelector('.upload-file')) {
  uploadFile();
}
