function click1()
{
    $("#c1").clone().appendTo("#r1");
     var p1 = prompt("Please enter the image");
var p2=prompt("please enter the name");
var p3=prompt("please enter the detail");
var p4=prompt("please enter the status");
var p5=prompt("please enter the person image");
$("#ig").attr("src",p1);
$("#name").text(p2);
$("#name1").text(p3);
$("#name2").text(p4);
$("#pi").css("background-image","url("+p5+")");

}