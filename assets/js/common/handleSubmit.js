import { removeAllLoadFile } from './functions';

export const handleSubmit = () => {
  const form = document.querySelector('.upload-file__form');
  const listLoadFile = document.querySelector('.list-load');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById('file-input');
    if (fileInput.files.length > 0) {
      for (let i = 0; i < fileInput.files.length; i++) {
        formData.append('files', fileInput.files[i]);
      }

      form.classList.add('_preloader');
      listLoadFile.classList.add('_preloader');

      fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Сетевая ошибка');
          }
          return response.json();
        })
        .then((data) => {
          // имитация лоадера,т.к node отправляет мгновенно файлы
          resetStatus(form, listLoadFile);
          fileInput.value = '';
          console.log('Ответ от сервера:', data);
        })
        .catch((error) => {
          console.error('Ошибка:', error);
        });
    }
  });
};

const resetStatus = (form, listLoadFile) => {
  setTimeout(() => {
    form.classList.remove('_preloader');
    listLoadFile.classList.remove('_preloader');
    removeAllLoadFile(listLoadFile);
  }, 1000);
};
