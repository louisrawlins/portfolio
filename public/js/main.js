// January 27, 2013 11:23:12 AM PST
// Some functions for fun.

jQuery.fn.animateAuto = function(prop, speed, callback){
    var elem, height, width;
    return this.each(function(i, el){
        el = jQuery(el), elem = el.clone().css({"height":"auto","width":"auto"}).appendTo(el.parent());
        height = elem.css("height"),
        width = elem.css("width"),
        elem.remove();
        
        if(prop === "height")
            el.animate({"height":height}, speed, callback);
        else if(prop === "width")
            el.animate({"width":width}, speed, callback);  
        else if(prop === "both")
            el.animate({"width":width,"height":height}, speed, callback);
    });  
}

$(document).ready( function() {

  function closeGallery(e) {
    $(e).animate({height: 57}, 1000, function() {
      $(e).children("dt.type").siblings("dd.info:first-of-type").css("margin-bottom", "20px");
    });
  } // function closeGallery

  function openGallery(e) {
    $(e).animateAuto("height", 1000);
    $(e).children("dt.type").siblings("dd.info:first-of-type").css("margin-bottom", 0);
  } // function openGallery

  // Set up gallery
  closeGallery("article section dl.gallery");
  $("article section dl.gallery dt.type").css("cursor", "pointer");    

  
  // Bind gallery type to animate gallery
  $("article section dl.gallery dt.type").bind("click", function(e){
  
    var galleryType = $(this);
    var thisGallery = galleryType.parent()

    if (galleryType.hasClass("open")) {
      galleryType.removeClass("open");
      closeGallery(thisGallery);
    } else {
      galleryType.addClass("open");
      // Some resizing issues. So, twice
      openGallery(thisGallery);
      openGallery(thisGallery);
    }
      
  });

}); // document ready

