/*
function purchaseProduct(){
    console.log("Function : purchaseProduct");

    var credits = getCredits();
    if(credits > 0){
        reserveProduct();
        return true;
    }
    return false;
}*/

define(["credits","products"], function(credits,products) {



    return {
        purchaseProduct: function() {
            console.log("Function : purchaseProduct" + "; RequireJS module can contains many things " + this.someProp);
            var credit = credits.getCredits();
            if(credit > 0){
                products.reserveProduct();
                return true;
            }
            return false;
        },

        someProp:1000
    }
});