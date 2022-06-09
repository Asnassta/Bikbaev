$(document).ready(function() {
	/*======Menu-toggle=============*/
  
  $(".burger").on("click", function() {
    $(this).toggleClass("active");
    $(".header__nav").toggleClass('active');
  });
  /*==========/menu-toggle=========*/

  /*======Search-box=============*/
  $(".header__search").on("click", function() {
    $(".search-box").slideDown();
  });
   $(".search-box__close").on("click", function() {
    $(".search-box").slideUp();
  });
  /*==========/search-box=========*/

  /*======Select-styler=============*/
  $(function() {
    $('select').styler();
  });
  /*======/select-styler=============*/

	/*======Slider=============*/
  $('.videomaterials__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.slider-arrows__arrow_prev'),
      nextArrow: $('.slider-arrows__arrow_next'),
      responsive: [
    {
      breakpoint: 766,
      settings: {
        infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: $('.slider-arrows__arrow_prev'),
      nextArrow: $('.slider-arrows__arrow_next'),
      }
    },
    {
      breakpoint: 415,
      settings: {
        infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.slider-arrows__arrow_prev'),
      nextArrow: $('.slider-arrows__arrow_next'),
      }
    }
  ]
  });

	resizeAllGridItems();
	window.addEventListener("resize", resizeAllGridItems);
});


function resizeInstance(instance){
  item = instance.elements[0];
  resizeGridItem(item);
}

  function resizeGridItem(item){
  grid = document.getElementsByClassName("photogallery__box")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.photogallery__content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  allItems = document.getElementsByClassName("photogallery__item");
  for(x=0;x<allItems.length;x++){
    resizeGridItem(allItems[x]);
  }
}


$(window).on('load', function(){
  resizeAllGridItems();
});