function Gallery (element) {

    // Add HTML for the lightbox
    var popup = '<div class="lightbox"><div class="lightbox__overlay"></div><img class="gallery-item__photo" src=""/></div>';
    element.innerHTML += popup;
    this.lightbox = document.querySelector('.lightbox');
    this.lightboxPhoto = document.querySelector('.lightbox img');
    this.lightboxOverlay = document.querySelector('.lightbox__overlay');


    this.target = element;
    this.items = this.target.querySelectorAll('.gallery-item');
    this.images = this.target.querySelectorAll('.gallery-item__photo');

    // For each image
    var self = this;

    for (var i = 0; i < this.images.length; i++) {
        this.images[i].addEventListener('click', function(event){
            event.preventDefault();
            self.showLightbox(this);
        });
    }

    // addEventListener for lightbox overlay
    this.lightboxOverlay.addEventListener('click', function(event){
        self.closeLightbox();
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
var target = document.querySelector('.gallery');
var gallery = new Gallery(target);
