function Gallery (element) {
  this.speed = 1000;
  this.rootElement = element;
  this.links = this.rootElement.querySelectorAll('a');

  this.popup = this.rootElement.querySelector('.popup');
  this.bigImg = this.popup.querySelector('img');

  // Ha! Closure!
  var self = this;

  for (var i = 0; i < this.links.length; i++) {
    this.links[i].addEventListener('click', function(event){
      event.preventDefault(); // prevent default browser behavior
      self.zoomIn(this); // self == object instance, this == clicked anchor element
    });
  }

  this.popup.addEventListener('click', function(event){
    self.zoomOut();
  });
}

Gallery.prototype.zoomIn = function (element) {
  this.bigImg.src = element.href;
  this.popup.classList.add('active');
}

Gallery.prototype.zoomOut = function () {
  this.popup.classList.remove('active');
}

var rootElement = document.querySelector('section');
var gallery = new Gallery(rootElement);
var gallery2 = new Gallery(document.body);
