//Opens up side navigation
function openNav() {
	$('#open').fadeOut(150,
		function(){
			$('#mySidenav').css('width','300px');
			$('a').css('opacity','1');
			$('#logo').css('opacity','0.3');
			$('#subscribe').css('color','rgba(184,48,32,1)');
			$('#news').css('opacity','1');
			$('.btn-sm').css('opacity','1');
			$('#rights').css('opacity','1');
	});
}

//Closes side navigation, does not fade in button until navigation closed
function closeNav() {
	$('a').css('opacity','0');
	$('#logo').css('opacity','0');
	$('#subscribe').css('color','rgba(184,48,32,0)');
	$('#news').css('opacity','0');
	$('.btn-sm').css('opacity','0');
	$('#rights').css('opacity','0');
   	$('#mySidenav').css('width','0');
    setTimeout(function(){$('#open').fadeIn(500);},350);
}

//Array that Daily Rocket pulls news items from
var news = [
	'If you see a young boy wearing a hat walking with a Pikachu outside of its Pok\u00E9 Ball, contact JJM through our secure MeowthTalkie line.',
	'Hail Giovanni.',
	'Contact Butch and Cassidy to lend your support in the next Grand Rocket 2K17.',
	'Need your message to be heard by the masses? Put out an ad through our monthly Rocket newsletter.',
	'Looking for or selling bottlecaps? Contact James for more info.',
	'Send all Persian pictures to Giovanni without question.',
	'Protect the world from devastation.',
	'Unite all peoples within our nation.',
	'Denounce the evils of truth and love.',
	'Extend our reach to the stars above.',
	'だ-だれか、助けてぇぇぇ！！！',
	'Meowth! That\'s right!',
	'Mya, meow, mew, meowth...Meowth!!',
	'Please contact Jessebelle if you meet a lavender-haired man named James at (XOX)OXO-XOXO.',
	'Our next system maintenance is scheduled for XX-XX-20XX. You will not be able to log into our systems at that time. We do not apologize for this inconvenience.',
	'Looking for interpreters to help expand our Team to the global stage. Contact Giovanni for more details.',
	'Applications for KantoK are now closed. Members will be announced next month.',
	'To the jerk who kept stealing my sandwiches: I hope you\'re enjoying your bathroom stay right now! -C',
	'Can someone get me some more toilet paper? Please? -B',
	'Net profit up by 50% from last month. Pok\u00E9mon trainer count down by 5%. Great job, everybody!'
]

//Randomly picks three news items to append and display
function display_news() {

	var picked = [];

	while (picked.length < 3) {
		var choice = Math.floor(Math.random() * news.length);
		if (!(picked.includes(choice))) {
			$("#news_items").append($("<li>").text(news[choice]));
			picked.push(choice);
		};
	}

	if ($("#news_items li").length == 3) {
		$("#news_feed").fadeIn();
   	}
}

function update_news() {
   $("#news_feed").fadeOut(function() {
      $("#news_items").empty();
      display_news();
   });
}

//Toggles submenus in side navigation
function menu_click() {
    $('#menu-1').click(function(){
      $('.submenu-1').slideToggle();
    });
    $('#menu-2').click(function(){
      $('.submenu-2').slideToggle();
    });
    $('#menu-3').click(function(){
      $('.submenu-3').slideToggle();
    });

    $('#menu-4').click(function(){
      $('.submenu-4').slideToggle();
    });
};

//Descriptions for Poké Balls
var ball = [
	[],
	['Pok&#233; Ball','A device for catching wild Pok&#233;mon. It\'s thrown like a ball at a Pok&#233;mon, comfortably encapsulating its target.'],
	['Great Ball','A good, high-performance Pok&#233; Ball that provides a higher Pok&#233;mon catch rate than a standard Pok&#233; Ball.'],
	['Ultra Ball','An ultra-high-performance Pok&#233; Ball that provides a higher success rate for catching Pok&#233;mon than a Great Ball.'],
	['Master Ball','The best Pok&#233; Ball with the ultimate level of performance. With it, you will catch any wild Pok&#233;mon without fail.'],
	['Safari Ball','A special Pok&#233; Ball that is used only in the Great Marsh. It is recognizable by the camouflage pattern decorating it.'],
	['Level Ball','A Pok&#233; Ball that makes it easier to catch Pok&#233;mon that are at a lower level than your own Pok&#233;mon.'],
	['Lure Ball','A Pok&#233; Ball that is good for catching Pok&#233;mon that you reel in with a Rod while out fishing.'],
	['Moon Ball','A Pok&#233; Ball that will make it easier to catch Pok&#233;mon that can evolve using a Moon Stone.'],
	['Friend Ball','A strange Pok&#233; Ball that will make the wild Pok&#233;mon caught with it more friendly toward you immediately.'],
	['Love Ball','A Pok&#233; Ball that works best when catching a Pok&#233;mon that is of the opposite gender of your Pok&#233;mon.'],
	['Heavy Ball','A Pok&#233; Ball that is better than usual at catching very heavy Pok&#233;mon.'],
	['Fast Ball','A Pok&#233; Ball that makes it easier to catch Pok&#233;mon that are usually very quick to run away.'],
	['Sport Ball','A special Pok&#233; Ball that is used during the Bug-Catching Contest.'],
	['Premier Ball','A somewhat rare Pok&#233; Ball that was made as a commemorative item used to celebrate an event of some sort.'],
	['Repeat Ball','A somewhat different Pok&#233; Ball that works especially well on a Pok&#233;mon species that has been caught before.'],
	['Timer Ball','A somewhat different Pok&#233; Ball that becomes progressively more effective the more turns that are taken in battle.'],
	['Nest Ball','A somewhat different Pok&#233; Ball that becomes more effective the lower the level of the wild Pok&#233;mon.'],
	['Net Ball','A somewhat different Pok&#233; Ball that is more effective when attempting to catch Water- or Bug-type Pok&#233;mon.'],
	['Dive Ball','A somewhat different Pok&#233; Ball that works especially well when catching Pok&#233;mon that live underwater.'],
	['Luxury Ball','A particularly comfortable Pok&#233; Ball that makes a wild Pok&#233;mon quickly grow friendlier after being caught.'],
	['Heal Ball','A remedial Pok&#233; Ball that restores the HP of a Pok&#233;mon caught with it and eliminates any status conditions.'],
	['Quick Ball','A somewhat different Pok&#233; Ball that has a more successful catch rate if used at the start of a wild encounter.'],
	['Dusk Ball','A somewhat different Pok&#233; Ball that makes it easier to catch wild Pok&#233;mon at night or in dark places like caves.'],
	['Cherish Ball','A quite rare Pok&#233; Ball that has been crafted in order to commemorate a special occasion of some sort.'],
	['Park Ball','A special Pok&#233; Ball for the Pal Park.'],
	['Dream Ball','A special Pok&#233; Ball that appears in your Bag out of nowhere in the Entree Forest. It can catch any Pok&#233;mon.'],
	['Beast Ball','A special Pok&#233; Ball designed to catch Ultra Beasts. It has a low success rate for catching others.']
]

//Randomly assigns values to Poké Balls and descriptions for array
function pop() {

	$('.anim').attr('id', function(i) {
   		return i+1;
	});

	for (i = 1; i < 28; i++) {
		var mult = Math.random() * 100000
		var num = Math.floor(Math.random() * mult);
		$('#'+i).attr({'data-html':true,'title':ball[i][0], 'data-content':ball[i][1] + '<font color=black>' + '\n\n Exchange rate: ' + num + '</font>' + '<img id="poke" src="https://cdn.bulbagarden.net/upload/8/8c/Pok%C3%A9monDollar.png">', 'data-placement':'top', 'data-trigger':'hover'});
	};
}

$(document).ready(function(){

	menu_click();

	update_news();
   	setInterval(update_news, 10000);

	pop();
    $('.anim').popover();/*.click(
    	function(e) {
    		$(this).popover('toggle');
    		e.stopPropagation();
    	}
    );
    $('img').on('click', function (e) {
    	$('img').not(this).popover('hide');
	});*/
});