/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

function enter(e) {
    "use strict";
    var textBox = $("result");
    if (e.target.value !== "=") {
        textBox.value += e.target.value;
    } else {
        textBox.value = eval(textBox.value);
    }
}

function init() {
    "use strict";
    
    window.document.getElementsByTagName("body")[0].addEventListener("click", enter);
}

window.addEventListener("load", init);