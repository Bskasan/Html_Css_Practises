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
    EncryptStringAES("c329c3b96528c0c0f92577a6850e5a5e")
  );
});

formJQ.submit((e) => {
  e.preventDefault();
  getWeatherDataFromAPI();
});

const getWeatherDataFromAPI = async () => {
  const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
  const cityNameInput = inputJQ.val(); //? to get the value
  const units = "metric";
  const lang = "tr";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameInput}}&appid=${apiKey}}&units=${units}&lang=${lang}`;

  //* jquery http request
  //const response = await $.get(url);
  //const response = await $.post(url);
  await $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: (response) => {
      console.log(response);
    },
    beforeSend: (request) => {},
    complete: () => {},
    error: (XMLHttpRequest) => {},
  });
  console.log(response);
};
