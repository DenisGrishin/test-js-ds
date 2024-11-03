export const findMaxNumId = (selectorAll) => {
  if (selectorAll.length === 0) return 0;

  return Math.max.apply(
    null,
    Array.from(selectorAll).map((el) => Number(el.id.replace(/[^\d]/g, '')))
  );
};

export const reomoveListItem = (selectorParent) => {
  selectorParent.addEventListener('click', (e) => {
    let target = e.target;

    if (target.classList.contains('list-load__btn')) {
      removeFile(target.parentElement.id);
      document.getElementById(target.parentElement.id).remove().daset.name;
    }

    if (selectorParent.children.length === 0) {
      selectorParent.classList.remove('_show');
    }
  });
};
const removeFile = (id) => {
  const loadNamefile = document.querySelector(`#${id} span[data-name]`).dataset
    .name;

  const fileInput = document.getElementById('file-input');
  const files = Array.from(fileInput.files);

  const updateFile = files
    .map((file) => {
      if (!loadNamefile.includes(file.name)) {
        return file;
      }
    })
    .filter((file) => file !== undefined);

  const dataTransfer = new DataTransfer();

  updateFile.forEach((file) => {
    dataTransfer.items.add(file);
  });

  fileInput.files = dataTransfer.files;
};
