function calcCircleArea(r) {
    var area = Math.PI*r*r;
    return area;
}

document.getElementById("7").innerHTML += calcCircleArea(7);
document.getElementById("1,5").innerHTML += calcCircleArea(1.5);
document.getElementById("20").innerHTML += calcCircleArea(20);
