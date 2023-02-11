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
  getWeatherDataFromApi();
});

const getWeatherDataFromApi = async () => {
  const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
  const cityNameInput = inputJQ.val();
  const units = "metric";
  const lang = "tr";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameInput}&appid=${apiKey}&units=${units}&lang=${lang}`;
  //jquery http request
  //const response = await $.get(url).then(...);
  //const response = await $.post(url);
  await $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      success: (response) => {
          console.log(response);
          //weather card creation
          const { main, sys, weather, name } = response;
          const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
          //alternative iconUrl
          const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

          //js ==> querySelector-All(selector), jquery ==> find(selector)
          const cityCardList = listJQ.find(".city");
          console.log(cityCardList);
          //Array.from == .get()
          const cityCardListArray = cityCardList.get();
          console.log(cityCardListArray);
          if (cityCardListArray.length > 0) {
              const filteredArray = cityCardListArray.filter(card => $(card).find("span").text() == name);
              if (filteredArray.length > 0) {
                  msgJQ.text(`You already know the weather for ${name}, Please search for another city 😉`);
                  //styling
                  msgJQ.css({ "color": "red", "text-decoration": "underline" });
                  setTimeout(() => {
                      msgJQ.text(``);
                  }, 3000);
                  formJQ.trigger("reset");
                  return;
              }
          }

          const createdLi = $("<li></li>");
          createdLi.addClass("city");
          //text(), val(), attr(), html()
          createdLi.html(
              `<h2 class="city-name" data-name="${name}, ${sys.country}">
              <span>${name}</span>
              <sup>${sys.country}</sup>
          </h2>
          <div class="city-temp">${Math.round(main.temp)}
                  <sup>°C</sup>
          </div>
          <figure>
              <img class="city-icon" src="${iconUrlAWS}">
              <figcaption>${weather[0].description}</figcaption>
          </figure>`
          );
          //append and prepend ==> js + jquery
          listJQ.prepend(createdLi);
          //formJQ[0].reset();
          formJQ.trigger("reset");

          //jquery animate
          $(".city").click((e) => {
              //convert js to jquery
              //jquery chaning
              $(e.target)
                  .animate({ left: '50px' })
                  .animate({ left: '150px' })
                  .animate({ left: '250px' })
                  .animate({ left: '150px' })
                  .animate({ left: '50px' })
                  .animate({ left: '0px' });
          });

          //jquery slideup-slidedown
          $(".city img").click((e) => {
              //convert js to jquery
              //jquery chaning
              $(e.target)
                  .slideUp(1500)
                  .slideDown(1500)
          });

          //jquery slideup-slidedown
          // $(".city img").click((e) => {
          //     //convert js to jquery
          //     //jquery chaning
          //     $(e.target)
          //         .hide()
          // });



      },
      beforeSend: (request) => {
          //add headers
          //send tokenKey
      },
      complete: () => { },
      error: (XMLHttpRequest) => {
          //error handling
          msgJQ.text(`${XMLHttpRequest.status} ${XMLHttpRequest.statusText}`);
          //styling
          msgJQ.css({ "color": "red", "text-decoration": "underline" });
          setTimeout(() => {
              msgJQ.text(``);
          }, 3000);
          formJQ.trigger("reset");
      }
  });
}
