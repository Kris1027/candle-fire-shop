const hamburger = document.querySelector('.hamburger')
const menuMobile = document.querySelector('.menu-mobile')
const normalMenu = document.querySelector('.normal-menu')

normalMenu.classList.remove('active')
hamburger.classList.remove('active')
menuMobile.classList.remove('active')

let basketArray = [];


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    menuMobile.classList.toggle('active')
    normalMenu.classList.toggle('active')
})

let currentProducts = products;
const mainProducts = document.querySelector('.main-products')

const btnBasket = document.querySelectorAll('.btn-basket')

const addToBasket = (e) =>{
    const basketNumber = document.querySelector('.basket-adds-number')

   const item = e.target.parentElement
   basketArray.push(item)
   basketNumber.innerHTML = basketArray.length
   basketNumber.style.display = 'flex'

   
    
    const name = item.querySelector('.product-name').textContent;
    const price = parseInt(item.querySelector('.product-price').textContent);
    const image = item.querySelector('.product-photo').getAttribute('src');

    const shopItem = document.createElement('div')
    shopItem.classList.add('purchase-item')
    shopItem.innerHTML = `
    <img src="${image}">
    <p class="purchase-name">${name}</p>
    <p class="purchase-price">${price} zł</p>
`
    const suma = document.querySelector('.suma')
    suma.innerHTML = parseInt(suma.innerHTML || 0) + price;
    

    const purchase = document.querySelector('.purchase')
    purchase.appendChild(shopItem)
    console.log(basketArray);

    const clearBtn = document.querySelector('.clear-basket')

    clearBtn.addEventListener('click', () => {
        suma.innerHTML = "";
        purchase.removeChild(shopItem);
        basketNumber.innerHTML = '';
        basketNumber.style.display = 'none';
        basketArray = [];
    })
}


btnBasket.forEach((btn) => { btn.addEventListener
    ('click', addToBasket)
});

const renderProducts = (items) => {
    mainProducts.innerHTML ="";
    
    for(let i = 0; i < items.length; i++){
        
        const newProduct = document.createElement("div");
        newProduct.classList.add('product-item')
        newProduct.innerHTML = ` <p class="product-name">${items[i].name}</p>
        <img src="${items[i].img}" alt="" class="product-photo">
        <p class="product-description">${items[i].description}</p>
        <p class="product-price">${items[i].price}</p>
        <button class="btn-basket">Dodaj do koszyka</button>`;
        
        newProduct.setAttribute("data",items[i].id)
        mainProducts.appendChild(newProduct)

        const basketButton = newProduct.querySelector('.btn-basket');
        basketButton.addEventListener('click', addToBasket);
    }
    
        
}
document.onload = renderProducts(currentProducts)

const searchInput = document.querySelector('.search-input')
const searchMobileInput = document.querySelector('.search-bar-mobile-input')

searchInput.addEventListener('input', (e) => {
    const search = e.target.value

    const foundProduct = currentProducts.filter((product) => {
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            return product;
        }
        
    });
    const emptyState = document.querySelector('.empty-state')
    
    foundProduct.length === 0 
    ? emptyState.style.display = 'block'
    : ''
    
    
    renderProducts(foundProduct);
})

searchMobileInput.addEventListener('input', (e) => {
    const search = e.target.value

    const foundProduct = currentProducts.filter((product) => {
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            return product;
        }
        
    });
    const emptyState = document.querySelector('.empty-state')
    
    foundProduct.length === 0 
    ? emptyState.style.display = 'block'
    : ''
    

    renderProducts(foundProduct);
})






    
const basketIconShop = document.querySelector('.basket-adds')

basketIconShop.addEventListener('click', () => {
    const basketCard = document.querySelector('.basket-card')
    basketCard.style.display = 'flex';

    

    const exitBtn = document.querySelector('.exit-btn')
    exitBtn.addEventListener('click', () => {
        basketCard.style.display ='none'
    })
})