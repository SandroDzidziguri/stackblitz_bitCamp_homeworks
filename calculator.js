/**
 * დასაწყისისთვის კოდის ამ ნაწილს არ მიაქციო ყურადღება.
 * მომავაში გაიგებ რისთვის გვჭირდება ის.
 *
 * ❌ თუმცა არ წაშალო! წინააღმდეგ შემთხვევაში დავალებებს ვერ შეასრულებ
 */
 import { input, print } from './bitcamp/lib.js';

 // დაიწყე კოდის წერა აქედან 👇



let number = get_number()
print_hello(number)

function get_number(){
  while(true){
  let n= Number(input("what is your number?"));
  if( n>0 ){
  return n;
  }
 }
}

function print_hello(count){
  for(let i = 0; i < count; i++)
  print("Hello World!")

}