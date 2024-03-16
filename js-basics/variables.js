const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "Ram@.com"
accountPassword = "20t8051"
accountCity = "indore"

console.log(accountId);

/*
sari places pr value badal jati hai 
scope->{};
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])