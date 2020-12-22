function popUpThing() {
	if (popUp.style.height == '80vh' || popUp.style.height == '') {
		popUp.style.height = '0vh';
	} else {
		popUp.style.height = '80vh';
	}
}
popUp.style.height = '0vh';

var reload = document.getElementById('reload');
reload.addEventListener('click', reloadFn);
function reloadFn() {
	window.location.reload();
	window.scrollTo(0, 0);
}
var sahabaName = document.getElementById('sahabaName');

var names = {
	'عمر بن الخطاب': {
		title: 'الفاروق',
		discription: 'hi',
	},
	'عثمان بن عفان': {
		title: 'ذو النورين',
		discription:
			'How do you increment a variable or component property? ... When the button labeled “Score a Point” is clicked, the ScoreLabel (showing 0 ... The first time the button is clicked, the “get” returns the inital value of 0, so 0+1=1 is set into ScoreLabel. ... How do you count-down from 10 and play a sound at 0?',
	},
	'علي بن أبي طالب': {
		title: 'أبو تراب',
	},
	'أبو بكر': {
		title: 'الصديق',
	},
	'خالد بن الوليد': {
		title: 'سيف الله المسلول',
	},
	'أسماء بنت عميس': {
		title: 'صاحبة الهجرتين',
	},
	'الزبير بن العوام': {
		title: 'حواري رسول الله',
	},
	'أبو عبيدة بن الجراح': {
		title: 'أمين هذه الأمة',
	},
	'زيد بن حارثة': {
		title: 'حب رسول الله',
	},
	'أسامة بن زيد': {
		title: 'الحب بن الحب',
	},
};

function onRecieve() {
	random = Math.floor(Math.random() * 10);
	randomFinal = random;
	sahabaName.innerHTML = Object.entries(names)[randomFinal][0];
}
function fillCards() {
	one = document.getElementById('paraone');
	two = document.getElementById('paratwo');
	three = document.getElementById('parathree');
	four = document.getElementById('parafour');
	five = document.getElementById('parafive');
	six = document.getElementById('parasix');
	seven = document.getElementById('paraseven');
	eight = document.getElementById('paraeight');
	nine = document.getElementById('paranine');
	ten = document.getElementById('paraten');

	one.innerText = Object.entries(names)[0][1].title;
	two.innerText = Object.entries(names)[1][1].title;
	three.innerText = Object.entries(names)[2][1].title;
	four.innerText = Object.entries(names)[3][1].title;
	five.innerText = Object.entries(names)[4][1].title;
	six.innerText = Object.entries(names)[5][1].title;
	seven.innerText = Object.entries(names)[6][1].title;
	eight.innerText = Object.entries(names)[7][1].title;
	nine.innerText = Object.entries(names)[8][1].title;
	ten.innerText = Object.entries(names)[9][1].title;
}
function checkIfone() {
	if (one.innerText == Object.entries(names)[randomFinal][1].title) {
		popUpThing();
		return;
	} else {
		one.parentElement.style.opacity = '0';
		return;
	}
}
one.addEventListener('click', checkIfone);

function checkIftwo() {
	if (two.innerText == Object.entries(names)[randomFinal][1].title) {
		popUpThing();
		return;
	} else {
		two.parentElement.style.opacity = '0';
		return;
	}
}
two.addEventListener('click', checkIftwo);

function checkIfthree() {
	if (three.innerText == Object.entries(names)[randomFinal][1].title) {
		popUpThing();
		return;
	} else {
		three.parentElement.style.opacity = '0';
		return;
	}
}
three.addEventListener('click', checkIfthree);

function checkIffour() {
	if (four.innerText == Object.entries(names)[randomFinal][1].title) {
		popUpThing();
		return;
	} else {
		four.parentElement.style.opacity = '0';
		return;
	}
}
four.addEventListener('click', checkIffour);

function checkIffive() {
	if (five.innerText == Object.entries(names)[randomFinal][1].title) {
		popUpThing();
		return;
	} else {
		five.parentElement.style.opacity = '0';
		return;
	}
}
five.addEventListener('click', checkIffive);

function checkIfsix() {
	if (six.innerText == Object.entries(names)[randomFinal][1].title) {
		popUpThing();
		return;
	} else {
		six.parentElement.style.opacity = '0';
		return;
	}
}
six.addEventListener('click', checkIfsix);

function checkIfseven() {
	if (seven.innerText == Object.entries(names)[randomFinal][1].title) {
		popUpThing();
		return;
	} else {
		seven.parentElement.style.opacity = '0';
		return;
	}
}
seven.addEventListener('click', checkIfseven);

function checkIfeight() {
	if (eight.innerText == Object.entries(names)[randomFinal][1].title) {
		popUpThing();
		return;
	} else {
		eight.parentElement.style.opacity = '0';
		return;
	}
}
eight.addEventListener('click', checkIfeight);

function checkIfnine() {
	if (nine.innerText == Object.entries(names)[randomFinal][1].title) {
		popUpThing();
		return;
	} else {
		nine.parentElement.style.opacity = '0';
		return;
	}
}
nine.addEventListener('click', checkIfnine);

function checkIften() {
	if (ten.innerText == Object.entries(names)[randomFinal][1].title) {
		popUpThing();
		return;
	} else {
		ten.parentElement.style.opacity = '0';
		return;
	}
}
ten.addEventListener('click', checkIften);

// reload.addEventListener('click', popUpThing());
onRecieve();
fillCards();

var discription = document.getElementById('discription');
var sahabiNameDiscription = document.getElementById('sahabiNameDiscription');
discription.innerHTML = Object.entries(names)[randomFinal][1].discription;
sahabiNameDiscription.innerHTML =
	'من هو ' + Object.entries(names)[randomFinal][0] + '؟';
