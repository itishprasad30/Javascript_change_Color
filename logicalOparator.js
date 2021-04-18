let isVerified=false
let isLoggedIn=true
let hasPaymentToken=true
let isGuest=false

if(isVerified && isLoggedIn && hasPaymentToken){
    console.log('greeding message to the User that he is succefully access that block')
}else if(isVerified || isGuest){
    console.log('You are in the OR block')
}else{
    console.log('plz contact to your admin')
}
