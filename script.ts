// leap year

 let leap =(num:number):boolean=>{
if(num%400===0)
    return true;
else if(num%100===0)
    return false;
else if(num%4===0)
    return true;
return false;
}
console.log(leap(400));

//function to reverse number

let reverseString = (str:string):string=>{
      return str.split('').reverse().join('');
}

//function to reverse number without predefined functions
let reverseString2 = (str:string):string=>{
    let newString ="";
    for(let i=str.length-1;i>=0;i--){
        newString+=str[i];
    }
    return newString;
}
console.log(reverseString('abcd'));
console.log(reverseString2('efgh'));