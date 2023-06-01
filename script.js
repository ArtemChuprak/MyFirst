// скрытие бренов

let tab = document.querySelector(".swiper-wrapper");
let btns = document.querySelectorAll(".scroll__changer__brand");

// целая кнопка скрыть

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", btnClick);

	function btnClick() {
		//   pc.classList.toggle("hidden");
		tab.classList.toggle("hidden");
	}
}



// переворот стрелки

let btnsread = document.querySelectorAll(".main__later--read");
let arrows = document.querySelectorAll(".scroll__changer__brand");

for (let i = 0; i < arrows.length; i++) {
	arrows[i].addEventListener("click", arrowRotate);

	function arrowRotate() {
		arrows[i].classList.toggle("activite");
	}
}


// смена названия кнопки
for (let i = 0; i < btnsread.length; i++) {
	btnsread[i].addEventListener("click", btnClack);

	function btnClack() {
		console.log("HI button");

		if (tab.classList.contains("hidden")) {
			btnsread[i].textContent = "Показать все";
		} else {
			btnsread[i].textContent = "Скрыть";
		}

		console.log(btnsread.textContent);
	}
}





// скрытие других видов техники


let tabs = document.querySelector(".techniks");
let btnss = document.querySelector(".scroll__changer__othertechno");

let btnsreads = document.querySelector(".later--read");


function btnClacky() {

	if (tabs.classList.contains("hidden")) {
		btnsreads.textContent = "Показать все";
	} else {
		btnsreads.textContent = "Скрыть";
	}

tabs.classList.toggle("hidden");
btnss.classList.toggle("activite");

}


btnss.addEventListener("click", btnClacky);

let swiperTable =document.querySelector(".swiper--table");

if (window.innerWidth >= 767) {
	swiperTable.classList.add("swiper--non")

}




// появление и скрытие бургер меню

let buttonBurgerOpen = document.querySelector(".menu");
let modalBurger = document.querySelector(".overlay--wrapper")
let buttonBurgerClose = document.querySelector(".left_close--burger");



buttonBurgerOpen.addEventListener("click", butBurgerMenu );
buttonBurgerClose.addEventListener("click",butBurgerMenuClose);


function butBurgerMenu() {

modalBurger.classList.add("aside--visible");

};

function butBurgerMenuClose() {
	modalBurger.classList.remove("aside--visible");	
}


let overflowModal


// появление и скрытие модалки звонок

let buttonCall = document.querySelectorAll(".footer__item--call--burger");
let callModal = document.querySelector(".call--modal");
let buttonCallClose = document.querySelectorAll(".feedback__content_buton");



for (let i = 0; i < buttonCall.length; i++ ) {
	
	buttonCall[i].addEventListener("click", butCallModalOpen);

	function butCallModalOpen() {

		callModal.classList.add("call--modal--view");	
		}

}

for (let i = 0; i < buttonCallClose.length; i++ ) {
	
	buttonCallClose[i].addEventListener("click", butCallModalOpen);

	function butCallModalOpen() {

		callModal.classList.remove("call--modal--view");	
		}

}


// появление и скрытие модалки отзыв

let buttonFeedback = document.querySelectorAll(".footer__item--chat--burger");
let feedbackModal = document.querySelector(".feedback");
let buttonFeedBackClose =document.querySelectorAll(".feedback__content_but");


for (let i = 0; i < buttonFeedback.length; i++ ) {
	
	buttonFeedback[i].addEventListener("click", butFeedBackModalOpen);

	function butFeedBackModalOpen() {

		feedbackModal.classList.add("feedback--view");	
		}

}

for (let i = 0; i < buttonFeedBackClose.length; i++ ) {
	
	buttonFeedBackClose[i].addEventListener("click", butFeedBackModalClose);

	function butFeedBackModalClose() {

		feedbackModal.classList.remove("feedback--view");	
		}

}
