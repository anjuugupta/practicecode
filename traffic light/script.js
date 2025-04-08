
function turnOnLight(lightId, duration, nextFunction){
    document.getElementById("red").style.background = 'gray';
    document.getElementById("yellow").style.background = 'gray';
    document.getElementById("green").style.background = 'gray';

    document.getElementById(lightId).style.background = lightId;

    setTimeout(nextFunction, duration);
}

function startTrafficLight(){
    turnOnLight('red', 3000,()=>{
        turnOnLight('yellow',2000,()=>{
            turnOnLight('green', 5000, startTrafficLight);
        });
    });
}
startTrafficLight();