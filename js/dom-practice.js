/*eslint-env browser*/

//STEP 1
function onclick_alert() {
    "use strict";
    window.alert("I have been clicked");
}

//STEP 2
function step_2() {
    "use strict";
    var elementButton = window.document.getElementById("onclick_button");
    elementButton.onclick = onclick_alert;
}

//STEP 3

//STEP 4

//STEP 5

//STEP 6

//STEP 7

//STEP 8

//STEP 9

//STEP 10


window.addEventListener("load", function () {
    "use strict";
    step_2();
});