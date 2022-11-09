


export class Snack {
  constructor(name, price, imgURL) {
    this.name = name,
      this.price = price,
      this.imgURL = imgURL
    // ...
  }
  get SnackTemplate() {
    return `
        <section class="col-2">
          <div class="card mt-3">
            <img

              src=${this.imgURL}
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${this.name}</h5>
            </div>
            <div class="card-footer row justify-content-between">
              <small class="text-success col-3">${this.price}</small>
                <button   onclick="app.snacksController.buySnack('${this.name}')" class="text-white col-3 btn btn-primary">Pay</button>
            </div >
          </div >
        </section >
      `
  }

}


