// pallindrome number-------------------------------------

// const number = parseInt(prompt("Enter a number : "));
// let rev=0;
// const temp = number;
// while (number>0){
//     const rem = number % 10;
//     rev = (rev * 10) + rem;
//     number = number / 10;
// }
// if (temp==rev){
//     console.log("pallindrome")
// }
// else{
//     console.log("not palindrome")
// }


//------------------------------------------
// function palindrome (num) {
//     const temp = num;
//     let reversenum = 0;
//     while (num > 0){
//         const digit =  num % 10;
//         reversenum  = reversenum *  10+ digit; num= Math.floor(num / 10);
//     }
//     return reversenum === temp; 
// }   
// const number = parseInt(prompt("Enter the number:"));   
// if (palindrome (number)) {
//       console.log(number + "is a palindrome");
// } else {
//     console.log(number + "is not palindrome");
    
// }

//factorial of a number---------------------------------

// n = parseInt(prompt("Enter a number : "));
// let fact = 1;
// for (let i =1; i <= n; i++){
//     fact = fact * i ;
// }
// console.log("factorial of",n,"is",fact)