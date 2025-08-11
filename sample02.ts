function addNumber(a:number,b:number):number{
    return a + b;
}

addNumber(5,5);
console.log(addNumber(5,5));

//オプショナルパラメーター
function printMsg(message?:string){
    if(message){
        console.log(message);
    }else{
        console.log("No message provided");
    }
}

printMsg("Hello World");    
printMsg();