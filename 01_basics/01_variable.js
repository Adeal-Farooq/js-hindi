const accountId = 123345
let accountEmail = "adeal@gamil.com"
var accountPassword = "1234"
accountCity = "kashmir"



//accounytId = 12212        // not allowed

accountEmail = "yasir@gamil.com"
accountPassword = "1111"
customerCity = "bangluru"       //we should not use 
let accountState;
/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword, accountCity, accountState]);

