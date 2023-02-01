//*=================================================
//*               ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayi mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durdurulmasini saglar.
//* Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.

// .env  (environment)  - gitignore
// const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`

//https://newsapi.org/v2/top-headlines?country=us&apiKey=94d9a13ccee34f9e890d74f6aa65b7a7

//! Function must be async, without is you cannot use await.
//! const getUsers = async ( For being asyncron) function(){
//    const res = await fetch("url");
//!   We're saying that wait for this code is executed and then continue from next line.
//    const data = await res.json();
//    updateDOM(data);
//}

//? In the industry, fetch and await are used widely.

// Node.js -> .env (environment) - gitignore.
const getNews = async () => {
  const API_KEY = "94d9a13ccee34f9e890d74f6aa65b7a7";
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}
    `;

  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await res.json();
    //console.log(data.articles);
    renderNews(data.articles);
  } catch (error) {
    renderError();
  }
};

// 94d9a13ccee34f9e890d74f6aa65b7a7

const renderNews = (news) => {
  console.log(news);
  const newsDiv = document.getElementById("news");

  news.forEach((item) => {
    const { title, description, urlToImage, url } = item;
    newsDiv.innerHTML += `
    <div class="col-md-6 col-lg-5 col-xl-3">
        <div class="card">
            <img src="${urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <a href="${url}" class="btn btn-danger">Details...</a>
            </div>
        </div>
    </div>
  `;
  });
};

const renderError = (err) => {
  console.log(err);
  const newsDiv = document.getElementById("news");
  newsDiv.innerHTML = `
  <h2 class="text-danger">News cannot be fetched</h2>
  <img src="./img/404.png" alt="" />
  `;
};

getNews();
