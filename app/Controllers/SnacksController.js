import { appState } from "../AppState.js"
import { snacksService } from "../Services/SnacksService.js"
import { setHTML } from "../Utils/Writer.js"
import { setText } from "../Utils/Writer.js"
function _drawSnacks() {
    let snacks = appState.snacks.sort()
    let template = ''
    snacks.forEach(s => template += s.SnackTemplate)
    setHTML('availablesnacks', template)
    console.log("Snack Loaded")
}
function _drawMoney() {
    setText('money', appState.money)
}

export class SnacksController {
    constructor() {
        console.log('Loading Snack ')
        _drawSnacks()
    }

    buySnack(name) {
        console.log('Controller: Buying snack')
        snacksService.buySnack(name)
        _drawMoney()

    }

}