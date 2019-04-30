import $ from 'jquery';


function changed() {
    console.log("changed");

}


function checkVis(callback) {


    var notIE = (document.documentMode === undefined),
        isChromium = window.chrome;

    if (notIE && !isChromium) {

        // checks for Firefox and other  NON IE Chrome versions
        $(window).on("focusin", function () {
            callback();

        }).on("focusout", function () {
            callback();

        });

    } else {

        // checks for IE and Chromium versions
        if (window.addEventListener) {

            // bind focus event
            window.addEventListener("focus", function (event) {
                callback();

            }, false);

            // bind blur event
            window.addEventListener("blur", function (event) {

                callback();

            }, false);

        } else {

            // bind focus event
            window.attachEvent("focus", function (event) {
                callback();

            });

            // bind focus event
            window.attachEvent("blur", function (event) {
                callback();


            });
        }
    }


}

/////////////////////////////////////////
// check if browser window has focus

export {checkVis};