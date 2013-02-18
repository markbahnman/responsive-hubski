// ==UserScript==
// @name          Responsive Hubski
// @namespace     http://markbahnman.github.com/
// @description   Adds responsive features to hubski.com
// @copyright     Mark Bahnman 2013
// @license       MIT
// @author        markbahnman
// @include       http://hubski.com/*
// @include       https://hubski.com/*
// @match         http://hubski.com/*
// @match         https://hubski.com/*
// @version       0.1
// ==/UserScript==

(function() {
$('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
$('head').append('<link href="https://dl.dropbox.com/u/6348934/hubski-responsive.css" rel="stylesheet" type="text/css"></link>');
})();