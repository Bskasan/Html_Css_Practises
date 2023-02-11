//* write less, do more
//* open source, small, cross-browser, easy ==> library
//* It's better for DOM Access
//* Animation (Best)
//* Ajax request/usage, readable and usable
//* event handler

//* Selectors ==> eq, th, odd, even ( js + jquery)

//const formJS = document.querySelectorAll("form");
//console.log(formJS);

//const formJQ = jQuery("form");
//console.log(formJQ);

//const formJQtoJS = $("form")[0];
//console.log(formJQtoJS);

const formJQ = $("form").eq(0);
console.log(formJQ);

const inputJQ = $("input");
const msgJQ = $(".msg");
const listJQ = $(".ajax-section .cities");

//* JS load event
//window.addEventListener("load", () => {
//  console.log("loaded");
//});

//* JQUERY load event
//$(window).on("load", () => {
//console.log("loaded");
//});

//* JS DOMContentLoaded
//document.addEventListener("DOMContentLoaded", () => {
//  console.log("dom is ready!");
//});

//* JQ DOMContentLoaded
//$(document).on("DOMContentLoaded", () => {
//  console.log("jquery dom is ready");
//});
//! another way
$(document).ready(() => {
  console.log("jquery dom is ready!!!");
  localStorage.setItem(
    "apiKey",
    EncryptStringAES("4d8fb5b93d4af21d66a2948710284366")
  );
});

formJQ.submit((e) => {
  e.preventDefault();
  getWeatherDataFromAPI();
});

const getWeatherDataFromAPI = () => {
  const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
};
