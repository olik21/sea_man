
var mySwiper = new Swiper ('#swiper-container1', {
 
    loop: true,
    
    // If we need pagination
    pagination: '.swiper-pagination',
    paginationClickable: true
 
 }); 

  
var mySwiper2 = new Swiper ('#swiper-container2', {
 
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }

 }); 
  
 