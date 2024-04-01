#! \usr\bin\env node
//shebung code for publish on npm 

import inquirer from "inquirer";

//1.balance 
//2.pin code 
let myBalance = 10000;//in Dollar
let mypin =1234; //in 4 digits

let pinCode = await inquirer.prompt(
[{
    name:'pin',
    message: "enter your pin code",
    type: "number"

}
]);

if(pinCode.pin === mypin){
    console.log("correct pin code!!!");

   let operationAns =await inquirer.prompt(
        [
            {
                name :"operation",
                message:"please select option",
                type:"list",
                choices:["withdraw","fast cash","check balance"]

            }
        ]
    );

    if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name :"amount",
                    type : "number",
                    meassage : "enter your number"
                }
            ]
        )
       
        //after deduction blnc
        myBalance -= amountAns.amount
        
        
        if(amountAns.amount > myBalance){
            console.log("you have insufficient amount.")
      }else{
        console.log(`your remaining balance is:  ${myBalance}` )
      }
    
     } else if(operationAns.operation === "fast cash"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name :"amount",
                    type : "list",
                    meassage : "select option",
                    choices:[10000,5000,1000,500]
                }
            ]
        )
       
        //after select fast cash deduction blnc
        myBalance -= amountAns.amount
        if(amountAns.amount > myBalance){
            console.log("you have insufficient amount.")
      }else{
        console.log(`your remaining balance is:  ${myBalance}` )
      }  

     }else if(operationAns.operation === "check balance"){
        console.log(`your balance is: ${myBalance}`)
        
}


}else{
    console.log("incorrect pin code!")
}




