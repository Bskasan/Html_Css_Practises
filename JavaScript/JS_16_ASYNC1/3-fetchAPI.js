//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");

fetch("https://api.github.com/users").then((res) =>
  res
    .json()
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
);
//? Request from the API.
//? and we get Response Object.
//? we can manipulate it.
//? with json(), we can access to the real data and now it is possible to get this data and manipulate it.
