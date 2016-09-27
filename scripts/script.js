var words = ["Developer", "Hacker", "Student", "Engineer", "Designer", "Biker"];
var newWord = "Developer"; //For some initial value
var prevWord;
var alphabet;
var svg;
var width;
var g;

$(document).ready(function() {

  // $(window).scroll( function(){
  //   /* Check the location of each desired element */
  //   console.log("aerb");
  //   $('.fadeIn').each( function(i){
  //     console.log("Ave");
  //     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
  //     var bottom_of_window = $(window).scrollTop() + $(window).height();
  //     /* If the object is completely visible in the window, fade it it */
  //     if( bottom_of_window > bottom_of_object ){
  //       console.log("Ave");
  //       $(this).animate({'opacity':'1'},2000);
  //     }
  //   }); 
  // });

  $('#sections').fullpage({
  	// sectionsColor: ['#F00', '#0F0', '#00F'],
  	anchors:['page1', 'page2', 'page3', 'page4'],
  	menu: '#topmenu',
  	continuousVertical: true,
  	showActiveTooltip:true,
  	scrollOverflow:true,
    // scrollBar:true,
  	onLeave: function(index, nextIndex, direction){
  		$('#topmenu>.active').switchClass("activeAnimation", "", {easing:"swing"});
    },
    afterLoad: function(anchorLink, index){
  		$('#topmenu>.active').switchClass("", "activeAnimation", {easing:"swing"});
    }
	});



  // alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  svg = d3.select("svg"),
  width = +svg.attr("width"),height = +svg.attr("height"),
  g = svg.append("g").attr("transform", "translate(32," + (height / 2) + ")");


  // The initial display.
  update(getRandomWord());

  // Grab a random sample of letters from the alphabet, in alphabetical order.
  d3.interval(function() {
    do {
      newWord = getRandomWord();
    } while(newWord == prevWord);
    update(newWord);
    prevWord = newWord;
  }, 2000);

});

function getRandomWord(){
  return words[Math.floor(Math.random() * words.length)];
}

// is the new string data
function update(data) {
  var t = d3.transition()
      .duration(750);

  // JOIN new data with old elements.
  var text = g.selectAll("text")
    .data(data.split(""), function(d) { return d; });

  // EXIT old elements not present in new data.
  text.exit()
      .attr("class", "exit")
    .transition(t)
      .attr("y", 50)
      .style("fill-opacity", 1e-6)
      .remove();

  // UPDATE old elements present in new data.
  text.attr("class", "update")
      .attr("y", 0)
      .style("fill-opacity", 1)
    .transition(t)
      .attr("x", function(d, i) { return i * 32; });

  // ENTER new elements present in new data.
  text.enter().append("text")
      .attr("class", "enter")
      .attr("dy", ".35em")
      .attr("y", -50)
      .attr("x", function(d, i) { return i * 32; })
      .style("fill-opacity", 1e-6)
      .text(function(d) { return d; })
    .transition(t)
      .attr("y", 0)
      .style("fill-opacity", 1);
}
