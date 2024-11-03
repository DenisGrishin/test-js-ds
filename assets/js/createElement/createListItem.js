import { findMaxNumId } from '../common/functions';
import { createSpanAndBtnDel } from './createSpanAndBtnDel';

export const createListItem = (files, listFile) => {
  if (files.length === 0) return;

  listFile.classList.add('_show');

  let idCount = findMaxNumId(listFile.children);

  files.forEach((file) => {
    const raeder = new FileReader();

    const li = document.createElement('li');
    li.id = `loadFile-${++idCount}`;
    const img = document.createElement('img');
    const spanImg = document.createElement('span');
    spanImg.appendChild(img);

    raeder.onload = () => {
      img.setAttribute('src', raeder.result);
      createBigPreviewFile(img, li);
      li.prepend(spanImg);
    };

    createSpanAndBtnDel(file, li);
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
