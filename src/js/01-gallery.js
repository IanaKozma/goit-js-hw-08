import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector(".gallery");
const imgsGallery = createImgsGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgsGallery);

function createImgsGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" 
            href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
            </a>`;
        })
        .join("");
}

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        scrollZoomFactor: false,
    });