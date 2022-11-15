

class ProductView{
    #element;
    constructor(product, displayElement){
        console.log("ProductView - OK")
        this.#element = product;
        $(displayElement).append(`
        <div class="product">
        <div class="name">${this.#element.brand+this.#element.model}</div>
        <div class="img"><img src="${this.#element.img}" alt=""></div><div class="container">
        <div class="price">${this.#element.price}Ft</div>
        <div class="inStock">In stock: ${this.#element.inStock}</div>
        <div id="buy${this.#element.id}" class="buy"><span>Buy</span></div></div>
        </div>
        `);

        this.buyButton = $(`#buy${this.#element.id}`);
        this.buyButton.on("click",()=>{
            this.buyTrigger("buy");
        })
    }

    buyTrigger(event){
        window.dispatchEvent(new CustomEvent(event, {detail:this.#element.id}));
    }
}

export default ProductView;