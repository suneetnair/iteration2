// set the time
resetTime("showtime", 60);

// var a1 = 0, b1 = 0, c1 = 0, d1 = 0, e1 = 0, f1 = 0;

//show cloud1 after click washing machine and show washing machine off
function changewashing() {
    var element = document.getElementById("washingmachine");
    if (element.src.match("geGQoDE.png")) {
        element.src = "https://i.imgur.com/CNvZeij.png";
        cloud1.style.display = "block";
        // a1 = 1;
    }
    else {
        element.src = "https://i.imgur.com/geGQoDE.png";
        cloud1.style.display = "none";
        // a1 = 0;
    }
}
//show cloud2 after click bathtub and show bathtub off
function changebathtub() {
    var element = document.getElementById("bathtub");
    if (element.src.match("hrbT4rT.png")) {
        element.src = "https://i.imgur.com/AZAomrP.png";
        cloud2.style.display = "block";
        // b1 = 1;
    }
    else {
        element.src = "https://i.imgur.com/hrbT4rT.png";
        cloud2.style.display = "none";
        // b1 = 0;
    }
}

//show sun after click dryer1 and show dryer1 off
function changedryer1() {
    var element = document.getElementById("dryerno1");
    if (element.src.match("NrUbPgr.png")) {
        element.src = "https://i.imgur.com/bKYQ518.png";
        sky.style.display = "block";
        // c1 = 1;
    }
    else {
        element.src = "https://i.imgur.com/NrUbPgr.png";
        sky.style.display = "none";
        // c1 = 0;
    }
}

//show sky click dryer2 and show dryer2 off
function changedryer2() {
    var element = document.getElementById("dryerno2");
    if (element.src.match("hbZM0rH.png")) {
        element.src = "https://i.imgur.com/NS9fn0d.png";
        sun.style.display = "block";
        // d1 = 1;
    }
    else {
        element.src = "https://i.imgur.com/hbZM0rH.png";
        sun.style.display = "none";
        // d1 = 0;
    }
}

//show tree1 after click faucet full and show faucet empty
function changefaucet() {
    var element = document.getElementById("faucet");
    if (element.src.match("HnuOG4x.png")) {
        element.src = "https://i.imgur.com/MYBKSxS.png";
        tree1.style.display = "block";
        // e1 = 1;
    }
    else {
        element.src = "https://i.imgur.com/HnuOG4x.png";
        tree1.style.display = "none";
        // e1 = 0;
    }
}
// show tree2 after click the light on and show light off
function changelight() {
    var element = document.getElementById("light");
    if (element.src.match("z41KUeJ.png")) {
        element.src = "https://i.imgur.com/1Xn9g42.png";
        tree2.style.display = "block";
        // f1 = 1;
    }
    else {
        element.src = "https://i.imgur.com/z41KUeJ.png";
        tree2.style.display = "none";
        // f1 = 0;
    }
}

            // if (a1 && b1 && c1 && d1 && e1 && f1 == 1) {
            //     window.location.href = 'Results(2).html';
            // }