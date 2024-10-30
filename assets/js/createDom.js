/* eslint-disable no-tabs */
const createDom = () => {
  document.getElementById('root').insertAdjacentHTML(
    'beforeend',
    `<div class="upload-file">
			  <div class="upload-file__container">
				 <div class="upload-file__wrapper-input">
					<input hidden id="file-input" type="file" name="Файлы" accept="image/png, image/jpeg, image/jpg,"
					  class="upload-file__input" multiple>
					<label class="upload-file__label" for="file-input">Загрузить фото</label>
				 </div>
				 <div class="upload-file__count-iamge">Вы еще не загрузили фото</div>
				 <div class="upload-file__images">
				 </div>
			  </div>
			</div>`
  );
};
export default createDom;
