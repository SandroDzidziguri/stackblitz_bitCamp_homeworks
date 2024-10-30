/**
 * დასაწყისისთვის კოდის ამ ნაწილს არ მიაქციო ყურადღება.
 * მომავაში გაიგებ რისთვის გვჭირდება ის.
 *
 * ❌ თუმცა არ წაშალო! წინააღმდეგ შემთხვევაში დავალებებს ვერ შეასრულებ
 */
import { input, print } from './bitcamp/lib.js';



let types = {
  ".gif": "/images.gif",
  ".jpeg": "/images.jpeg",
  ".pdf" : "/images.pdf"
}

let inp = input("Filename: ").toLowerCase();

for(let ext in types){
  if(inp.endsWith(ext)){
    console.log(types[ext]);
  }
  else{"application/octet-stream";} 
}