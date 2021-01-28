document.write("Value Deals </br>");

for(var x=0;x<=100;x+=2){
    document.write("Line" + x + "</br>");
}

var booking=2-15;
var date=15-30;


if(date<booking){
    document.write("Date unavailable");
}else if(booking=date){
    document.write("Dates Booked!");
}else{
    document.write("Enjoy your trip!");
}
