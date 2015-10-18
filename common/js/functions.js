// 縦幅をウィンドウサイズに合わせる
function setHeight(){
	$('#cover').css({
		width: $(window).innerWidth(),
		height: $(window).innerHeight()
	});
}
$(function(){
	setHeight();
});
$(window).resize(function(){ //ウィンドウをリサイズした場合に再計算
	var w = $(window).width();
	var aw = w*0.9;
	$('.artist').css({right: -aw});
	setHeight();
});

// smooth scroll
$(function(){
   $('a[href^=#]').click(function() {
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - 100;
      $('html,body').animate({scrollTop:position}, 600, 'easeOutCubic');
      return false;
   });
});

$(document).ready(function(){
	$('.bxsliderTrain').bxSlider({
		mode: 'fade',
		speed: 100,
		auto: true,
		controls: false,
		captions: false
	});
});

// アーティスト
$(function(){
	$('.slide_body').bxSlider({
		slideWidth: 600,
		auto: true,
		minSlides: 4,
		maxSlides: 4,
		moveSlides: 1,
		slideMargin: 0,
		pager: false,
		nextSelector: '.bx-next',
		prevSelector: '.bx-prev',
		prevText: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', //前へのテキスト
		nextText: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', //次へのテキスト
	});
});

// 開閉メニュー
$(function(){
	$('#menu_btn').click(function(){ // ボタンのアニメーション
		$(this).toggleClass('active');
		$(this).find('#menu_btn_in').toggleClass('active');
        return false;
    });
    	
	$('#menu_btn').toggle( //メニュー表示・非表示
		function(){
			var w = $(window).width();
			var aw = w*0.9;
			$('.creator').animate({right: -800},400, 'easeOutExpo'); // メニューを開いたらクリエーターは強制的に閉じる
			$('.artist').animate({right: -aw},400, 'easeOutExpo'); // メニューを開いたらアーティストは強制的に閉じる
			$('.interview').animate({right: -800},400, 'easeOutExpo'); // メニューを開いたらクリエーターは強制的に閉じる
			$('#menu').stop(true).animate({
				left: 0
			}, 400, 'easeOutExpo');
	  	},
	  	function(){
		  	$('#menu').stop(true).animate({
				left: -800
			}, 400, 'easeOutExpo');
	  	}
	);
});

$(function(){
    $(".all dt").on("click", function() {
        $(this).next().slideToggle(200);
        $(".all_btn span").toggleClass('active');
    });
});


// クリエーター
$(function(){
	var body = $("body");
	body.click(function(){
		var w = $(window).width();
		var aw = w*0.9;
		$('.creator').animate({right: -800},400, 'easeOutExpo');
	});
	var creator01 = $('.creator_box01');
	var creator02 = $('.creator_box02');
	var creator03 = $('.creator_box03');
	var creator04 = $('.creator_box04');
	creator01.click(function(){
		creator01.each(function(){
			$('.creator01').stop(true).animate({right: 0},400, 'easeOutExpo');
		});return false;
	});
	creator02.click(function(){
		creator01.each(function(){
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
		$('.creator').animate({right: -800},400, 'easeOutExpo');
    });
});

// アーティスト
$(function(){
	var body = $("body");
	body.click(function(){
		var w = $(window).width();
		var aw = w*0.9;
		$('.artist').animate({right: -aw},400, 'easeOutExpo');
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
		var w = $(window).width();
		var aw = w*0.9;
		$('.artist').animate({right: -aw},400, 'easeOutExpo');
    });
});

// インタビュー
$(function(){
	var body = $("body");
	var creator = $('#interview_list li .interviewWrapper');
	body.click(function(){
		$('.interview').animate({right: -800},400, 'easeOutExpo');
	});
	creator.click(function(){
		var w = $(window).width();
		var aw = w*0.9;
		var t = this;
		$('.artist').animate({right: -aw},400, 'easeOutExpo'); // クリエーターを開いたらアーティストは強制的に閉じる
		$('.creator').animate({right: -800},400, 'easeOutExpo'); // クリエーターを開いたらアーティストは強制的に閉じる
		creator.each(function(){
			if(t===this) $(this).next('.interview').stop(true).animate({right: 0},400, 'easeOutExpo');
			else $(this).next('.interview').stop(true).animate({right: -800},400, 'easeOutExpo');
		});return false;
	});
	
	$('.close').click(function(){ // ×ボタンで閉じる
		$('.interview').animate({right: -800},400, 'easeOutExpo');
    });
});

// 背景動画
$(function(){	
	$('#cover').tubular({videoId:'6weHZq7E73E?&rel=0controls=0vq=highres'}); 
});

// リダイレクト
$(function(){	
	var ua = navigator.userAgent.toUpperCase();
	if(ua.indexOf('IPHONE') != -1 || ua.indexOf('IPAD') != -1 || ua.indexOf('ANDROID') != -1 ){
		location.href = 'sp/';
	}
});

/* 背景動画
$(function(){	
	$('#cover').tubular({videoId:'TdX4J_5l3OY?rel=0?vq=highres'}); 
});*/