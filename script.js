// ==UserScript==
// @name           Amazon Smile Redirect
// @namespace      petersamazonredict
// @description    Always redirects links the smile.amazon.com domain
// @include        https://amazon.com/*
// @include        http://amazon.com/*
// @include        https://www.amazon.com/*
// @include        http://www.amazon.com/*
// ==/UserScript==

window.location.host = "smile.amazon.com";
