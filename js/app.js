


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
let curencyOverlay = document.querySelector('.currency-overlay');

let gelBtn = document.getElementById('gelBtn');

gelBtn.onclick = function(){
  curencyOverlay.style.left = "4px";
}

let usdBtn = document.getElementById('usdBtn');

usdBtn.onclick = function(){
  curencyOverlay.style.left = "17px";
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
