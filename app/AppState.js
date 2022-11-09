import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Snack } from "./Models/Snack.js"
class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  money = 0

  /**@type import('./Models/Snack.js').Snack[] */
  snacks = [new Snack("Doritos", 3.75, "http://www.doritos.com/sites/doritos.com/themes/doritos/img/logo-big.jpg"), new Snack("Flaming Hot Mtn Dew", 5.00, "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/08/25/1_flamin_hot_mtn_dew_s4x3.jpg.rend.hgtvcom.406.305.suffix/1629923632276.jpeg")]



}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
