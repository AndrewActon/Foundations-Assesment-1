const password = 'abcdefg123456'
let checkForLength = true
let checkForNumber = false
let checkForLetter = false
let checkForSpaces = false

//check that length is greater than 10 and less than 20.

if (password.length < 10 || password.length > 20){
    checkForLength = false
}

//check for number and letter


for (let i = 0; i < password.length; i++){
    if (isNaN(password[i]) === false){
        checkForNumber = true
    }else {
        checkForLetter = true
    }
} 

//check for spaces

for (let i = 0; i < password.length; i++){
    if (password[i] === ' '){
        checkForSpaces = true
} 
}

//message logs

if (checkForLength === false){
    console.log('Password must be at least 10 characters long and no more than 20 characters.')
}

if (checkForNumber === false){
    console.log('Password must contain at least one number')
}

if (checkForLetter === false){
    console.log('Password must contain at least one letter')
}

if (checkForSpaces === true){
    console.log('Password cannot contain spaces')
}

if (checkForLength === true && checkForLetter === true && checkForNumber === true && checkForSpaces === false){
    console.log('Password saved succesfully')
}