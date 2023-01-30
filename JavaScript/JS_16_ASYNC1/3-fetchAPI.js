//*==================================================
//* 3- FETCH API(APPLICATION PROGRAMMING INTERFACE)
//*==================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.
//? Fetch yapisi promise yapisinin biraz daha basitlestirilmis halidir.

//? GET -> reading, okuma getting from another server.
//? POST -> Adding/writing new input to our server, veritabani. Yeni bir kayit islemi. For instance, you have e-commerce website and you will get new user account, you need to save this person's detail by using post.
//? PATCH -> Partly Update, Kismi guncelleme
//? PUT -> Full Update, Tam Guncelleme
//? DELETE -> Delete, silme
//? Dunya uzerinde hersey API lar uzerinden yuruyor. Google sell APIs for example.

//? json -> JavaScript Object Notation



console.log("FETCH");

//! ---- GETTING THE DATA ---- !//
fetch("https://api.github.com/users").then((res) =>
  res
    .json()
    .then((data) => showGitHubUsers(data))
    .catch((err) => console.log(err))
);
//? Request from the API.
//? and we get Response Object.
//? we can manipulate it.
//? with json(), we can access to the real data and now it is possible to get this data and manipulate it.


const showGitHubUsers = (users) => {
  console.log(users);
  const userArticle = document.querySelector(".users");

  users.forEach((user) => {
    //console.log(user);
    userArticle.innerHTML += `
    <h2 class="h4 text-warning mb-4" >${user.login}</h2>
    <img class="w-25 mb-4" src=${user.avatar_url} alt = ""/>`;
  });
};
