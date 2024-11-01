const createDom = () => {
  let root = document.getElementById('root');

  if (root) {
    root.insertAdjacentHTML(
      'beforeend',
      ` <div class="upload-file">
      <div class="upload-file__container">
        <div class="upload-file__wrapper-input">
          <input hidden id="file-input" type="file" name="Файлы" accept="image/png, image/jpeg, image/jpg,"
            class="upload-file__input" multiple>
          <label class="upload-file__label" for="file-input">
            <span>Загрузить изображения</span>
          </label>
        </div>
    
        <ul class="upload-file__list list-img">

        </ul>
      </div>
    </div>`
    );
  }
};
export default createDom;
