import { appState } from "../AppState.js"
import { vendorService } from "../Services/VendorService.js"
import { setText } from "../Utils/Writer.js"





function _drawMoney() {
    setText('money', appState.money)
}


export class VendorController {
    constructor() {
        console.warn("Controller is connected")
        // _drawMoney()
    }
    addMoney() {
        console.log('Controller: \n', "Adding coin")
        vendorService.addingMoney()
        _drawMoney()
    }

}