$("#rating_tabs").tabs();

$(".rating_tab").on("click", function(){
	$(".rating_tab__active").removeClass("rating_tab__active");
	$(this).addClass("rating_tab__active");
});

$(".menu_rating").on("click", function(){
	$(".rating").fadeIn(0);
	$(".rating").css({"transform":"translateY(0)"});
});

$(".btn_close").on("click", function(){
	$(".rating").css({"transform":"translateY(-1000px)"});
});

x = 0;
$(".list_right").on("click", function(){
	if(!((x+62) >= 186)){
		x = x + 66;
		$(".friends").css({"transform":"translateX(-"+x+"px)"});
	}
});

$(".list_left").on("click", function(){
	if(x > 0){
		x = x - 66;
		$(".friends").css({"transform":"translateX(-"+x+"px)"});
	}
});

var route = [{x: "401px", y: "142px"}, {x: "375px", y: "162px"}, {x: "339px", y: "152px"},
{x: "304px", y: "129px"}, {x: "265px", y: "110px"}, {x: "223px", y: "94px"}, {x: "180px", y: "91px"},
{x: "135px", y: "99px"}, {x: "100px", y: "118px"}, {x: "75px", y: "141px"}, {x: "88px", y: "162px"},
{x: "113px", y: "183px"}, {x: "106px", y: "215px"}, {x: "132px", y: "238px"}, {x: "170px", y: "259px"},
{x: "204px", y: "275px"}, {x: "227px", y: "301px"}, {x: "199px", y: "326px"}, {x: "166px", y: "347px"},
{x: "130px", y: "367px"}, {x: "128px", y: "401px"}, {x: "147px", y: "421px"}, {x: "161px", y: "447px"},
{x: "191px", y: "429px"}, {x: "211px", y: "403px"}, {x: "243px", y: "383px"}, {x: "277px", y: "392px"},
{x: "286px", y: "419px"}, {x: "279px", y: "446px"}, {x: "285px", y: "469px"}, {x: "320px", y: "471px"},
{x: "339px", y: "493px"}, {x: "362px", y: "515px"}, {x: "364px", y: "550px"}, {x: "372px", y: "584px"},
{x: "411px", y: "587px"}, {x: "434px", y: "564px"}, {x: "468px", y: "559px"}, {x: "494px", y: "547px"},
{x: "466px", y: "530px"}, {x: "464px", y: "501px"}, {x: "450px", y: "476px"}, {x: "464px", y: "450px"},
{x: "484px", y: "431px"}, {x: "476px", y: "401px"}, {x: "462px", y: "366px"}, {x: "447px", y: "324px"},
{x: "410px", y: "301px"}, {x: "374px", y: "280px"}, {x: "343px", y: "262px"}, {x: "338px", y: "235px"},
{x: "364px", y: "214px"}, {x: "400px", y: "200px"}, {x: "443px", y: "198px"}, {x: "475px", y: "180px"},
{x: "506px", y: "163px"}, {x: "539px", y: "143px"}, {x: "573px", y: "123px"}, {x: "612px", y: "126px"},
{x: "637px", y: "148px"}, {x: "667px", y: "122px"}, {x: "705px", y: "102px"}, {x: "745px", y: "122px"},
{x: "779px", y: "143px"}, {x: "811px", y: "162px"}, {x: "843px", y: "185px"}, {x: "878px", y: "205px"},
{x: "913px", y: "224px"}, {x: "945px", y: "245px"}, {x: "958px", y: "277px"}, {x: "950px", y: "311px"},
{x: "929px", y: "340px"}, {x: "893px", y: "340px"}, {x: "863px", y: "320px"}, {x: "832px", y: "302px"},
{x: "800px", y: "284px"}, {x: "765px", y: "261px"}, {x: "724px", y: "265px"}, {x: "697px", y: "288px"},
{x: "689px", y: "314px"}, {x: "721px", y: "331px"}, {x: "735px", y: "347px"}, {x: "786px", y: "368px"},
{x: "808px", y: "395px"}, {x: "804px", y: "424px"}, {x: "782px", y: "447px"}, {x: "741px", y: "448px"},
{x: "702px", y: "430px"}, {x: "668px", y: "410px"}, {x: "638px", y: "398px"}, {x: "614px", y: "371px"},
{x: "607px", y: "343px"}, {x: "580px", y: "325px"}, {x: "542px", y: "322px"}, {x: "513px", y: "340px"},
{x: "497px", y: "361px"}, {x: "497px", y: "395px"}, {x: "512px", y: "424px"}, {x: "534px", y: "450px"},
{x: "562px", y: "472px"}, {x: "596px", y: "494px"}, {x: "624px", y: "510px"}, {x: "607px", y: "535px"},
{x: "607px", y: "564px"}, {x: "625px", y: "588px"}, {x: "658px", y: "598px"}, {x: "688px", y: "569px"},
{x: "675px", y: "539px"}, {x: "653px", y: "515px"}, {x: "662px", y: "490px"}, {x: "688px", y: "507px"},
{x: "706px", y: "531px"}, {x: "742px", y: "543px"}, {x: "775px", y: "535px"}, {x: "799px", y: "515px"},
{x: "825px", y: "489px"}, {x: "855px", y: "520px"}, {x: "884px", y: "505px"}, {x: "856px", y: "483px"},
{x: "874px", y: "456px"}];
p = -1;
$(".menu_univer").on("click", function(){
	p = p+1;
	$(".field_player").css({
		"bottom":route[p].y,
		"left":route[p].x
	});
});