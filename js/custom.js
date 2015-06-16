//custom jquery and javascript
$(document).ready(function(){
	$('.category-link *').remove();
	
	$(".category-link").click(function(e) {
		$(".article").hide();
		$(".article-" + $(this).html()).show();
	});
	$('#all').click(function(){
		$(".article").show();
	});
	
	$('#twitterfeed iframe').css('width','100%');
	
});