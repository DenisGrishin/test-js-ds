export const handleSubmit = () => {
  const form = document.querySelector('.upload-file__form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById('file-input');

    if (fileInput.files.length > 0) {
      for (let i = 0; i < fileInput.files.length; i++) {
        formData.append('files', fileInput.files[i]);
      }

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
          console.log('Ответ от сервера:', data);
        })
        .catch((error) => {
          console.error('Ошибка:', error);
        });

      fileInput.value = '';
    }
  });
};
