// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

// console.log(galleryItems);
let markupPage = '';

const refs = {
  galleryEl: document.querySelector('.gallery'),
};

galleryItems.forEach(({ preview, original, description }) => {
  markupPage += `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
});

addMarkupPage(markupPage);

function addMarkupPage(markup) {
  refs.galleryEl.insertAdjacentHTML('beforeend', markup);
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});