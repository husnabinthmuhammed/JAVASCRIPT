//         const add = (a,b) => a+b;
//         console.log("the value of a+b",add(4,10));

//         const greet = () =>"Hello world";
//         console.log(greet());

//         const person = (name,age) => ({name,age});
//         console.log(person('husna',12))


//         const numbers = [1,2,5,8,9,5]
//         const double = numbers.map(num => num*2);
//         console.log(double)
// =
// //map_____________________________________________________
//           const books =[
//               {id:1,title:"The Great Gatsby",auther:"F,Scott"},
//               {id:2,title:"The Blind",auther:"Williams"},
//               {id:3,title:"The Hobbit",auther:"Tolkien"},
//               {id:4,title:"Moby-Dick",auther:"Herman"},
//           ]
//          const bookTitle = books.map(book => book.title);
//          console.log(bookTitle);


//filter________________________________________________________

        // const ages = [20,56,78,90,12]
        // const adults = ages.filter(ages => ages >=18);
        // console.log(adults);

        
        // const nums = [1,2,3,4,5,6,7,8,9,10]
        // const even = nums.filter(nums => nums%2==0);
        // console.log(eve);


 //reduce_____________________________________________________


// const numbers = [175,50,25]
// const x = numbers.reduce(myFunc);
// console.log("reduced value :",x)

// function myFunc(total,num){
//         console.log("total :"+total)
//         console.log("num :"+num)
// return total-num;
// }




// const nums = [14,23,56,78,13];
// const maxNumber = nums.reduce((max,current)=> (current> max? current:max),nums[0]);
// console.log("max value =",maxNumber);



// const items = [6,9,8,7,5,4]
// const sum = items.reduce((total,num)=> total+num,0);
// console.log(sum)


//conditional statements_______________________________________________

// 
// let age = 21;
// if (age > 18){
//         console.log("Adults")
// }else{
//         console.log("Minor")
// }

//-------------------------------


// let x = parseInt(prompt("Enter the value of x : "));
// let y = parseInt(prompt("Enter the value of y :"));
// if (x>y){
//         console.log("x is greater than y");
// }
// else{
//         console.log("y is greater than x")
// }

//switch_____________________________________

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// console.log("Today is"+day)


//ELSEIF-------------------------------

// let num = perseInt(prompt("Enter the number"));
// if (num>0) {
//         console.log( "the num is positive");
// } else if (num<0) {
//         console.log( "the num is negative");
// } else {
//         console.log("the num is zero");
// }


//logical operators____________________________________________

//   let x = 6;
//   let y = 8;

// if (x < 10 && y > 1) {
//         console.log(" true")
// }else(x < 10 && y < 1)
//         console.log("false")

//or--------------------------------------

// if(x>0 || y>0){
//         console.log("Atleast one of x or y is not greater than 0");
// }
// else{
//         console.log("neither x or y is greater than 0")
// }




// pallindrome number___________________________________________________

// const number = parseInt(prompt("Enter a number : "));
// let rev=0;
// const temp = number;
// while (number>0){
//     const rem = number % 10;
//     rev = (rev * 10) + rem;
//     number = math.floor(number / 10);
// }
// if (temp==rev){
//     console.log("pallindrome")
// }
// else{
//     console.log("not palindrome")
// }


//----------------------------

// function palindrome (num) {
//     const temp = num;
//     let reversenum = 0;
//     while (num > 0){
//         const digit =  num % 10;
//         reversenum  = reversenum *  10+ digit; 
//         num= Math.floor(num / 10);
//     }
//     return reversenum === temp; 
// }   
// const number = parseInt(prompt("Enter the number:"));   
// if (palindrome (number)) {
//       console.log(number + "is a palindrome");
// } else {
//     console.log(number + "is not palindrome");
    
// }

//factorial of a number__________________________________________

// const n = parseInt(prompt("Enter a number : "));
// let fact =1;
// for (let i =1; i <= n; i++){
//      fact = fact * i ;
// }
// console.log("factorial of",n,"is",fact)
 //--------------------------------------------------

//  function fact_num(n){
//     let fact = 1;
//     for (let i = 1; i<=n; i++) {
//         fact = fact * i;
//     } 
//     return fact; 
//     }  
// const number = 5;
// const fact = fact_num(number); 
// console.log( `Factorial of ${number} is ${fact} `);

//print 1 to n _________________________________________________

// const n = parseInt(prompt("Enter a number : "));
// for (let i = 1; i<=n; i++) {
//     console.log(i)
// }

//forloop________________________________________________
// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let items
// for (let i = 0, len = cars.length, text = ""; i < len; i++) {
//   text += cars[i]+  " ";
// }
// console.log(text)

//whileloop____________________________________________

// let i = 0;
// while(i <= 10){
//   console.log(i)
//   i++;
// }

//---------------------------------------


// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 0;
// let text = "";
// while (cars[i]) {
//   text += cars[i] + " ";
//   i++;
// }
// console.log(text)



//do while__________________________________________________

let i = 0;
do{
  console.log(i)
  i++;
}
while (i <= 10);

//prime or not_________________________________________________

// const num = parseInt(prompt("Enter a number : "));
// let isPrime = true;
// for (let i=2; i<num ; i++){
//     if (num % i ==0)
//       isPrime = false;
//         break ;
// }
// if (isPrime)
//     console.log(num,"the num is prime")
// else
//     console.log(num,"not prime")




