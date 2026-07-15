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
        id: 9,
        title: "Webcam",
        price: 2100000,
        stock: 18,
        category: "Accessories"
    }
];