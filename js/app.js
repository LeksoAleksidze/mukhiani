



// CURRENCY OVERLAY CHANGE
let curencyOverlay = document.querySelector('.currency-overlay');

let gelBtn = document.getElementById('gelBtn');

gelBtn.onclick = function(){
  curencyOverlay.style.left = "8px";
}

let usdBtn = document.getElementById('usdBtn');

usdBtn.onclick = function(){
  curencyOverlay.style.left = "23px";
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
