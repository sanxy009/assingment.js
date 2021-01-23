
function kilometerToMeter(number){
    var oneKilo = 1000 ;
    var meters = number * oneKilo;
    return meters
}
var noOfKilo = 6;
var detectingMeter = kilometerToMeter(noOfKilo);
console.log(detectingMeter)


function budgetCalculator(watch,phon,laptop){
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var priceOfwatch = watchPrice * watch;
    var priceOfPhone = phonePrice * phon;
    var priceOfLaptop = laptopPrice * laptop;
    var totalPrice = priceOfwatch+priceOfPhone+priceOfLaptop;
    return totalPrice;
}
console.log(budgetCalculator(2,1,1));




function hotelCost(amountOfday){
    var totalAmount = 0;
    var dayspend = amountOfday;
    if(dayspend <= 10){
        var firstPeriod = dayspend*100;
        totalAmount = firstPeriod;
    }
    else if(dayspend <= 20){
        var firstPeriod  = 10*100;
        var remainingDay = dayspend-10;
        var secondPeriod = remainingDay * 80;
        
        totalAmount = firstPeriod + secondPeriod;

    }
    else{
        var firstPeriod  = 10*100;
        var secondPeriod = 10*80;
        var remainingDay = dayspend - 20;
        var thirdPeriod  = remainingDay*50;
        totalAmount = firstPeriod+secondPeriod+thirdPeriod;
    }

    return totalAmount;
};

console.log(hotelCost(2));




function megaFriends(arrayFrnd){
    var bigFriend = arrayFrnd[0];
for(var i=0; i<arrayFrnd.length; i++){
    var newFriend = arrayFrnd[i];
  
    if(newFriend.length>bigFriend.length){
        bigFriend = newFriend;
        }
    }
    return bigFriend;
};

var friends =["shamim","imran","abramKhan", "saidul", "sabbirAhmed","DrSaif", "arif",];
var detectingMegaFriends = megaFriends(friends);
console.log(detectingMegaFriends);


