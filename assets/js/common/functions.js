export const findMaxNumId = (selectorAll) => {
  if (selectorAll.length === 0) return 0;

  return Math.max.apply(
    null,
    Array.from(selectorAll).map((el) => Number(el.id))
  );
};

export const reomoveListItem = (selectorParent) => {
  selectorParent.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target);

    if (target.classList.contains('list-load__btn')) {
      document.getElementById(target.parentElement.id).remove();
    }

    if (selectorParent.children.length === 0) {
      selectorParent.classList.remove('_show');
    }
  });
};
