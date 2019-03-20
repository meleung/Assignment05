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
function step_6() {
    "use strict";
    var redirectLink = window.document.getElementById("redirect");
    redirectLink.addEventListener("click", function (e) {
        e.preventDefault();
        window.alert("Google link clicked!");
    }, false);
}

//STEP 7
function step_7() {
    "use strict";
    var textButton;
    textButton = window.document.getElementById("text_button");
    
    textButton.addEventListener("click", function () {
        var textField = window.document.getElementById("text_field");
        textButton.disabled = true;
        window.alert(textField.value);
    });
}

//STEP 8
function step_8() {
    "use strict";
    var newPageButton = window.document.getElementById("newpage_button");
    newPageButton.addEventListener("click", function () {
        window.open("newpage.html", "NewWindowPage", "height=300,width=300");
    });
}

//STEP 9

//STEP 10


window.addEventListener("load", function () {
    "use strict";
    step_2();
    //step_3();
    step_4();
    step_6();
    step_7();
    step_8();
});