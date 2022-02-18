    //        JS HEADER
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    login.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');    
} 

//                  END JS HEADER

//                  START JS DEAL

let countDate = new Date('january 30,2022 00:00:00').getTime();

function CountDown(){

    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}

setInterval(function(){
    CountDown();
},1000);

//          END DEAL 

//     JS PREVIEW-PRODUCT STARTS

let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');
let header = document.querySelector('.header');

document.querySelectorAll('.icons .eye').forEach(eye =>{
    eye.onclick = () =>{
        header.style.display= 'none';
        previewContainer.style.display = 'flex';
        let name = eye.getAttribute('data-name');
        previewBox.forEach(preview =>{
          let target =  preview.getAttribute('data-target');
            if(name  == target ){
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
        header.style.display= 'flex';
    };
});


// JS PREVIEW- PRODUCT END


// JS LASTEST PRODUCT 

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay : {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      
      },
      768: {
        slidesPerView: 3,
 
      },
      1020: {
        slidesPerView: 4,

      },
    },
  });


  // JS REVIEW STARTS

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay : {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      
      },
      768: {
        slidesPerView: 2,
 
      },
      1020: {
        slidesPerView: 3,

      },
    },
  });