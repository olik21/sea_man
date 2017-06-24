$(document).ready(function( $ ){

	$(function() {

		$('.rf').each(function(){
			var form = $(this),
				btn = form.find('.btn_submit');
			
			form.find('.rfield').addClass('empty_field');
			
			
			function checkInput(){
				form.find('.rfield').each(function(){
					if($(this).val() != ''){
						$(this).removeClass('empty_field');
					} else {
						$(this).addClass('empty_field');
					}
				});
			}
			
		
			function lightEmpty(){
				form.find('.empty_field').addClass('error');
				setTimeout(function(){
					form.find('.empty_field').removeClass('error');
				},500);
			}
			
			setInterval(function(){
				checkInput();
				//var sizeEmpty = form.find('.empty_field').size();
				var sizeEmpty = form.find('.empty_field').length;
				if(sizeEmpty > 0){
					if(btn.hasClass('disabled')){
						return false
					} else {
						btn.addClass('disabled')
					}
				} else {
					btn.removeClass('disabled')
				}
			},5000);

			btn.click(function(){
				if($(this).hasClass('disabled')){
					lightEmpty();
					return false
				} else {
					form.submit();
				}
			});
			
		});
		
	});

});