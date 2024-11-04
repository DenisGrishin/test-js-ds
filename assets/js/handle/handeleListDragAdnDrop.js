import { handleFileDragOver } from './uploadDragAndDrop';

export const handeleListDragAdnDrop = (listLoadFile) => {
  const handleDragStart = (e) => {
    e.target.classList.add('_chosen');
    document
      .getElementById('root')
      .removeEventListener('dragover', handleFileDragOver);
  };

  const handleDragEnd = (e) => {
    e.target.classList.remove('_chosen');
    document
      .getElementById('root')
      .addEventListener('dragover', handleFileDragOver, false);
  };
  const handleDragOver = (e) => {
    e.preventDefault();

    const activeElement = listLoadFile.querySelector('._chosen');
    document.getElementById('root').classList.remove('_active');

    const currentElement = e.target;

    const isMoveable =
      activeElement !== currentElement &&
      currentElement.classList.contains('list-load__item');

    if (!isMoveable) {
      return;
    }

    const nextElement =
      currentElement === activeElement.nextElementSibling
        ? currentElement.nextElementSibling
        : currentElement;

    listLoadFile.insertBefore(activeElement, nextElement);
  };
  //  события когда элемент находиться над другим
  listLoadFile.addEventListener('dragover', handleDragOver);
  // отпускаем и удаляем класс
  listLoadFile.addEventListener('dragend', handleDragEnd);
  //  хватаем  элемент и даем ему класс
  listLoadFile.addEventListener('dragstart', handleDragStart);
};
