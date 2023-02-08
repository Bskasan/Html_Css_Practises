//***************** MODULE ************************/

//! What is Module?
//? A file - each script file is a module.
//? Reusable piece of code that encapsulates implementation details.
//? Modules are usually standalone files, don't have to be.

//! Benefits of Modules
//? Compose Software: small packages --> complex applications
//? Isolate components: provides isolation on entire codebase
//? Abstract code: low level implemented code can be stored inside modules, we only call them without knowing details.
//? Organized code: helps for more organized codebase.
//? Reuse code: the same code can be resued across multiple projects.

console.log("My Module Loaded");

export const CALISMA_SAATI = 40;

export function topla(s1, s2) {
  return s1 + s2;
}

let counter = 0;

const inc = (miktar) => {
  counter += miktar;
  return counter;
};

const dec = (miktar) => {
  counter -= miktar;
  return counter;
};

const moduleName = "MY_MODULE";

export { inc, dec, moduleName };

export function selam() {
  console.log("Selamlar FS13");
}
//? Sadece bir tane export default'u olabilir.
// export default counter

export default function () {
  console.log("Elveda JS, Hoşgeldin React");
}
