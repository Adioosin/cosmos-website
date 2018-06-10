var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches



$(".next").click(function(){
	
	var e = document.getElementById("sel");
	var strUser = e.options[e.selectedIndex].text;
	var z = document.getElementById("other_inst_value").value;
	console.log(z);
	if (strUser=="VIT UNIVERSITY"){
		nxtbtn1();
	}
	else if(strUser=="Other Institute" && z!=""){
		nxtbtn1();
	}
	else
		alert("Please Fill all the Details");
	
});
$("#next1").click(function(){
	var w = document.getElementById("team_name").value;
	var x = document.getElementById("name").value;
	var y = document.getElementById("regno").value;
	var z = document.getElementById("email").value;
	var m = document.getElementById("mobile").value;

	if(x != "" && y!="" && z!="" && m!="" && w!="")
		nxtbtn2();
	else
		alert("Please Fill all the Details");
});


$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return true;
});

function nxtbtn1()
{
	if(animating) return false;
	animating = true;
	
	current_fs = $(first)
	next_fs = $(second)
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
}

function nxtbtn2(){
	//if(animating) return false;
	animating = true;
	
	current_fs = $(second)
	next_fs = $(third)
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
}

$(document).ready(function(){
    $("#tmem1").hide();
    $("#tmem2").hide();
    $("#tmem3").hide();
    $("#tmem4").hide();
    $("#title_t").hide();
    $("#lone").show();
});

$("#sel").on("change", function(){
  // This code will fire every time the user selects something
  var chk=$("#sel option:selected").text();
  if(chk=="Other Institute"){
    console.log("yes");
    $("#inst").css("display", "block");
}
else{
    $("#inst").css("display", "none");
}});

$("#team_size").on("change", function(){
  // This code will fire every time the user selects something
  var chk=$("#team_size option:selected").text();

    if (chk=="1"){
        $("#title_t").hide();
        $("#lone").show();
        $("#tmem1").hide();
        $("#tmem2").hide();
        $("#tmem3").hide();
        $("#tmem4").hide();
        console.log("here");
    }
    else if(chk=="2"){
        $("#title_t").show();
        $("#tmem1").show();
        $("#tmem2").hide();
        $("#tmem3").hide();
        $("#tmem4").hide();
        $("#lone").hide();
    }
    else if(chk=="3"){
        $("#title_t").show();
        $("#tmem1").show();
        $("#tmem2").show();
        $("#tmem3").hide();
        $("#tmem4").hide();
        $("#lone").hide();
    }
    else if(chk=="4"){
        $("#title_t").show();
        $("#tmem1").show();
        $("#tmem2").show();
        $("#tmem3").show();
        $("#tmem4").hide();
        $("#lone").hide();
    }
    else if(chk=="5"){
        $("#title_t").show();
        $("#tmem1").show();
        $("#tmem2").show();
        $("#tmem3").show();
        $("#tmem4").show();
        $("#lone").hide();   
    }
});

//Team Member Input verification
