import ProductView from "./ProductView.js";

class StoreView{
    constructor(products, displayElement){
        console.log("StoreView - OK");
        for (const product of products) {
                new ProductView(product, displayElement);
        }
    }
}

export default StoreView;