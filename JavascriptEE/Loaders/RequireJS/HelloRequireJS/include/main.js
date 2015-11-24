require(["purchase","mymodule"],function(purchase, mymodule){
    var finalResult = purchase.purchaseProduct();
    console.log("Final Result = " + finalResult);
    mymodule.alertFunc();
});