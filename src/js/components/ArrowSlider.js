/* eslint-disable */

import Slider from './Slider';
import anime from 'animejs/lib/anime.es.js';

export  default class ArrowSlider extends Slider {
  constructor(el, items, nbVisibleItems, staringItemIndex) {
    super(el, items, nbVisibleItems, staringItemIndex);
    this.itemContainer = this.el.querySelector('.arrow-slider');
    this.setEvents();
    this.currentItems = [];
    this.itemContainer.innerHTML = null;
    for (let i = 0; i < this.currentIndex + this.nbVisibleItems; i++) {
      this.renderItem(i)
    }

  }
  setEvents(){
    this.el.querySelector('.left-arrow').addEventListener('click', this.slideIn.bind(this,- this.nbVisibleItems));
    this.el.querySelector('.right-arrow').addEventListener('click', this.slideIn.bind(this, this.nbVisibleItems));
  }

  renderItem(index,before) {
    super.renderItem(index,before);
    if (!before){
      let itemToAppend = this.createItemHtml(index);

      this.itemContainer.appendChild(itemToAppend);

    }
    else{
      let itemToAppend = this.createItemHtml(index,true);
      let firstChild = this.itemContainer;
      firstChild.prepend(itemToAppend);
      console.log("before :", firstChild);

    }

  }

  slideIn(slided) {


    this.itemContainer.innerHTML = "";

    super.slideIn(slided);
    this.slide(slided);



    // console.log(this.currentItems);
    //     // if (slided > 0){
    //     //   for (let i = 0; i < slided; i++) {
    //     //     let child = this.itemContainer.querySelector("#product" + this.currentItems[0]);
    //     //     child.parentElement.removeChild(child);
    //     //     this.currentItems.splice(0,1);
    //     //     console.log( this.currentItems);
    //     //     //this.renderItem(i);
    //     //   }
    //     //
    //     // }
    //     // else{
    //     //   for (let i = 0; i < - slided; i++) {
    //     //     let child = this.itemContainer.querySelector("#product" + this.currentItems[this.currentItems.length - 1]);
    //     //
    //     //     child.parentElement.removeChild(child);
    //     //     this.currentItems.splice(this.currentItems.length - 1,1);
    //     //
    //     //     console.log( this.currentItems);
    //     //
    //     //     //this.renderItem(i);
    //     //   }
    //     // }
    //     //

  }

  slideOut(slided) {
    super.slideOut(slided);

  }
  createItemHtml(index, before = false){
    let item = this.items[index];
    // <article class="product-card">
    //     <img class="product-card-image" src="/static/Product2.png" alt=""></img>
    //     <div class="product-card-info red-border">
    //       <h1 class="product-info-title">Un autre modèle un autre nom</h1>
    //       <div class="product-card-specs">
    //         <p>Semi-Automatique - Blanc</p>
    //       </div>
    //       <div class="product-stock red-text"> 1 en stock</div>
    //     </div>
    //
    //   </article>
    let specs = document.createElement('p');
    let productCardSpec = document.createElement('div');
    let cardTitle = document.createElement('h1');
    let productStock = document.createElement('div');
    let productInfo = document.createElement('div');
    let productImg = document.createElement('img');
    let productCard = document.createElement('article');

    productCardSpec.classList.add("product-card-specs");
    cardTitle.classList.add('product-info-title');
    productStock.classList.add('product-stock');

    if (item.stock == 0){
      productStock.classList.add('red-text');
      productInfo.classList.add('red-border');
    }

    productInfo.classList.add('product-card-info');
    productImg.classList.add('product-card-image');
    productCard.classList.add('product-card');
    productCard.classList.add('product-slider-card');

    specs.textContent = item.specs.engine + " - " + item.specs.color;
    cardTitle.textContent = item.title;
    productImg.setAttribute('src',item.images.small);
    productStock.textContent = item.stock + ' en stock';

    productCardSpec.appendChild(specs);

    productInfo.appendChild(cardTitle);
    productInfo.appendChild(productCardSpec);
    productInfo.appendChild(productStock);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    //productCard.id = "product" + index;
    //before ? this.currentItems.unshift(index):this.currentItems.push(index);


    console.log(this.currentItems);
    return productCard;
  }

}
