import express from 'express';

const app = express();


const port = process.env.PORT || 3000;


const images = [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
    'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    'https://images.unsplash.com/photo-1502767089025-6572583495b4',
    'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
    'https://images.unsplash.com/photo-1506089676908-3592f7389d4d',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
];

const products = Array.from({ length: 10 }, (_, id) => ({
    id,
    name: `Product ${id + 1}`,
    price: (Math.random() * 100).toFixed(2),
    image: images[id]
}));


// localhost:3000/api/products
// localhost:3000/api/products?search=metal
app.get('/api/products',(req , res) =>{

    if(req.query.search){
        const filterProducts = products.filter(product => product.name.includes(req.query.search));
        setTimeout(()=> {res.send(filterProducts)} , 3000);
        return ; 
    }

    setTimeout(()=> {res.send(products)} , 3000);

})


app.listen(port , ()=>{
    console.log(`server running on port ${port}`);
})