//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.
//! Wep APIs help JS to be asyncron programming language.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------
const wait = (waitingTime) => {
  const startTime = new Date().getTime();
  while (new Date().getTime() < startTime + waitingTime) {}
};

console.log("***************** ASYNC *****************");
//console.log("hello world");
//alert("hi"); //? blocking our code.
//console.time("myTimer"); //? to check time when debugging.
//wait(1000); //? blocking our code.
//console.timeEnd("myTimer");
//console.log("fs13");

//* Asenkron (setTimeout)
//*------------------------------------------------
//! Performance of your code is IMPORTANT!!!
//? Time = 1000ms -> 1s
//? It means that execute the callback function after time has passed.
console.log("Timeout started");

//? setTimeOut is non-blocking code - async
//? Even though time value equal to 0
setTimeout(() => {
  console.log("1 sec");
}, 1000);

console.log("Timeout finished");

setTimeout(() => {
  console.log("2 sec");
}, 2000);

//* Asenkron (setInterval, clearInterval)
//*------------------------------------------------

let counter = 0;
let sec1 = setInterval(() => {
  console.log(++counter);
  if (counter > 9) {
    clearInterval(sec1); //? Need argument for clearInterval
    console.log("Timer Stopped");
  }
}, 1000);

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
    console.log("john:Hi")
    setTimeout(() => {
      console.log("Sarah: Hello")
      setTimeout(() => {
        console.log("John: How Are you?")
        setTimeout(() => {
          console.log("Sarah:Fine and you?")
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
  
  //? COZUMLER:
  //?----------------------------------------------------
  //* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
  //? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  //* 2- Promise,
  //! 3- Fetch API (Promise'in basitlestirilmis hali),
  //! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)
