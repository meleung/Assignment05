/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

function enter(val) {
    "use strict";
    var textBox = $("result");
    textBox.value += val;
}

function calculate() {
    "use strict";
    var textBox = $("result");
    textBox.value = eval(textBox.value);
}

function init() {
    "use strict";
    
    $("zero").addEventListener("click",  function () { enter($("zero").value); });
    $("one").addEventListener("click",   function () { enter($("one").value); });
    $("two").addEventListener("click",   function () { enter($("two").value); });
    $("three").addEventListener("click", function () { enter($("three").value); });
    $("four").addEventListener("click",  function () { enter($("four").value); });
    $("five").addEventListener("click",  function () { enter($("five").value); });
    $("six").addEventListener("click",   function () { enter($("six").value); });
    $("seven").addEventListener("click", function () { enter($("seven").value); });
    $("eight").addEventListener("click", function () { enter($("eight").value); });
    $("nine").addEventListener("click",  function () { enter($("nine").value); });
    
    $("period").addEventListener("click", function () { enter($("period").value); });
    
    $("multiply").addEventListener("click", function () { enter($("multiply").value); });
    $("divide").addEventListener("click", function () { enter($("divide").value); });
    $("add").addEventListener("click", function () { enter($("add").value); });
    $("subtract").addEventListener("click", function () { enter($("subtract").value); });
    
    $("equal").addEventListener("click", calculate);
}

window.addEventListener("load", init);