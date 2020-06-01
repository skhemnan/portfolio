function handleExpand(){
	$('.hidden').hide();
	$('.expand-btn').on('click', function(event){
		$('.hidden').toggle('fast');
	})
}

$(handleExpand());
