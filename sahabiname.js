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
		discription:
			'أبو حفص عمر بن الخطاب العدوي القرشي، المُلقب بالفاروق، هو ثاني الخلفاء الراشدين ومن كبار أصحاب الرسول محمد صلى الله عليه وسلم ، وأحد أشهر الأشخاص والقادة في التاريخ الإسلامي ومن أكثرهم تأثيرًا ونفوذًا. تولّى الخلافة الإسلامية بعد وفاة أبي بكر الصديق سنة 13 هـ.',
	},
	'عثمان بن عفان': {
		title: 'ذو النورين',
		discription:
			'ولد عثمان بن عفان في الطائف وقيل في مكة سنة 576 م بعد عام الفيل بست سنين. وهو من بطن بني أمية بن عبد شمس بن عبد مناف وهم من كبار سادات قريش، وأبوه عفان ابن عم أبي سفيان بن حرب. وكان عثمان يلقب بذي النورين لزواجه من رقية ومن ثم أم كلثوم بنتي النبي محمد صلى الله عليه وسلم',
	},
	'علي بن أبي طالب': {
		title: 'أبو تراب',
		discription:
			'أبو الحسن علي بن أبي طالب الهاشمي ابن عم الرسول محمد صلى الله عليه وسلم بن عبد الله وصهره، من آل بيته، وأحد أصحابه، هو رابع الخلفاء الراشدين. وأحد العشرة المبشرين بالجنة',
	},
	'أبو بكر': {
		title: 'الصديق',
		discription:
			'ولد أبو بكر الصدِّيق في مكة سنة 573م بعد عام الفيل بسنتين وستة أشهر، وكان من أغنياء قُريش في الجاهليَّة، فلما دعاه النبي مُحمد إلى الإسلام أسلمَ دون تردد، فكان أول من أسلم مِن الرجال الأحرار',
	},
	'خالد بن الوليد': {
		title: 'سيف الله المسلول',
		discription:
			'خالد بن الوليد بن المغيرة المخزومي القرشي صحابي وقائد عسكري مسلم، لقّبه الرسول بسيف الله المسلول. اشتهر بعبقرية تخطيطه العسكري وبراعته في قيادة جيوش المسلمين في حروب الردة وفتح العراق والشام، في عهد خليفتي الرسول أبي بكر وعمر في غضون عدة سنوات من عام 632 حتى عام 636',
	},
	'أسماء بنت عميس': {
		title: 'صاحبة الهجرتين',
		discription:
			'أسماء بنت عميس الخثعمية صحابية كانت زوجة لجعفر بن أبي طالب ثم لأبي بكر الصديق ثم لعلي بن أبي طالب. هاجرت أسماء للحبشة ثم إلى يثرب، لذا فتُكنّى بصاحبة الهجرتين',
	},
	'الزبير بن العوام': {
		title: 'حواري رسول الله',
		discription:
			'ابن عمة النبي محمد صلى الله عليه وسلم بن عبد الله وابن أخ زوجته خديجة بنت خويلد، وأحد العشرة المبشرين بالجنة، ومن السابقين إلى الإسلام، يُلقب بـ حواري رسول الله؛ لأن النبي قال عنه: «إِنَّ لِكُلِّ نَبِيٍّ حَوَارِيًا، وَحَوَارِيَّ الزُّبَيْرُ»، أوَّل من سلَّ سيفه في الإسلام، وأحد الستة أصحاب الشورى الذين اختارهم',
	},
	'أبو عبيدة بن الجراح': {
		title: 'أمين هذه الأمة',
		discription:
			'أبو عبيدة عامر بن عبد الله بن الجراح الفهري القرشي صحابي وقائد مسلم، وأحد العشرة المبشرين بالجنة، ومن السابقين الأولين إلى الإسلام، لقَّبَهُ النّبيُّ محمدٌ صلى الله عليه وسلم بأمين الأمة حيث قال: إن لكل أمّة أميناً، وإن أميننا أيتها الأمة: أبو عبيدة بن الجراح',
	},
	'زيد بن حارثة': {
		title: 'حب رسول الله',
		discription:
			'زيد بن حارثة (المتوفي سنة 8 هـ) صحابي وقائد عسكري مسلم، كان مولى للنبي محمد، وكان النبي محمد قد تبناه قبل بعثته، وهو أول الموالي إسلامًا، ومن السابقين الأولين للإسلام، والوحيد من بين أصحاب النبي محمد  صلى الله عليه وسلم الذي ذُكر اسمه في القرآن. شهد زيد العديد من غزوات النبي محمد صلى الله عليه وسلم، كما بعثه قائدًا على عدد من السرايا',
	},
	'أسامة بن زيد': {
		title: 'الحب بن الحب',
		discription:
			'هو ابن زيد بن حارثة ولقبه النبي صلى الله عليه وسلم الحب بن الحب، ومن بطولاته أن قاد جيش وعمره ١٥ سنة(اختلفت الوايات)',
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

onRecieve();
fillCards();

var discription = document.getElementById('discription');
var sahabiNameDiscription = document.getElementById('sahabiNameDiscription');
discription.innerHTML = Object.entries(names)[randomFinal][1].discription;
sahabiNameDiscription.innerHTML =
	'من هو ' + Object.entries(names)[randomFinal][0] + '؟';
