// ==UserScript==
// @name         XCRunnerSPackSiteUtls
// @namespace    https://github.com/XCRunnerS/pvprpuserscript
// @version      0.1.0
// @description  no, I wont be clicking!
// @author       XCRunnerS
// @match        https://pvprp.com/*
// @icon         https://avatars.githubusercontent.com/u/68029901
// @grant        none
// @downloadURL  https://github.com/XCRunnerS/pvprpuserscript/raw/main/XCRunnerSPackSiteUtls.user.js
// @updateURL    https://github.com/XCRunnerS/pvprpuserscript/raw/main/XCRunnerSPackSiteUtls.user.js
// ==/UserScript==

function autoUnlock() {
    console.log("Tried to skip a ad");
    document.getElementById('step-btn-1').click();
}

(function () {
    console.log("loaded");
    'use strict';
        if (window.location.toString().includes("pack?")) {
            autoUnlock();
        }
})();