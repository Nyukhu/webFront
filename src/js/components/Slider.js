/* eslint-disable */
class Slider {
  constructor(el, items, nbVisibleItems, staringItemIndex) {
    this.el = el;
    this.items = items.concat(items);
    this.nbVisibleItems = nbVisibleItems;
    this.currentIndex = staringItemIndex;
    this.hasTurned = false;
    this.initSlider()
  }

  initSlider() {
    this.renderVisibleItems();

  }

  renderVisibleItems(slided) {
    let i = 0;
    if (slided > 0)
    {
      for (i = this.currentIndex; i < this.currentIndex + slided; i++) {
        this.renderItem(i)
      }
    }
    else
    {
      for (i = this.currentIndex; i > this.currentIndex + slided; i--) {
        if ( i < 0){
          this.renderItem(Math.floor(this.items.length) + i,true);
          //console.log('backward',);
        }
        else{
          this.renderItem(i,true)
        }
      }
    }
  }

  slide(slided) {
    console.log('slided', this.currentIndex);

    let add = this.items.length > 4 ? 1: 0
    if (this.currentIndex > Math.floor(this.items.length/2) + 1 + add ) {
      this.currentIndex = 0;



    }else if(this.currentIndex < 0){
      this.currentIndex = Math.floor(this.items.length/2) + this.currentIndex;
      this.hasTurned = false;

    }
    else{
      this.hasTurned = false;

    }
    this.renderVisibleItems(slided);

    this.currentIndex += slided;
  }

  renderItem(index, before = false) {
    // create item DOM
    console.log("i'm the ", index)
  }

  slideIn(slided) {
    // animate itemDOM when arriving
  }

  slideOut(slided) {
    // animate itemDOM when leaving
    // this.items[index].detachDom();
  }
}
export default Slider;
