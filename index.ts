import inquirer from "inquirer";
import { withDraw } from "./cashout.js";
import { ibad } from "./userObj.js";
let functionIn;
let outAmount;
//PIN Input
const pinUIn = await inquirer.prompt([
    {
        type: 'number',
        message: 'Enter PIN: ',
        name: 'pin'
    }
])

// Check if PIN is Correct or NOT
if (ibad.pin !== pinUIn.pin) {
    console.log(`INCORRECT PIN`)
} else {
    //When PIN is correct
    console.log(`Welcome Mr. ${ibad.name}`)
    functionIn = await inquirer.prompt([
        {
            type: 'list',
            message: 'What Would you like to do Today?',
            name: 'selection',
            choices: ['Balance Check', 'Cash Withdraw']
        }
    ]).then((functionIn) => {
        //Balance Check
        if (functionIn.selection == 'Balance Check') {
            console.log(`Your Balance: ${ibad.balance}`)
        } else {
            //Input Amount to be Withdrawn
            outAmount = inquirer.prompt([
                {
                    type: 'number',
                    message: 'Enter your Amount',
                    name: 'amount'
                }
            ]).then((outAmount) => {
                //Check If the Amount return is Zero or Not
                if (withDraw(ibad.balance, outAmount.amount) !== 0) {
                    console.log(`Amount Withdrawn: ${outAmount.amount}`)
                    ibad.balance = withDraw(ibad.balance, outAmount.amount);
                    console.log(`New Balance: ${ibad.balance}`)
                } else {
                    // Handle insufficient balance or undefined balance (e.g., log an error)
                    console.error("Insufficeint Balance");
                }
            })
        }
    })
}