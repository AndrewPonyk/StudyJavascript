define(function(){
    console.log(arguments);
    function shout (){
        alert("one!")
    }
    return {
        shout:shout
    }
})