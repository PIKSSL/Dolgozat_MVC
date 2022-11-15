import StoreModel from "../Model/StoreModel.js";
import StoreView from "../View/StoreView.js";

class StoreController{
    constructor(){
        console.log("Controller - OK");
        const sModel = new StoreModel();
        sModel.getData("./data/product.json", this.dataProducts);
        $(window).on("buy", (event)=>{
            sModel.buy(event.detail);
            $(".products").empty();
            new StoreView(sModel.getProducts(), $(".products"));
        })
    }



    dataProducts(products){
        new StoreView(products, $(".products"));
    }
}

export default StoreController;