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

$(handleExpand());
