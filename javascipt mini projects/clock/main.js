setInterval(setclock, 1000);
// console.log("hii");
// var x = 0;
const hour = document.querySelector('[data-hour]');
const minute = document.querySelector('[data-minute]');
const second = document.querySelector('[data-second]');


function setclock() {
    const nowdate = new Date;
    const sr = (nowdate.getSeconds()) / 60;
    const mr = (sr + nowdate.getMinutes()) / (60);
    const hr = (mr + nowdate.getHours()) / 60;
    setrotation(hour, hr);
    setrotation(minute, mr);
    setrotation(second, sr);
    // setrotation(hour,hr);

}

function setrotation(element, rr) {
    element.style.setProperty('--r', (rr * 360));

}

setclock();