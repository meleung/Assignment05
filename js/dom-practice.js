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
//function step_3() {
//    "use strict";
//    var listenerButton = window.document.getElementById("listener_button");
//    listenerButton.addEventListener("click", function () {
//        window.alert("I have been clicked");
//    });
//}

//STEP 4
function step_4() {
    "use strict";
    var listenerButton = window.document.getElementById("listener_button");
    listenerButton.addEventListener("click", function () {
        window.alert("I have been clicked");
    });
}

//STEP 5
// Steps 2-4 were already coded to run from the <head> tag.

//STEP 6

//STEP 7

//STEP 8

//STEP 9

//STEP 10


window.addEventListener("load", function () {
    "use strict";
    step_2();
    //step_3();
    step_4();
});