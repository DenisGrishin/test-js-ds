import { createItemList } from './createItemList';

const createPreviewFile = (files, listFile) => {
  listFile.classList.add('_show');

  files.forEach((file) => {
    const raeder = new FileReader();

    const li = document.createElement('li');
    const img = document.createElement('img');
    const spanImg = document.createElement('span');
    spanImg.appendChild(img);

    raeder.onload = () => {
      img.setAttribute('src', raeder.result);
      createBigPreviewFile(img, li);
      li.prepend(spanImg);
    };

    createItemList(file, li);
    listFile.appendChild(li);
    raeder.readAsDataURL(file);
  });
};

function createBigPreviewFile(img, li) {
  const span = document.createElement('span');
  li.prepend(span);
  const cloneImg = img.cloneNode(true);
  span.appendChild(cloneImg);
}

export default createPreviewFile;
