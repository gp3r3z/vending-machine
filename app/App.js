import { SnacksController } from "./Controllers/SnacksController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { VendorController } from "./Controllers/VendorController.js";

class App {
  // valuesController = new ValuesController();

  vendorController = new VendorController()
  snacksController = new SnacksController()

}

window["app"] = new App();
