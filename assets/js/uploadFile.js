import { validateLengthFiles } from './validateFile/validateLengthFiles';

const uploadFile = () => {
  const fileInput = document.getElementById('file-input');
  const imageContainer = document.querySelector('.upload-file__images');
  const countImage = document.querySelector('.upload-file__count-iamge');

  //  const createFigure = (reader) => {};

  //  const validateTypeFiles = (files) => {};
  //  const validateSizeFiles = (files) => {};
  //  const showError = (files) => {};

  document.addEventListener('change', () => {
    const [lengthFiles, files] = validateLengthFiles(
      Array.from(fileInput.files)
    );
    debugger;
    if (lengthFiles > 5) {
      alert('Превышено допустимое количество файлов: 5');
    }

    // до делать
    countImage.textContent = `Вы загрузили ${files.length} фото`;

    files.forEach((item) => {
      const raeder = new FileReader();
      const figure = document.createElement('figure');
      const figCap = document.createElement('figcaption');

      figCap.innerText = item.name;
      figure.appendChild(figCap);
      raeder.onload = () => {
        const img = document.createElement('img');
        img.setAttribute('src', raeder.result);
        figure.insertBefore(img, figCap);
      };

      imageContainer.appendChild(figure);
      raeder.readAsDataURL(item);
    });
  });
};

export default uploadFile;
