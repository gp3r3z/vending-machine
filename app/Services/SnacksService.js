import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"


class SnacksService {
    buySnack(name) {
        console.log("Service: working magic")
        if (appState.money > 0) {
            let snack = appState.snacks.find(s => s.name == name)
            console.log("Snack added", snack.name)

            appState.money = appState.money - snack.price

            console.log(appState.money, " Money updated")



        } else {
            window.alert("Your broke")
        }


    }


}


export const snacksService = new SnacksService()