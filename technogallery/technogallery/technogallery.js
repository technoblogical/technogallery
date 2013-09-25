$('head').append('<link type="text/css" rel="stylesheet" href="technogallery/technogalleryStyle.css">');
$('.technogallery li:even').addClass('even');
$('.technogallery').each(function() {
	var galleryContent =""; //This is used to hold all the little boxes's HTML as a string until needed.
	var bigBoxBackground =false;

	$(this).children().each(function(){
		if (!bigBoxBackground){
			bigBoxBackground = this.innerHTML;
		};

		if ($(this).hasClass('even')){
			galleryContent += '<div class="technogalleryLittleBox" style="background-image:url(\''+this.innerHTML;
		} else{
			galleryContent  += '\')" alt="'+this.innerHTML+'" title="'+this.innerHTML+'"></div>';
		}; //end of if/else testing for even list items
	}); //end of each list item function

	$(this).after('<p><div class="hidden"></div><div class="technogalleryBigBox" style="background-image:url(\''+bigBoxBackground+'\')"></div>'+galleryContent+'<div style="clear:both;"></div></p>')
}); //ends the technogalllery each function

$('div.technogalleryLittleBox').click(function(){
	$(this).prevUntil('.hidden').not('.technogalleryLittleBox').css('background-image',$(this).css('background-image'));
});

$(document).bind('contextmenu',function(e){
	alert("copyright by me!");
})