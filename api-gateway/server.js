const gateway = require('fast-gateway');
const PORT = 9001;

const checkAuth = (req, res, next) => {
    if (req.headers.token && req.headers.token !='') {
        console.log("inside auth 1");
        next()
        
    }else {
        console.log("inside auth 2");
        res.setHeader('Content-type','application/json');
        res.statusCode = 401;
        res.end(JSON.stringify({
            status:401,
            message: 'Authentication failed'
        }))
    }
}

const server = gateway({
    routes:[
        {
            prefix: '/order',
            target: 'http://localhost:8081/',
            hooks: {

            }
        },
        {
            prefix: '/payment',
            target: 'http://localhost:8082/',
            middlewares: [checkAuth],
            methods: ['POST'],
            hooks: {

            }
        }
    ]
})

server.get('/mytesting',(res,resp)=>resp.send('Yes called gateway'));
server.get('/',(res,resp)=>resp.send('Api gateway is running....'));
server.start(PORT).then(server=> {
    console.log('Api gateway is running on 9000 port')
})