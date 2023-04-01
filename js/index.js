  $('#main').fullpage(
  {
  scrollingSpeed:300,
  anchors:['首页','作品','关于我','联系我'],
  lockAnchors:['首页'],
  navigation:true,
  scrollOverflow:true,
  navigationTooltips:['首页','作品','关于我','联系我'],
  scrollBa:true,
}


  	);
var mySwiper = new Swiper('.swiper-container',{
	autoplay: 5000,
  effect:'fade',
slidesOffsetAfter : 100,
})
var mySwiper1 = new Swiper('.swiper-container1',{

effect : 'cube',
cube: {
  slideShadows: true,
  shadow: true,
  shadowOffset: 100,
  shadowScale: 0.6
}
})
   $('.anc').on('click',function(){
    $.fn.fullpage.moveSectionDown();
  })