const express = require('express');
const app = express();

const PORT = 8081;

app.get('/order-list',(req, res)=>{
    let response = {
        data:{
            item:[
                {
                    id:1, name:'order 1'

                },
                {
                    id:2, name:'order 2'

                }
        ]
    }

    }
    res.status(200).json(response) 
})
app.get('/',(req, res)=>{
    
    res.status(200).json({message: "Order called"}) 
})

app.listen(PORT,()=>{
    console.log(`Order Service is listening at http://localhost:${PORT}`)
})