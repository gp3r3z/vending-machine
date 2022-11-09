import { appState } from "../AppState.js"


class VendorService {
    test() {
        console.error("Vendor Service connected / trigerred")
    }
    addingMoney() {
        console.log("Service: \n  adding ...")
        appState.money = appState.money + 5
        console.log("Money Added ", appState.money)
    }
}


export const vendorService = new VendorService()