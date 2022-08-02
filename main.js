// https://en.wikipedia.org/wiki/Token_bucket
// https://www.krakend.io/images/documentation/krakend-token-bucket.png

const app = express.app();


// Closure
// Factory pattern
// Class


function rateLimiter(totalNumberOfRequest) {
    const bucket = new TestTokenBucket(totalNumberOfRequest);
    return function limitRequestsMiddleware(req, res, next) {
        if (bucket.takeTokenFromBucket()) {
            next();
        } else {
            res.status(500).send('Rate limit reached');
        }
    }
}

// 5req/m
app.post('/api/login', (req, res) => {
    rateLimiter(5)

});

// 10req/m
app.post('/api/signup', (req, res) => {
    rateLimiter(10)
});

