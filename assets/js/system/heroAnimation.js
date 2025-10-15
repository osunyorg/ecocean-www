window.osuny = window.osuny || {};

window.osuny.HeroAnimation = function (container) {
  this.options = { 
    quantity: 6,
  };

  this.container = container;
  this.init();
}

window.osuny.HeroAnimation.prototype.init = function () {
  this.element = document.createElement('div');
  this.element.setAttribute('aria-hidden', true);
  this.element.classList.add('animation-container');
  this.container.appendChild(this.element);
  this.addCircles();
};

window.osuny.HeroAnimation.prototype.addCircles = function () {
  var i;

  for(i = 0; i < this.options.quantity; i += 1) {
    this.element.appendChild(this.getCircle());
  }
};

window.osuny.HeroAnimation.prototype.getCircle = function () {
  var circleContainer = document.createElement('div'),
      circle = document.createElement('div'),
    scale = (Math.floor(Math.random() * 9) + 7) - 1,
    axis = {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5
    },
    position = {
      x: Math.random() * 100,
      y: Math.random() * 100
    },
    blur = scale * 5 + 10,
    opacity = Math.random() * 1;

  circleContainer.style.left = position.x + "%";
  circleContainer.style.top = position.y + "%";
  circleContainer.style.transformOrigin = axis.x * window.innerWidth + "px " + axis.y * window.innerHeight + "px"

  circle.style.transform = "scale(" + scale +")";
  circle.style.filter = "blur(" + blur + "px)";
  circle.style.opacity = opacity;

  circleContainer.appendChild(circle);

  return circleContainer;
};

if (document.body.classList.contains('page__home')) {
  var container = document.querySelector('.page__home .hero');
  new window.osuny.HeroAnimation(container);
}