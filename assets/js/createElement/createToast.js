import { findMaxNumId } from '../common/functions';
import { delTextArrToast } from '../common/showToast';

export const createToast = (arrText) => {
  const toast = document.querySelector('.toast');
  let idCount = findMaxNumId(toast.children);

  if (toast) {
    arrText.forEach((text) => {
      toast.insertAdjacentHTML(
        'beforeend',
        ` <div class="toast__item" id="toast-${++idCount}" >
      			<div class="toast__wrapper-item"> <span><b>Ошибка:</b> ${text}</span></div>
    			</div>`
      );
      removeToast(idCount);
    });

    delTextArrToast();
  }
};

// Удалить уведомления
const removeToast = (id) => {
  const item = document.getElementById(`toast-${id}`);

  setTimeout(() => {
    item.remove();
  }, 10000);
  setTimeout(() => {
    item.firstElementChild.classList.add('_lineProgress');
  }, 30);
};
