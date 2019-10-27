/* eslint-disable */

 export  default class ProductList {
  constructor(el, items) {
    this.el = el;
    this.items = items;
    this.showMoreButton = this.el.querySelector('.all-models-button');
    this.searchField = this.el.querySelector('.model-search-field');
    this.itemContainer = this.el.querySelector('.all-products-content');
    this.setupEvents();
    this.correspondingElements = this.items;
    this.renderFiveItems();

    this.deployed = false
  }

  renderFiveItems(){
    for (let i = 0; i < 5; i++) {
      this.createItemHtml(i);
    }
  }
  renderAll(){
    for (let i = 0; i < this.correspondingElements ; i++) {
      this.createItemHtml(i);
    }
  }
  setupEvents(){
    this.showMoreButton.addEventListener('click',this.deployItemList.bind(this));
    this.searchField.addEventListener('keyup',this.updateItemList.bind(this));
  }
  updateItemList(){
    console.log("etetet", this.searchField.value)
  }
  deployItemList(){
    if (!this.deployed){
      this.itemContainer.style.height = '200vh';
      this.deployed = true;
      this.renderAll();
      console.log('deployed')
    }
    else
    {
      this.itemContainer.style.height = '50vh';
      this.deployed = false;
      this.renderFiveItems();
      console.log('closed')

    }

  }

   createItemHtml(index){
     let item = this.correspondingElements[index];
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

     //console.log(this.currentItems);
     return productCard;
   }

 }
