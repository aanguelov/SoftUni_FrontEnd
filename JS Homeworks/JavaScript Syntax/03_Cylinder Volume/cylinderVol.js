function calcCylinderVol(radius, height) {
    return Math.pow(radius, 2)*Math.PI*height;
}

console.log(calcCylinderVol(2, 4).toFixed(3));
console.log(calcCylinderVol(5, 8).toFixed(3));
console.log(calcCylinderVol(12, 3).toFixed(3));
