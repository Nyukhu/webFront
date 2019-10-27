/* eslint-disable import/first, no-new */
/* eslint-disable */
/* -------------------
Styles
------------------- */
import './styles/style.scss';

/* -------------------
Layouts
------------------- */


/* -------------------
Components
------------------- */
import Button from './js/components/Button';
import ArrowSlider from './js/components/ArrowSlider';
import BubbleSlider from './js/components/BubbleSlider';
import AutoSlider from './js/components/AutoSlider';
import ProductList from './js/components/ProductList';
import SliderItem from "./js/components/SliderItem";
import JSONLoader from "./js/utils/JSONLoader";

let loader = new JSONLoader();

const headProducts = [
  {
    name: 'Nom du model 2', size: 'L', technicalSpecs: 'Mécanique', color: 'Rouge feu', imageURL: '/static/Product.png', stock: 0,
  },
  {
    name: 'Nom du model 3', size: 'M', technicalSpecs: 'Manuel', color: 'Pas Rouge feu', imageURL: '/static/ProductRed.png', stock: 0,
  },
  {
    name: 'Nom du model 3', size: 'M', technicalSpecs: 'Manuel', color: 'Pas Rouge feu', imageURL: '/static/ProductRed.png', stock: 0,
  },
  {
    name: 'Nom du model 3', size: 'M', technicalSpecs: 'Manuel', color: 'Pas Rouge feu', imageURL: '/static/ProductRed.png', stock: 0,
  },
  {
    name: 'Nom du model 3', size: 'M', technicalSpecs: 'Manuel', color: 'Pas Rouge feu', imageURL: '/static/ProductRed.png', stock: 0,
  },
  {
    name: 'Nom du model 3', size: 'M', technicalSpecs: 'Manuel', color: 'Pas Rouge feu', imageURL: '/static/ProductRed.png', stock: 0,
  },
  {
    name: 'Nom du model 3', size: 'M', technicalSpecs: 'Manuel', color: 'Pas Rouge feu', imageURL: '/static/ProductRed.png', stock: 0,
  },
  {
    name: 'Nom du model 3', size: 'M', technicalSpecs: 'Manuel', color: 'Pas Rouge feu', imageURL: '/static/ProductRed.png', stock: 0,
  },

];

const news = [
  {
    id: 0, name: 'Nom du nouveau modèle avant modèle', imagesURL:{ big:'/static/Product-news.png', small:'/static/Product1thumbnail.png'}, descrition: 'Lorem ipsum dolor sit amet, mollis lorem a tempor. Duis condimentum sem eu risus faucibus, nec laoreet leo pellentesque. Etiam lorem ex, hendrerit nec erat at, gravida eleifend orci.',
  },
  {
    id: 1, name: 'Nom du nouveau modèle', imagesURL:{ big:'/static/Product-news.png', small:'/static/Product2thumbnail.png'}, descrition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non eleifend velit. Aliquam imperdiet mollis lorem a tempor. Duis condimentum sem eu risus faucibus, nec laoreet leo pellentesque. Etiam lorem ex, hendrerit nec erat at, gravida eleifend orci.',
  },
  {
    id: 2, name: 'Nom du nouveau modèle 2', imagesURL:{ big:'/static/Product-news.png', small:'/static/Product3thumbnail.png'}, descrition: 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nullam  Duis condimentumDuis condimentumDuis condimentumnon eleifend velit. Aliquam imperdiet mollis lorem a tempor. Duis condimentum sem eu risus faucibus, nec laoreet leo pellentesque. Etiam lorem ex, hendrerit nec erat at, gravida eleifend orci.',

  },
];
let autoSliderItems = [];
let bestSellers = [];
let allProducts = [];
loader.get("http://127.0.0.1:9000/static/data/models.json").forEach((product) => {
  if (product.hero)
  autoSliderItems.push(product);
  if (product.best)
    bestSellers.push(product);
  allProducts.push(product);
});

let autoSlider = document.querySelector('.auto-slider');
console.log(autoSliderItems);
let newAutoSlider = new AutoSlider(autoSlider, autoSliderItems,1 ,0);
console.log(newAutoSlider);

Array.from(document.body.querySelectorAll('.product-slider')).forEach((arrowSlider) => {
  let is_coarse = matchMedia('(pointer:coarse)').matches;
  if (is_coarse){
    let newArrowSlider = new ArrowSlider(arrowSlider, bestSellers,1 ,0);

  }else{
    let newArrowSlider = new ArrowSlider(arrowSlider, bestSellers,5 ,0);

  }
  //console.log(newArrowSlider);
});
Array.from(document.body.querySelectorAll('.news')).forEach((bubbleSlider) => {
 let newBubbleSlider = new BubbleSlider(bubbleSlider, news,1 ,0);
  console.log(newBubbleSlider);
});


let productList = document.querySelector('.product-model-list');
let newProductList = new ProductList(productList,allProducts);
