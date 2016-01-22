$( document ).ready(function() {
  console.log("hello");
  
  $(".header .items").hover(
		function(){ $(this).addClass("hover"); },
		function(){ $(this).removeClass("hover"); }
	);


  $(".items.projects").click(function(){
		$(window).scrollTo( $("#projects"), 500);
  });
  $(".items.experience").click(function(){
  	$(window).scrollTo( $("#Experience"), 500);
  });
  $(".items.contactMe").click(function(){
  	$(window).scrollTo( $("#ContactMe"), 500);
  });


});

// $(".header .items").hover(
// 	function(){
// 		console.log("a");
// 		$(this).addClass("hover");
// 	},
// 	function(){
// 		console.log("b");
// 		$(this).removeClass("hover");
// 	}
// );

// $( window ).resize(function() {
//   //console.log(window.innerWidth);

//   //console.log("aaaa = " + Math.floor(window.innerWidth/$(".project").outerWidth(true))  );
//   if (Math.floor(window.innerWidth/$(".project").outerWidth(true)) == 0){
//   	$(".body").width( $(".project").outerWidth(true) );
//   }
//   else{
//   	$(".body").width( Math.floor(window.innerWidth/$(".project").outerWidth(true)) * $(".project").outerWidth(true) );	
//   }
  
// });
