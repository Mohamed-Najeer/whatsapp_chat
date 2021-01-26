$(document).ready(function(){
    var xl="1440";
var lg="1024";
var md="768";
var sm="";
var xs="359"
var xxl="2560"
    // $(".wp_widget").fadeOut();
    $(".next_float").hide();
    $(".opchat").css('width','15%');
    $(".opchat a").hide();
$(".float").click(function(){
$(".next_float").fadeIn(300);
$(".float").hide();
$(".opchat a").show(250);
$(".opchat").animate({'width':'60%'},300);
if($( window ).width()==xxl){
    $(".opchat .fa").css('marginLeft','125px');
    $(".opchat a").css('paddingLeft','25px');
    $(".plus_bg").css('marginTop','3%');

}else if($( window ).width()==lg){
    $(".opchat").animate({'width':'75%'},300);
}else if(($( window ).width()>"1200")&&($( window ).width()<"1400")){

}
else if($( window ).width()=='320'){
$(".opchat").animate({'width':'53%'},300);
$(".opchat a").css('fontSize','14px');
}else if($( window ).width()<=xs&&($( window ).width()>"319")){
$(".opchat").animate({'width':'60%'},300);
}else if(($( window ).width()>="360")&&($( window ).width()<="539")){
$(".opchat").animate({'width':'50%'},300);
}
else if(($( window ).width()=="280")){
$(".opchat").animate({'width':'65%'},300);
}


});
$(".plus_bg").click(function(){
$(".next_float").fadeOut(300);
$(".float").fadeIn(300);
});
  });    