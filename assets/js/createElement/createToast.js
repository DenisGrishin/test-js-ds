import { delTextArrToast } from '../common/showToast';

const findMaxNumId = (selector) => {
  if (selector.length === 0) return 0;

  return Math.max.apply(
    null,
    Array.from(selector).map((el) => Number(el.id))
  );
};

export const createToast = (arrText) => {
  const toast = document.querySelector('.toast');
  let idCount = findMaxNumId(toast.children);

  if (toast) {
    arrText.forEach((text) => {
      toast.insertAdjacentHTML(
        'beforeend',
        ` <div class="toast__item" id="${++idCount}" >
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
  const item = document.getElementById(id);

  setTimeout(() => {
    item.remove();
  }, 9900);
  setTimeout(() => {
    item.firstElementChild.classList.add('_lineProgress');
  }, 30);
};
