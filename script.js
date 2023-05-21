

  // скрытие бренов

  let tab = document.querySelector('.main-brand');
//   let pc = document.querySelector('.desktop-brand-need-hidd');
  let btns = document.querySelectorAll('.scroll__changer__brand');
  
     // целая кнопка скрыть
  
     let btnson = document.getElementById('lol');
  
  
             
              for(let i = 0; i < btns.length; i++) {
                  btns[i].addEventListener('click', btnClick);
  
                  function btnClick() {
                    //   pc.classList.toggle("hidden");
                  tab.classList.toggle("hidden");
                  }  
              }
     
          
         
  
   
  // переворот стрелки
  
              let btnsread = document.querySelectorAll('.main__later--read');
  
              let arrows = document.querySelectorAll('.scroll__changer__brand')
      
              for(let i = 0; i < arrows.length; i++) {
                  arrows[i].addEventListener('click', arrowRotate)
  
                  function arrowRotate() {
                      arrows[i].classList.toggle('activite');
                
                  }
  
              }
  
   // смена названия кнопки
              for(let i = 0; i < btnsread.length; i++) {
                  btnsread[i].addEventListener('click', btnClack);
  
                  function btnClack() {
                      console.log('HI button');
  
  
                      if ( tab.classList.contains("hidden") ) {
                         
                          btnsread[i].textContent = "Показать все";
                         
                          
                      } else {
                          btnsread[i].textContent = "Скрыть";}
                          
                          console.log(btnsread.textContent);
                  
                  }
                  
              }
              
  
  













const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    slidesPerView: 1.2,

    spaceBetween: 5,

    

  });

