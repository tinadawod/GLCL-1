'use strict';

var fn = function fn() {
	var minus = document.getElementsByClassName('minus');
	console.log(minus);
	for (var i = 0; i < minus.length; i++) {
		console.log(minus[i]);
		var e = document.createElement('p');
		e.innerHTML = '-';
		minus[i].appendChild(e);
	}
};

document.addEventListener('DOMContentLoaded', fn, false);
'use strict';

var list = [];
var myFunkyFunk = function myFunkyFunk() {
  console.log('the funk');
};