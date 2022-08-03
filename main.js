// https://en.wikipedia.org/wiki/Token_bucket
// https://www.krakend.io/images/documentation/krakend-token-bucket.png

const app = express.app();
import {TestTokenBucket} from './TestTokenBucket.js';

// Closure
// Factory pattern
// Class

const bucket = new TestTokenBucket();


// 5req/m
app.post('/api/login', (req, res,next) => {
    if(bucket.registerRequest(req.route.path,5)){
     next()
    }else{
        res.status(500).send('Rate limit reached'); 
    }

});

// 10req/m
app.post('/api/signup', (req, res) => {
    if(bucket.registerRequest(req.route.path,10)){
        next()
       }else{
           res.status(500).send('Rate limit reached'); 
       }
});

