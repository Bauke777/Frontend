function Gallery (element) {

    // Add HTML for the lightbox
    element.insertAdjacentHTML('afterend', '<div class="lightbox"><div class="lightbox__overlay"></div><img src="" alt="lightbox image"/><a class="lightbox__close-btn">close</a></div>');
    this.lightbox = document.querySelector('.lightbox');
    this.lightboxPhoto = document.querySelector('.lightbox img');
    this.lightboxOverlay = document.querySelector('.lightbox__overlay');


    this.target = element;
    this.items = this.target.querySelectorAll('.gallery-item');
    this.images = this.target.querySelectorAll('.gallery-item__photo');

    // For each image
    for (const image of this.images) {
        image.addEventListener('click', () => {
            this.showLightbox(image);
        });
    }

    // addEventListener for lightbox overlay
    this.lightboxOverlay.addEventListener('click', () => {
        this.closeLightbox();
    });
}

// Show lightbox
Gallery.prototype.showLightbox = function (element) {
    this.lightboxPhoto.src = element.src;
    this.lightbox.classList.add('active');
}

// Close lightbox
Gallery.prototype.closeLightbox = function () {
    this.lightbox.classList.remove('active');
}

// Create new Gallery
const target = document.querySelector('.gallery');
const gallery = new Gallery(target);
