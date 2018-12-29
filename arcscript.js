$(document).ready(function(){
	// find elements
	var clear = $(".clear");

	var immortalhead = $(".immortal.header");
	var frantichead = $(".frantic.header");
	var sicklyhead = $(".sickly.header");

	var bluehead = $(".blue.header");
	var orahead = $(".orange.header");
	var grehead = $(".green.header");
	var redhead = $(".red.header");
	var goldhead = $(".gold.header");
	var purphead = $(".purple.header");
	var silhead = $(".silver.header");
	var blkhead = $(".black.header");

	var deceitbox = $("#deceit");
	var warbox = $("#war");
	var stratbox = $("#strat");
	var mimbox = $("#mim");
	var deceit = $(".deceiver");
	var war = $(".warmain");
	var strat = $(".strategist");
	var mimic = $(".mimic");

	var gmdPCbox = $("#gmdPC");
	var gmdNPCbox = $("#gmdNPC");
	var horizonbox = $("#horizon");
	var horizonIIbox = $("#horizonII");
	var miscbox = $("#misc");
	var gmdpc = $(".gmdpc");
	var gmdnpc = $(".gmdnpc");
	var hzI = $(".horI");
	var hzII = $(".horII");
	var misc = $(".misc");

	var angelbox = $("#angel");
	var devilbox = $("#devil");
	var serpentbox = $("#serpent");
	var lightbox = $("#light");
	var darkbox = $("#dark");
	var wildbox = $("#wild");
	var truebox = $("#true");
	var actualbox = $("#actual");
	var zubox = $("#zu");
	var noblePCbox = $("#nobilisPC");

	var characters = $(".character");
	var gmdPCnames = $(".character.gmdpc");
	var gmdNPCnames = $(".character.gmdnpc");
	var hzInames = $(".character.horI");
	var hzIInames = $(".character.horII");
	var miscnames = $(".character.misc");

	var intersections = $(".blue2, .orange2, .green2, .red2, .gold2, .purple2, .silver2, .black2");
	var singleselect = $(".blue1, .orange1, .green1, .red1, .gold1, .purple1, .silver1, .black1");
	var deselect = $(".blue, .orange, .green, .red, .gold, .purple, .silver, .black");

	var allexposition = $("p");
	var menus = $("div#nobilismenu, div#excrucianmenu, div#campaignmenu, div#toolmenu");

//hide characters on startup
	characters.hide();
	allexposition.hide();
	menus.hide();

	clear.on("click", function(){
		$(".highlight").removeClass("highlight");
	  $(".pressed").removeClass("pressed");
		$(".blue1").removeClass("blue1").addClass("blue");
		$(".blue2").removeClass("blue2").addClass("blue");
		$(".orange1").removeClass("orange1").addClass("orange");
		$(".orange2").removeClass("orange2").addClass("orange");
		$(".green1").removeClass("green1").addClass("green");
		$(".green2").removeClass("green2").addClass("green");
		$(".red1").removeClass("red1").addClass("red");
		$(".red2").removeClass("red2").addClass("red");
		$(".gold1").removeClass("gold1").addClass("gold");
		$(".gold2").removeClass("gold2").addClass("gold");
		$(".purple1").removeClass("purple1").addClass("purple");
		$(".purple2").removeClass("purple2").addClass("purple");
		$(".silver1").removeClass("silver1").addClass("silver");
		$(".silver2").removeClass("silver2").addClass("silver");
		$(".black1").removeClass("black1").addClass("black");
		$(".black2").removeClass("black2").addClass("black");
	  characters.hide();
		allexposition.hide();
	});

	function rotateOut(e){
		if (e.hasClass("blue1")) e.removeClass("blue1").addClass("blue");
		if (e.hasClass("blue2")) e.removeClass("blue2").addClass("blue1");
		if (e.hasClass("orange1")) e.removeClass("orange1").addClass("orange");
		if (e.hasClass("orange2")) e.removeClass("orange2").addClass("orange1");
		if (e.hasClass("green1")) e.removeClass("green1").addClass("green");
		if (e.hasClass("green2")) e.removeClass("green2").addClass("green1");
		if (e.hasClass("red1")) e.removeClass("red1").addClass("red");
		if (e.hasClass("red2")) e.removeClass("red2").addClass("red1");
		if (e.hasClass("gold1")) e.removeClass("gold1").addClass("gold");
		if (e.hasClass("gold2")) e.removeClass("gold2").addClass("gold1");
		if (e.hasClass("purple1")) e.removeClass("purple1").addClass("purple");
		if (e.hasClass("purple2")) e.removeClass("purple2").addClass("purple1");
		if (e.hasClass("silver1")) e.removeClass("silver1").addClass("silver");
		if (e.hasClass("silver2")) e.removeClass("silver2").addClass("silver1");
		if (e.hasClass("black1")) e.removeClass("black1").addClass("black");
		if (e.hasClass("black2")) e.removeClass("black2").addClass("black1");
	}

	function rotateIn(e){
		if (e.hasClass("blue1")) {e.removeClass("blue1").addClass("blue2");}
		if (e.hasClass("blue")) e.removeClass("blue").addClass("blue1");
		if (e.hasClass("orange1")) e.removeClass("orange1").addClass("orange2");
		if (e.hasClass("orange")) e.removeClass("orange").addClass("orange1");
		if (e.hasClass("green1")) e.removeClass("green1").addClass("green2");
		if (e.hasClass("green")) e.removeClass("green").addClass("green1");
		if (e.hasClass("red1")) {e.removeClass("red1").addClass("red2");}
		if (e.hasClass("red")) {e.removeClass("red").addClass("red1");}
		if (e.hasClass("gold1")) {e.removeClass("gold1").addClass("gold2");}
		if (e.hasClass("gold")) {e.removeClass("gold").addClass("gold1");}
		if (e.hasClass("purple1")) e.removeClass("purple1").addClass("purple2");
		if (e.hasClass("purple")) e.removeClass("purple").addClass("purple1");
		if (e.hasClass("silver1")) e.removeClass("silver1").addClass("silver2");
		if (e.hasClass("silver")) e.removeClass("silver").addClass("silver1");
		if (e.hasClass("black1")) {e.removeClass("black1").addClass("black2");}
		if (e.hasClass("black")) {e.removeClass("black").addClass("black1");}
	}

	$(".nob").on("click", function(){
		$("div#nobilismenu").toggle();
	});

	$(".exc").on("click", function(){
		$("div#excrucianmenu").toggle();
	});

	$(".cam").on("click", function(){
		$("div#campaignmenu").toggle();
	});

	$(".tool").on("click", function(){
		$("div#toolmenu").toggle();
	});

	$("#intersect").on("click", function(){
		intersections = $(".blue2, .orange2, .green2, .red2, .gold2, .purple2, .silver2, .black2");
		intersections.find(".character:not('.gmdnpc')").show();
	});

	$("#select").on("click", function(){
		intersections = $(".blue2, .orange2, .green2, .red2, .gold2, .purple2, .silver2, .black2");
		singleselect = $(".blue1, .orange1, .green1, .red1, .gold1, .purple1, .silver1, .black1");
		intersections.find(".character:not('.gmdnpc')").show();
		singleselect.find(".character:not('.gmdnpc')").show();
	});

	$("#deselect").on("click", function(){
		singleselect = $(".blue1, .orange1, .green1, .red1, .gold1, .purple1, .silver1, .black1");
		deselect = $(".blue, .orange, .green, .red, .gold, .purple, .silver, .black");
		singleselect.find(".character").hide();
		deselect.find(".character").hide();
	});

	$("#fulldeselect").on("click", function(){
		deselect = $(".blue, .orange, .green, .red, .gold, .purple, .silver, .black");
		deselect.find(".character").hide();
	});

	noblePCbox.on("click", function(){
		if (noblePCbox.hasClass("pressed")){
	   $(".attr").each(function(){
			 rotateOut($(this));
		 });
	   noblePCbox.removeClass("pressed");
		 $("p.noblePC").hide();
	  }
	  else {
			$(".attr").each(function(){
 			 rotateIn($(this));
 		 	});
		 	noblePCbox.addClass("pressed");
			$("p.noblePC").show();
	  }
	});

	deceitbox.on("click", function(){
		if (deceitbox.hasClass("pressed")){
	   deceit.each(function(){
			 rotateOut($(this));
		 });
	   deceitbox.removeClass("pressed");
		 $("p.deceiver").hide();
	  }
	  else {
			deceit.each(function(){
 			 rotateIn($(this));
 		 	});
		 	deceitbox.addClass("pressed");
			$("p.deceiver").show();
	  }
	});
	warbox.on("click", function(){
		if (warbox.hasClass("pressed")) {
			war.each(function(){
 			 rotateOut($(this));
 		 	});
		  warbox.removeClass("pressed");
			$("p.warmain").hide();
	  }
	  else {
			war.each(function(){
 			 rotateIn($(this));
 		 	});
		  warbox.addClass("pressed");
			$("p.warmain").show();
	  }
	});
	stratbox.on("click", function(){
		if (stratbox.hasClass("pressed")){
			strat.each(function(){
 			 rotateOut($(this));
 		 	});
	    stratbox.removeClass("pressed");
			$("p.strategist").hide();
	  }
	  else {
			strat.each(function(){
 			 rotateIn($(this));
 		 	});
		  stratbox.addClass("pressed");
			$("p.strategist").show();
	  }
	});
	mimbox.on("click", function(){
		if (mimbox.hasClass("pressed")){
			mimic.each(function(){
 			 rotateOut($(this));
 		 	});
	    mimbox.removeClass("pressed");
			$("p.mimic").hide();
	  }
	  else {
			mimic.each(function(){
 			 rotateIn($(this));
 		 	});
		  mimbox.addClass("pressed");
			$("p.mimic").show();
	  }
	});

	gmdPCbox.on("click", function(){
		if (gmdPCbox.hasClass("pressed")){
	  	gmdPCnames.hide();
	    gmdpc.each(function() {
				rotateOut($(this));
			});
	    gmdPCbox.removeClass("pressed");
			$("p.gmd").hide();
	  }
	  else {
		  gmdPCnames.show();
		  gmdpc.each(function() {
				rotateIn($(this));
			});
		  gmdPCbox.addClass("pressed");
			$("p.gmd").show();
	  }
	});
	gmdNPCbox.on("click", function(){
		if (gmdNPCbox.hasClass("pressed")){
	  	gmdNPCnames.hide();
	    gmdnpc.each(function() {
				rotateOut($(this));
			});
	    gmdNPCbox.removeClass("pressed");
	  }
	  else {
		  gmdNPCnames.show();
		  gmdnpc.each(function() {
				rotateIn($(this));
			});
		  gmdNPCbox.addClass("pressed");
	  }
	});
	horizonbox.on("click", function(){
		if (horizonbox.hasClass("pressed")) {
		  hzInames.hide();
		  hzI.each(function() {
				rotateOut($(this));
			});
		  horizonbox.removeClass("pressed");
			$("p.horizon").hide();
	  }
	  else {
		  hzInames.show();
		  hzI.each(function() {
				rotateIn($(this));
			});
		  horizonbox.addClass("pressed");
			$("p.horizon").show();
	  }
	});
	horizonIIbox.on("click", function(){
		if (horizonIIbox.hasClass("pressed")) {
		  hzIInames.hide();
		  hzII.each(function() {
				rotateOut($(this));
			});
		  horizonIIbox.removeClass("pressed");
			$("p.horizonII").hide();
		}
	  else {
		  hzIInames.show();
		  hzII.each(function() {
				rotateIn($(this));
			});
		  horizonIIbox.addClass("pressed");
			$("p.horizonII").show();
		}
	});
	miscbox.on("click", function(){
		if (miscbox.hasClass("pressed")){
	  	miscnames.hide();
	  	misc.each(function() {
				rotateOut($(this));
			});
	    miscbox.removeClass("pressed");
			$("p.misc").hide();
	  }
	  else {
		  miscnames.show();
		  misc.each(function() {
				rotateIn($(this));
			});
		  miscbox.addClass("pressed");
			$("p.misc").show();
	  }
	});

	angelbox.on("click", function(){
		if (angelbox.hasClass("pressed")) {
			$(".angel").each(function() {
				rotateOut($(this));
			});
			angelbox.removeClass("pressed");
			$("p.angel").hide();
	  }
	  else {
			$(".angel").each(function() {
				rotateIn($(this));
			});
			angelbox.addClass("pressed");
			$("p.angel").show();
	  }
	});
	devilbox.on("click", function(){
		if (devilbox.hasClass("pressed")) {
		   	$(".devil").each(function() {
					rotateOut($(this));
				});
		    devilbox.removeClass("pressed");
				$("p.devil").hide();
	  }
	  else {
		  $(".devil").each(function() {
				rotateIn($(this));
			});
		  devilbox.addClass("pressed");
			$("p.devil").show();
	  }
	});
	serpentbox.on("click", function(){
		if (serpentbox.hasClass("pressed")) {
		  $(".serpent").each(function() {
				rotateOut($(this));
			});
		  serpentbox.removeClass("pressed");
			$("p.serpent").hide();
	  }
	  else {
		  $(".serpent").each(function() {
				rotateIn($(this));
			});
		  serpentbox.addClass("pressed");
			$("p.serpent").show();
	  }
	});
	lightbox.on("click", function(){
		if (lightbox.hasClass("pressed")) {
		  $(".light").each(function() {
				rotateOut($(this));
			});
		  lightbox.removeClass("pressed");
			$("p.light").hide();
	  }
	  else {
		  $(".light").each(function() {
				rotateIn($(this));
			});
		  lightbox.addClass("pressed");
			$("p.light").show();
	  }
	});
	darkbox.on("click", function(){
		if (darkbox.hasClass("pressed")) {
		  $(".dark").each(function() {
				rotateOut($(this));
			});
			$("p.dark").hide();
		  darkbox.removeClass("pressed");
	  }
	  else {
		  $(".dark").each(function() {
				rotateIn($(this));
			});
		  darkbox.addClass("pressed");
			$("p.dark").show();
	  }
	});
	wildbox.on("click", function(){
		if (wildbox.hasClass("pressed")) {
	  	$(".wild").each(function() {
				rotateOut($(this));
			});
	    wildbox.removeClass("pressed");
			$("p.wild").hide();
	  }
	  else {
		  $(".wild").each(function() {
				rotateIn($(this));
			});
		  wildbox.addClass("pressed");
			$("p.wild").show();
	  }
	});
	truebox.on("click", function(){
		if (truebox.hasClass("pressed")) {
	   $(".true").each(function() {
			 rotateOut($(this));
		 });
	   truebox.removeClass("pressed");
		 $("p.true").hide();
	  }
	  else {
		  $(".true").each(function() {
				rotateIn($(this));
			});
		  truebox.addClass("pressed");
			$("p.true").show();
	  }
	});
	actualbox.on("click", function(){
		if (actualbox.hasClass("pressed")) {
		   $(".actual").each(function() {
 				rotateOut($(this));
 			});
		   actualbox.removeClass("pressed");
			 $("p.actual").hide();
	  }
	  else {
		  $(".actual").each(function() {
				rotateIn($(this));
			});
		  actualbox.addClass("pressed");
			$("p.actual").show();
	  }
	});
	zubox.on("click", function(){
		if (zubox.hasClass("pressed")) {
			$(".zu").each(function() {
				rotateOut($(this));
			});
			zubox.removeClass("pressed");
			$("p.zu").hide();
	  }
	  else {
		  $(".zu").each(function() {
				rotateIn($(this));
			});
		  zubox.addClass("pressed");
			$("p.zu").show();
	  }
	});

	frantichead.on("click", function(){
		if (frantichead.hasClass("highlight")) {
			traitOff(1);
			$(".frantic").removeClass("highlight");
		}
		else {
			traitOn(1);
			$(".frantic").addClass("highlight");
		}
	});

	immortalhead.on("click", function(){
		if (immortalhead.hasClass("highlight")) {
			traitOff(0);
			$(".immortal").removeClass("highlight");
		}
		else {
			traitOn(0);
			$(".immortal").addClass("highlight");
		}
	});

	sicklyhead.on("click", function(){
		if (sicklyhead.hasClass("highlight")) {
			traitOff(2);
			$(".sickly").removeClass("highlight");
		}
		else {
			traitOn(2);
			$(".sickly").addClass("highlight");
		}
	});

	function traitOn(trait) {
		if (trait == 2){
			$(".sickly").each(function() {
				rotateIn($(this));
			});
		}
		else if (trait == 0){
			$(".immortal").each(function() {
				rotateIn($(this));
			});
		}
		else {
			$(".frantic").each(function() {
				rotateIn($(this));
			});
		}
	}

	function traitOff(trait) {
		if (trait == 2){
			$(".sickly").each(function() {
				rotateOut($(this));
			});
		}
		else if (trait == 0){
			$(".immortal").each(function() {
				rotateOut($(this));
			});
		}
		else{
			$(".frantic").each(function() {
				rotateOut($(this));
			});
		}
	}

	bluehead.on("click", function(){
		if (bluehead.hasClass("highlight")) {
			$(".blue1").removeClass("blue1").addClass("blue");
			$(".blue2").removeClass("blue2").addClass("blue1");
			bluehead.removeClass("highlight");
		}
	  else {
			$(".blue1").removeClass("blue1").addClass("blue2");
			$(".blue").removeClass("blue").addClass("blue1");
			bluehead.addClass("highlight");
		}
	});
	orahead.on("click", function(){
		if (orahead.hasClass("highlight")) {
			$(".orange1").removeClass("orange1").addClass("orange");
			$(".orange2").removeClass("orange2").addClass("orange1");
			orahead.removeClass("highlight");
		}
	  else {
			$(".orange1").removeClass("orange1").addClass("orange2");
			$(".orange").removeClass("orange").addClass("orange1");
			orahead.addClass("highlight");
		}
	});
	grehead.on("click", function(){
		if (grehead.hasClass("highlight")) {
			$(".green1").removeClass("green1").addClass("green");
			$(".green2").removeClass("green2").addClass("green1");
			grehead.removeClass("highlight");
		}
	  else {
			$(".green1").removeClass("green1").addClass("green2");
			$(".green").removeClass("green").addClass("green1");
			grehead.addClass("highlight");
		}
	});
	redhead.on("click", function(){
		if (redhead.hasClass("highlight")) {
			$(".red1").removeClass("red1").addClass("red");
			$(".red2").removeClass("red2").addClass("red1");
			redhead.removeClass("highlight");
		}
		else {
			$(".red1").removeClass("red1").addClass("red2");
			$(".red").removeClass("red").addClass("red1");
			redhead.addClass("highlight");
		}
	});
	goldhead.on("click", function(){
		if (goldhead.hasClass("highlight")) {
			$(".gold1").removeClass("gold1").addClass("gold");
			$(".gold2").removeClass("gold2").addClass("gold1");
			goldhead.removeClass("highlight");
		}
		else {
			$(".gold1").removeClass("gold1").addClass("gold2");
			$(".gold").removeClass("gold").addClass("gold1");
			goldhead.addClass("highlight");
		}
	});
	purphead.on("click", function(){
		if (purphead.hasClass("highlight")) {
			$(".purple1").removeClass("purple1").addClass("purple");
			$(".purple2").removeClass("purple2").addClass("purple1");
			purphead.removeClass("highlight");
		}
		else {
			$(".purple1").removeClass("purple1").addClass("purple2");
			$(".purple").removeClass("purple").addClass("purple1");
			purphead.addClass("highlight");
		}
	});
	silhead.on("click", function(){
		if (silhead.hasClass("highlight")) {
			$(".silver1").removeClass("silver1").addClass("silver");
			$(".silver2").removeClass("silver2").addClass("silver1");
			silhead.removeClass("highlight");
		}
		else {
			$(".silver1").removeClass("silver1").addClass("silver2");
			$(".silver").removeClass("silver").addClass("silver1");
			silhead.addClass("highlight");
		}
	});
	blkhead.on("click", function(){
		if (blkhead.hasClass("highlight")) {
			$(".black1").removeClass("black1").addClass("black");
			$(".black2").removeClass("black2").addClass("black1");
			blkhead.removeClass("highlight");
		}
		else {
			$(".black1").removeClass("black1").addClass("black2");
			$(".black").removeClass("black").addClass("black1");
			blkhead.addClass("highlight");
		}
	});

});
