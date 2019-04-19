// set the time
resetTime("showtime", 60);

// var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0;
//show bird after click the light and show light off
function changelamp() {
    var element = document.getElementById("lamp");
    if (element.src.match("18BQBfF.png")) {
        element.src = "https://i.imgur.com/42BcMTj.png";
        bird.style.display = "block";
        // a = 1;
    }
    else {
        element.src = "https://i.imgur.com/18BQBfF.png";
        bird.style.display = "none";
        // a = 0;
    }
}

//show cloud1 after click the table light and show table light off
function changetablelight() {
    var element = document.getElementById("table-light");
    if (element.src.match("yTvafBA.png")) {
        element.src = "https://i.imgur.com/zBXIEZz.png";
        cloud1.style.display = "block";
        // b = 1;
    }
    else {
        element.src = "https://i.imgur.com/yTvafBA.png";
        cloud1.style.display = "none";
        // b = 0;
    }
}

//show cloud2 after click the laptop and show laptop off
function changelaptop() {
    var element = document.getElementById("laptop");
    if (element.src.match("TcXacHI.png")) {
        element.src = "https://i.imgur.com/zMd9UH2.png";
        cloud2.style.display = "block";
        // c = 1;
    }
    else {
        element.src = "https://i.imgur.com/TcXacHI.png";
        cloud2.style.display = "none";
        // c = 0;
    }
}

//show tree after click the phone and show phone off
function changephone() {
    var element = document.getElementById("phone");
    if (element.src.match("d9FZh02.png")) {
        element.src = "https://i.imgur.com/aimT23j.png";
        tree.style.display = "block";
        // d = 1;
    }
    else {
        element.src = "https://i.imgur.com/d9FZh02.png";
        tree.style.display = "none";
        // d = 0;
    }
}

//show leave after click the air conditionor and show air conditionor off
function changeac() {
    var element = document.getElementById("ac");
    if (element.src.match("oKMDUls.png")) {
        element.src = "https://i.imgur.com/tMEIYSA.png";
        leave.style.display = "block";
        // e = 1;
    }
    else {
        element.src = "https://i.imgur.com/oKMDUls.png";
        leave.style.display = "none";
        // e = 0;
    }
}

//show mountain after click the heater and show hrater off
function changeheater() {
    var element = document.getElementById("heater");
    if (element.src.match("mQjLPwO.png")) {
        element.src = "https://i.imgur.com/SxbfraZ.png";
        mountain.style.display = "block";
        // f = 1;
    }
    else {
        element.src = "https://i.imgur.com/mQjLPwO.png";
        mountain.style.display = "none";
        // f = 0;
    }
}

    // if (a && b && c && d && e && f == 1) {
    //     window.location.href = 'Results(2).html';
    // }


// var aud = document.getElementById("aud");
// var img = document.getElementById("playpause");
// img.onclick = function () {
//     if (aud.paused) {
//         aud.play();
//     } else {
//         aud.pause();
//     }
// }
// aud.addEventListener("play", function (e) {
//     img.src = "https://i.imgur.com/FuDH4Dk.png";
// }, false);
// aud.addEventListener("pause", function (e) {
//     img.src = "https://i.imgur.com/lPF1RQr.png";
// }, false);
