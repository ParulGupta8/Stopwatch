time=document.getElementById("time");
let interval = null;
let [hour,min,sec]=[0,0,0];
let isWatchStopNow;

function start(){
    reset();
    interval = setInterval(settimer,1000);
    isWatchStopNow=false;
}

function stop(){
    if(isWatchStopNow){
        interval = setInterval(settimer,1000);
        isWatchStopNow=false;
    }
    else{
        clearInterval(interval);
        isWatchStopNow=true;
    }
}

function reset(){
    clearInterval(interval);
    [hour,min,sec]=[0,0,0];
    time.innerHTML="00:00:00";
    isWatchStopNow=true;
}

function settimer() {
    sec++;
    if(sec==60) {
        sec=0;
        min++; }
    if(min==60) {
        min=0;
        hour++; }

    time.innerHTML= `${formattedNumber(hour)}:${formattedNumber(min)}:${formattedNumber(sec)}` ;
}
function formattedNumber(num) {
    return (num<10)?`0${num}`:`${num}`
}

