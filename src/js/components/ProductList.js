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

  }
  renderAll(){

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

}
