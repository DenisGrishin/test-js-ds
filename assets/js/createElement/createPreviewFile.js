const createPreviewFile = (files, imageContainer) => {
  debugger;
  files.forEach((item) => {
    const raeder = new FileReader();
    const figure = document.createElement('li');
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
};

export default createPreviewFile;
// const createPreviewFile = (files, imageContainer) => {
//   files.forEach((item) => {
//     const raeder = new FileReader();
//     const figure = document.createElement('figure');
//     const figCap = document.createElement('figcaption');

//     figCap.innerText = item.name;
//     figure.appendChild(figCap);
//     raeder.onload = () => {
//       const img = document.createElement('img');
//       img.setAttribute('src', raeder.result);
//       figure.insertBefore(img, figCap);
//     };

//     imageContainer.appendChild(figure);
//     raeder.readAsDataURL(item);
//   });
// };

// export default createPreviewFile;
