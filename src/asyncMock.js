const products = [
    {
        id: "1",
        name: "Chocolate",
        price: 20,
        category: "chocolate",
        img:"https://images.unsplash.com/photo-1575377427642-087cf684f29d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        stock: 25,
        description: "A delicious chocolate cake with a rich and moist texture"
        
    },
    {
        id: "2",
        name: "Te verde",
        price: 68,
        category: "teverde",
        img:"https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        stock: 10,
        description: "The best green tea in the world!"
    },
    {
        id: "3",
        name: "Cafe",
        price: 30,
        category: "cafe",
        img:"https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        stock: 10,
        description: "Best coffee ever! Try it now!!"
    }
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductsbyId = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    })
}

export const getProductsbyCategory = (category) => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter((prod) =>prod.category === category));
        },500);
    });
};