export class TestTokenBucket {
     globalCounter={};

     
    registerRequest=(url,capacity)=>{
if(globalCounter[url]?.capacity!=capacity){
    globalCounter[url]={
        capacity,count:0,lastRequestedTime:new Date()
    }
}
        return this.rateLimitUrl(url);

    }

    rateLimitUrl=(url)=>{
        if(globalCounter[url].count>globalCounter[url].capacity){
            const dateDiff=(new Date().getTime()-globalCounter[url].lastRequestedTime.getTime())/1000;
            if(dateDiff<60){
                return false;
            }else{
                globalCounter[url]={...globalCounter[url],
                    count:0,lastRequestedTime:new Date()
                   }
            }
        }
        globalCounter[url]={...globalCounter[url],
         count:(globalCounter[url]?.count||0)+1,lastRequestedTime:new Date()
        }
        return true;
       


    }

}