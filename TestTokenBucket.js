export class TestTokenBucket {

    constructor(capacity) {
        this.totalCapacity = capacity;
        this.totalNumberOfTokens = capacity;
        setInterval(() => this.addTotalToken(), 60 * 1000 );
    }

    addTotalToken() {
        if (this.totalNumberOfTokens < this.totalCapacity) {
            this.totalNumberOfTokens += 1;
        }
    }

    takeTokenFromBucket() {
        if (this.totalNumberOfTokens > 0) {
            this.totalNumberOfTokens -= 1;
            return true;
        }

        return false;
    }
}