/* eslint-disable */

import Slider from './Slider';

export default class BubbleSlider extends Slider
{
  constructor(el, items, nbVisibleItems, staringItemIndex)
  {
    super(el, items, nbVisibleItems, staringItemIndex);

    this.newArticleImage = this.el.querySelector(".news-image");
    this.newArticleTitle = this.el.querySelector(".news-title");
    this.newArticleText = this.el.querySelector(".news-text");
    this.newArticleButton = this.el.querySelector(".order-button");
    console.log(this.items.length/2);
    this.indexBeforeSlide = 0;

    for (let i = 0; i < this.items.length/2; i++) {
      console.log(i);

      let bubble = this.el.querySelector('#item-' + i);
      bubble.style.backgroundImage = "url('" + this.items[i].imagesURL.small + "')";
      bubble.addEventListener('click',this.renderThisItem.bind(this,i));
      console.log(bubble)
    }

  // <img class="news-image" src="/static/Product-news.png" alt="">
  //   <div class="news-content">
  //   <h1 class="news-title">Nom du nouveau modèle</h1>
  // <p class="news-text">
  //   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non eleifend velit. Aliquam imperdiet mollis lorem a tempor. Duis condimentum sem eu risus faucibus, nec laoreet leo pellentesque. Etiam lorem ex, hendrerit nec erat at, gravida eleifend orci.
  // </p>
  // <button class="order-button black">commander<img src="/static/black-arrow.png" alt=""></button>

  //  </div>

    this.startImageRotation();

  }
  renderThisItem(i){
    this.renderItem(i);
    this.currentIndex = i;
    let slide = setInterval(() => {
      this.indexBeforeSlide = this.currentIndex;
      this.slide(1);
    }, 5000);
    clearInterval(this.startSlide)
  }
  startImageRotation()
  {
    this.slide(1);
    this.startSlide = setInterval(() => {
      this.indexBeforeSlide = this.currentIndex;
      this.slide(1);
    }, 2000);
  }

  renderItem(index, before = false) {
    super.renderItem(index, before);
    let item = this.items[index];
    this.newArticleImage.src = item.imagesURL.big;
    this.newArticleTitle.textContent = item.name;
    this.newArticleText.textContent = item.descrition;
    this.newArticleButton.href = "/" + item.name;
    let triIndex = this.items[index].id;

    console.log("index:", index);
    console.log("triIndex:", triIndex);


    let bubble = this.el.querySelector('#item-' + triIndex);
    bubble.classList.add('big-one');
    for (let i = 0; i < 3; i++) {
      if (i !== triIndex){
        let bubble = this.el.querySelector('#item-' + i);
        bubble.classList.remove('big-one');
      }
    }

  }
}
