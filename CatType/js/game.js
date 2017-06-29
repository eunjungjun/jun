var canvas = $("#main")[0];
var ctx = canvas.getContext("2d");
var started = false;
var optionScreen = false;
var ended = false;
var playStyle0 = false;
var playStyle1 = false;
var playStyle2 = false;
var playStyle3 = false;
var canEnter = false;
var locations = [];
var girlLoc = [0,16];
var happy = new Audio("resources/happyMew.mp3");
var sad = new Audio("resources/sadMew.mp3");
var music = new Audio("resources/resignation.mp3");
var score = 0;
var rightCount = 0;
var wrongAns = [];
ctx.strokeStyle = "#040e44";
ctx.fillStyle = "#040e44";

//List of possible words for kanji -> hiragana & kanji -> English
var japanese = [
	["水",   "日曜日",    "月曜日",    "火曜日",  "水曜日",    "木曜日",    "金曜日",    "土曜日",  "左",    "右",    "白",   "黒",    "青",   "赤",  "友達",    "東京",      "先生",    "学生",     "学校",     "家",   "山",      "男",    "女",    "人",    "雨",  "日本",  "日本語",  "音",   "川",   "木",  "気分",    "手",  "口",   "新聞",     "西",  "北",   "南",    "東",    "夜",   "雪",  "鳥",  "犬",  "心",    "花",    "朝",     "空",  "風",  "星",  "冬",    "夏",    "秋",  "春",  "神",   "牛",  "森",    "上",  "下",  "中",    "目", "耳"],
	["みず", "にちようび","げつようび","かようび","すいようび","もくようび","きんようび","どようび","ひだり","みぎ",  "しろ", "くろ", "あお","あか","ともだち","とうきょう","せんせい","がくせい","がっこう","いえ", "やま",    "おとこ","おんな","ひと",  "あめ","にほん","にほんご","おと", "かわ", "き",  "きぶん", "て",  "くち", "しんぶん", "にし","きた", "みなみ","ひがし","よる", "ゆき","とり","いぬ","こころ","はな",  "あさ",   "そら","かぜ","ほし","ふゆ",  "なつ",  "あき","はる","かみ", "うし","もり",  "うえ","した","なか",  "め", "みみ"],
	["water","Sunday",    "Monday",    "Tuesday", "Wednesday", "Thursday",  "Friday",    "Saturday","left",  "right", "white","black","blue","red", "friend",  "Tokyo",     "teacher", "student", "school",  "house","mountain","man",   "woman", "person","rain","Japan", "Japanese","sound","river","tree","feeling","hand","mouth","newspaper","west","north","south", "east",  "night","snow","bird","dog", "heart", "flower","morning","sky", "wind","star","winter","summer","fall","spring","god","cow", "forest","up",  "down","middle","eye","ear",]
]

//List of possible words for Korean -> English & English -> Korean
var korean = [
	["일요일","월요일","화요일", "수요일",   "목요일",  "금요일","토요일",  "사과", "복숭아","수박",      "키위","과일", "딸기",      "레몬", "라임","엄마","아빠","배",  "파인애플", "귤",       "바나나","포도", "체리",  "망고", "아보카도","코코넛", "감",       "석류",       "당근",  "시금치", "감자",  "토마토","양배추", "양파", "오이",    "상추",   "옥수수", "아스파라거스","셀러리","무",    "마늘",  "부추","소금","나무","꽃",    "물",   "불",  "구름", "비",  "우박","우산",    "하늘", "달",  "냉장고",      "얼음", "침대", "문",  "바닥",  "창문", "수건"],
	["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","apple","peach", "watermelon","kiwi","fruit","strawberry","lemon","lime","mom","dad",  "pear","pineapple","tangerine","banana","grape","cherry","mango","avocado", "coconut","persimmon","pomegranate","carrot","spinach","potato","tomato","cabbage","onion","cucumber","lettuce","corn",   "asparagus",   "celery","radish","garlic","leek","salt","tree","flower","water","fire","cloud","rain","hail","umbrella","sky",  "moon","refrigerator","ice",  "bed",  "door","floor","window","towel"]
]

//Measures how much time elapses during game
var startSec, endSec, seconds;
function startTime() {
  startSec = new Date();
}

function endTime() {
  endSec = new Date();
  var timeDiff = endSec - startSec;
  timeDiff /= 1000;

  seconds = Math.round(timeDiff);
  return seconds
}

//Draws the start screen
function start() {
	ctx.font = "35px Trebuchet MS";
	ctx.strokeText("Meow | ニャー | 야옹",30,50);

	ctx.font = "20px Trebuchet MS";
	ctx.strokeText("Start | スタート | 시작",450,370);

	ctx.font = "10px Trebuchet MS";
	ctx.fillText("Created by J🐱anne Jun",10,410);

	ctx.rect(440,343,230,40);
	ctx.stroke();

	started = false;
	
	startButton();
}

//Draws option screen after clicking start on start screen
function startButton() {
	var rect = [440,343,230,40];

	$("#main").click(function(e) {
		var x = e.offsetX;
		var y = e.offsetY;

    	if (x > rect[0] && x < rect[0] + rect[2] && y > rect[1] && y < rect[1] + rect[3] && started === false) {
    		optionScreen = true;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.beginPath();
			ctx.strokeStyle = "#040e44";
			ctx.fillStyle = "#040e44";

			ctx.font = "20px Trebuchet MS";
			ctx.fillStyle = "#040e44";
			ctx.strokeStyle = "#040e44";

			ctx.fillText("漢字 → ひらがな",50,160);		
			ctx.rect(40,135,170,36);		

			ctx.fillText("漢字 → English",50,260);
			ctx.rect(40,235,170,36);

			ctx.fillText("한국어 → English",515,160);
			ctx.rect(505,135,170,36);

			ctx.fillText("English → 한국어",515,260);
			ctx.rect(505,235,170,36);

			ctx.stroke();

			started = true;
			$("#main").off("click");
			chooseOption();
    	}

	});
}

//Creates main character
function createGirl() {
	$("#container").append($("<div>").attr("id","girl"));
	$("#girl").css({
		"position": "relative",
		"top": "-5px",
	    "bottom": "0",
	    "left": "676px",
	    "right": "0",
		"width": "42px",
		"height": "42px",
		"background-image": "url('resources/girlSpriteSheet.png')",
		"z-index": "1"
	})
	var element = document.querySelector('#girl');
	var sprite = new Motio(element, {fps: 7, frames: 5});
	sprite.play();
}

//Determines random number from min to max, inclusive
function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

//Creates and randomizes location of cats
function createCat() {

	var numCats = 0;
	var picked = [];
	var ord = 0;
	var pickedWord = [];

	while (pickedWord.length < 15) {
		var wordRan = randomInt(0,59);
		if (!(pickedWord.includes(wordRan))) {
			pickedWord.push(wordRan);
		}
	}
	
	while ($(".cat").length != 15) {
		var catChoice = randomInt(0,7);
		var choice0 = randomInt(1,9);
		var choice1 = randomInt(1,15);
		if (!(picked.includes(choice1))) {
			var mult0 = 3 + (42 * choice0);
			var mult1 = 7 + (42 * choice1);
			picked.push(choice1);
			locations.push([choice0,choice1]);
			$("#container").append($("<div>").attr({
				"id":"cat" + ord
			}));
			$("#cat" + ord).css({
				"position": "absolute",
				"top": mult0 + "px",
			    "bottom": "0",
			    "left": mult1 + "px",
			    "right": "0",
				"width": "33px",
				"height": "31px",
				"background-image": "url('resources/catSpriteSheet" + catChoice + ".png')"
			})

			$("#cat" + ord).append($("<input>").attr({
				"class": "cat",
				"id": ord,
				"size": "10",
				}).css({
				"position": "relative",
				"bottom": "18px",
				"right": "30px",
				"visibility": "hidden",
				"z-index": "2"
				}));

			if (playStyle0 === true) {
				$("#" + ord).attr("placeholder",japanese[0][pickedWord[ord]]);
			}

			if (playStyle1 === true) {
				$("#" + ord).attr("placeholder",japanese[0][pickedWord[ord]]);
			}

			if (playStyle2 === true) {
				$("#" + ord).attr("placeholder",korean[0][pickedWord[ord]]);
			}

			if (playStyle3 === true) {
				$("#" + ord).attr("placeholder",korean[1][pickedWord[ord]]);
			}

			var element = document.querySelector("#cat" + ord);

			switch (catChoice) {
				case 0:
					var sprite = new Motio(element, {fps: 6, frames: 36});
					break;

				case 1:
				case 5:
					$("#cat" + ord).css({
						"height": "34px",
					})
					var sprite = new Motio(element, {fps: 6, frames: 38});
					break;

				case 2:
				case 7:
					var sprite = new Motio(element, {fps: 6, frames: 61});
					break;

				case 3:
				case 4:
					var sprite = new Motio(element, {fps: 6, frames: 13});
					break;

				case 6:
					var sprite = new Motio(element, {fps: 6, frames: 30});
					break;

			}
			sprite.play();
			ord++;
		};
	}
}

//Determines which playstyle was chosen
function chooseOption() {
	var rect0 = [40,135,170,36];
	var rect1 = [40,235,170,36];
	var rect2 = [505,135,170,36];
	var rect3 = [505,235,170,36];

	$("#main").click(function(e) {
		var x = e.offsetX;
		var y = e.offsetY;

    	if (x > rect0[0] && x < rect0[0] + rect0[2] && y > rect0[1] && y < rect0[1] + rect0[3] && optionScreen === true) {
    		playStyle0 = true;
    		optionScreen = false;
    		ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.beginPath();
			$('#main').css("background-image", "url('resources/grass.png')");
    		mainPart();
    	}

    	else if (x > rect1[0] && x < rect1[0] + rect1[2] && y > rect1[1] && y < rect1[1] + rect1[3] && optionScreen === true) {
    		playStyle1 = true;
    		optionScreen = false;
    		ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.beginPath();
			$('#main').css("background-image", "url('resources/grass.png')");
    		mainPart();
    	}

    	else if (x > rect2[0] && x < rect2[0] + rect2[2] && y > rect2[1] && y < rect2[1] + rect2[3] && optionScreen === true) {
    		playStyle2 = true;
    		optionScreen = false;
    		ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.beginPath();
			$('#main').css("background-image", "url('resources/grass.png')");
    		mainPart();
    	}

    	else if (x > rect3[0] && x < rect3[0] + rect3[2] && y > rect3[1] && y < rect3[1] + rect3[3] && optionScreen === true) {
    		playStyle3 = true;
    		optionScreen = false;
    		ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.beginPath();
			$('#main').css("background-image", "url('resources/grass.png')");
    		mainPart();
    	}
  	});
}

//Determines if answer in box matches the one in the list & updates girl position while she is moving around and checks is she is on top of cat
$(document).keydown(function(e) {
	switch (e.which) {
		//Submit answer
		case 13:
			var active = document.activeElement.id
			if (playStyle0 === true) {
				var placeHold = japanese[0].indexOf(document.getElementById(active).getAttribute("placeholder"));
				var ans = japanese[1][placeHold];
			}

			if (playStyle1 === true) {
				var placeHold = japanese[0].indexOf(document.getElementById(active).getAttribute("placeholder"));
				var ans = japanese[2][placeHold];
			}

			if (playStyle2 === true) {
				var placeHold = korean[0].indexOf(document.getElementById(active).getAttribute("placeholder"));
				var ans = korean[1][placeHold];
			}

			if (playStyle3 === true) {
				var placeHold = korean[1].indexOf(document.getElementById(active).getAttribute("placeholder"));
				var ans = korean[0][placeHold];
			}

			try {
				if (document.getElementById(active).value.toLowerCase() === ans.toLowerCase()) {
					happy.volume = 0.25;
					happy.play();
					$("#" + active).parent().remove();
					rightCount++;
					score+=randomInt(100,999);
				}

				if (document.getElementById(active).value.toLowerCase() !== ans.toLowerCase()) {
					sad.volume = 0.25;
					sad.play();
					wrongAns.push([document.getElementById(active).getAttribute("placeholder"),document.getElementById(active).value,ans]);
					$("#" + active).parent().remove();
				}
			}

			catch(e) {

			}

			finally {
				if ($(".cat").length === 0 && canEnter === true) {
					$("#girl").remove();
					endTime();
					endScreen();
				}
			}

			break;

		//Go left
		case 37:
			if ($("#girl").position().left > 4) {
				$("#girl").css("left",$("#girl").position().left - 42);
				girlLoc[1]--;
			}
			break;

		//Go up
		case 38:
			if ($("#girl").position().top > -5) {
				$("#girl").css("top",$("#girl").position().top - 42);
				girlLoc[0]--;
			}
			break;

		//Go right
		case 39:
			if ($("#girl").position().left < 676) {
				$("#girl").css("left",$("#girl").position().left + 42);
				girlLoc[1]++;
			}
			break;

		//Go down
		case 40:
			if ($("#girl").position().top < 373) {
				$("#girl").css("top",$("#girl").position().top + 42);
				girlLoc[0]++;
			}
			break;
	}
	if (canEnter === true) {
		for (i=0;i<15;i++) {
			if (locations[i][0] === girlLoc[0] && locations[i][1] === girlLoc[1]) {
				var findCat = locations.indexOf(locations[i])
				$("#" + findCat).css("visibility","visible").focus();
			}

			else if (locations[i][0] !== girlLoc[0] || locations[i][1] !== girlLoc[1]) {
				var findCat = locations.indexOf(locations[i])
				$("#" + findCat).css("visibility","hidden");
			}
		}
	}
});

//Runs main part of the game
function mainPart() {
	createGirl();
	createCat();
	startTime();
	canEnter = true;
}

//Loops the music
music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

//Draws the ending screen
function endScreen() {
	ended = true;

	$('#main').css("background-image", "url('resources/endBackground.jpg')");

	ctx.strokeStyle = "#040e44";
	ctx.fillStyle = "#040e44";

	ctx.font = "35px Trebuchet MS";
	ctx.strokeText("Score | スコア | 점수",30,50);

	ctx.font = "20px Trebuchet MS";
	ctx.fillText("Cat | 猫 | 고양이:",20,150);
	ctx.fillText("Time | 秒 | 초:",20,210);
	ctx.strokeText("→",650,370);

	ctx.font = "17px Trebuchet MS"

	if (rightCount < 10) {
		ctx.fillText(rightCount,185,141);
		ctx.fillText(seconds,185,211);
		ctx.fillText("15",193,154);

		ctx.font = "30px Trebuchet MS";
		ctx.fillText(Math.floor(score * (30 / seconds)),185,270);
	}

	else {
		ctx.fillText(rightCount,180,140);
		ctx.fillText(seconds,180,211);
		ctx.fillText("15",196,154);

		ctx.font = "30px Trebuchet MS";
		ctx.fillText(Math.floor(score * (45 / seconds)),180,270);
	}

	ctx.font = "bold 15px Trebuchet MS"
	ctx.fillText("Answers | 解答 | 답",460,90);

	ctx.font = "12px Trebuchet MS";
	for (i=0;i<wrongAns.length;i++) {
		ctx.fillText(wrongAns[i][0] + " | " + '"' + wrongAns[i][1] + '"' + " → " + wrongAns[i][2],460, (110 + (i * 15)));
	}

	ctx.beginPath();
	ctx.moveTo(20,230);
	ctx.lineTo(250,230);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(204,131);
	ctx.lineTo(185,152);

	ctx.rect(640,343,40,40);
	ctx.stroke();

	endButton();
}

//If clicked on, resets variables and goes back to the beginning
function endButton() {
	var rect = [640,343,40,40];

	$("#main").click(function(e) {
		var x = e.offsetX;
		var y = e.offsetY;

    	if (x > rect[0] && x < rect[0] + rect[2] && y > rect[1] && y < rect[1] + rect[3] && ended === true) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.beginPath();
			$('#main').css("background-image", "url('resources/background.jpg')");
			start();

			started = false;
			optionScreen = false;
			ended = false;
			playStyle0 = false;
			playStyle1 = false;
			playStyle2 = false;
			playStyle3 = false;
			canEnter = false;
			locations = [];
			girlLoc = [0,16];
			score = 0;
			rightCount = 0;
			wrongAns = [];

			ended = false;
    	}
	});
}

//Unused cat movement code
/* Cat movement
var position = -650;
var speed = 1;
function moveCat() {
	position = position + speed;
	$("#cat0").css("left", position + "px");
	requestAnimationFrame(moveCat);
}

requestAnimationFrame(moveCat);
*/

//Runs functions once DOM is ready
$(document).ready(function() {
	start();
	startButton();
	music.play();
});