console.log("JS Modules is running")

import counter, {
  topla,
  CALISMA_SAATI,
  inc,
  dec,
  moduleName as name,
} from "./mymodule.js"

// import { inc, dec, moduleName } from "./mymodule.js"
// import counter from "./mymodule.js"
import ugurla, { selam } from "./mymodule.js"

console.log("TOPLAM:", topla(2, 3))

console.log(CALISMA_SAATI)

console.log("MY MODULE NAME:", name)

console.log(inc(5))
console.log(dec(2))

console.log(inc(7))
console.log(dec(1))

// console.log(counter)

selam()
ugurla()