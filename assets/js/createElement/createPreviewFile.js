const createPreviewFile = (files, listImg) => {
  debugger;
  listImg.classList.add('_show');

  files.forEach((file) => {
    const raeder = new FileReader();

    const li = document.createElement('li');

    const button = document.createElement('button');
    button.type = 'button';

    createSpan(file, li);
    li.appendChild(button);

    raeder.onload = () => {
      const img = document.createElement('img');
      img.setAttribute('src', raeder.result);
      img.width = '50';
      img.height = '50';
      img.alt = file.name;
      li.prepend(img);
    };
    listImg.appendChild(li);
    raeder.readAsDataURL(file);
  });
};

function createSpan(file, li) {
  const { name, size } = file;
  const nameAndType = name.split('.');
  const fileSizeInMegabytes = `${(Number(size) / 1048576).toFixed(2)} MB`;

  [nameAndType[0], fileSizeInMegabytes, nameAndType[1].toUpperCase()].forEach(
    (item) => {
      const span = document.createElement('span');
      span.innerText = item;
      li.appendChild(span);
    }
  );
}

export default createPreviewFile;
