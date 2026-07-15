const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 55000000,
        stock: 8,
        category: "Electronics"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 28000000,
        stock: 15,
        category: "Electronics"
    },
    {
        id: 3,
        title: "Wireless Mouse",
        price: 950000,
        stock: 30,
        category: "Accessories"
    },
    {
        id: 4,
        title: "Mechanical Keyboard",
        price: 3200000,
        stock: 20,
        category: "Accessories"
    },
    {
        id: 5,
        title: "Monitor",
        price: 14500000,
        stock: 10,
        category: "Electronics"
    },
    {
        id: 6,
        title: "Headphones",
        price: 2400000,
        stock: 25,
        category: "Audio"
    },
    {
        id: 7,
        title: "USB Flash Drive",
        price: 650000,
        stock: 50,
        category: "Storage"
    },
    {
        id: 8,
        title: "External Hard Drive",
        price: 4800000,
        stock: 12,
        category: "Storage"
    },
    {
        id: 9,
        title: "Webcam",
        price: 2100000,
        stock: 18,
        category: "Accessories"
    },
    {
        id: 10,
        title: "Gaming Chair",
        price: 8700000,
        stock: 6,
        category: "Furniture"
    }
];

const shoppingCart = [
    {
        id: 2,
        title: "Smartphone",
        price: 28000000,
        stock: 15,
        category: "Electronics",
        quantity: 1
    },
    {
        id: 6,
        title: "Headphones",
        price: 2400000,
        stock: 25,
        category: "Audio",
        quantity: 2
    },
    {
        id: 9,
        title: "Webcam",
        price: 2100000,
        stock: 18,
        category: "Accessories",
        quantity: 1
    }
];


function showMenu(products, shoppingCart) {
    rl.question('Enter the number of the desired list: \n1.products Menu \n2.shopping cart \n0.Exit\n', (menuNumber) => {
        if(+menuNumber === 1) {
            
            products.forEach((product, index) => {
                console.log(`${index + 1}.${product.title}  price:${product.price}  stock:${product.stock}\n`)
            })
            rl.question('Enter 1 to select a product or 2 to return to the menu: ', (enteredNumber) => {
                if(+enteredNumber === 1) {

                }else if(+enteredNumber === 2) {

                }else {
                    invalidInput()
                }
            })
        } else if(+menuNumber === 2) {

            shoppingCart.forEach((product, index) => {
                console.log(`${index + 1}.${product.title}  price:${product.price}  quantity:${product.quantity}\n`)
            })
            rl.question('1.remove product from shopping cart \n2.view total cart amount\n', enteredNumber => {
                if(+enteredNumber === 1) {

                } else if(+enteredNumber === 2) {

                } else {
                    invalidInput()
                }
            })

        } else if(+menuNumber === 0) {
            rl.close()
        
        } else {
            invalidInput()
        } 
    })
}


function invalidInput() {
    console.log("invalid input.")
    showMenu(products, shoppingCart)
}


showMenu(products, shoppingCart)