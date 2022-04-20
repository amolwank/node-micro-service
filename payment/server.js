const express = require('express');
const app = express();

const PORT = 8082;

app.get('/payment-list',(req, res)=>{
    let response = {
        data:{
            item:[
                {
                    id:1, name:'payment 1'

                },
                {
                    id:2, name:'payment 2'

                }
        ]
    }

    }
    res.status(200).json(response) 
})

app.get('/',(req, res)=>{
    
    res.status(200).json({message: "Payment called"}); 
})
app.post('/add',(req,res) => {
    res.status(200).json({message : "Post add method called"})
} )

app.listen(PORT,()=>{
    console.log(`Payment Service is listening at http://localhost:${PORT}`);
})