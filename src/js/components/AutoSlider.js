/* eslint-disable */


import Slider from './Slider';
import anime from 'animejs/lib/anime.es.js';

class AutoSlider extends Slider {
  constructor(el, items, nbVisibleItems, staringItemIndex) {
    super(el, items, nbVisibleItems, staringItemIndex);
    this.nameContainer = this.el.querySelector(".product-name");
    this.specsContainer = this.el.querySelector(".product-technical-specs");
    this.colorContainer = this.el.querySelector(".product-color");
    this.imageContainer = this.el.querySelector(".product-image");
    this.background =  document.querySelector('.product')
    this.button = this.el.querySelector(".order-button");
    this.lastColor = ""
    this.startImageRotation();

  }

  startImageRotation() {
    this.slide(1)
    let slide = setInterval(() => {
      this.slide(1)
    }, 6000);
  }

renderItem(index) {
  super.renderItem(index);
  let item = this.items[index];
  console.log(item);




  //j'ai essayer de faire la couleur du background en fonction  'image mais ca ne marchait pas super bien du coup j'ai mis l'information dans le JSON
  this.lastColor = this.background.style.backgroundColor;
  this.background.style.backgroundColor = item.bgColor;
  //document.querySelector('.product').style.backgroundColor = this.getPrincipalColor(this.getColor(item.images.small))


  anime({
    targets: this.imageContainer,
    translateX: 2000,
    easing: 'easeInOutQuad',
    duration: 500,
    complete: () => {
      this.imageContainer.setAttribute('src',item.images.big);
      this.nameContainer.textContent = item.title
      this.specsContainer.textContent = 'Taille ' + item.specs.size + " - " + item.specs.engine;
      this.colorContainer.textContent = item.specs.color;
      anime.set(this.imageContainer, {
        translateX: -2000,
      });
      anime({
        targets: this.imageContainer,
        translateX: 0,
        easing: 'easeInOutQuad',
        duration: 500
      });
    }
  });
  anime({
    targets: this.background,
    backgroundColor: [this.lastColor,this.background.style.backgroundColor],
    easing: 'easeInOutQuad',
    duration: 1000
  });


}
  //  getColor(url) {
  //   let img = new Image();
  //   img.src = url;
  //    img.width = img.width/4;
  //    img.height = img.height/4;
  //   let color = {r:0, g:0, b:0};
  //   let colors = [];
  //   let canvas = document.createElement('canvas');
  //   let context = canvas.getContext('2d');
  //   context.drawImage(img, 0, 0);
  //
  //    for (let i = 0; i < img.width; i++) {
  //      for (let j = 0; j < img.height; j++) {
  //        let imgData = context.getImageData(i, j, 1,1).data;
  //        if (imgData[0] != [0])
  //        colors.push('rgb(' +imgData[0] + "," + imgData[1] + "," +imgData[2] + ")")
  //
  //      }
  //    }
  //
  //   return colors;
  // }
  //
  // getPrincipalColor(colorArray){
  //   let colorTab = {start:0};
  //   let maxColor = {el:"0-0-0", count:0};
  //   for (let i = 0; i < colorArray.length; i++) {
  //     if (colorTab[colorArray[i]] == null)
  //     {
  //       colorTab[colorArray[i]] = 1
  //     }
  //     else{
  //       colorTab[colorArray[i]]++
  //     }
  //     if (colorTab[colorArray[i]] >= maxColor.count);
  //       maxColor.el = colorArray[i];
  //       maxColor.count = colorTab[colorArray[i]]
  //   }
  //   return maxColor.el
  // }



  slideIn(index) {
    super.slideIn(index);
    this.renderItem(index);
  }

  slideOut(index) {
    super.slideOut(index);
  }
}
export default AutoSlider;
