function handleExpand(){
	$('.hidden').hide();
	$('.show-less').hide();
	$('.expanded-btn').hide();
	$('.expand-btn').on('click', function(event){
		$('.hidden').toggle('fast');
		$('.show-less').toggle();
		$('.expand').toggle();
		$('.expanded-btn').toggle();
		$('.expand-btn').toggle();
	})
	$('.expanded-btn').on('click', function(event){
		$('.hidden').toggle('fast');
		$('.show-less').toggle();
		$('.expand').toggle();
		$('.expanded-btn').toggle();
		$('.expand-btn').toggle();
	})
}

function handleHorizontalScroll(){
	var offset = window.pageXOffset;
	$(window).scroll(function () {
		if(offset != window.pageXOffset)
		window.scrollTo(0, window.pageYOffset);
	});
}

function handleSocialIcons(){
	$('#email').hover(function(){
		$('.icon-img').addClass('fa-envelope')
	}, function(){$('.icon-img').removeClass('fa-envelope')})	
	$('#github').hover(function(){
		$('.icon-img').addClass('fa-github')
	}, function(){$('.icon-img').removeClass('fa-github')})	
	$('#linkedin').hover(function(){
		$('.icon-img').addClass('fa-linkedin')
	}, function(){$('.icon-img').removeClass('fa-linkedin')})	
}

$(handleExpand());
$(handleHorizontalScroll());
$(handleSocialIcons());
