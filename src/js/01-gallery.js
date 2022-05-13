// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
let marckupPage = '';

const refs = {
  galleryElement: document.querySelector('.gallery'),
};

galleryItems.forEach(({ preview, original, description }) => {
  marckupPage += `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
});

addMarckupPage(marckupPage);

function addMarckupPage(markup) {
  refs.galleryElement.insertAdjacentHTML('beforeend', markup);
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

