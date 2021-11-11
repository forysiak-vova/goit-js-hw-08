import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(SimpleLightbox);


import { galleryItems } from './gallery-items';

console.log(JSON.stringify(galleryItems));


const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImgCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', ongalleryContainerClick);

function createImgCardsMarkup(galleryItems) {
   return galleryItems.map(({preview, original}) => {
   
      return  `
   <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image description"
    />
  </a>
</div>
   `
   }).join('');
   
}

// console.log(galleryItems);

function ongalleryContainerClick(e) {
   const isGalleryClass = e.target.classList.contains('.gallery__image');
   if (!isGalleryClass) {
      return;
   }
   // console.log(e.target);
   
};


const lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img", //Переключение на имидж
  captionsData: "alt", //Получение текста из Алт
  captionPosition: "bottom", //Подпись внизу
  captionDelay: 250, //Задержка 250 мс
  showCounter: false, //Счетчик выключен
  scrollZoom: false, //Масштабирование скролом отключено
});

