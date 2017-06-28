//Username is 'Hail' and password is 'Giovanni'
//Makes GIF pop up after getting user and/or password wrong

function login() {
	var count = 3
	$("#loginButton").click(function() {
		if (count > 0) {
			if ($("#user_box").val() == "Hail" && $("#pass_box").val() == "Giovanni") {
				window.location.href = "shopfront.html";
			}

			else {
				alert("Incorrect. JJM commencing in " + count + "...");
				count -= 1;
			}
		}
		if (count === 0) {
			$("body").append($("<center><img id='JJM' src='https://media.tenor.com/images/13128e189e9e009c9639b252b9c1ff9f/tenor.gif'></center>"));
			$("#logo").css("opacity", "0");
		}
	});
}

$(document).ready(function(){
	login();
});