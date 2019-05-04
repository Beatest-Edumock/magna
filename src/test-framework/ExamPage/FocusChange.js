import $ from 'jquery';


function changed() {
    console.log("changed");

}


function checkVis(callback) {

    window.addEventListener("blur", function (event) {
        callback();
    }, false);

    return;


    //
    //
    // var notIE = (document.documentMode === undefined),
    //     isChromium = window.chrome;
    //
    // if (notIE && !isChromium) {
    //
    //     // checks for Firefox and other  NON IE Chrome versions
    //     $(window).on("focusin", function () {
    //         // var focused = document.hasFocus();
    //         //
    //         // setTimeout(() => {
    //         //     let element = document.querySelector(":focus");
    //         //
    //         //     console.log(element);
    //         //
    //         // }, 300);
    //         // if (focused)
    //         //     callback();
    //
    //     }).on("focusout", function () {
    //         // console.log("Previous");
    //         // console.log(element);
    //         let element = document.querySelector(":focus");
    //
    //         setTimeout(() => {
    //             let element = document.querySelector(":focus");
    //
    //             console.log(element);
    //
    //
    //         }, 300);
    //
    //
    //         // console.log(focused);
    //         // console.log("AHAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    //         // if (!focused)
    //         //     callback();
    //
    //     });
    //
    // } else {
    //     return;
    //
    //     // checks for IE and Chromium versions
    //     if (window.addEventListener) {
    //
    //         // bind focus event
    //         window.addEventListener("focus", function (event) {
    //             var focused = document.hasFocus();
    //             if (focused)
    //                 callback();
    //
    //         }, false);
    //
    //         // bind blur event
    //         window.addEventListener("blur", function (event) {
    //
    //             var focused = document.hasFocus();
    //             if (focused)
    //                 callback();
    //
    //         }, false);
    //
    //     } else {
    //
    //         // bind focus event
    //         window.attachEvent("focus", function (event) {
    //             var focused = document.hasFocus();
    //             if (focused)
    //                 callback();
    //
    //         });
    //
    //         // bind focus event
    //         window.attachEvent("blur", function (event) {
    //             var focused = document.hasFocus();
    //             if (focused)
    //                 callback();
    //
    //
    //         });
    //     }
    // }


}

/////////////////////////////////////////
// check if browser window has focus

export {checkVis};