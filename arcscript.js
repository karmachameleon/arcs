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

	var allexposition = $("p");
	var menus = $("div#nobilismenu, div#excrucianmenu, div#campaignmenu, div#toolmenu");

//hide characters on startup; default to showing CMWGE names
	characters.hide();
	allexposition.hide();
	menus.hide();
	$(".attrName").hide();

	clear.on("click", function(){
		$(".highlight").removeClass("highlight");
		$(".pressed").removeClass("pressed");

		$(".highlighted1").data('highlighted', 0).removeClass('highlighted1 highlighted2 highlighted3 highlighted4');
		characters.hide();
		allexposition.hide();
	});

	function rotateOut(e){
		let highlighted = e.data('highlighted') || 0;
		highlighted -= 1;
		e.data('highlighted', highlighted);

		highlighted < 1 && e.removeClass('highlighted1');
		highlighted < 2 && e.removeClass('highlighted2');
		highlighted < 3 && e.removeClass('highlighted3');
		highlighted < 4 && e.removeClass('highlighted4');
	}

	function rotateIn(e){
		let highlighted = e.data('highlighted') || 0;
		highlighted += 1;
		e.data('highlighted', highlighted);

		highlighted >= 1 && e.addClass('highlighted1');
		highlighted >= 2 && e.addClass('highlighted2');
		highlighted >= 3 && e.addClass('highlighted3');
		highlighted >= 4 && e.addClass('highlighted4');
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

	$("#glitchtoggle").on("click", function(){
		$(".attrName").toggle();
		$(".arcName").toggle();
    $(this).text($(this).text() == 'Toggle Names: Arcs (CMWGE)' ? 'Toggle Names: Attributes (Glitch)' : 'Toggle Names: Arcs (CMWGE)');
	});

	$("#intersect").on("click", function(){
		$(".highlighted2").find(".character:not(.gmdnpc)").show();
	});

	$("#select").on("click", function(){
		$(".highlighted1").find(".character:not(.gmdnpc)").show();
	});

	$("#deselect").on("click", function(){
		let deselect = $(".blue, .orange, .green, .red, .gold, .purple, .silver, .black");
		deselect.not(".highlighted2").find(".character").hide();
	});

	$("#fulldeselect").on("click", function(){
		let deselect = $(".blue, .orange, .green, .red, .gold, .purple, .silver, .black");
		deselect.not(".highlighted1").find(".character").hide();
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
			$(".blue").each(function() { rotateOut($(this)) });
			bluehead.removeClass("highlight");
		}
	  else {
			$(".blue").each(function() { rotateIn($(this)) });
			bluehead.addClass("highlight");
		}
	});
	orahead.on("click", function(){
		if (orahead.hasClass("highlight")) {
			$(".orange").each(function() { rotateOut($(this)) });
			orahead.removeClass("highlight");
		}
	  else {
			$(".orange").each(function() { rotateIn($(this)) });
			orahead.addClass("highlight");
		}
	});
	grehead.on("click", function(){
		if (grehead.hasClass("highlight")) {
			$(".green").each(function() { rotateOut($(this)) });
			grehead.removeClass("highlight");
		}
	  else {
			$(".green").each(function() { rotateIn($(this)) });
			grehead.addClass("highlight");
		}
	});
	redhead.on("click", function(){
		if (redhead.hasClass("highlight")) {
			$(".red").each(function() { rotateOut($(this)) });
			redhead.removeClass("highlight");
		}
		else {
			$(".red").each(function() { rotateIn($(this)) });
			redhead.addClass("highlight");
		}
	});
	goldhead.on("click", function(){
		if (goldhead.hasClass("highlight")) {
			$(".gold").each(function() { rotateOut($(this)) });
			goldhead.removeClass("highlight");
		}
		else {
			$(".gold").each(function() { rotateIn($(this)) });
			goldhead.addClass("highlight");
		}
	});
	purphead.on("click", function(){
		if (purphead.hasClass("highlight")) {
			$(".purple").each(function() { rotateOut($(this)) });
			purphead.removeClass("highlight");
		}
		else {
			$(".purple").each(function() { rotateIn($(this)) });
			purphead.addClass("highlight");
		}
	});
	silhead.on("click", function(){
		if (silhead.hasClass("highlight")) {
			$(".silver").each(function() { rotateOut($(this)) });
			silhead.removeClass("highlight");
		}
		else {
			$(".silver").each(function() { rotateIn($(this)) });
			silhead.addClass("highlight");
		}
	});
	blkhead.on("click", function(){
		if (blkhead.hasClass("highlight")) {
			$(".black").each(function() { rotateOut($(this)) });
			blkhead.removeClass("highlight");
		}
		else {
			$(".black").each(function() { rotateIn($(this)) });
			blkhead.addClass("highlight");
		}
	});

});
