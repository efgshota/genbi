// smooth scroll
$(function(){
   $('a[href^=#]').click( function() {
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('html,body').stop(true).animate({scrollTop:position}, 1000, 'easeOutCubic');
      return false;
   });
});

// size
function setSize(){
	$('#video').css({
		height: $(window).innerHeight()
	});
	var w = $(window).width();
	var aw = w*0.9;
	$('#menu').css({right: - $('#menu').innerWidth()});
}

$(function(){
	setSize();
});

$(window).resize(function(){
	setSize();
});

$(window).load(function(){
	jQuery(function($){  
	  $('#name_list').masonry({
	    itemSelector: 'li',
	    columnWidth: 95, 
	    isFitWidth: true
	  });  
	});	
});

$(function(){
	$('#gnav li').click(function(){
		$('#menu_btn').click();
	})
})

// header
$(function(){
	$('#menu_btn').click(function(){
		$(this).toggleClass('active');
        return false;
    });
	
	$('#menu_in').css({
		marginTop: - ($('#menu_in').innerHeight() / 2)
	});
	
	$('#menu').css({
		right: - $('#menu').innerWidth()
	});


	var menuOpen = false
	$('#menu_btn').toggle(
		function(){
			$('#menu').animate({
				right: 0
			}, 500, 'easeOutExpo');
			menuOpen = true
	  	},
	  	function(){
			$('#menu').animate({
				right: - $('#menu').innerWidth()
			}, 500, 'easeOutExpo');
			menuOpen = false
	  	}
	);
	
});


// クリエイター
$(function(){
	var body = $("body");
	body.click(function(){
		$('.creator').animate({right: -1024},400, 'easeOutExpo');
	});
	var creator01 = $('.creator01btn');
	var creator02 = $('.creator02btn');
	var creator03 = $('.creator03btn');
	var creator04 = $('.creator04btn');
	
	creator01.click(function(){
		creator01.each(function(){
			$('.creator01').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	creator02.click(function(){
		creator02.each(function(){
			$('.creator02').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	creator03.click(function(){
		creator03.each(function(){
			$('.creator03').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	creator04.click(function(){
		creator04.each(function(){
			$('.creator04').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	$('.close').click(function(){ // ×ボタンで閉じる
		$('.creator').animate({right: -1024},400, 'easeOutExpo');
    });
});

// アーティスト
$(function(){
	$('.slide_body').bxSlider({
		auto: true,
		pager: false,
		nextSelector: '.bx-next',
		prevSelector: '.bx-prev',
		prevText: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', //前へのテキスト
		nextText: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', //次へのテキスト
		responsive: true
	});
});
// アーティスト
$(function(){
	var body = $("body");
	body.click(function(){
		$('.artist').animate({right: -1024},400, 'easeOutExpo');
	});
	var artist01 = $('.artist01btn');
	var artist02 = $('.artist02btn');
	var artist03 = $('.artist03btn');
	var artist04 = $('.artist04btn');
	var artist05 = $('.artist05btn');
	var artist06 = $('.artist06btn');
	var artist07 = $('.artist07btn');
	var artist08 = $('.artist08btn');
	
	artist01.click(function(){
		artist01.each(function(){
			$('.artist01').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	artist02.click(function(){
		artist01.each(function(){
			$('.artist02').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	artist03.click(function(){
		artist03.each(function(){
			$('.artist03').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	artist04.click(function(){
		artist04.each(function(){
			$('.artist04').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	artist05.click(function(){
		artist05.each(function(){
			$('.artist05').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	artist06.click(function(){
		artist06.each(function(){
			$('.artist06').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	artist07.click(function(){
		artist07.each(function(){
			$('.artist07').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	artist08.click(function(){
		artist08.each(function(){
			$('.artist08').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	$('.close').click(function(){ // ×ボタンで閉じる
		$('.artist').animate({right: -1024},400, 'easeOutExpo');
    });
});

// アーティスト
$(function(){
	var body = $("body");
	body.click(function(){
		$('.interview').animate({right: -1024},400, 'easeOutExpo');
	});
	var interview01 = $('.interview01btn');
	var interview02 = $('.interview02btn');
	var interview03 = $('.interview03btn');
	var interview04 = $('.interview04btn');
	var interview05 = $('.interview05btn');
	var interview06 = $('.interview06btn');
	
	interview01.click(function(){
		interview01.each(function(){
			$('.interview01').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	interview02.click(function(){
		interview02.each(function(){
			$('.interview02').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	interview03.click(function(){
		interview03.each(function(){
			$('.interview03').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	interview04.click(function(){
		interview04.each(function(){
			$('.interview04').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	interview05.click(function(){
		interview05.each(function(){
			$('.interview05').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	interview06.click(function(){
		interview06.each(function(){
			$('.interview06').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	$('.close').click(function(){ // ×ボタンで閉じる
		$('.interview').animate({right: -1024},400, 'easeOutExpo');
    });
});