
$project1 = $('#project-1');
$project2 = $('#project-2');
$project3 = $('#project-3');
$todoBanner = $('#driver-banner');
$responsiveBanner = $('#responsive-banner');
$socialMediaBanner = $('#social-media-banner');

//todo list mouse in/mouse out functions
//fade img and brings up project banner
$project1.on("mouseenter", function() {
  $project1.css("opacity", '.5');
  $todoBanner.addClass('toggle');
})

$project1.on("mouseleave", function() {
  $project1.css("opacity", '1');
  $todoBanner.removeClass('toggle');
})

//responsive design mouse in/mouse out functions
$project2.on("mouseover", function() {
  $project2.css("opacity", '.5')
  $responsiveBanner.addClass('toggle');
})

$project2.on("mouseleave", function() {
  $project2.css("opacity", '1');
  $responsiveBanner.removeClass('toggle');
})

//social media mouse in/mouse out functions
$project3.on("mouseover", function() {
  $project3.css("opacity", '.5')
  $socialMediaBanner.addClass('toggle');
})

$project3.on("mouseleave", function() {
  $project3.css("opacity", '1');
  $socialMediaBanner.removeClass('toggle');
})