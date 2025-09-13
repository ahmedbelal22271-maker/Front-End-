
async function getData(){
    const url = "https://dummyjson.com/carts"
    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`Response status:${response.status}`);
        }
        const result = await response.json();
        
        const carts = result['carts']
        console.log(carts)
        console.log(result)

        cart_index = 1

        for (const cart of carts){
            index_text = document.createElement("h1");
            index_text.textContent = `Cart Number:${cart_index}, total number of products:${cart['totalProducts']}, total cost of products:${cart['total']}`;
            document.body.appendChild(index_text)
            addDiv(cart);
            cart_index++;
        }
        
    } catch (error){
        console.error(error.message);
    }
    
}

function addDiv(cart){
    ParentDiv = document.createElement("div");
    ParentDiv.style.cssText = `width:100%;display:flex;
        flex-direction:row; flex-wrap:wrap; background-color:grey;
        margin-bottom:40px;`;
    document.body.appendChild(ParentDiv);

    for (const product of cart.products){
        ChildDiv = document.createElement("div");
        ChildDiv.style.cssText = `display:flex;
        flex-direction:column; align-items:center;
        justify-content:center`;
        ParentDiv.appendChild(ChildDiv);
        img = document.createElement("img");
        img.src = product['thumbnail'];

        title = document.createElement("p");
        title.textContent  = `${product['quantity']} x ${product['title']}`;

        price = document.createElement("p");
        price.textContent = `${product['quantity']} x ${product['price']}`

        ChildDiv.appendChild(img);
        ChildDiv.appendChild(title);
        ChildDiv.appendChild(price);

    }

}

getData()