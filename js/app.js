


// HEADER SCROLL TOP
const header = document.querySelector('header');

window.onscroll = function(){
	let scrollTop = scrollY;

	if( scrollTop > 50 ){
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}

};


// CURRENCY OVERLAY CHANGE
let curencyOverlay = document.querySelectorAll('.currency-overlay');

const curenc = document.querySelectorAll('.geo-cur');

for(let x = 0; x < curenc.length; x++){

	curenc[x].addEventListener('click', ()=>{

		for( let i = 0; i < curencyOverlay.length; i++){

		 curencyOverlay[i].style.left = "4px";

		};
	});
}

const curencUsd = document.querySelectorAll('.usd-cur');

for(let x = 0; x < curencUsd.length; x++){

	curencUsd[x].addEventListener('click', ()=>{

		for( let i = 0; i < curencyOverlay.length; i++){

		 curencyOverlay[i].style.left = "17px";
		 
		};

	});
}




// SEARCH SHOW/HIDE
document.getElementById('searchBtn').onclick = function(){

  document.querySelector('header .search').classList.toggle('fnd');
}




// CHANGE LANGUAGE
let geoLang = document.querySelector('#geoLang');
let engLang = document.querySelector('#engLang');

// GEO LANG
geoLang.onclick = function(){

  geoLang.style.display = "none";
  engLang.style.display = "block";
}

// ENG LANG
engLang.onclick = function(){

  geoLang.style.display = "block";
  engLang.style.display = "none";
}
